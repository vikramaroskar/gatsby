import React from "react"
import { Provider, Client } from "urql"
import { ThemeProvider, getTheme } from "gatsby-interface"
import { ThemeProvider as StrictUIProvider } from "strict-ui"
import { Spinner } from "theme-ui"
import { createUrqlClient } from "../urql-client"

const baseTheme = getTheme()

const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: baseTheme.colors.primaryBackground,
  },
  fontWeights: {
    ...baseTheme.fontWeights,
    "500": 500,
  },
  borders: {
    none: `none`,
    default: `1px solid ${baseTheme.colors.whiteFade[20]}`,
    sixtywhite: `1px solid ${baseTheme.colors.whiteFade[40]}`,
    white: `1px solid ${baseTheme.colors.white}`,
  },
  sizes: {
    // NOTE(@mxstbr): Hacks around issues with strict-ui that I have to fix upstream eventually
    "1px": `1px`,
    "100%": `100%`,
    "16px": `16px`,
    "15em": `15em`,
    "20em": `20em`,
    initial: `initial`,
  },
}

const GraphQLProvider: React.FC<{}> = ({ children }) => {
  const [status, setStatus] = React.useState(`loading`)
  const [client, setClient] = React.useState<Client | null>(null)

  React.useEffect(() => {
    setStatus(`loading`)
    fetch(`/___services`)
      .then(res => res.json())
      .then(json => {
        setStatus(`idle`)
        if (json.recipesgraphqlserver) {
          setClient(createUrqlClient({ port: json.recipesgraphqlserver.port }))
        }
      })
  }, [])

  if (status === `loading`) return <Spinner />

  if (client === null)
    return (
      <p>
        Please start <code>gatsby develop</code> to show the data about your
        site.
      </p>
    )

  return <Provider value={client}>{children}</Provider>
}

const Providers: React.FC<{}> = ({ children }) => (
  <StrictUIProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <GraphQLProvider>{children}</GraphQLProvider>
    </ThemeProvider>
  </StrictUIProvider>
)

export default Providers

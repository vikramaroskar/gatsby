/** @jsx jsx */
import { jsx } from "theme-ui"
import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org"

const container = {
  position: `relative`,
  px: 6,
  zIndex: 1,
}

export const Container = ({ children, ...rest }) => (
  <div
    sx={{
      ...rest,
      ...container,
      [mediaQueries.md]: {
        px: 10,
      },
    }}
  >
    {children}
  </div>
)

export const Section = ({ children, ...rest }) => (
  <section
    sx={{
      ...rest,
      ...container,
      py: [4, null, 5, 8],
      [mediaQueries.md]: {
        px: 10,
      },
    }}
  >
    {children}
  </section>
)

export const SectionNoRightPadding = ({ children }) => (
  <section
    sx={{
      ...container,
      py: [4, null, 5, 8],
      pr: 0,
      [mediaQueries.md]: {
        pl: 10,
      },
    }}
  >
    {children}
  </section>
)

export const copyColumnWidth = `20rem`
export const copyColumnGutter = 10

export const Columns = ({ children, ...rest }) => (
  <div
    sx={{
      ...rest,
      display: `flex`,
      flexDirection: `column`,
      mt: 4,
      mb: 8,
      [mediaQueries.lg]: {
        flexDirection: `row`,
      },
    }}
  >
    {children}
  </div>
)

export const CopyColumn = ({
  children,
  sticky = true,
  narrow = true,
  ...rest
}) => (
  <div
    sx={{
      ...rest,
      fontSize: 2,
      mr: 0,
      mb: 4,
      maxWidth: `30rem`,
      width: `100%`,
      flex: `0 0 auto`,
      [mediaQueries.md]: {
        mr: copyColumnGutter,
      },
      [mediaQueries.lg]: {
        mb: 0,
        maxWidth: `none`,
        width: narrow ? copyColumnWidth : `30rem`,
      },
      "p, ul, ol": {
        maxWidth: `40rem`,
      },
    }}
  >
    <div
      sx={{
        position: `relative`,
        [mediaQueries.md]: {
          position: sticky ? `sticky` : `relative`,
          top: t =>
            sticky
              ? `calc(${t.sizes.headerHeight} + ${t.sizes.bannerHeight} + 2.5rem)`
              : false,
        },
      }}
    >
      {children}
    </div>
  </div>
)

export const ContentColumn = ({
  children,
  fullWidth,
  overflowXMobile,
  ...rest
}) => (
  <div
    sx={{
      ...rest,
      width: `100%`,
      overflow: `hidden`,
      overflowX: overflowXMobile ? `auto` : `hidden`,
      position: `relative`,
      [mediaQueries.lg]: {
        width: fullWidth ? `100%` : `50rem`,
        maxWidth: fullWidth ? `none` : false,
        overflowX: `hidden`,
      },
      "p, ul, ol": {
        maxWidth: `40rem`,
      },
    }}
  >
    {children}
  </div>
)

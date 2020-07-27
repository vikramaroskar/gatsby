/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import PageWithSidebar from "../components/page-with-sidebar"
import PageMetadata from "../components/page-metadata"
import FooterLinks from "../components/shared/footer-links"
import Container from "../components/container"
import EvaluationTable from "../components/features/evaluation-table"
import LogoDictionary from "../components/features/logo-dictionary"
import LegendTable from "../components/features/legend-table"
import FeaturesFooter from "../components/features/features-footer"
import Breadcrumb from "../components/docs-breadcrumb"

import { getFeaturesData } from "../utils/get-csv-features-data"

import { graphql } from "gatsby"

export default function FeatureComparison({ pageContext, location, data }) {
  const { options, featureType } = pageContext
  const optionsDisplay = options.map(o => o.display)
  const titleString = `Comparison of Gatsby vs ${optionsDisplay.join(` vs `)}`

  const { sections, sectionHeaders } =
    featureType === `cms`
      ? getFeaturesData(data.allGatsbyCmsSpecsCsv.nodes)
      : getFeaturesData(data.allGatsbyJamstackSpecsCsv.nodes)

  return (
    <PageWithSidebar location={location}>
      <PageMetadata title={titleString} />
      <Container>
        <main>
          <Breadcrumb location={location} />
          <h1>{titleString}</h1>
          {options.map(o => (
            <section key={o.key} sx={{ mb: 6 }}>
              <h2
                css={css`
                  display: flex;
                  align-items: center;
                `}
              >
                <img
                  src={LogoDictionary[o.key]}
                  css={css`
                    height: 25px;
                    margin-bottom: 0;
                    margin-right: 10px;
                  `}
                />
                {o.display}
              </h2>
              {o.description}
            </section>
          ))}
          <LegendTable />
          <EvaluationTable
            options={options}
            sections={sections}
            sectionHeaders={sectionHeaders}
          />
        </main>
        <FeaturesFooter />
        <FooterLinks />
      </Container>
    </PageWithSidebar>
  )
}

export const pageQuery = graphql`
  query {
    allGatsbyCmsSpecsCsv {
      nodes {
        Category
        Subcategory
        Feature
        Gatsby
        WordPress
        Drupal
        Description
      }
    }
    allGatsbyJamstackSpecsCsv {
      nodes {
        Category
        Subcategory
        Feature
        Gatsby
        Nextjs
        Jekyll
        Hugo
        Nuxtjs
        Description
      }
    }
  }
`

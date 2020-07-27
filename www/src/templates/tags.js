/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org"
import { graphql } from "gatsby"
import { TiTags as TagsIcon, TiArrowRight } from "react-icons/ti"

import BlogPostPreviewItem from "../components/blog-post-preview-item"
import Button from "../components/button"
import Container from "../components/container"
import FooterLinks from "../components/shared/footer-links"
import PageMetadata from "../components/page-metadata"
import { TAGS_AND_DOCS } from "../data/tags-docs"

// Select first tag with whitespace instead of hyphens for
// readability. But if none present, just use the first tag in the
// collection
const preferSpacedTag = tags => {
  for (const tag of tags) {
    if (!tag.includes(` `)) {
      return tag
    }
  }
  return tags[0]
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${mediaQueries.xs} {
    flex-direction: row;
  }
`

const Tags = ({ pageContext, data }) => {
  const { tags } = pageContext
  const { nodes, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? `` : `s`
  } tagged with "${preferSpacedTag(tags)}"`
  const doc = TAGS_AND_DOCS.get(tags[0])

  return (
    <Container>
      <PageMetadata
        title={`${preferSpacedTag(tags)} Tag`}
        description={`Case studies, tutorials, and other posts about Gatsby related to ${preferSpacedTag(
          tags
        )}`}
      />
      <h1>{tagHeader}</h1>
      <ButtonWrapper>
        <Button
          variant="small"
          key="blog-post-view-all-tags-button"
          to="/blog/tags"
        >
          View all tags <TagsIcon />
        </Button>
        {doc ? (
          <React.Fragment>
            <span css={{ margin: 5 }} />
            <Button
              variant="small"
              secondary
              key={`view-tag-docs-button`}
              to={doc}
            >
              Read the documentation <TiArrowRight />
            </Button>
          </React.Fragment>
        ) : null}
      </ButtonWrapper>
      {nodes.map(node => (
        <BlogPostPreviewItem
          post={node}
          key={node.fields.slug}
          sx={{ my: 9 }}
        />
      ))}
      <FooterLinks />
    </Container>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tags: [String]) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date, fields___slug], order: DESC }
      filter: {
        frontmatter: { tags: { in: $tags } }
        fields: { section: { eq: "blog" }, released: { eq: true } }
      }
    ) {
      totalCount
      nodes {
        ...BlogPostPreview_item
      }
    }
  }
`

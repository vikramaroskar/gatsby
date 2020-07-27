/** @jsx jsx */
import { useState } from "react"
import { jsx } from "theme-ui"
import { MdWarning } from "react-icons/md"

import Layout from "../../components/guidelines/layout"
import { Text } from "../../components/guidelines/system"
import { Box, Flex } from "theme-ui"

import {
  Container,
  Section,
  Columns,
  CopyColumn,
  ContentColumn,
} from "../../components/guidelines/containers"
import {
  Intro,
  PageHeading,
  SectionHeading,
  SectionSubheading,
} from "../../components/guidelines/typography"

import LazyModal from "../../components/lazy-modal"
import Badge from "../../components/guidelines/badge"
import Overview from "../../components/guidelines/color/overview"
import ColorModal from "../../components/guidelines/color/modal"

import palette from "../../utils/guidelines/extend-palette-info"

const LegacyColorIcon = () => (
  <Box
    sx={{
      borderRadius: 7,
      fontSize: 0,
      lineHeight: `solid`,
      height: `8px`,
      width: `8px`,
      display: `inline-block`,
      bg: `grey.50`,
    }}
  />
)
const Color = props => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [color, setColor] = useState(false)

  const handleModalOpen = (event, node) => {
    event.persist()
    document.querySelector(`html`).style.overflowY = `hidden`
    setColor(node)
    setIsModalOpen(true)
  }

  const handleModalClose = event => {
    event.persist()
    document.querySelector(`html`).style.overflowY = `auto`
    setIsModalOpen(false)
  }

  return (
    <Layout location={props.location} pageTitle="Color">
      <Container>
        <PageHeading>Color</PageHeading>
        <Intro>
          Vibrant, friendly, and accessible color is an important part of
          Gatsby’s design. It distinguishes our brand and helps us to create
          consistent experiences and meaningful expressions across marketing and
          products.
        </Intro>
        <Badge>
          Work in Progress{` `}
          <MdWarning style={{ fontSize: 16, marginLeft: `0.25rem` }} />
        </Badge>
      </Container>

      <Section>
        <Columns>
          <CopyColumn sticky={false}>
            <Text as="p" mb={0}>
              Our color palette includes primary and secondary colors that can
              be used for interfaces as well as illustrations.
              <br />
              <strong>Click the color names for detailed information.</strong>
            </Text>
          </CopyColumn>
          <ContentColumn alignSelf="flex-end">
            <Flex
              sx={{
                alignItems: `flex-end`,
              }}
            >
              <Flex
                sx={{
                  alignItems: `center`,
                  mr: 8,
                }}
              >
                <LegacyColorIcon />
                {` `}
                <Text as="span" ml={2} c>
                  Aliased color
                </Text>
              </Flex>

              <Box>
                <Text
                  as="h3"
                  color="grey.50"
                  mb={0}
                  mt={{ xxs: 8, lg: 0 }}
                  fontSize={2}
                  fontWeight="body"
                >
                  WCAG Contrast Score
                </Text>
                <Flex
                  as="ul"
                  sx={{
                    m: 0,
                    p: 0,
                    listStyle: `none`,
                  }}
                >
                  <Text as="li" mr={4} mb={0}>
                    <strong>3</strong> AAA
                  </Text>
                  <Text as="li" mr={4} mb={0}>
                    <strong>2+</strong> AA Large
                  </Text>
                  <Text as="li" mr={4} mb={0}>
                    <strong>2</strong> AA
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </ContentColumn>
        </Columns>
        <Overview handler={handleModalOpen} />
      </Section>

      <Section>
        <SectionHeading>Accessibility</SectionHeading>
        <Columns>
          <CopyColumn>
            <p>
              We are committed to complying with{` `}
              <a href="https://www.w3.org/WAI/intro/wcag">
                Web Content Accessibility Guidelines 2.0
              </a>
              {` `}
              Level AA standard contrast ratios. To do this, we need to choose
              primary, secondary and neutral colors that support usability. This
              ensures sufficient color contrast between elements so that users
              with low vision can see and use our products.
            </p>
          </CopyColumn>
          <ContentColumn>
            <SectionSubheading id="color-contrast" mt={0}>
              Color Contrast
            </SectionSubheading>
            <p>
              The WCAG provides an equation that determines these two values. It
              outputs a number between 0 and 21, with 21 being the highest
              amount of contrast—think black text and a white background—and 0
              being no contrast—white on white. That ratio is where the scores
              are derived from. There are technically 5 scores:
            </p>
            <ul
              sx={{
                p: 0,
              }}
            >
              <li>
                <strong>&times; — Fail</strong> – <code>&lt; 3.0</code>
                <br />
                The text doesn't have enough contrast with the background.
              </li>
              <li>
                <strong>2+ — AA Large</strong> – <code>&gt;= 3.0</code>
                <br />
                The smallest acceptable amount of contrast for type sizes of
                14pt bold/18pt (which roughly translates to ~18.5px bold/24px
                @1x) and larger.
              </li>
              <li>
                <strong>2 — AA</strong> – <code>&gt;= 4.5</code>
                <br />
                The required contrast score for text sizes below 14pt bold/18pt.
              </li>
              <li>
                <strong>3 — AAA</strong> – <code>&gt;= 7.0</code>
                <br />
                Use it for longer form text that will be read for a significant
                period of time and requires enhanced contrast.
              </li>
              <li>
                <strong>AAA Large</strong>
                <br />
                AAA Large means that your <em>large</em> text has a contrast
                ratio of
                <code>4.5</code> or higher—which is the same score as AA, and
                which is why you won't see AAA Large as a visible score in our
                documentation.
              </li>
            </ul>
            <SectionSubheading>Color Blindness</SectionSubheading>
            <p>
              There are different types of{` `}
              <a href="https://en.wikipedia.org/wiki/Color_blindness">
                color blindness
              </a>
              {` `}— the most common form is red-green color blindness, followed
              by blue-yellow color blindness and total color blindness.
              Red-green color blindness affects up to 6% of males and 0.4% of
              females.
            </p>
            <p>
              When using color, ensure that adjacent color shades are
              distinguishable for color blind people. Use a color blindness
              analyzer to confirm your choices. Here are a couple of free apps
              and browser extensions to help:
            </p>
            <ul>
              <li>
                <a href="https://michelf.ca/projects/sim-daltonism/">
                  Sim Daltonism
                </a>
                {` `}
                (iOS, Mac OS X)
              </li>
              <li>
                <a href="https://colororacle.org/index.html">Color Oracle</a>
                {` `}
                (Mac OS X, Windows, Linux)
              </li>
              <li>
                A11Y - Color blindness empathy test (
                <a href="https://chrome.google.com/webstore/detail/a11y-color-blindness-empa/idphhflanmeibmjgaciaadkmjebljhcc">
                  Chrome
                </a>
                ,{` `}
                <a href="https://addons.mozilla.org/en-US/firefox/addon/a11y-color-blindness-test/">
                  Firefox
                </a>
                )
              </li>
            </ul>
          </ContentColumn>
        </Columns>
      </Section>

      <LazyModal
        closeTimeoutMS={300}
        contentLabel="Example Modal In Gatsby"
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        style={{
          content: {
            top: `0`,
            left: `0`,
            right: `0`,
            bottom: `0`,
            marginRight: `0`,
            transform: `0`,
            padding: 0,
            borderRadius: 0,
            border: 0,
          },
          overlay: {
            zIndex: 1000,
          },
        }}
      >
        <ColorModal
          color={color}
          handleModalClose={handleModalClose}
          palette={palette}
        />
      </LazyModal>
    </Layout>
  )
}

export default Color

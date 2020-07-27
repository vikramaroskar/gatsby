/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { MdLaunch } from "react-icons/md"

import { Box, Flex } from "theme-ui"
import { Link, Text } from "../system"
import BoxWithBorder from "../box-with-border"
import { getTextColor } from "../../../utils/guidelines/color"
import { SrOnly } from "../typography"

const ColorValue = ({ label, inverted, value, href }) => (
  <Box
    sx={{
      mt: 4,
      px: 3,
      flexShrink: 0,
      flexBasis: `50%`,
    }}
  >
    <Text
      color={inverted ? `whiteFade.70` : `blackFade.70`}
      fontFamily="heading"
      fontSize={1}
    >
      {label}
    </Text>
    <Flex
      sx={{
        alignItems: `center`,
      }}
    >
      <Text
        fontSize={1}
        css={{ whiteSpace: `nowrap` }}
        color={inverted ? `whiteFade.80` : `blackFade.80`}
      >
        {value}
        {href && (
          <React.Fragment>
            {` `}
            <Link
              href={href}
              sx={{
                "&&": {
                  border: 0,
                  color: inverted ? `whiteFade.80` : `blackFade.80`,
                },
              }}
            >
              <MdLaunch style={{ marginLeft: `0.25rem` }} />
              <SrOnly>Pantone Matching System reference</SrOnly>
            </Link>
          </React.Fragment>
        )}
      </Text>
    </Flex>
  </Box>
)

const ColorSwatch = ({ color, ...rest }) => {
  const textColor = getTextColor(color.contrast)
  const inverted = textColor === `white`

  return (
    <BoxWithBorder
      py={4}
      px={2}
      bg={color.hex}
      withBorder={!inverted}
      {...rest}
    >
      <Text
        fontFamily="heading"
        fontSize={4}
        px={2}
        fontWeight="heading"
        color={textColor}
      >
        {color.name}
      </Text>
      <Flex
        sx={{
          flexWrap: `wrap`,
        }}
      >
        <ColorValue value={color.hex} label="HEX" inverted={inverted} />
        <ColorValue
          label="RGB"
          inverted={inverted}
          value={`${color.rgb.red} ${color.rgb.green} ${color.rgb.blue} `}
        />
        {color.pms && (
          <ColorValue
            label="PMS"
            inverted={inverted}
            value={color.pms.value}
            href={color.pms.href}
          />
        )}
        {color.cmyk && (
          <ColorValue
            label="CMYK"
            inverted={inverted}
            value={color.cmyk.value}
          />
        )}
      </Flex>
    </BoxWithBorder>
  )
}

export default ColorSwatch

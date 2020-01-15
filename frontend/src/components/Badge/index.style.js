import React from 'react';
import styled from 'styled-components';
import { Badge as BtBadge } from "reactstrap";

const generateColorCode = (colorPropsVal, { green, purple, red, blue }) => {
  let targetColorCode;

  switch (colorPropsVal) {
    case 'green':
      targetColorCode = green;
      break;
    case 'purple':
      targetColorCode = purple;
      break;
    case 'red':
      targetColorCode = red;
      break;
    case 'blue':
      targetColorCode = blue;
      break;
    default:
      break;
  }

  return targetColorCode;
}

const BadgeStyle = styled(({ ...rest }) => <BtBadge pill {...rest} />)`
  ${({ theme, color }) => (`
    background-color: ${generateColorCode(color, {
  green: theme.green2,
  purple: theme.purple1,
  red: theme.pink1,
  blue: theme.blue3
})};
    color: ${theme.white};

    &.green {
      background-color: ${theme.green2};
    }

    &.purple {
      background-color: ${theme.purple1};
    }

    &.red {
      background-color: ${theme.pink1}
    }

    &.blue {
      background-color: ${theme.blue3}
    }
  `)}
`;

export default BadgeStyle;
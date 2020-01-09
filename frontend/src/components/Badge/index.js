import React from 'react';
import styled from 'styled-components';
import { Badge as BtBadge } from "reactstrap";

const Badge = styled(({ ...rest }) => <BtBadge pill {...rest} />)`
  ${({ theme }) => (`
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

export default Badge;
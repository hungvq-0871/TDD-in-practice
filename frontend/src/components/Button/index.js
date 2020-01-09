import React from 'react';
import styled from 'styled-components'

const Button = styled(({
  bdColor,
  color,
  bgColor,
  className,
  ...rest
}) => <button className={`btn ${className}`} {...rest} />)`
  ${({
  theme,
  bdColor,
  color,
  bgColor
}) => (`
      &.btn {
        border-color: ${bdColor || theme.grey1};
        color: ${color || theme.grey1};
        background-color: ${bgColor || theme.white};
        box-shadow: none!important;

        &:hover,
        &:active,
        &:focus {
          color: ${color || theme.grey1};
        }
      }
  `)}
`;

export default Button;
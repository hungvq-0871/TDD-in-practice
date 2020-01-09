import React from 'react';
import PropTypes from 'prop-types'

import ButtonStyle from './index.style';

function Button({
  children,
  className,
  onClick,
  ...rest
}) {
  return (
    <ButtonStyle className={`btn ${className}`} onClick={onClick} {...rest}>
      {children}
    </ButtonStyle>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button;

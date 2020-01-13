import React from 'react';
import PropTypes from 'prop-types'

import BadgeStyle from './index.style'

function Badge({ children, color, ...rest }) {
  return (
    <BadgeStyle color={color} {...rest}>
      {children}
    </BadgeStyle>
  )
}

Badge.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['green', 'purple', 'red', 'blue']),
}

export default Badge;

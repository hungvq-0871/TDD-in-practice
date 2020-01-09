import React from 'react';
import PropTypes from 'prop-types'

import BackGroundStyle from './index.style';

function BackGround({ children }) {
  return (
    <BackGroundStyle>
      <div className="upper-part" />
      <div className="body">
        {children}
      </div>
    </BackGroundStyle>
  )
}

BackGround.propStyles = {
  children: PropTypes.node.isRequired
}

export default BackGround;

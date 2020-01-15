import React from 'react';
import PropTypes from 'prop-types'

import Button from 'components/Button'
import BtnGroupStyle from './index.style'

function BtnGroup({ onSearchClick, onExportClick, onShareClick, ...rest }) {
  return (
    <BtnGroupStyle {...rest}>
      <Button className="search-btn" onClick={onSearchClick}>
        <i className="fas fa-search"></i>
      </Button>
      <Button className="export-btn" onClick={onExportClick}>
        <i className="fas fa-file-upload"></i>
      </Button>
      <Button className="share-btn" onClick={onShareClick}>
        <i className="fas fa-share-square"></i>
      </Button>
    </BtnGroupStyle>
  )
}

BtnGroup.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
  onExportClick: PropTypes.func.isRequired,
  onShareClick: PropTypes.func.isRequired
}

export default BtnGroup;

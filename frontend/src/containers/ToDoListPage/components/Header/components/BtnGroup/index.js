import React from 'react';
import PropTypes from 'prop-types'

import Button from 'components/Button'
import BtnGroupStyle from './index.style'

function BtnGroup({ onSearchClick, onExportClick, onShareClick, ...rest }) {
  return (
    <BtnGroupStyle {...rest}>
      <Button className="search-btn" onClick={onSearchClick}>Search</Button>
      <Button className="export-btn" onClick={onExportClick}>Export</Button>
      <Button className="share-btn" onClick={onShareClick}>Share</Button>
    </BtnGroupStyle>
  )
}

BtnGroup.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
  onExportClick: PropTypes.func.isRequired,
  onShareClick: PropTypes.func.isRequired
}

export default BtnGroup;

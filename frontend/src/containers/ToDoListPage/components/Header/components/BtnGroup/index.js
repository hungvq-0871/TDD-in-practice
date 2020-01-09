import React from 'react';

import Button from 'components/Button'
import BtnGroupStyle from './index.style'

function BtnGroup() {
  return (
    <BtnGroupStyle>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </BtnGroupStyle>
  )
}

export default BtnGroup;

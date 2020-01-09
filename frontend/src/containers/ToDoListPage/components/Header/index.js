import React from 'react';

import Button from 'components/Button'
import BtnGroup from './components/BtnGroup'
import HeaderStyle from './index.style'

import theme from 'styles/theme'

function Header() {
  return (
    <HeaderStyle>
      <h3>My Tasks</h3>
      <div className="right">
        <BtnGroup />
        <Button
          color={theme.white}
          bgColor={theme.blue2}
          bdColor={theme.blue2}
        >
          New Task
      </Button>
      </div>
    </HeaderStyle>
  )
}

export default Header;

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import BtnGroup from './components/BtnGroup';
import HeaderStyle from './index.style';

import theme from 'styles/theme';

function Header({
  onSearchClick,
  onExportClick,
  onShareClick,
  onCreateNewTask
}) {
  return (
    <HeaderStyle>
      <h3>My Tasks</h3>
      <div className="right">
        <BtnGroup
          onSearchClick={onSearchClick}
          onExportClick={onExportClick}
          onShareClick={onShareClick}
        />
        <Button
          color={theme.white}
          bgColor={theme.blue2}
          bdColor={theme.blue2}
          onClick={onCreateNewTask}
        >
          New Task
      </Button>
      </div>
    </HeaderStyle>
  )
}

Header.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
  onExportClick: PropTypes.func.isRequired,
  onShareClick: PropTypes.func.isRequired,
  onCreateNewTask: PropTypes.func.isRequired
}

export default Header;

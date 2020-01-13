import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';

function TabItem({
  tabId,
  activeTabId,
  content,
  onClick
}) {
  const classnames = active => active ? 'active' : '';

  return (
    <NavItem>
      <NavLink
        className={classnames(tabId === activeTabId)}
        onClick={() => onClick(tabId)}
      >
        {content}
      </NavLink>
    </NavItem>
  )
}

TabItem.propTypes = {
  tabId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  activeTabId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default TabItem;

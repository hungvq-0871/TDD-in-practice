import React from 'react';
import PropTypes from 'prop-types';

import TabContentHeaderStyle from './index.style';

function TabContentHeader({
  dueToday,
  closeToday,
}) {
  return (
    <TabContentHeaderStyle>
      <span>
        Due Today (<span className="due-today-counter">{dueToday}</span>)
      </span>
      <span className="close-day">
        Close Today (<span className="close-today-counter">{closeToday}</span>)
      </span>
    </TabContentHeaderStyle>
  )
}

TabContentHeader.propTypes = {
  dueToday: PropTypes.number.isRequired,
  closeToday: PropTypes.number.isRequired
}

export default TabContentHeader;

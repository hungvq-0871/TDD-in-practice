import React from 'react';

import TabContentHeaderStyle from './index.style'

function TabContentHeader() {
  return (
    <TabContentHeaderStyle>
      <span>Due Today (2)</span>
      <span className="close-day">Close Today (2)</span>
    </TabContentHeaderStyle>
  )
}

export default TabContentHeader;

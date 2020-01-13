import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TabContent, TabPane, Nav } from 'reactstrap';

import TaskTable from 'components/TaskTable';
import TabContentHeader from './components/TabContentHeader/index';
import TabItem from './components/TabItem';
import TabStyle from './index.style';

import { data } from './constants';

function Tab({ dueToday, closeToday }) {
  const [activeTabId, setActiveTabId] = useState('1');

  const toggle = tabId => {
    if (activeTabId !== tabId) setActiveTabId(tabId);
  }

  return (
    <TabStyle>
      <Nav tabs>
        <TabItem
          tabId="1"
          activeTabId={activeTabId}
          content="Work"
          onClick={toggle}
        />
        <TabItem
          tabId="2"
          activeTabId={activeTabId}
          content="Personal"
          onClick={toggle}
        />
      </Nav>
      <TabContent activeTab={activeTabId}>
        <TabPane tabId="1">
          <TabContentHeader dueToday={dueToday} closeToday={closeToday} />
          <TaskTable data={data} />
        </TabPane>
      </TabContent>
    </TabStyle>
  )
}

Tab.propTypes = {
  dueToday: PropTypes.number.isRequired,
  closeToday: PropTypes.number.isRequired
}

export default Tab;

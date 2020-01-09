import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import TaskTable from 'components/TaskTable';
import TabContentHeader from './components/TabContentHeader/index'
import TabStyle from './index.style';

import { data } from './constants';

function Tab() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const classnames = active => active ? 'active' : '';

  return (
    <TabStyle>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames(activeTab === '1')}
            onClick={() => toggle('1')}
          >
            Work
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames(activeTab === '2')}
            onClick={() => toggle('2')}
          >
            Personal
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <TabContentHeader />
          <TaskTable data={data} />
        </TabPane>
      </TabContent>
    </TabStyle>
  )
}

Tab.propTypes = {
}

export default Tab;

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TabItem from '../index';

const renderTabItem = (activeTabId = "1", onClick = () => { }) => {
  return render(<TabItem
    tabId="1"
    activeTabId={activeTabId}
    content="Work"
    onClick={onClick}
  />);
}

describe(`test how "TabItem" is rendered`, () => {
  test(`it should render it's content correctly`, () => {
    const { container } = renderTabItem();
    const navLinkEle = container.querySelector('.nav-link');

    expect(navLinkEle.innerHTML).toBe('Work')
  });

  test(`it's "a" tag should have "active" className when it's "tabTd" equal to a "activeTabId"`, () => {
    const { container } = renderTabItem();
    const navLinkEle = container.querySelector('.nav-link');

    expect(navLinkEle.className.includes('active')).toBe(true);
  });

  test(`it's "a" tag should not have "active" className when it's "tabTd" does not equal to a "activeTabId"`, () => {
    const { container } = renderTabItem("2");
    const navLinkEle = container.querySelector('.nav-link');

    expect(navLinkEle.className.includes('active')).toBe(false);
  });

  test(`it should match it's snapshot`, () => {
    const { container } = renderTabItem();

    expect(container.firstChild).toMatchSnapshot();
  });
});

describe(`test functions around "TabItem"`, () => {
  test(`it's "onclick" function should run on clicked & receive it's "tabTd"`, () => {
    const handleOnClick = jest.fn(tabId => tabId);
    const { container } = renderTabItem('2', handleOnClick);
    const navLinkEle = container.querySelector('.nav-link');

    fireEvent.click(navLinkEle);

    expect(handleOnClick.mock.calls.length).toBe(1);
    expect(handleOnClick.mock.results[0].value).toBe('1');
  });
});

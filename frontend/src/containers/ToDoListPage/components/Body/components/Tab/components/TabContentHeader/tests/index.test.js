import React from 'react';
import { render } from '@testing-library/react';

import TabContentHeader from '../index';

const renderTabContentHeader = () => {
  return render(<TabContentHeader dueToday={2} closeToday={3} />);
}

describe(`test how "TabContentHeader" is rendered`, () => {
  test(`the "Due Today(...)" label should display the number of tasks dued today correctly`, () => {
    const { container } = renderTabContentHeader();
    const dueTodayCounterEle = container.querySelector('.due-today-counter');

    expect(dueTodayCounterEle.innerHTML).toBe('2');
  });

  test(`the "Close Today(...)" label should display the number of tasks closed today correctly`, () => {
    const { container } = renderTabContentHeader();
    const dueTodayCounterEle = container.querySelector('.close-today-counter');

    expect(dueTodayCounterEle.innerHTML).toBe('3');
  });

  test(`the "Close Today(...)" label should display the number of tasks closed today correctly`, () => {
    const { container } = renderTabContentHeader();

    expect(container.firstChild).toMatchSnapshot();
  });
});

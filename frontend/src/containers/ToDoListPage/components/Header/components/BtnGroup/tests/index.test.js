import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import BtnGroup from '../index';

const renderBtnGroup = (onSearchClick, onExportClick, onShareClick) => {
  return render(<BtnGroup
    onSearchClick={onSearchClick}
    onExportClick={onExportClick}
    onShareClick={onShareClick}
  />)
}

describe('test how "BtnGroup" is rendered', () => {
  test("it should match it's snapshot", () => {
    const { container } = renderBtnGroup(() => { }, () => { }, () => { });

    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('test functions around "BtnGroup"', () => {
  test(`the "search btn" should execute it's onClick function on clicked`, () => {
    const handleOnClick = jest.fn(() => { });
    const { container } = renderBtnGroup(handleOnClick, () => { }, () => { });
    const searchBtnEle = container.querySelector('.search-btn');

    fireEvent.click(searchBtnEle);

    expect(handleOnClick.mock.calls.length).toBe(1);
  });

  test(`the "export btn" should execute it's onClick function on clicked`, () => {
    const handleOnClick = jest.fn(() => { });
    const { container } = renderBtnGroup(() => { }, handleOnClick, () => { });
    const exportBtnEle = container.querySelector('.export-btn');

    fireEvent.click(exportBtnEle);

    expect(handleOnClick.mock.calls.length).toBe(1);
  });

  test(`the "share btn" should execute it's onClick function on clicked`, () => {
    const handleOnClick = jest.fn(() => { });
    const { container } = renderBtnGroup(() => { }, () => { }, handleOnClick);
    const shareBtnEle = container.querySelector('.share-btn');

    fireEvent.click(shareBtnEle);

    expect(handleOnClick.mock.calls.length).toBe(1);
  });
});

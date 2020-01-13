import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Td from '../index';

const renderTdWithProps = (checkboxTd, title, username, time, onChange) => {
  const trEle = document.createElement('tr');
  return render(<Td checkboxId={checkboxTd} title={title} userName={username} time={time} onChange={onChange} />, {
    /*
      *** a "div" ele is the default "container" of all ele rendered by this "render" function. However, since a "td" ele can not be  the child
          of a "div" ele, we have to switch the "container" ele from a "div" ele to a "tr" ele.
    */
    container: document.body.appendChild(trEle),
  });
}

describe('test how "Td" is rendered', () => {
  test(`it's title must match to the value of it's "title" props`, () => {
    const expected = "title";
    const { container } = renderTdWithProps(1, expected, "username", "10 PM", () => { });
    const titleEle = container.querySelector('.title');

    expect(titleEle.innerHTML).toBe(expected);
  });

  test(`it's created by indicator must match to the value of it's "username" props`, () => {
    const expected = "username";
    const { container } = renderTdWithProps(1, "title", expected, "10 PM", () => { });
    const createdByEle = container.querySelector('.created-by');

    expect(createdByEle.innerHTML).toBe(expected);
  });

  test(`it's created at (time) indicator must match to the value of it's "username" props`, () => {
    const expected = "10 PM";
    const { container } = renderTdWithProps(1, "title", "name", expected, () => { });
    const createdAtEle = container.querySelector('.created-at');

    expect(createdAtEle.innerHTML).toBe(expected);
  });

  test(`it should match it's snapshot`, () => {
    const { container } = renderTdWithProps(1, "title", "name", "10 PM", () => { });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('test functions around "Td"', () => {
  test(`it should match it's snapshot`, () => {
    const handleOnChange = jest.fn(() => { });
    const { container } = renderTdWithProps(1, "title", "name", "10 PM", handleOnChange);
    const checkboxEle = container.querySelector(".custom-control-label");

    fireEvent.click(checkboxEle);

    expect(handleOnChange.mock.calls.length).toBe(1);
  });
});

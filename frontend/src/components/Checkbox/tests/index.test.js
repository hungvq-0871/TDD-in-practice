import React from 'react';
import Checkbox from '../index';
import { render, fireEvent } from '@testing-library/react'

it(`'s checked property should return "true" on clicked at the first time`, () => {
  const { container } = render(<Checkbox id="test" />);
  const checkboxLabelEle = container.querySelector('.custom-control-label');
  const checkboxInputEle = container.querySelector('input');

  fireEvent.click(checkboxLabelEle);

  expect(checkboxInputEle.checked).toBe(true);
});

it(`'s checked property should return "false" on clicked twice`, () => {
  const { container } = render(<Checkbox id="test" />);
  const checkboxLabelEle = container.querySelector('.custom-control-label');
  const checkboxInputEle = container.querySelector('input');

  fireEvent.click(checkboxLabelEle);
  fireEvent.click(checkboxLabelEle);

  expect(checkboxInputEle.checked).toBe(false);
});

it(`'s checked property should return "true" on received "checked" property which return "true"`, () => {
  const { container } = render(<Checkbox id="test" checked={true} onChange={() => { }} />);
  const checkboxInputEle = container.querySelector('input');

  expect(checkboxInputEle.checked).toBe(true);
});

it(`'s checked property should return "false" on received "checked" property which return "false"`, () => {
  const { container } = render(<Checkbox id="test" checked={false} onChange={() => { }} />);
  const checkboxInputEle = container.querySelector('input');

  expect(checkboxInputEle.checked).toBe(false);
});

it(`should pass it's correct value to it's "onChange" function`, () => {
  const handleOnChange = jest.fn(e => e.target.value);
  const { container } = render(<Checkbox id="test" value="test" onChange={handleOnChange} />);
  const checkboxLabelEle = container.querySelector('.custom-control-label');

  fireEvent.click(checkboxLabelEle);

  expect(handleOnChange).toHaveBeenCalledTimes(1);
  expect(handleOnChange.mock.results[0].value).toBe("test");
});

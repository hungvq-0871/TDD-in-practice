import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Checkbox from '../index';

const renderCheckbox = (checked = null) => {
  const { container } = render(<Checkbox id="test" checked={checked} onChange={() => { }} />);
  const checkboxLabelEle = container.querySelector('.custom-control-label');
  const checkboxInputEle = container.querySelector('input');

  return {
    checkboxLabelEle,
    checkboxInputEle
  }
}

describe('test how "Checkbox" is rendered', () => {
  it(`'s checked property should return "true" on clicked at the first time`, () => {
    const { checkboxLabelEle, checkboxInputEle } = renderCheckbox();

    fireEvent.click(checkboxLabelEle);

    expect(checkboxInputEle.checked).toBe(true);
  });

  it(`'s checked property should return "false" on clicked twice`, () => {
    const { checkboxLabelEle, checkboxInputEle } = renderCheckbox();

    fireEvent.click(checkboxLabelEle);
    fireEvent.click(checkboxLabelEle);

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
});

describe('test how "Checkbox" is rendered', () => {
  it(`'s checked property should return "true" on received "checked" property which return "true"`, () => {
    const { checkboxInputEle } = renderCheckbox(true);

    expect(checkboxInputEle.checked).toBe(true);
  });

  it(`'s checked property should return "false" on received "checked" property which return "false"`, () => {
    const { checkboxInputEle } = renderCheckbox(false);

    expect(checkboxInputEle.checked).toBe(false);
  });
});

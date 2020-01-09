import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '../index';

const getButtonStyle = style => {
  const { getByText } = render(<Button bgColor="blue" color="blue" bdColor="blue" onClick={() => { }}>a rendered button ele</Button>);
  const buttonEle = getByText("a rendered button ele");

  return window.getComputedStyle(buttonEle).getPropertyValue(style);
}

describe('test how "Button" is rendered', () => {
  it('should have background color in "blue" on received "bgColor" props whose value is "blue"', () => {
    expect(getButtonStyle('background-color')).toBe('blue');
  });

  it('should have text color in "blue" on received "color" props whose value is "blue"', () => {
    expect(getButtonStyle('color')).toBe('blue');
  });

  it('should have border color in "blue" on received "bdcolor" props whose value is "blue"', () => {
    expect(getButtonStyle('border-color')).toBe('blue');
  });
});

describe('test function around "Button"', () => {
  it('should execute a function once on clicked', () => {
    const handleOnClick = jest.fn(() => { });
    const { getByText } = render(<Button onClick={handleOnClick}>a rendered button ele</Button>);
    const buttonEle = getByText("a rendered button ele");

    fireEvent.click(buttonEle);

    expect(handleOnClick.mock.calls.length).toBe(1);
  });
});

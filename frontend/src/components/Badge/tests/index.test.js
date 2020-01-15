import React from 'react'
import { render } from '@testing-library/react';

import Badge from '../index';

describe('test how "Badge" is rendered', () => {
  it('...', () => {
    const { getByText, container } = render(<Badge color="green">aaa</Badge>);
    const badgeEle = container.querySelector('span');

    expect(badgeEle).toHaveStyle(`
      color: white;
    `)
  });
});
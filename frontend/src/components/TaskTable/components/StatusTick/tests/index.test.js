import React from 'react';
import { render } from '@testing-library/react';

import StatusTick from '../index';

describe('test how "StatusTick" is rendered', () => {
  it('should be rendered correctly', () => {
    const { getByTestId } = render(<StatusTick data-testid="test-status-tick" />);
    const statusTickEle = getByTestId('test-status-tick');
  });
});
import React from 'react';
import { render } from '@testing-library/react';

import Header from '../index';

describe('test how "Header" is rendered', () => {
  test(`it should match it's snapshot`, () => {
    const { container } = render(<Header
      onSearchClick={() => { }}
      onExportClick={() => { }}
      onShareClick={() => { }}
      onCreateNewTask={() => { }}
    />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

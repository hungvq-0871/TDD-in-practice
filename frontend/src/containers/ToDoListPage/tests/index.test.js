import React from 'react';
import { render } from '@testing-library/react';

import ToDoListPage from '../index';

describe(`test how "ToDoListPage" is render`, () => {
  test(`it should match it's snapshot`, () => {
    const { container } = render(<ToDoListPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

describe(`test functions around "ToDoListPage"`, () => {
  test(`it should match it's snapshot`, () => {
    const { container } = render(<ToDoListPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

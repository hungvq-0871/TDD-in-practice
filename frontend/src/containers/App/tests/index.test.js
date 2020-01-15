import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from "history";

import App from '../index';

describe(`test how "App" is rendered`, () => {
  test(`...`, () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(history.location.pathname).toBe('/');
  });
});

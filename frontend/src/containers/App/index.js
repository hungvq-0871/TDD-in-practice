import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ToDoListPage from 'containers/ToDoListPage';
import GlobalStyle from 'styles/global-styles';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ToDoListPage} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App;

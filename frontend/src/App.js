import React from 'react';
import { Router } from 'react-router-dom';
import history from '~/services/history';
import '~/config/ReactotronConfig';
import GlobalStyle from '~/styles/global';

import Routes from '~/routes';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;

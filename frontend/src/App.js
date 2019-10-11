import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';

import history from '~/services/history';
import store from '~/store';

import GlobalStyle from '~/styles/global';

import Routes from '~/routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <ToastContainer autoclose={3000} />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;

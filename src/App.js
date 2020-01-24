import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;

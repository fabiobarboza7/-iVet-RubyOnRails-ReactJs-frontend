import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;

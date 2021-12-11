import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import { Header } from './components/Header';
import Dashboard from './components/Dashboard';

const App: React.FC = () => (
  <>
    <Header />

    <Dashboard />
    <GlobalStyle />
  </>
);

export default App;

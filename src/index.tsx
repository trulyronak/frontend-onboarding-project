import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalProvider } from './contexts/GlobalContext';
import './index.css';
import Paths from './Paths';

// add any contxexts here
ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Paths />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

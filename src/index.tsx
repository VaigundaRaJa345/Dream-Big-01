import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import { GlobalError } from './components/GlobalError';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Could not find root element');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <GlobalError>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalError>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Set body class for global layout control
if (typeof document !== 'undefined') {
  document.body.className = 'min-h-screen relative overflow-x-hidden';
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
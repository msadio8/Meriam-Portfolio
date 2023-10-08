// Import React library
import React from 'react';
// Import ReactDOM client
import ReactDOM from 'react-dom/client';
// Import App component
import App from './App';
// Import CSS file
import "./style/index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


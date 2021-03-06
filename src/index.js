import React from 'react';
import ReactDOM from 'react-dom';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';

// GLOBAL STYLES
import './index.css';

// CUSTOM FONTS
import 'typeface-lobster';
import 'typeface-open-sans';

// FONT AWESOME
import 'font-awesome/css/font-awesome.css';

// CUSTOM COMPONENTS
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

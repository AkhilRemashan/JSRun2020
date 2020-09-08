import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// COMPONENTS
import MyInfo from './components/MyInfo'



ReactDOM.render(
  <React.StrictMode>
    <MyInfo />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// COMPONENTS
// import MyInfo from './components/MyInfo'
// import TodoApp from './components/TodoApp'
// import JokeMain from './components/JokeMain'
import SchoolProductMain from './components/schoolProductMain' 



ReactDOM.render(
  <React.StrictMode>
    {
      <SchoolProductMain /> 
    }
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

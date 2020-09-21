import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// COMPONENTS
// import MyInfo from './components/MyInfo'
// import TodoApp from './components/TodoApp'
// import JokeMain from './components/JokeMain'
// import SchoolProductMain from './components/schoolProductMain' 
// import StatePracOne from './components/statePracOne'
// import LogInforState from './components/statePracTwo'
import TodoApp from './components/TodoAppClass'



ReactDOM.render(
  <React.StrictMode>
    {
      <TodoApp /> 
    }
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(() => {
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import styles from './app.module.scss';

ReactDOM.render((
  <BrowserRouter>
    <App className={styles.app} />
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();

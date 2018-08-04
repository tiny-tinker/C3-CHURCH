import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store, { history } from './store';
import App from './scenes/App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Import some additional css
 */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './global.css';

/**
 *
 * Import fonts
 *
 */
import './assets/fonts/font-awesome/css/font-awesome.min.css';
import './assets/fonts/bebas-neue/stylesheet.css';
import './assets/fonts/roboto/roboto.css';
import './assets/fonts/proxima-nova/fonts.css';


const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();

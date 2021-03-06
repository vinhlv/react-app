import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { createBrowserHistory } from 'history';
import { routes } from './routes';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
import { unregister } from './registerServiceWorker';

const store = configureStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <Root store={store} routes={routes} history={history} />
  , document.getElementById('root'));
unregister();

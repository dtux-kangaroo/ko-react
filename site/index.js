import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'core-js';
import '../theme/src/index.scss'
import './assets/styles/base.scss'
import './assets/styles/prism.css'

import App from './pages/app';
render(<AppContainer><App /></AppContainer>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./pages/app', () => {
    const App = require('./pages/app').default;
    render(<AppContainer><App/></AppContainer>, document.getElementById('app'));
  });
}

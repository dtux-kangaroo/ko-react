import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'core-js';
import '../theme/src/index.scss'
import './assets/styles/base.scss'
import './assets/styles/prism.css'

import App from './pages/app';
render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}

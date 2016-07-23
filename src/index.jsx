import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';
import Main from './components/main';
import './scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Provider store={store}>
                    <Main />
                  </Provider>, document.querySelector('.root'));
});

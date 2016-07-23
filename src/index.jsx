import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../redux/store';
import { Provider } from 'react-redux';
import User from './components/user';
import Bands from './components/bands';
import Updates from './components/updates';
import Images from './components/images';

import { startAllActions } from '../redux/actions/start_actions';

import './scss/main.scss';

class Main extends Component {
  constructor() {
    super();
    startAllActions();
  }
  render() {
    return (
      <div className="page">
        <User />
        <Bands />
        <Updates />
        <Images />
      </div>
      
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Provider store={store}>
                    <Main />
                  </Provider>, document.querySelector('.root'));
});

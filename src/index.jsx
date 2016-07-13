import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../redux/store';
import { Provider } from 'react-redux';
import User from './components/user';
import { startAllActions } from '../redux/actions/start_actions';

class Main extends Component {
  constructor() {
    super();
    startAllActions();
  }
  render() {
    return (
      <Provider store={store}>
        <User />
      </Provider>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Main />, document.querySelector('.root'));
});

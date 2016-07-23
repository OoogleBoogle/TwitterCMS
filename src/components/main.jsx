import React, { Component } from 'react';

import User from './user';
import Bands from './bands';
import Updates from './updates';
import Images from './images';
import Banner from './banner';

import { startAllActions } from '../../redux/actions/start_actions';

export default class Main extends Component {
  constructor() {
    super();
    startAllActions();
  }
  render() {
    return (
      <div className="page">
        <Banner />
        <User />
        <Bands />
        <Updates />
        <Images />
      </div>
    )
  }
}
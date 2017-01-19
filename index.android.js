import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './app/App';

// if(!__DEV__){
global.console = {
  info: () => { },
  log: () => { },
  warn: () => { },
  error: () => { },
}
// }

AppRegistry.registerComponent('demo4', () => App);

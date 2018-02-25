import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './app/components/Main'
import Main2 from './app/components/Main2'

import { createStore, applyMiddleware, combineReducers, BackHandler } from 'redux';
import { Provider, connect } from 'react-redux';
// import { addNavigationHelpers } from 'react-navigation';
// import AppWithNavigationState from './app/navigators/AppNavigator';
import store from './app/store/store.js'



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Main />
    </Provider>
    );
  }
}

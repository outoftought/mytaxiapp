


import React from 'react'
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux'
import configureStore from './src/store/configureStore'


import App from './App';
import {name as appName} from './app.json';

const store=configureStore()
window.store=store

const RNRedux=()=>(
    <Provider store={store}>
      <App/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux);

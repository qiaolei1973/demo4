
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import SignUpCtrl from './container/SignUpCtrl';
import reducers from './reducers/index';

const loggerMiddleware = createLogger();

let store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,      //异步action
        loggerMiddleware      //打印action日志
    )
);

const App = () =>
    <Provider store={store}>
        <SignUpCtrl />
    </Provider>

export default App;
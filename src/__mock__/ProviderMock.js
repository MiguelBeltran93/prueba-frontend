import React from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import rootReducer from '../store/rootReducer';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const development = process.env.NODE_ENV === 'development';
const middlewares= [thunk];
const middlewareeEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareeEnhancer];
const composedEnhancers = development ? composeWithDevTools(...enhancers):compose(...enhancers);


const store= createStore(rootReducer, {},composedEnhancers);
const history = createBrowserHistory();

const ProviderMock = props => (
    <Provider store={store}>
        <Router history={history}>
            {props.children}
        </Router>
    </Provider>
);

export default ProviderMock;
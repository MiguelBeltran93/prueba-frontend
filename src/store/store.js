import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import configureMockStore from 'redux-mock-store'


export const configureStore = (preloadedState) => {
  const development = process.env.NODE_ENV === 'development';


  const middlewares= [thunk];
  const middlewareeEnhancer = applyMiddleware(...middlewares);
  const mockStore = configureMockStore(...middlewares);

  const enhancers = [middlewareeEnhancer];
  const composedEnhancers = development ? composeWithDevTools(...enhancers):compose(...enhancers);

  return createStore(rootReducer, preloadedState,composedEnhancers);
};
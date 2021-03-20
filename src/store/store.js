import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {loggerMiddleware} from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';


export const configureStore = (preloadedState) => {
  const development = process.env.NODE_ENV === 'development';


  const middlewares= [thunk];
  const middlewareeEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareeEnhancer];
  const composedEnhancers = development ? composeWithDevTools(...enhancers):compose(...enhancers);

  if(development){
      middlewares.push(loggerMiddleware);
      enhancers.push(monitorReducerEnhancer);
  }

  return createStore(rootReducer, preloadedState,composedEnhancers);
};
import { combineReducers } from 'redux';
import productReducer from './sections/product-card-input-search/product-card-input-search-reducers';
import tasksReducer from '../reducer';

/**
 *
 * @returns {{productReducer: ((function(*=, *): (*&{itemSearch: *}))|*)}}
 */
export const reducers = () => ({
  // aqui se agregan todos los reducers
  productReducer,
  tasksReducer
});

export default combineReducers(reducers());

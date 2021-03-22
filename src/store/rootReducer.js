import {combineReducers} from 'redux';
import {productReducer} from "./sections/product-card-input-search/product-card-input-search-reducers";


export const reducers = () => ({
    //aqui se agregan todos los reducers
    productReducer

});

export default combineReducers(reducers())
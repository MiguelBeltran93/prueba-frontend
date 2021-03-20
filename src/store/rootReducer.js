import {combineReducers} from 'redux';
import {bundleListReducers} from "./sections/product-card-input-search/product-card-input-search-reducers";


export const reducers = () => ({
    //aqui se agregan todos los reducers
    bundleListReducers

})

export default combineReducers(reducers())
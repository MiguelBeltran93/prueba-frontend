import {SAVE_SEARCH_ITEM} from "./product-card-input-search-actions";


const initialState = {
    bundleList: {},
    itemSearch : ''

};

export const bundleListReducers = (state= initialState, action) =>{
    switch (action.type) {

        case SAVE_SEARCH_ITEM:
            return {...state, itemSearch: action.payload};
        default:
            return state;
    }
};
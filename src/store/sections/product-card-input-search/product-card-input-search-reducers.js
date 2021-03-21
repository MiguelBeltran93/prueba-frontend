import {SAVE_SEARCH_ITEM, SAVE_SEARCH_ITEM_DETAIL} from "./product-card-input-search-actions";


const initialState = {
    bundleList: {},
    itemSearch : '',
    itemDetail: ''

};

export const bundleListReducers = (state= initialState, action) =>{
    switch (action.type) {

        case SAVE_SEARCH_ITEM:
            return {...state, itemSearch: action.payload};
        case SAVE_SEARCH_ITEM_DETAIL:
            return {...state, itemDetail: action.payload};
        default:
            return state;
    }
};
import {
    GET_SEARCH_ITEM_DETAIL,
    GET_SEARCH_ITEM_LIST,
    SAVE_SEARCH_ITEM,
    SAVE_SEARCH_ITEM_DETAIL
} from './product-card-input-search-actions';


const initialState = {
    itemSearch : '',
    itemDetail: '',
    productsList: [],
    productDetail:{}

};

export const productReducer = (state= initialState, action) =>{
    switch (action.type) {
        case SAVE_SEARCH_ITEM:
            return {...state, itemSearch: action.payload};
        case SAVE_SEARCH_ITEM_DETAIL:
            return {...state, itemDetail: action.payload};
        case GET_SEARCH_ITEM_LIST:
            return {...state, productsList: action.payload};
        case GET_SEARCH_ITEM_DETAIL:
            return {...state, productDetail: action.payload};
        default:
            return state;
    }
};
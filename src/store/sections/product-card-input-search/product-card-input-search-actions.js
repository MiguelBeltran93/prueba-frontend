import {getProductDetailService, getProductListService} from "../../../services/product.service";

export const SAVE_SEARCH_ITEM = 'SAVE_SEARCH_ITEM';
export const SAVE_SEARCH_ITEM_DETAIL = 'SAVE_SEARCH_ITEM_DETAIL';
export const GET_SEARCH_ITEM_LIST = 'GET_SEARCH_ITEM_LIST';
export const GET_SEARCH_ITEM_DETAIL = 'GET_SEARCH_ITEM_DETAIL';


export const saveItemSearchAction = (value, option) => dispatch => {
    dispatch(addItemAsync(value, option))
};

export const addItemAsync = (payload, action) => ({
    type: action,
    payload
});

export const getProductListAction = (productType) => dispatch => {

    new Promise((resolve) => {
        resolve('service products list');
        return getProductListService(productType);
    }).then((response) => {
        addItemAsync(response.data, GET_SEARCH_ITEM_LIST)
    }).then(() => {
        //todo implementar loader
    }).catch(error => {
        console.error(error);
    });
};
export const getProductDetailAction = (productId) => dispatch => {

    new Promise((resolve) => {
        resolve('service products detail');
        return getProductDetailService(productId);
    }).then((response) => {
        addItemAsync(response.data, GET_SEARCH_ITEM_DETAIL)
    }).then(() => {
        //todo implementar loader
    }).catch(error => {
        console.error(error);
    });
};
import {getProductDetailService, getProductListService} from "../../../services/product.service";

/**
 *
 * @type {string}
 */
export const SAVE_SEARCH_ITEM = 'SAVE_SEARCH_ITEM';
export const SAVE_SEARCH_ITEM_DETAIL = 'SAVE_SEARCH_ITEM_DETAIL';
export const GET_SEARCH_ITEM_LIST = 'GET_SEARCH_ITEM_LIST';
export const GET_SEARCH_ITEM_DETAIL = 'GET_SEARCH_ITEM_DETAIL';
/**
 *
 * @param value
 * @param option
 * @returns {function(...[*]=)}
 */
export const saveItemSearchAction = (value, option) => dispatch => {
    dispatch(addItemAsync(value, option))
};
/**
 *
 * @param payload
 * @param action
 * @returns {{payload: *, type: *}}
 */
export const addItemAsync = (payload, action) => ({
    type: action,
    payload
});
/**
 *
 * @param productType
 * @returns {function(...[*]=)}
 */
export const getProductListAction = (productType) => dispatch => {

    new Promise((resolve) => {
        resolve('service products list');

    }).then(()=>{
        return getProductListService(productType).then((response)=> {
            return response;
        });
    }).then((response) => {
       dispatch( addItemAsync(response, GET_SEARCH_ITEM_LIST));
    }).then(() => {
        //todo implementar loader
    }).catch(error => {
        console.error(error);
    });
};
/**
 *
 * @param productId
 * @returns {function(...[*]=)}
 */
export const getProductDetailAction = (productId) => dispatch => {
    new Promise((resolve) => {
        resolve('service products detail');
    }).then(()=>{
        return getProductDetailService(productId).then((response)=>{
            return response
        });
    }).then((response) => {
        dispatch(addItemAsync(response, GET_SEARCH_ITEM_DETAIL));
    }).then(() => {
        //todo implementar loader
    }).catch(error => {
        console.error(error);
    });
};
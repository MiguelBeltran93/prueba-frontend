import {
  getProductDetailService,
  getProductListService,
} from '../../../services/product.service';

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
export const saveItemSearchAction = (value, option) => (dispatch) => {
  dispatch(addItemAsync(value, option));
};
/**
 *
 * @param payload
 * @param action
 * @returns {{payload: *, type: *}}
 */
export const addItemAsync = (payload, action) => ({
  type: action,
  payload,
});
/**
 *
 * @param productType
 * @returns {function(...[*]=)}
 */
export const getProductListAction = (productType) => (dispatch) => {
  new Promise((resolve) => {
    resolve('service products list');
    dispatch(addItemAsync({}, GET_SEARCH_ITEM_DETAIL));
  })
    .then(() => getProductListService(productType).then((response) => response))
    .then((response) => {
      dispatch(addItemAsync(response, GET_SEARCH_ITEM_LIST));
    })
    .catch((error) => {
      console.error(error);
    });
};
/**
 *
 * @param productId
 * @returns {function(...[*]=)}
 */
export const getProductDetailAction = (productId) => (dispatch) => {
  new Promise((resolve) => {
    resolve('service products detail');
    dispatch(addItemAsync({}, GET_SEARCH_ITEM_LIST));
  })
    .then(() => getProductDetailService(productId).then((response) => response))
    .then((response) => {
      dispatch(addItemAsync(response, GET_SEARCH_ITEM_DETAIL));
    })
    .catch((error) => {
      console.error(error);
    });
};

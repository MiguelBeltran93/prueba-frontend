import appendProductsPath from './http/utils';
import * as http from './http/wrapper';

const PATH_PRODUCTS_LIST = appendProductsPath('');

export const getProductListService = (productId) =>
  http.get(`${PATH_PRODUCTS_LIST}?q=${productId}`);

export const getProductDetailService = (productId) =>
  http.get(`${PATH_PRODUCTS_LIST}/${productId}`);

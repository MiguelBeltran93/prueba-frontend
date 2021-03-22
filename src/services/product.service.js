import {appendProductsPath} from './http/utils';
import * as http from '../services/http/wrapper'


const PATH_PRODUCTS_LIST = appendProductsPath('');


export const getProductListService = (productId) =>{
  return http.get( `${PATH_PRODUCTS_LIST}?q=${productId}`);
};

export const getProductDetailService = (productId) =>{
  return http.get( `${PATH_PRODUCTS_LIST}/${productId}`);
};
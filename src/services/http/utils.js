/**
 *
 * @type {string}
 */
const PATH_PRODUCTS = 'https://product-services-test.herokuapp.com/api/items';

/**
 *
 * @param endpoint
 * @returns {`https://product-services-test.herokuapp.com/api/items${string}`}
 */
const appendProductsPath = (endpoint) => `${PATH_PRODUCTS}${endpoint}`;

export default appendProductsPath;

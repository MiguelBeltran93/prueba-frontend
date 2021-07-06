/**
 *
 * @type {string}
 */
const PATH_PRODUCTS = '/api/items';
// for deployment, comment up line and remove comment down
// const PATH_PRODUCTS = 'https://product-services-test.herokuapp.com/api/items';

/**
 *
 * @param endpoint
 * @returns {`${string}${string}`}
 */
const appendProductsPath = (endpoint) => `${PATH_PRODUCTS}${endpoint}`;

export default appendProductsPath;

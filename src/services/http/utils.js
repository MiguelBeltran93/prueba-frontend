
const PATH_PRODUCTS= 'https://product-services-test.herokuapp.com/api/items';


export const appendProductsPath = (endpoint) => {
    return `${PATH_PRODUCTS}${endpoint}`
};
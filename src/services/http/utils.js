
const PATH_PRODUCTS= '/api/items';


export const appendProductsPath = (endpoint) => {
    return `${PATH_PRODUCTS}${endpoint}`
};
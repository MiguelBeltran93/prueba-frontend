export const SAVE_SEARCH_ITEM = 'SAVE_SEARCH_ITEM';
export const SAVE_SEARCH_ITEM_DETAIL = 'SAVE_SEARCH_ITEM_DETAIL';


export const saveItemSearchAction = (value, option) => dispatch =>{
    dispatch(addItemAsync(value, option))
}

export const addItemAsync = (payload, action) => ({
    type: action,
    payload
});
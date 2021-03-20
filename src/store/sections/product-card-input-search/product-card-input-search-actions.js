export const SAVE_SEARCH_ITEM = 'SAVE_SEARCH_ITEM';


export const saveItemSearchAction = (value) => dispatch =>{
    dispatch(addItemAsync(value, SAVE_SEARCH_ITEM))
}

export const addItemAsync = (payload, action) => ({
    type: action,
    payload
});

export const SAVE_TASK = 'SAVE_TASK';

export const saveTaskAction = (value, option) => (dispatch) => {
  dispatch(addItemAsync(value, option));
};

export const addItemAsync = (payload, action) => ({
  type: action,
  payload,
});
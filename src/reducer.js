import { SAVE_TASK } from './actions';

export const initialState = {
  saveTask: []
}



// Reducer
export default function tasksReducer(state = initialState, action) {

  switch (action.type) {
    case SAVE_TASK:
      return { ...state, saveTask: [...state.saveTask, action.payload] };
    default:
      return state;

  }
}
import { INITIAL } from '../constants';

export const initializeReducer = (state = [], action) => {
  let value = null;
  switch (action.type) {
    case INITIAL:
    value = [...state, action.payload]
    return value;
    default:
    return state;

  }
}

export default initializeReducer;

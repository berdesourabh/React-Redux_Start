import { INITIAL } from '../constants';

export const initializeAction = () => {
  const action = {
    type: INITIAL,
    payload: 'Change Me Now'
  }

  return action;
}

import { registerActionTypes } from '../../actionTypes/register';

const initialState = {};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case registerActionTypes.REGISTER:
      return state;
    default:
      return state;
  }
}

import { loginActionTypes } from '../../actionTypes/login';

const initialState = {};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case loginActionTypes.LOGIN:
      return state;
    default:
      return state;
  }
}

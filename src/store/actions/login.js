import { loginActionTypes } from '../actionTypes/login';

export function login() {
  return {
    type: loginActionTypes.LOGIN,
  };
}

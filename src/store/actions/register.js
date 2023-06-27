import { registerActionTypes } from '../actionTypes/register';

export function register() {
  return {
    type: registerActionTypes.REGISTER,
  };
}

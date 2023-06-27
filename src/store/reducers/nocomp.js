import { nocompActionTypes } from '../../actionTypes/nocomp';

const initialState = {};

export default function nocompReducer(state = initialState, action) {
  switch (action.type) {
    case nocompActionTypes.NOCOMP:
      return state;
    default:
      return state;
  }
}

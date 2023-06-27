import { inputActionTypes } from '../../actionTypes/input';

const initialState = {};

export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case inputActionTypes.INPUT:
      return state;
    default:
      return state;
  }
}

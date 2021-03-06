import { LOADING_PROGRESS } from '../types';

const initialState = {
  isLoading: false
};

export default function index(state = initialState, action = null) {
  switch (action.type) {
    case LOADING_PROGRESS:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}

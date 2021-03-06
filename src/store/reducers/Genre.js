import { GENRES, SELECTED_GENRE } from '../types';

const initState = {
  list: [],
  selectedGenre: []
}

export default function index(state = initState, action = null) {
  switch (action.type) {
    case GENRES:
      return {
        ...state,
        list: action.payload,
      };
    case SELECTED_GENRE:
      return {
        ...state,
        selectedGenre: action.payload,
      };
    default:
      return state;
  }
}

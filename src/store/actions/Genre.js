import { GENRES, SELECTED_GENRE } from '../types';

export const setGenres = payload => ({
  type: GENRES,
  payload
});

export const selectGenre = payload => ({
  type: SELECTED_GENRE,
  payload
});
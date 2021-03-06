import React from 'react';
import { connect } from 'react-redux';
import { selectGenre } from 'store/actions/Genre';
import { setSortBy } from 'store/actions/SortMovie';
import Checkbox from 'lib/elements/Checkbox';

const sortList = [
  {
    label: 'Popularity Ascending',
    by: 'popularity.asc'
  }, {
    label: 'Popularity Descending',
    by: 'popularity.desc'
  }, {
    label: 'Release Date Ascending',
    by: 'release_date.asc'
  },  {
    label: 'Release Date Descending',
    by: 'release_date.desc'
  }, {
    label: 'Rating Ascending',
    by: 'vote_average.asc'
  }, {
    label: 'Rating Descending',
    by: 'vote_average.desc'
  }
]

const MovieFilter = ({ dispatch, genres, selectedGenre, sortBy }) => {
  const pushGenre = id => {
    const ids = parseInt(id);

    if (!selectedGenre.includes(ids)) {
      dispatch(selectGenre([...selectedGenre, ids]));
    } else {
      const index = selectedGenre.indexOf(ids);
      selectedGenre.splice(index, 1);
      dispatch(selectGenre(selectedGenre));
    }
  }

  return (
    <div className="movie-filter">
      <h3>Sort Result By</h3>

      <label className="select-wrap">
        <div className="select">
          <select onChange={e => dispatch(setSortBy(e.target.value))}>
            { sortList.map((item, i) => (
              <option key={ i } value={ item.by } defaultValue={ item.by === sortBy }>
                { item.label }
              </option>
            )) }
          </select>
        </div>
      </label>

      <h3>Genres</h3>

      { genres?.map(({ id, name }) => (
        <Checkbox
          key={ id }
          value={ id }
          label={ name }
          onChange={ e => pushGenre(e) }
        />
      )) }
    </div>
  );
};

const mapStateToProps = state => ({
  genres: state.genre.list,
  selectedGenre: state.genre.selectedGenre,
  sortBy: state.sort.sortBy
});

export default connect(mapStateToProps)(MovieFilter);

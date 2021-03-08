import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { read } from 'utils/api';
import { Link } from 'react-router-dom';
import Icon from 'icon';

const SuggestionsList = ({ data, search }) => (
  <div className="suggestions">
    { data?.map(({ id, title }) => {
      const parts = title.split(new RegExp(`(${search})`, 'gi'));

      return (
        <Link to={`/movie/${id}`} key={ id }>
          { parts.map(part => part.toLowerCase() === search.toLowerCase() ? <b>{ part }</b> : part) }
        </Link>
      )}
    ) }
  </div>
);

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await read(`search/movie?query=${search}`);
      setMovies(res);
    };

    search.length > 3 && fetchData();
  }, [search]);

  return (
    <Fragment>
      <div className="search-bar">
        <div className="prepend-icon">
          <Icon name="movie" size={24} />
        </div>

        <input
          type="search"
          onChange={e => setSearch(e.target.value)}
          placeholder="Find movie"
        />

        <div className="append-icon">
          <Icon name="search" size={ 15 } />
        </div>
      </div>

      { movies && <SuggestionsList data={ movies.results } search={ search } /> }
      { !movies && search.length > 3 && <small>No suggestions</small> }
    </Fragment>
  );
};

SearchBar.defaultProps = {
  suggestions: [],
  value: '',
  disabled: false
};

SearchBar.propTypes = {
  suggestions: PropTypes.instanceOf(Array),
  disabled: PropTypes.bool
};

export default SearchBar;

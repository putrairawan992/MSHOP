import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Recommend = ({ data }) => {
  return data.slice(0, 5).map(({ id, poster_path, title, release_date, vote_average }) => (
    <Link to={`/movie/${id}`} key={ id }>
      <figure className="movie-card">
        <div className="poster">
          <img src={ `${process.env.REACT_APP_IMG_HOST}w500${poster_path}` } alt={ title }  />
          <span className="avg-vote">{ vote_average }</span>
        </div>

        <figcaption>
          <h2>{ title }</h2>
          <p>{ release_date.split('-')[0] }</p>
        </figcaption>
      </figure>
    </Link>
  ));
};

Recommend.propTypes = {
  data: PropTypes.object.isRequired
};

export default Recommend;

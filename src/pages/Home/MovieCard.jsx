import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMyMovie } from 'store/actions/MyMovie';
import { Link } from 'react-router-dom';
import Icon from 'icon';

const MovieCard = ({ dispatch, data, genres }) => {
  const [added, setAdded] = useState(false);
  const { title, poster_path, release_date, vote_average, genre_ids, id } = data;
  const imgURL = poster_path ? `${process.env.REACT_APP_IMG_HOST}w500${poster_path}` : 'https://via.placeholder.com/400x600.png?text=Poster+not+available';

  const saveMovie = id => {
    dispatch(setMyMovie(id));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <figure className="movie-card">
      <div className="poster">
        <img src={ imgURL } alt={ title }  />

        <span className="avg-vote">{ vote_average }</span>

        <div className="details">
          <div className="rating">
            <Icon name="star-full" size={ 32 } color="#FFB802" />
            <span>{ vote_average }</span>
          </div>

          <p>{ genres?.filter(find => find.id === genre_ids[0])[0]?.name }</p>

          <div className="control">
            <Link to={ `/movie/${id}` } className="btn btn-primary">
              VIEW
            </Link>

            <button onClick={() => saveMovie(id)} className={`btn btn-outlined ${added ? 'success' : ''}`}>
              { added ? 'ADDED' : 'ADD' }
            </button>
          </div>
        </div>
      </div>

      <figcaption>
        <h2>{ title }</h2>
        <p>{ release_date?.split('-')[0] }</p>
      </figcaption>
    </figure>
  )
}

MovieCard.propTypes = {
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  genres: state.genre.list
});


export default connect(mapStateToProps)(MovieCard);

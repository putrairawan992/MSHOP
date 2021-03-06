import React, { useEffect, useState, Fragment } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import Icon from 'icon';
import { read } from 'utils/api';

const TrendingMovie = ({ genres }) => {
  const [tranding, setTranding] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await read('trending/movie/week');
      setTranding(res.results);
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="trending">
      <Slider {...settings}>
        { tranding?.map(({ id, poster_path, title, vote_average, release_date, genre_ids, overview }) => (
          <Fragment key={ id }>
            <div className="trending-card">
              <img src={`${process.env.REACT_APP_IMG_HOST}w500${poster_path}`} alt={ title } />

              <div className="info">
                <div className="rating">
                  <Icon name="star-full" size={16.21} color="#FFB802" />
                  <span>{ vote_average }</span>
                </div>

                <h2>{ title }</h2>

                <div className="year">
                  <span>{ release_date.split('-')[0] }</span>

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="7" height="7">
                    <circle cx="3.2" cy="3.2" r="3.2"/>
                  </svg>

                  <span>{ genres?.filter(find => find.id === genre_ids[0])[0]?.name }</span>
                </div>

                <p>{ overview.substring(0, 150) }</p>
              </div>
            </div>
          </Fragment>
        )) }
      </Slider>
    </div>
  );
};

const mapStateToProps = state => ({
  genres: state.genre.list
});

export default connect(mapStateToProps)(TrendingMovie);

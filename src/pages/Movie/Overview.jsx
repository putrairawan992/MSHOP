import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'lib/elements/Grid';

const Overview = ({ data }) => {
  const { title, poster_path, release_date, genres, overview } = data;

  return (
    <article className="movie-over">
      <Container>
        <Row>
          <Col md={ 2 } className="poster">
            <img src={`${process.env.REACT_APP_IMG_HOST}w500${poster_path}`} alt={ title } />
          </Col>

          <Col md={ 10 } className="info">
            <div className="title">
              <span>{ release_date.split('-')[0] }</span>
              <h1>{ title }</h1>
              <span>{ genres.map(({ name }, i) => ( (i ? ', ' : '') + name )) }</span>
            </div>

            <div className="synopsis">
              <h2>OVERVIEW</h2>
              <p>{ overview.substring(0, 150) }</p>
            </div>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

Overview.propTypes = {
  data: PropTypes.object.isRequired
};

export default Overview;

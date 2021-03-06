import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'lib/elements/Grid';
import Icon from 'icon';

const HeroHeader = ({ data }) => {
  const { vote_average, backdrop_path, status, spoken_languages, budget, production_companies, vote_count } = data;

  return (
    <Container fluid>
      <header
        className="hero-header"
        style={{ backgroundImage: `url(${process.env.REACT_APP_IMG_HOST}original${backdrop_path})` }}
      >
        <div className="highlight">
          <Container>
            <Row>
              <Col md={ 2 }></Col>

              <Col md={ 10 } className="stat">
                <div className="rating">
                  <Icon name="star-full" size={ 32 } color="#FFB802" />
                  <span>{ vote_average }</span>
                </div>

                <div className="stat-item">
                  <p>USER SCORE</p>
                  <b>{ vote_count } VOTES</b>
                </div>

                <div className="stat-item">
                  <p>STATUS</p>
                  <b>{ status }</b>
                </div>

                <div className="stat-item">
                  <p>LANGUAGE</p>
                  <b>{ spoken_languages[0].english_name }</b>
                </div>

                <div className="stat-item">
                  <p>BUDGET</p>
                  <b>$ { budget.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") }</b>
                </div>

                <div className="stat-item">
                  <p>PRODUCTION</p>
                  <b>{ production_companies[0].name }</b>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </Container>
  );
};

HeroHeader.propTypes = {
  data: PropTypes.object.isRequired
};

export default HeroHeader;

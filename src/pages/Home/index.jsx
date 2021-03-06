import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'lib/elements/Grid';
import { read } from 'utils/api';
import TrendingMovie from './TrendingMovie';
import MovieFilter from './MovieFilter';
import MovieCard from './MovieCard';

const Home = ({ selectedGenre, sortBy, myMovie }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const genre = selectedGenre.join('|');

      const res = await read(`discover/movie?with_genres=${genre}&sort_by=${sortBy}&language=en-US`);
      setMovies(res);
    };

    fetchData();
  }, [selectedGenre, sortBy]);

  return (
    <Fragment>
      <TrendingMovie />

      <Container fluid className="main-content">
        <header>
          <Container>
            <h1>Discover Movies</h1>

            <div className="own-movie">
              <span>My Movies</span>

              <div className="counter">
                { myMovie.length } movies
              </div>
            </div>
          </Container>
        </header>

        <Container>
          <Row>
            <Col md={3}>
              <MovieFilter />
            </Col>

            <Col md={9}>
              <Container>
                <Row>
                  { movies?.results?.map((item, i) => (
                    <Col md={3} sm={6} key={i}>
                      <MovieCard data={item} />
                    </Col>
                  )) }
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  selectedGenre: state.genre.selectedGenre,
  sortBy: state.sort.sortBy,
  myMovie: state.myMovie.list
});

export default connect(mapStateToProps)(Home);

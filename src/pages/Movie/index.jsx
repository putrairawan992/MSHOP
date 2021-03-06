import React, { Fragment, useEffect, useState } from 'react';
import { Container, Row } from 'lib/elements/Grid';
import { read } from 'utils/api';
import { useParams } from 'react-router-dom';
import HeroHeader from './HeroHeader';
import Overview from './Overview';
import Review from './Review';
import Recommend from './Recommend';

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [review, setReview] = useState(null);
  const [recommend, setRecommend] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const resMovie = await read(`movie/${movieId}`);
      const resReview = await read(`movie/${movieId}/reviews`);
      const resRecommend = await read(`movie/${movieId}/recommendations`);

      setMovie(resMovie);
      setReview(resReview);
      setRecommend(resRecommend);
    };

    fetchData();
  }, [movieId]);

  return (
    <Fragment>
      { movie && <HeroHeader data={ movie } /> }
      { movie && <Overview data={ movie } /> }

      <Container fluid className="reviews">
        <Container>
          <h2>REVIEWS</h2>

          <Container className="feedback">
            <Row>
              { review ?
                  review.total_results === 0 ?
                  <p>0 review</p> : <Review data={ review.results } />
                : <p>loading ...</p>
              }
            </Row>
          </Container>
        </Container>
      </Container>

      <Container fluid className="recommendations">
        <Container>
          <h2>RECOMMENDATION MOVIES</h2>

          <Container>
            <Row>
              { recommend && <Recommend data={ recommend.results } /> }
            </Row>
          </Container>
        </Container>
      </Container>
    </Fragment>
  );
};

export default Movie;

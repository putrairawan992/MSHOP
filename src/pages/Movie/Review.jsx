import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'lib/elements/Grid';
import Icon from 'icon';

const m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Overview = ({ data }) => {
  return data.slice(0, 2).map(({ id, author_details, updated_at, content }) => {
    const avaPath = author_details.avatar_path;
    const avaCDN = `${process.env.REACT_APP_IMG_HOST}w500${avaPath}`;
    const avatar = avaPath ? avaPath.includes('gravatar') ? avaPath.substring(1) : avaCDN : 'https://via.placeholder.com/300x300.png?text=AVATAR';
    const date = new Date(updated_at);

    return (
      <Col md={6} key={ id }>
        <div className="item">
          <header>
            <div className="author">
              <img src={ avatar } alt={ author_details.name } />

              <div>
                <h3>{ author_details.name || author_details.username }</h3>

                <span className="date">
                  { `${m[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`  }
                </span>
              </div>
            </div>

            <div className="rating">
              <Icon name="star-full" size={ 17 } color="#FFB802" />
              <span>{ author_details.rating?.toFixed(1) || 0 }</span>
            </div>
          </header>

          <article>{ content.substring(0, 601) } ...</article>
        </div>
      </Col>
    );
  });
};

Overview.propTypes = {
  data: PropTypes.array.isRequired
};

export default Overview;

import React from 'react';
import { connect } from 'react-redux';

const Category = ({ genres }) =>  (
  <div className="categories-menu">
    { genres?.map((item, i) => (
        <a href="" key={ i }>
          { item.name }
        </a>
    )) }
  </div>
);

const mapStateToProps = state => ({
  genres: state.genre.list
});

export default connect(mapStateToProps)(Category);

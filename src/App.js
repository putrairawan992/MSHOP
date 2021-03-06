import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterManager from 'router';
import { connect } from 'react-redux';
import { setGenres } from 'store/actions/Genre';
import { read } from 'utils/api';

const App = ({ dispatch, genres }) => {
  useEffect(() => {
    const fetchData = async () => {
      if (!genres?.length) {
        const res = await read('genre/movie/list');
        dispatch(setGenres(res.genres));
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <RouterManager />
    </BrowserRouter>
  )
};

const mapStateToProps = state => ({
  ...state.genre
});

export default connect(mapStateToProps)(App);

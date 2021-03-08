import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Loading from 'lib/elements/Loading';
import Navbar from 'lib/components/Navbar';
import Footer from 'lib/components/Footer';

import Home from 'pages/Home';
import Movie from 'pages/Movie';

const RouterManager = ({ progress }) => (
  <Fragment>
    <Navbar />

    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/movie/:movieId' component={ Movie } />
    </Switch>

    <Footer />

    <Loading shown={progress} />
  </Fragment>
);

const mapStateToProps = state => ({
  progress: state.isLoading.loading
})

export default connect(mapStateToProps)(RouterManager);

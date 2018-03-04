import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom';
import Article from './pages/article';
import Stage from './pages/stage';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Stage}/>
        <Route exact path="/article/:id/:platform?" component={Article}/>
      </Fragment>
    );
  }
}
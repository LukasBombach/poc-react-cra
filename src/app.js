import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom';
import Article from './pages/article';
import Stage from './pages/stage';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" component={Stage}/>
        <Route path="/article/:id" component={Article}/>
      </Fragment>
    );
  }
}
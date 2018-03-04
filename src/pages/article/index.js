import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import { getArticle } from 'data-api';
import { getArticle } from '../../__mocks';
import Layout from "../../layout";
import Head from './head';
import Body from './body';

export default class Article extends Component {

  static contextTypes = {
    platform: PropTypes.string
  };

  static defaultProps = {
    platform: 'Web',
  };

  static childContextTypes = {
    platform: PropTypes.string
  };

  state = {
    article: {},
  };

  async componentDidMount() {
    const article = await getArticle(this.props.match.params.id);
    this.setState({ article });
  }

  getChildContext() {
    return { platform: this.props.platform };
  }

  render() {
    return (
      <Layout>
        <Head article={this.state.article} />
        <Body article={this.state.article} />
      </Layout>
    );
  }

};

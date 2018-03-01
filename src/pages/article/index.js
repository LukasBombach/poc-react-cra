import React, { Component } from 'react'
import { getArticle } from 'data-api';
import Layout from "../../layout";
import Head from './head';
import Body from './body';

export default class Article extends Component {

  state = {
    article: {},
  };

  async componentDidMount() {
    const article = await getArticle(this.props.match.params.id); // '5a93e0723195eb0001099411'
    this.setState({ article });
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

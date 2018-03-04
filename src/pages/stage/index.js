import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import { getStage } from 'data-api';
import { getStage } from '../../__mocks';
import Layout from "../../layout";
import Teaser from "./teaser";

export default class Stage extends Component {

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
    articles: [],
  };

  async componentDidMount() {
    const ids = ['5a93e0723195eb0001099411', '5a93e0723195eb0001099411', '5a93e0723195eb0001099411'];
    const articles = await getStage(ids);
    this.setState({ articles });
  }

  getChildContext() {
    return { platform: this.props.platform };
  }

  render() {
    return (
      <Layout>
        {this.state.articles.map((article, key) => <Teaser key={key} article={article} />)}
      </Layout>
    );
  }

};

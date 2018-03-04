import React, { Component } from 'react'
import { rendersPlatforms } from "../platforms/index";
import Head from './head';
import Nav from "./nav";
import styles from './index.module.scss';

@rendersPlatforms
export default class Layout extends Component {

  renderWeb() {
    return (
      <div className={styles.container}>
        <Head />
        <Nav />
        {this.props.children}
      </div>
    );
  }

}

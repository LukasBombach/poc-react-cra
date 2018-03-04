import React from 'react'
import Head from './head';
import styles from './index.module.scss';

const Layout = (props) =>
  <div className={styles.container}>
    <Head />
    {props.children}
  </div>;

export default Layout

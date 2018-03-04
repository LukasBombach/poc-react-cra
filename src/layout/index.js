import React from 'react'
import Head from './head';
import Nav from "./nav";
import styles from './index.module.scss';


const Layout = (props) =>
  <div className={styles.container}>
    <Head />
    <Nav />
    {props.children}
  </div>;

export default Layout

import React, { Fragment } from 'react'
import Head from "./head";

const Layout = (props) =>
  <Fragment>
    <Head />
    {props.children}
  </Fragment>;

export default Layout

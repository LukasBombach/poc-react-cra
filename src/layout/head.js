import React, { Fragment } from 'react'
import Nav from "./nav";
import logo from '../assets/images/layout/logo.png';

const Head = () =>
  <Fragment>
    <img src={logo} alt="Bild Logo"/>
    <Nav />
  </Fragment>;

export default Head

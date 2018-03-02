import React, { Fragment } from 'react'
import Nav from "./nav";
import logo from '../assets/images/layout/logo.png';

const Head = () =>
  <Fragment>
    <a href="/"><img src={logo} alt="Bild Logo"/></a>
    <Nav />
  </Fragment>;

export default Head

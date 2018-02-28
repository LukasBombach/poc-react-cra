import React, { Fragment } from 'react';

export default ({ article: { title, teaserImg, teaserText } }) =>
  <Fragment>
    <h1>{title}</h1>
    { teaserImg ? <img src={teaserImg} alt="Teaser Bild" /> : null }
    { teaserText ? <p>{teaserText}</p> : null }
  </Fragment>

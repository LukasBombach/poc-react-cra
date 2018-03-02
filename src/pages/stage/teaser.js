import React, { Fragment } from 'react';

export default ({ article: { title, teaserImg, teaserText } }) =>
  <Fragment>
    <h2>{title}</h2>
    { teaserImg ? <img src={teaserImg} alt="Teaser Bild" /> : null }
    { teaserText ? <p>{teaserText}</p> : null }
  </Fragment>

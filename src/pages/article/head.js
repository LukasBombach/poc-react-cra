import React, { Fragment } from 'react';
import styles from './head.module.css';

export default ({ article: { title, teaserImg, teaserText } }) =>
  <Fragment>
    <h1 className="theme-teaser--heading">{title}</h1>
    { teaserImg ? <img src={teaserImg} alt="Teaser Bild" className={styles.img} /> : null }
    { teaserText ? <p>{teaserText}</p> : null }
  </Fragment>

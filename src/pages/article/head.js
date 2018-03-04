import React, { Fragment } from 'react';
import styles from './head.module.scss';

export default ({ article: { title, teaserImg, teaserText } }) =>
  <Fragment>
    <h1 className={[styles.heading, 'theme-teaser--heading'].join(' ')}>{title}</h1>
    { teaserImg ? <img src={teaserImg} alt="Teaser Bild" className={styles.img} /> : null }
    { teaserText ? <p className={styles.teaser}>{teaserText}</p> : null }
  </Fragment>

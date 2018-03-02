import React, { Fragment } from 'react';
import styles from './teaser.module.css';

export default ({ article: { title, teaserImg, teaserText } }) =>
  <Fragment>
    <h2>{title}</h2>
    { teaserImg ? <img src={teaserImg} alt="Teaser Bild" className={styles.img} /> : null }
    { teaserText ? <p>{teaserText}</p> : null }
  </Fragment>

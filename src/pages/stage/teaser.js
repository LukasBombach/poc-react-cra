import React from 'react';
import styles from './teaser.module.scss';

export default ({ article: { id, title, teaserImg, teaserText } }) =>
  <a href={`/article/${id}`}>
    <h2 className={[styles.heading, 'theme-teaser--heading'].join(' ')}>{title}</h2>
    { teaserImg ? <img src={teaserImg} alt="Teaser Bild" className={styles.img} /> : null }
    { teaserText ? <p className={styles.teaser} s>{teaserText}</p> : null }
  </a>

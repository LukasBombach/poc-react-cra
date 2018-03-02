import React from 'react';
import styles from './teaser.module.css';

export default ({ article: { id, title, teaserImg, teaserText } }) =>
  <a href={`/article/${id}`}>
    <h2>{title}</h2>
    { teaserImg ? <img src={teaserImg} alt="Teaser Bild" className={styles.img} /> : null }
    { teaserText ? <p>{teaserText}</p> : null }
  </a>

import React from 'react';
import styles from './teaser.module.scss';

export default ({ article: { id, title, teaserImg, teaserText } }) =>
  <a href={`/article/${id}`} className={styles.teaser} style={{ backgroundImage: `url(${teaserImg})` }}>
    <h2 className="theme-teaser--heading">{title}</h2>
  </a>

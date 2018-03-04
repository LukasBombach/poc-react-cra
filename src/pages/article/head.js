import React, { Fragment } from 'react';
import Content from "./content";
import styles from './head.module.scss';

export default class Head extends Content {

  renderWeb() {
    return (
      <Fragment>
        <h1 className={[styles.heading, 'theme-teaser--heading'].join(' ')}>{this.props.article.title}</h1>
        { this.props.article.teaserImg ? <img src={this.props.article.teaserImg} alt="Teaser Bild" className={styles.img} /> : null }
        { this.props.article.teaserText ? <p className={styles.teaser}>{this.props.article.teaserText}</p> : null }
      </Fragment>
    );
  }

  renderAmp() {
    return (
      <Fragment>
        <h1 className={[styles.heading, 'theme-teaser--heading'].join(' ')}>{this.props.article.title}</h1>
        { this.props.article.teaserImg ? <amp-img src={this.props.article.teaserImg} layout="responsive" /> : null }
        { this.props.article.teaserText ? <p className={styles.teaser}>{this.props.article.teaserText}</p> : null }
      </Fragment>
    );
  }

}
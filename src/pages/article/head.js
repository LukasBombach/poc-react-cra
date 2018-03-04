import React, { Component, Fragment } from 'react';
import {rendersPlatforms} from "../../platforms/index";
import styles from './head.module.scss';

@rendersPlatforms
export default class Head extends Component {

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
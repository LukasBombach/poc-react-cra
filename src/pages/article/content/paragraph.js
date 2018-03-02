import React from 'react';
import Content from '../content';
import styles from './paragraph.module.css';

export default class Paragraph extends Content {

  renderWeb() {
    return <p className={styles.paragraph}>{this.props.block.text}</p>
  }

  renderAmp() {
    return <p>{this.props.block.text}</p>
  }

}

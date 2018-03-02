import React from 'react';
import Content from '../content';

export default class Paragraph extends Content {

  renderWeb() {
    return <p>{this.props.block.text}</p>
  }

  renderAmp() {
    return <p>{this.props.block.text}</p>
  }

}

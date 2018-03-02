import React, { Component } from 'react';
import Paragraph from "./content/paragraph";

export default class Body extends Component {

  static contentMap = {
    unstyled: Paragraph,
    default: Paragraph,
  };

  static getBlockTag(block) {
    return Body.contentMap[block.type] || Body.contentMap.default;
  }

  static renderBlock(block) {
    const BlockTag = Body.getBlockTag(block);
    return <BlockTag block={block} />
  }

  getBody() {
    return this.props.article.body || [];
  }

  render() {
    return (
      <div>
        { this.getBody().map(block => Body.renderBlock(block)) }
      </div>
    );
  }

}

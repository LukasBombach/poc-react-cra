import React, { Component } from 'react';
import Paragraph from "./content/paragraph";

export default class Body extends Component {

  static contentMap = {
    unstyled: Paragraph,
    default: Paragraph,
  };

  static defaultProps = {
    article: {},
  };

  static getBlockTag(block) {
    return Body.contentMap[block.type] || Body.contentMap.default;
  }

  static renderBlock(block, key) {
    const BlockTag = Body.getBlockTag(block);
    return <BlockTag key={key} block={block} />
  }

  getBody() {
    return this.props.article.body || [];
  }

  render() {
    return (
      <div>
        { this.getBody().map((block, key) => Body.renderBlock(block, key)) }
      </div>
    );
  }

}

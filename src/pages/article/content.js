import { Component } from 'react';

export default class Content extends Component {

  static defaultPlatform = 'Web';

  render() {
    const platform = this.context.platform || Content.defaultPlatform;
    const renderMethod = this[`render${platform}`] ? `render${platform}` : `render${Content.defaultPlatform}`;
    return this[renderMethod]();
  }

}

import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Content extends Component {

  static defaultPlatform = 'Web';

  static contextTypes = {
    platform: PropTypes.string
  };

  getPlatform() {
    const platform = this.context.platform || Content.defaultPlatform;
    return platform.charAt(0).toUpperCase() + platform.slice(1).toLowerCase();
  }

  render() {
    const platform = this.getPlatform();
    const renderMethod = this[`render${platform}`] ? `render${platform}` : `render${Content.defaultPlatform}`;
    return this[renderMethod]();
  }

}

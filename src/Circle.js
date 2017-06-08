import React, { PropTypes } from 'react';
import stamp from 'react-stamp';

import { TWEENABLE_SVG_PRESENTATION_ATTRS } from './constants';
import { bindMouseEvents } from './helpers';
import AnimatedElement from './AnimatedElement';

export default stamp(React).compose(AnimatedElement, {

  displayName: 'Circle',

  propTypes: {
    cx: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
    cy: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
    r: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
    fill: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
    stroke: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
  },

  getAttrNames() {
    return ['cx', 'cy', 'r'].concat(TWEENABLE_SVG_PRESENTATION_ATTRS);
  },

  render() {
    const { className } = this.props;
    return (
      <circle
        {...this.state}
        className={className}
        style={this.getStyle(this.props)}
        {...bindMouseEvents(this.props)}
      />
    );
  },

});

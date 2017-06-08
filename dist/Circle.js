'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _constants = require('./constants');

var _helpers = require('./helpers');

var _AnimatedElement = require('./AnimatedElement');

var _AnimatedElement2 = _interopRequireDefault(_AnimatedElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose(_AnimatedElement2.default, {

  displayName: 'Circle',

  propTypes: {
    cx: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    cy: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    r: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    fill: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]),
    stroke: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func])
  },

  getAttrNames: function getAttrNames() {
    return ['cx', 'cy', 'r'].concat(_constants.TWEENABLE_SVG_PRESENTATION_ATTRS);
  },
  render: function render() {
    var className = this.props.className;

    return _react2.default.createElement('circle', (0, _extends3.default)({}, this.state, {
      className: className,
      style: this.getStyle(this.props)
    }, (0, _helpers.bindMouseEvents)(this.props)));
  }
});
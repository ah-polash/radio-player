"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var S = {
  display: 'inline-block',
  width: 16,
  height: 16
};

var SvgChecked = function SvgChecked(_ref) {
  var style = _ref.style,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#64e346' : _ref$color;
  return (/*#__PURE__*/_react["default"].createElement("span", {
      style: (0, _extends2["default"])({}, S, style)
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      viewBox: "0 0 16 16",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M 2,5 L 8,14 14,1",
      stroke: color,
      fill: "transparent",
      strokeWidth: "3",
      strokeLinecap: "round"
    })))
  );
};

var _default = SvgChecked;
exports["default"] = _default;
//# sourceMappingURL=SvgChecked.js.map
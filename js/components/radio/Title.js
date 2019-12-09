"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CL = {
  TITLE: 'audio__title',
  ERR: 'audio__title audio__title--err'
};

var Title = function Title(_ref) {
  var station = _ref.station,
      msgErr = _ref.msgErr,
      title = _ref.title;

  var _title = station && station.title || '',
      _msgErrOrTitle = msgErr ? msgErr + " " + _title : _title || title,
      _cl = msgErr ? CL.ERR : CL.TITLE;

  return _react["default"].createElement("div", {
    className: _cl
  }, _msgErrOrTitle);
};

var _default = Title;
exports["default"] = _default;
//# sourceMappingURL=Title.js.map
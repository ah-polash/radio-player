"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _AppContext = _interopRequireDefault(require("./AppContext"));

var _Radio = _interopRequireDefault(require("./radio/Radio"));

var _AudioPlayer = _interopRequireDefault(require("./radio/AudioPlayer"));

var CL = "app-radio-player";

var App = function App() {
  var dispatch = (0, _reactRedux.useDispatch)(),
      appContextValue = _AppContext["default"].getValue(dispatch),
      setSrcFilter = appContextValue.setSrcFilter;

  (0, _react.useEffect)(function () {
    setSrcFilter(2);
  }, []);
  return (/*#__PURE__*/_react["default"].createElement(_AppContext["default"].Provider, {
      value: appContextValue
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: CL
    }, /*#__PURE__*/_react["default"].createElement(_AudioPlayer["default"], null), /*#__PURE__*/_react["default"].createElement(_Radio["default"].List, null)))
  );
};

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=App.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _initialState = require('../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _actions = require('./actions');

var _actions2 = require('../stations/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.app;
  var action = arguments[1];

  switch (action.type) {
    case _actions.ACTION.SET_UI_THEME:
      {
        var uiTheme = action.uiTheme;

        return state.uiTheme !== uiTheme ? (0, _extends3.default)({}, state, { uiTheme: uiTheme
        }) : state;
      }
    case _actions.ACTION.TOGGLE_DRAWER:
      return (0, _extends3.default)({}, state, {
        isDrawer: !state.isDrawer
      });
    case _actions2.ACTION.SET_CURRENT_STATION:
      {
        var station = action.station;

        return (0, _extends3.default)({}, state, {
          currentStation: station
        });
      }
    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=reducer.js.map
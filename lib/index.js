"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regeneratorRuntime = require("regenerator-runtime");

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function _callee(num) {
	var result;
	return _regeneratorRuntime2.default.async(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return _regeneratorRuntime2.default.awrap(prms(num));

				case 2:
					result = _context.sent;
					return _context.abrupt("return", result);

				case 4:
				case "end":
					return _context.stop();
			}
		}
	}, null, undefined);
};

var prms = function prms(num) {
	return Promise.resolve().then(function () {
		if (typeof num !== "number") {
			throw new Error(num + " is not number");
		} else {
			return num * 100;
		}
	});
};
module.exports = exports["default"];
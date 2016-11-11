'use strict';

var _mocha = require('mocha');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _getUserName = require('../src/getUserName');

var _getUserName2 = _interopRequireDefault(_getUserName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mocha.describe)('Test', function () {
  (0, _mocha.describe)('Check test subsystem', function () {
    (0, _mocha.it)('test system is work	', function () {
      _assert2.default.equal('for test', 'for test');
    });
  });
  (0, _mocha.describe)('Check module "getUserName"', function () {
    (0, _mocha.it)('should return text "for test"', function () {
      _assert2.default.equal('for test', (0, _getUserName2.default)(''));
    });
  });
});
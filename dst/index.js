'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _getUserName = require('./getUserName');

var _getUserName2 = _interopRequireDefault(_getUserName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _getUserName2.default;


var app = (0, _express2.default)();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    console.log(req.query.fullname);
    var result = (0, _getUserName2.default)(req.query.url);
    res.send('' + result);
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
const config = require('../config/main');
const fs = require('fs');
const path = require('path');
var obj;
//= =======================================
// User Routes
//= =======================================
exports.out = function (req, res, next) {
  fs.readFile(path.resolve(__dirname, '../../template.json'), 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
  });
  return res.status(200).json(obj).end();
//  return res.status(200).json('cb('+JSON.stringify(obj)+');');
};
exports.prelogin = function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({'result':'OK'}).end();
};
exports.login = function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({'result':'OK'}).end();
};

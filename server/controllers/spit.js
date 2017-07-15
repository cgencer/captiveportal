const config = require('../config/main');
const fs = require('fs');
const path = require('path');
var obj;
//= =======================================
// User Routes
//= =======================================
exports.out = function (req, res, next) {
  const userId = req.params.userId;
  fs.readFile(path.resolve(__dirname, '../../template.json'), 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
  });
  return res.status(200).json('cb('+JSON.stringify(obj)+');');
};

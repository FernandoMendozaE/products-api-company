"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

/**
 * ? Archivo encargado de la coneccion a mongoose
 */
_mongoose["default"].connect('mongodb://localhost/companydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
}).then(function (db) {
  return console.log('Db is connected');
})["catch"](function (err) {
  return console.log(err);
});
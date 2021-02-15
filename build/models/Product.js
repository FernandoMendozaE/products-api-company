"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

/**
 *  ? Archivo encargado de crear el modelo de Product
 */
var productSchema = new _mongoose.Schema({
  // * creanfo modelo
  name: String,
  category: String,
  price: Number,
  imgURL: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Product', productSchema);

exports["default"] = _default;
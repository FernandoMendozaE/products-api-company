"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

/**
 * ? Archivo encargado para que aranque la aplicación
 */
// * importa express
// * importa BD
_app["default"].listen(4000);

console.log('Server listen on port', 4000);
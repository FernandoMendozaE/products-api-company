"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var productsCtrl = _interopRequireWildcard(require("../controllers/products.controller"));

var _middlewares = require("../middlewares");

/**
 * ? Ruteo de rutas express
 */
var router = (0, _express.Router)();
// *exportando middlewares
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerator], productsCtrl.createProduct); // *enviar

router.get('/', productsCtrl.getProducts); // *obtener

router.get('/:productId', productsCtrl.getProductById); // * obtener parametro

router.put('/:productId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], productsCtrl.updateProductById); // * actualizar parametro

router["delete"]('/:productId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], productsCtrl.deleteProductById); // * eliminar parametro

var _default = router;
exports["default"] = _default;
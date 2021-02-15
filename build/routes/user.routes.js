"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var userCrtl = _interopRequireWildcard(require("../controllers/user.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExisted], userCrtl.createUser);
var _default = router;
exports["default"] = _default;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst isAdmin = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAdmin);\n\n//# sourceURL=webpack://proyecto-final/./src/config/constants.js?");

/***/ }),

/***/ "./src/dataAccess/container.js":
/*!*************************************!*\
  !*** ./src/dataAccess/container.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Container {\n  constructor(filePath) {\n    _defineProperty(this, \"save\", async object => {\n      try {\n        const all = await this.getAll();\n\n        if (!object.id) {\n          const lastObjectAdded = lodash__WEBPACK_IMPORTED_MODULE_1___default().maxBy(all, \"id\");\n\n          if (lastObjectAdded) object.id = (lastObjectAdded.id || 0) + 1;\n        }\n\n        all.push(object);\n        const info = JSON.stringify(all, null, 2);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(this.filePath, info, \"utf-8\");\n        return object;\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"update\", async object => {\n      try {\n        const all = await this.getAll();\n\n        const index = lodash__WEBPACK_IMPORTED_MODULE_1___default().findIndex(all, p => p.id == object.id);\n\n        all[index].title = object.title;\n        all[index].price = object.price;\n        const info = JSON.stringify(all, null, 2);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(this.filePath, info, \"utf-8\");\n        return object;\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"updateCart\", async object => {\n      try {\n        const all = await this.getAll();\n\n        const index = lodash__WEBPACK_IMPORTED_MODULE_1___default().findIndex(all, p => p.id == object.id);\n\n        all[index].products = object.products;\n        const info = JSON.stringify(all, null, 2);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(this.filePath, info, \"utf-8\");\n        return object;\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"getById\", async id => {\n      const all = await this.getAll();\n      return all.find(o => o.id == id);\n    });\n\n    _defineProperty(this, \"getAll\", async () => {\n      try {\n        return JSON.parse((await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.readFile(this.filePath, \"utf-8\")) || \"[]\");\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"deleteById\", async id => {\n      try {\n        const all = await this.getAll();\n        const filteredProducts = all.filter(p => p.id != id);\n        const info = JSON.stringify(filteredProducts, null, 2);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(this.filePath, info, \"utf-8\");\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    _defineProperty(this, \"deleteAll\", async () => {\n      try {\n        const info = JSON.stringify([]);\n        await fs__WEBPACK_IMPORTED_MODULE_0___default().promises.writeFile(this.filePath, info, \"utf-8\");\n      } catch (error) {\n        console.error(error);\n      }\n    });\n\n    this.filePath = filePath;\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);\n\n//# sourceURL=webpack://proyecto-final/./src/dataAccess/container.js?");

/***/ }),

/***/ "./src/routes/cart.js":
/*!****************************!*\
  !*** ./src/routes/cart.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dataAccess_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dataAccess/container */ \"./src/dataAccess/container.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst {\n  Router\n} = (express__WEBPACK_IMPORTED_MODULE_0___default());\nconst router = new Router();\nconst container = new _dataAccess_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"](path__WEBPACK_IMPORTED_MODULE_2__.resolve(__dirname, \"../data\", \"carts.json\"));\nrouter.get(\"/\", async (req, res) => {\n  const carts = await container.getAll();\n  res.json(carts);\n});\nrouter.get(\"/:id\", async (req, res) => {\n  const cart = await container.getById(req.params.id);\n  if (cart) return res.send(cart);else res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n});\nrouter.get(\"/:id/productos\", async (req, res) => {\n  const cart = await container.getById(req.params.id);\n  if (cart) return res.send(cart.products);else res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n});\nrouter.post(\"/\", async (req, res) => {\n  const cart = {\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n    products: []\n  };\n  await container.save(cart);\n  res.status(201).json({\n    id: cart.id\n  });\n});\nrouter.delete(\"/:id\", async (req, res) => {\n  const cart = await container.getById(req.params.id);\n  if (!cart) res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n  container.deleteById(cart.id);\n  res.send(\"carrito eliminado\");\n});\nrouter.post(\"/:id/productos\", async (req, res) => {\n  const cart = await container.getById(req.params.id);\n  if (!cart) res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n\n  if (req.body.products && req.body.products.length) {\n    cart.products = [...cart.products, ...req.body.products];\n    await container.updateCart(cart);\n    res.status(201).json({\n      msg: \"los productos fueron agregados al carrito\"\n    });\n  } else {\n    res.status(400).json({\n      error: \"Debe enviar una lista de productos válida\"\n    });\n  }\n});\nrouter.delete(\"/:id/productos/:id_prod\", async (req, res) => {\n  const cart = await container.getById(req.params.id);\n  if (!cart) res.status(404).json({\n    error: \"carrito no encontrado\"\n  });\n  const product = cart.products.find(p => p.id == req.params.id_prod);\n\n  if (!product) {\n    res.status(404).json({\n      error: \"producto no encontrado en el carrito\"\n    });\n  }\n\n  const filteredProducts = cart.products.filter(p => p.id != req.params.id_prod);\n  cart.products = filteredProducts;\n  await container.updateCart(cart);\n  res.send(\"producto eliminado del carrito\");\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://proyecto-final/./src/routes/cart.js?");

/***/ }),

/***/ "./src/routes/products.js":
/*!********************************!*\
  !*** ./src/routes/products.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dataAccess_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dataAccess/container */ \"./src/dataAccess/container.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst {\n  Router\n} = (express__WEBPACK_IMPORTED_MODULE_0___default());\nconst router = new Router();\nconst container = new _dataAccess_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"](path__WEBPACK_IMPORTED_MODULE_2__.resolve(__dirname, \"../data\", \"products.json\"));\nrouter.get(\"/\", async (req, res) => {\n  const products = await container.getAll();\n  res.json(products);\n});\nrouter.get(\"/:id\", async (req, res) => {\n  const product = await container.getById(req.params.id);\n  if (product) res.send(product);else res.status(404).json({\n    error: \"producto no encontrado\"\n  });\n});\nrouter.post(\"/\", async (req, res) => {\n  if (!_config_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n    return res.status(403).send({\n      error: \"No autorizado\"\n    });\n  }\n\n  if (req.body.title) {\n    const data = _objectSpread({}, req.body);\n\n    const createdProduct = await container.save(data);\n    res.status(201).send(createdProduct);\n  } else res.status(400).send({\n    error: \"debe indicar el nombre del producto\"\n  });\n});\nrouter.put(\"/:id\", async (req, res) => {\n  if (!_config_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n    return res.status(403).send({\n      error: \"No autorizado\"\n    });\n  }\n\n  const product = await container.getById(req.params.id);\n  if (!product) res.status(404).json({\n    error: \"producto no encontrado\"\n  });\n  product.title = req.body.title;\n  product.price = req.body.price;\n  await container.update(product);\n  res.send(\"producto actualizado\");\n});\nrouter.delete(\"/:id\", async (req, res) => {\n  if (!_config_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n    return res.status(403).send({\n      error: \"No autorizado\"\n    });\n  }\n\n  const product = await container.getById(req.params.id);\n  if (!product) res.status(404).json({\n    error: \"producto no encontrado\"\n  });\n  container.deleteById(product.id);\n  res.send(\"producto eliminado\");\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://proyecto-final/./src/routes/products.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/products */ \"./src/routes/products.js\");\n/* harmony import */ var _routes_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/cart */ \"./src/routes/cart.js\");\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst port = process.env.PORT || 8080;\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"public\"));\napp.use(\"/api/carritos\", _routes_cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.use(\"/api/productos\", _routes_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.listen(port, () => {\n  console.log(`\"server is running on port ${port}`);\n});\n\n//# sourceURL=webpack://proyecto-final/./src/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.js");
/******/ 	
/******/ })()
;
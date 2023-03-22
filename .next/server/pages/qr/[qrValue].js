"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/qr/[qrValue]";
exports.ids = ["pages/qr/[qrValue]"];
exports.modules = {

/***/ "./src/pages/qr/[qrValue].tsx":
/*!************************************!*\
  !*** ./src/pages/qr/[qrValue].tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-qrcode-logo */ \"react-qrcode-logo\");\n/* harmony import */ var react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst sizeVar = 1;\nfunction Home() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { qrValue  } = router.query;\n    if (!qrValue || Array.isArray(qrValue)) {\n        return null;\n    }\n    const size = Math.max(200, qrValue.length * sizeVar);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold my-10\",\n                    children: qrValue\n                }, void 0, false, {\n                    fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/qr/[qrValue].tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inline-block\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2__.QRCode, {\n                        size: size,\n                        value: qrValue,\n                        bgColor: \"black\",\n                        fgColor: \"white\",\n                        logoImage: \"/favicon.ico\",\n                        logoPadding: 10,\n                        removeQrCodeBehindLogo: true\n                    }, void 0, false, {\n                        fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/qr/[qrValue].tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/qr/[qrValue].tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/qr/[qrValue].tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcXIvW3FyVmFsdWVdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNHO0FBRTNDLE1BQU1FLFVBQVU7QUFFRCxTQUFTQyxPQUFPO0lBQzdCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVLLFFBQU8sRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRWhDLElBQUksQ0FBQ0QsV0FBV0UsTUFBTUMsT0FBTyxDQUFDSCxVQUFVO1FBQ3RDLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxNQUFNSSxPQUFPQyxLQUFLQyxHQUFHLENBQUMsS0FBS04sUUFBUU8sTUFBTSxHQUFHVjtJQUU1QyxxQkFDRTtrQkFDRSw0RUFBQ1c7WUFBS0MsV0FBVTs7OEJBQ2QsOERBQUNDO29CQUFHRCxXQUFVOzhCQUE0QlQ7Ozs7Ozs4QkFDMUMsOERBQUNXO29CQUFJRixXQUFVOzhCQUNiLDRFQUFDYixxREFBTUE7d0JBQ0xRLE1BQU1BO3dCQUNOUSxPQUFPWjt3QkFDUGEsU0FBUTt3QkFDUkMsU0FBUTt3QkFDUkMsV0FBVTt3QkFDVkMsYUFBYTt3QkFDYkMsd0JBQXdCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC8uL3NyYy9wYWdlcy9xci9bcXJWYWx1ZV0udHN4P2Q1ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBRUkNvZGUgfSBmcm9tIFwicmVhY3QtcXJjb2RlLWxvZ29cIjtcblxuY29uc3Qgc2l6ZVZhciA9IDE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHFyVmFsdWUgfSA9IHJvdXRlci5xdWVyeTtcblxuICBpZiAoIXFyVmFsdWUgfHwgQXJyYXkuaXNBcnJheShxclZhbHVlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgc2l6ZSA9IE1hdGgubWF4KDIwMCwgcXJWYWx1ZS5sZW5ndGggKiBzaXplVmFyKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG15LTEwXCI+e3FyVmFsdWV9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICA8UVJDb2RlXG4gICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgdmFsdWU9e3FyVmFsdWV9XG4gICAgICAgICAgICBiZ0NvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgZmdDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGxvZ29JbWFnZT1cIi9mYXZpY29uLmljb1wiXG4gICAgICAgICAgICBsb2dvUGFkZGluZz17MTB9XG4gICAgICAgICAgICByZW1vdmVRckNvZGVCZWhpbmRMb2dvPXt0cnVlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlFSQ29kZSIsInNpemVWYXIiLCJIb21lIiwicm91dGVyIiwicXJWYWx1ZSIsInF1ZXJ5IiwiQXJyYXkiLCJpc0FycmF5Iiwic2l6ZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJkaXYiLCJ2YWx1ZSIsImJnQ29sb3IiLCJmZ0NvbG9yIiwibG9nb0ltYWdlIiwibG9nb1BhZGRpbmciLCJyZW1vdmVRckNvZGVCZWhpbmRMb2dvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/qr/[qrValue].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react-qrcode-logo":
/*!************************************!*\
  !*** external "react-qrcode-logo" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react-qrcode-logo");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/qr/[qrValue].tsx"));
module.exports = __webpack_exports__;

})();
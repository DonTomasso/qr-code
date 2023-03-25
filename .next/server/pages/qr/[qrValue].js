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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-qrcode-logo */ \"react-qrcode-logo\");\n/* harmony import */ var react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst sizeVar = 1;\nfunction Home() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { qrValue  } = router.query;\n    if (!qrValue || Array.isArray(qrValue)) {\n        return null;\n    }\n    const size = Math.max(200, qrValue.length * sizeVar);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold my-10\",\n                    children: qrValue\n                }, void 0, false, {\n                    fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/qr/[qrValue].tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inline-block\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qrcode_logo__WEBPACK_IMPORTED_MODULE_2__.QRCode, {\n                        size: size,\n                        value: qrValue,\n                        bgColor: \"black\",\n                        fgColor: \"white\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/qr/[qrValue].tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/qr/[qrValue].tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/qr/[qrValue].tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcXIvW3FyVmFsdWVdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNHO0FBRTNDLE1BQU1FLFVBQVU7QUFFRCxTQUFTQyxPQUFPO0lBQzdCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVLLFFBQU8sRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRWhDLElBQUksQ0FBQ0QsV0FBV0UsTUFBTUMsT0FBTyxDQUFDSCxVQUFVO1FBQ3RDLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxNQUFNSSxPQUFPQyxLQUFLQyxHQUFHLENBQUMsS0FBS04sUUFBUU8sTUFBTSxHQUFHVjtJQUU1QyxxQkFDRTtrQkFDRSw0RUFBQ1c7WUFBS0MsV0FBVTs7OEJBQ2QsOERBQUNDO29CQUFHRCxXQUFVOzhCQUE0QlQ7Ozs7Ozs4QkFDMUMsOERBQUNXO29CQUFJRixXQUFVOzhCQUNiLDRFQUFDYixxREFBTUE7d0JBQUNRLE1BQU1BO3dCQUFNUSxPQUFPWjt3QkFBU2EsU0FBUTt3QkFBUUMsU0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL3BhZ2VzL3FyL1txclZhbHVlXS50c3g/ZDVmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFFSQ29kZSB9IGZyb20gXCJyZWFjdC1xcmNvZGUtbG9nb1wiO1xuXG5jb25zdCBzaXplVmFyID0gMTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcXJWYWx1ZSB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGlmICghcXJWYWx1ZSB8fCBBcnJheS5pc0FycmF5KHFyVmFsdWUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBzaXplID0gTWF0aC5tYXgoMjAwLCBxclZhbHVlLmxlbmd0aCAqIHNpemVWYXIpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbXktMTBcIj57cXJWYWx1ZX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxuICAgICAgICAgIDxRUkNvZGUgc2l6ZT17c2l6ZX0gdmFsdWU9e3FyVmFsdWV9IGJnQ29sb3I9XCJibGFja1wiIGZnQ29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlFSQ29kZSIsInNpemVWYXIiLCJIb21lIiwicm91dGVyIiwicXJWYWx1ZSIsInF1ZXJ5IiwiQXJyYXkiLCJpc0FycmF5Iiwic2l6ZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJkaXYiLCJ2YWx1ZSIsImJnQ29sb3IiLCJmZ0NvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/qr/[qrValue].tsx\n");

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
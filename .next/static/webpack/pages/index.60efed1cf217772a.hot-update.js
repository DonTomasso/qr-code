"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/.pnpm/next@13.2.4_biqbaboplfbrettd7655fr4n2y/node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/.pnpm/next@13.2.4_biqbaboplfbrettd7655fr4n2y/node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [qrValue, setQrValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Don Tomasso QR Code\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generera QR-koder\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (evt)=>{\n                    evt.preventDefault();\n                    if (!qrValue) return;\n                    router.push(\"/qr/\".concat(encodeURIComponent(qrValue)));\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center max-w-md mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"qr-value\",\n                            className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                            children: \"V\\xe4rde att generera QR f\\xf6r\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: qrValue,\n                            id: \"qr-value\",\n                            onChange: (evt)=>{\n                                setQrValue(evt.target.value);\n                            },\n                            className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-align: center\",\n                            placeholder: \"t ex. http://dontomasso.com\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tomastunstrom/private/qr-code/src/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"QfKehBxqqHPqJLMCt4dQtQIxvRc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFDUDtBQUVsQixTQUFTRyxPQUFPOztJQUM3QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQVM7SUFDL0MsTUFBTUksU0FBU0wsc0RBQVNBO0lBRXhCLHFCQUNFOzswQkFDRSw4REFBQ0Qsa0RBQUlBOztrQ0FDSCw4REFBQ087a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRWhDLDhEQUFDQztnQkFDQ0MsVUFBVSxDQUFDQyxNQUFRO29CQUNqQkEsSUFBSUMsY0FBYztvQkFDbEIsSUFBSSxDQUFDVixTQUFTO29CQUNkRSxPQUFPUyxJQUFJLENBQUMsT0FBbUMsT0FBNUJDLG1CQUFtQlo7Z0JBQ3hDOzBCQUVBLDRFQUFDYTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUNDQyxTQUFROzRCQUNSRixXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNHOzRCQUNDQyxNQUFLOzRCQUNMQyxPQUFPbkI7NEJBQ1BvQixJQUFHOzRCQUNIQyxVQUFVLENBQUNaLE1BQVE7Z0NBQ2pCUixXQUFXUSxJQUFJYSxNQUFNLENBQUNILEtBQUs7NEJBQzdCOzRCQUNBTCxXQUFVOzRCQUNWUyxhQUFZOzRCQUNaQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCLENBQUM7R0F4Q3VCekI7O1FBRVBGLGtEQUFTQTs7O0tBRkZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtxclZhbHVlLCBzZXRRclZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RG9uIFRvbWFzc28gUVIgQ29kZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmVyYSBRUi1rb2RlclwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17KGV2dCkgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGlmICghcXJWYWx1ZSkgcmV0dXJuO1xuICAgICAgICAgIHJvdXRlci5wdXNoKGAvcXIvJHtlbmNvZGVVUklDb21wb25lbnQocXJWYWx1ZSl9YCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWF4LXctbWQgbXgtYXV0b1wiPlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj1cInFyLXZhbHVlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVsOkcmRlIGF0dCBnZW5lcmVyYSBRUiBmw7ZyXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtxclZhbHVlfVxuICAgICAgICAgICAgaWQ9XCJxci12YWx1ZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge1xuICAgICAgICAgICAgICBzZXRRclZhbHVlKGV2dC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAgdGV4dC1hbGlnbjogY2VudGVyXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidCBleC4gaHR0cDovL2RvbnRvbWFzc28uY29tXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiSG9tZSIsInFyVmFsdWUiLCJzZXRRclZhbHVlIiwicm91dGVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJmb3JtIiwib25TdWJtaXQiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsImlkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});
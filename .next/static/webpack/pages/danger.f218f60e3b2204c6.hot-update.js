"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/danger",{

/***/ "./components/DangerItem.tsx":
/*!***********************************!*\
  !*** ./components/DangerItem.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DangerItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_DangerItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/DangerItem.module.scss */ \"./styles/DangerItem.module.scss\");\n/* harmony import */ var _styles_DangerItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_DangerItem_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction DangerItem(param) {\n    let { params } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_DangerItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: params.img,\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"D:\\\\studying\\\\mir-vracha\\\\project\\\\components\\\\DangerItem.tsx\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_DangerItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default().percent) + \" \" + (_styles_DangerItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default().bold),\n                children: params.percent\n            }, void 0, false, {\n                fileName: \"D:\\\\studying\\\\mir-vracha\\\\project\\\\components\\\\DangerItem.tsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_DangerItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),\n                children: [\n                    \"пациентов с\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_DangerItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default().bold),\n                        children: params\n                    }, void 0, false, {\n                        fileName: \"D:\\\\studying\\\\mir-vracha\\\\project\\\\components\\\\DangerItem.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\studying\\\\mir-vracha\\\\project\\\\components\\\\DangerItem.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\studying\\\\mir-vracha\\\\project\\\\components\\\\DangerItem.tsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = DangerItem;\nvar _c;\n$RefreshReg$(_c, \"DangerItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhbmdlckl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxRDtBQUV0QyxTQUFTQyxXQUFXLEtBQVE7UUFBUixFQUFDQyxNQUFNLEVBQUMsR0FBUjtJQUMvQixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV0osK0VBQWM7OzBCQUMxQiw4REFBQ007Z0JBQUlDLEtBQUtMLE9BQU9JLEdBQUc7Z0JBQUVFLEtBQUk7Ozs7OzswQkFDMUIsOERBQUNMO2dCQUFJQyxXQUFXSiwrRUFBYyxHQUFHLE1BQU1BLDRFQUFXOzBCQUM3Q0UsT0FBT08sT0FBTzs7Ozs7OzBCQUVuQiw4REFBQ047Z0JBQUlDLFdBQVdKLDZFQUFZOztvQkFBRTtrQ0FFMUIsOERBQUNZO3dCQUFLUixXQUFXSiw0RUFBVztrQ0FDdkJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7S0Fmd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGFuZ2VySXRlbS50c3g/NDdmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9EYW5nZXJJdGVtLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFuZ2VySXRlbSh7cGFyYW1zfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cGFyYW1zLmltZ30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wZXJjZW50ICsgJyAnICsgc3R5bGVzLmJvbGR9PlxyXG4gICAgICAgICAgICAgICAge3BhcmFtcy5wZXJjZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICDQv9Cw0YbQuNC10L3RgtC+0LIg0YFcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYXJhbXN9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkRhbmdlckl0ZW0iLCJwYXJhbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwiaW1nIiwic3JjIiwiYWx0IiwicGVyY2VudCIsImJvbGQiLCJ0aXRsZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DangerItem.tsx\n"));

/***/ })

});
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

/***/ "./components/Scheme/DirectionsItem.tsx":
/*!**********************************************!*\
  !*** ./components/Scheme/DirectionsItem.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DirectionsItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Scheme_DirectionsItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Scheme/DirectionsItem.module.scss */ \"./styles/Scheme/DirectionsItem.module.scss\");\n/* harmony import */ var _styles_Scheme_DirectionsItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Scheme_DirectionsItem_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction DirectionsItem(param) {\n    let { children, params } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Scheme_DirectionsItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default().directions__item),\n        children: [\n            params.hasImg && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Scheme_DirectionsItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default().item__icon),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Scheme_DirectionsItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default().icon__text),\n                        children: params.id\n                    }, void 0, false, {\n                        fileName: \"D:\\\\studying\\\\mir-vracha\\\\project\\\\components\\\\Scheme\\\\DirectionsItem.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_Scheme_DirectionsItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default().icon__image),\n                        src: \"/inhaler.svg\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\studying\\\\mir-vracha\\\\project\\\\components\\\\Scheme\\\\DirectionsItem.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\studying\\\\mir-vracha\\\\project\\\\components\\\\Scheme\\\\DirectionsItem.tsx\",\n                lineNumber: 7,\n                columnNumber: 17\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\studying\\\\mir-vracha\\\\project\\\\components\\\\Scheme\\\\DirectionsItem.tsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = DirectionsItem;\nvar _c;\n$RefreshReg$(_c, \"DirectionsItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NjaGVtZS9EaXJlY3Rpb25zSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1FO0FBRXBELFNBQVNDLGVBQWUsS0FBa0I7UUFBbEIsRUFBQ0MsUUFBUSxFQUFFQyxNQUFNLEVBQUMsR0FBbEI7SUFDbkMscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVdMLG1HQUF1Qjs7WUFDbENHLE9BQU9JLE1BQU0sa0JBQ1YsOERBQUNIO2dCQUFJQyxXQUFXTCw2RkFBaUI7O2tDQUM3Qiw4REFBQ0k7d0JBQUlDLFdBQVdMLDZGQUFpQjtrQ0FBR0csT0FBT08sRUFBRTs7Ozs7O2tDQUM3Qyw4REFBQ0M7d0JBQUlOLFdBQVdMLDhGQUFrQjt3QkFBRWEsS0FBSTt3QkFBZUMsS0FBSTs7Ozs7Ozs7Ozs7O1lBR2xFWjs7Ozs7OztBQUdiO0tBWndCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NjaGVtZS9EaXJlY3Rpb25zSXRlbS50c3g/NDk0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9TY2hlbWUvRGlyZWN0aW9uc0l0ZW0ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXJlY3Rpb25zSXRlbSh7Y2hpbGRyZW4sIHBhcmFtc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXJlY3Rpb25zX19pdGVtfT5cclxuICAgICAgICAgICAge3BhcmFtcy5oYXNJbWcgJiYgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1fX2ljb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbl9fdGV4dH0+e3BhcmFtcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb25fX2ltYWdlfSBzcmM9XCIvaW5oYWxlci5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkRpcmVjdGlvbnNJdGVtIiwiY2hpbGRyZW4iLCJwYXJhbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJkaXJlY3Rpb25zX19pdGVtIiwiaGFzSW1nIiwiaXRlbV9faWNvbiIsImljb25fX3RleHQiLCJpZCIsImltZyIsImljb25fX2ltYWdlIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Scheme/DirectionsItem.tsx\n"));

/***/ })

});
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n\n\n//server\n//first page we show when the address is called\n//it looks for pages and index.js to start with\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar CampaignIndex = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(CampaignIndex, Component1);\n    var _super = _createSuper(CampaignIndex);\n    function CampaignIndex() {\n        _classCallCheck(this, CampaignIndex);\n        return _super.apply(this, arguments);\n    }\n    _createClass(CampaignIndex, [\n        {\n            key: \"renderCampaigns\",\n            value: function renderCampaigns() {\n                var _this = this;\n                // pass a func, \n                var items = this.props.campaigns.map(function(address) {\n                    return {\n                        header: address,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            children: \"View Campaign\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/pages/index.js\",\n                            lineNumber: 24,\n                            columnNumber: 30\n                        }, _this),\n                        fluid: true\n                    };\n                });\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 16\n                }, this));\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                // after that send to browser\n                return;\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                            async: true,\n                            rel: \"stylesheet\",\n                            href: \"https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/pages/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, this),\n                        this.renderCampaigns(),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            content: \"Create Campaign\",\n                            icon: \"add circle\",\n                            primary: true\n                        }, void 0, false, {\n                            fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, this);\n            // then translated by next to HTML for the browser\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: //next use this to fetch in server side\n            // before everything is done\n            // show on browser - so if js is turned off on the browser\n            //we can again fetch the data from the server\n            // because all the js stuff is happening in the server not the browser like before\n            function getInitialProps() {\n                return _asyncToGenerator(_Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var campaigns;\n                    return _Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedCampaigns().call();\n                            case 2:\n                                campaigns = _ctx.sent;\n                                return _ctx.abrupt(\"return\", {\n                                    campaigns: campaigns\n                                });\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n// react has to see the export\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEVBQVE7QUFDUixFQUErQztBQUMvQyxFQUErQztBQUNUO0FBQ1c7QUFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuQ0ssYUFBYSxpQkFBbkIsUUFBUTs7OzthQUFGQSxhQUFhOzs7Ozs7WUFXZkMsR0FBZSxFQUFmQSxDQUFlO21CQUFmQSxRQUFRLENBQVJBLGVBQWUsR0FBRyxDQUFDOztnQkFDZixFQUFnQjtnQkFDaEIsR0FBSyxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLE9BQU8sRUFBSSxDQUFDO29CQUMvQyxNQUFNLENBQUMsQ0FBQzt3QkFDSkMsTUFBTSxFQUFFRCxPQUFPO3dCQUNmRSxXQUFXLDhFQUFHQyxDQUFDO3NDQUFDLENBQWE7Ozs7Ozt3QkFDN0JDLEtBQUssRUFBRSxJQUFJO29CQUNmLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxNQUFNLDZFQUFFYix5REFBVTtvQkFBQ0ssS0FBSyxFQUFFQSxLQUFLOzs7Ozs7WUFDbkMsQ0FBQzs7O1lBRURVLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUcsQ0FBQztnQkFDTixFQUE2QjtnQkFDN0IsTUFBTTs0RkFDREMsQ0FBRzs7b0dBQ0RDLENBQUk7NEJBQUNDLEtBQUs7NEJBQUNDLEdBQUcsRUFBQyxDQUFZOzRCQUFDQyxJQUFJLEVBQUMsQ0FBa0U7Ozs7Ozt3QkFDakcsSUFBSSxDQUFDaEIsZUFBZTtvR0FDcEJILHFEQUFNOzRCQUNIb0IsT0FBTyxFQUFDLENBQWlCOzRCQUM3QkMsSUFBSSxFQUFDLENBQVk7NEJBQ2pCQyxPQUFPLEVBQUUsSUFBSTs7Ozs7Ozs7Ozs7O1lBR3JCLEVBQWtEO1lBQ3RELENBQUM7Ozs7WUE5QllDLEdBQWUsRUFBZkEsQ0FBZTttQkFMNUIsRUFBdUM7WUFDdkMsRUFBNEI7WUFDNUIsRUFBMEQ7WUFDMUQsRUFBNkM7WUFDN0MsRUFBa0Y7WUFDbEYsUUFBUSxDQUFLQSxlQUFlO3VNQUE1QixRQUFRLFdBQXNCLENBQUM7d0JBQ3JCakIsU0FBUzs7Ozs7dUNBQVNMLHNGQUFvQyxHQUFHeUIsSUFBSTs7Z0NBQTdEcEIsU0FBUzs2REFDUixDQUFDO29DQUFDQSxTQUFTLEVBQVRBLFNBQVM7Z0NBQUMsQ0FBQzs7Ozs7O2dCQUN4QixDQUFDOzs7OztFQVR1QlIsNENBQVM7QUF1Q3JDLEVBQThCO0FBQzlCLCtEQUFlSSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3NlcnZlclxuLy9maXJzdCBwYWdlIHdlIHNob3cgd2hlbiB0aGUgYWRkcmVzcyBpcyBjYWxsZWRcbi8vaXQgbG9va3MgZm9yIHBhZ2VzIGFuZCBpbmRleC5qcyB0byBzdGFydCB3aXRoXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiAgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5J1xuXG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvL25leHQgdXNlIHRoaXMgdG8gZmV0Y2ggaW4gc2VydmVyIHNpZGVcbiAgICAvLyBiZWZvcmUgZXZlcnl0aGluZyBpcyBkb25lXG4gICAgLy8gc2hvdyBvbiBicm93c2VyIC0gc28gaWYganMgaXMgdHVybmVkIG9mZiBvbiB0aGUgYnJvd3NlclxuICAgIC8vd2UgY2FuIGFnYWluIGZldGNoIHRoZSBkYXRhIGZyb20gdGhlIHNlcnZlclxuICAgIC8vIGJlY2F1c2UgYWxsIHRoZSBqcyBzdHVmZiBpcyBoYXBwZW5pbmcgaW4gdGhlIHNlcnZlciBub3QgdGhlIGJyb3dzZXIgbGlrZSBiZWZvcmVcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XG4gICAgICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcbiAgICAgICAgcmV0dXJuIHsgY2FtcGFpZ25zIH07XG4gICAgfVxuXG4gICAgcmVuZGVyQ2FtcGFpZ25zKCkge1xuICAgICAgICAvLyBwYXNzIGEgZnVuYywgXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5jYW1wYWlnbnMubWFwKGFkZHJlc3MgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgQ2FtcGFpZ248L2E+LFxuICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30vPlxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gYWZ0ZXIgdGhhdCBzZW5kIHRvIGJyb3dzZXJcbiAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxpbmsgYXN5bmMgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCIvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhbXBhaWducygpfVxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkNyZWF0ZSBDYW1wYWlnblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImFkZCBjaXJjbGVcIlxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vIHRoZW4gdHJhbnNsYXRlZCBieSBuZXh0IHRvIEhUTUwgZm9yIHRoZSBicm93c2VyXG4gICAgfVxufVxuXG4vLyByZWFjdCBoYXMgdG8gc2VlIHRoZSBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7ICAgICAgICJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiQ2FtcGFpZ25JbmRleCIsInJlbmRlckNhbXBhaWducyIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJhIiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsImRpdiIsImxpbmsiLCJhc3luYyIsInJlbCIsImhyZWYiLCJjb250ZW50IiwiaWNvbiIsInByaW1hcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
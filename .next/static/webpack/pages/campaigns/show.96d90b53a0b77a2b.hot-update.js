"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar ContributeForm = // balance reported is in ether! because we want them to pay in ether\n// instead of 10^5 ether\n/*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(ContributeForm, Component1);\n    var _super = _createSuper(ContributeForm);\n    function ContributeForm() {\n        _classCallCheck(this, ContributeForm);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), // get the address from the url and communicate it down with ContributeForm\n        \"state\", {\n            value: '',\n            errorMessage: '',\n            loading: false\n        });\n        var _this1 = _assertThisInitialized(_this);\n        _defineProperty(_assertThisInitialized(_this), // event is an object used to call the function\n        \"onSubmit\", function() {\n            var _ref = _asyncToGenerator(_Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n                var campaign, accounts;\n                return _Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            event.preventDefault();\n                            campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this1.props.address);\n                            _this1.stetState({\n                                loading: true\n                            });\n                            _ctx.prev = 3;\n                            _ctx.next = 6;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n                        case 6:\n                            accounts = _ctx.sent;\n                            _ctx.next = 9;\n                            return campaign.methods.contribute().send({\n                                from: accounts[0],\n                                value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].utils.toWei(_this1.state.value, 'ether')\n                            });\n                        case 9:\n                            //without user getting back and see the same page\n                            _routes__WEBPACK_IMPORTED_MODULE_5__.Router.replaceRoute(\"/campaigns/\".concat(_this1.props.address));\n                            _ctx.next = 15;\n                            break;\n                        case 12:\n                            _ctx.prev = 12;\n                            _ctx.t0 = _ctx[\"catch\"](3);\n                            _this1.setState({\n                                errorMessage: _ctx.t0.message\n                            });\n                        case 15:\n                            // spin stops\n                            _this1.setState({\n                                loading: false,\n                                value: ''\n                            });\n                        case 16:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        3,\n                        12\n                    ]\n                ]);\n            }));\n            return function(event) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        return _this;\n    }\n    _createClass(ContributeForm, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: this.onSubmit,\n                    error: !!this.state.er,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    children: \"Amount to Contribute\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/components/ContributeForm.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                    value: this.state.value,\n                                    onChange: function(event) {\n                                        return _this.setState({\n                                            value: event.target.value\n                                        });\n                                    },\n                                    label: \"ether\",\n                                    labelPosition: \"right\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/components/ContributeForm.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/components/ContributeForm.js\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            primary: true,\n                            loading: this.state.loading,\n                            children: \"Contribute!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/components/ContributeForm.js\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/components/ContributeForm.js\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, this));\n            }\n        }\n    ]);\n    return ContributeForm;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ3NCO0FBQ25CO0FBQ1I7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHMUJTLGNBQWMsR0FGcEIsRUFBcUU7QUFDckUsRUFBd0I7Y0FDeEIsUUFBUTs7OzthQUFGQSxjQUFjOzs7O3VEQUNoQixFQUEyRTtRQUMzRUMsQ0FBSyxRQUFHLENBQUM7WUFDTEMsS0FBSyxFQUFFLENBQUU7WUFDVEMsWUFBWSxFQUFFLENBQUU7WUFDaEJDLE9BQU8sRUFBRSxLQUFLO1FBQ2xCLENBQUM7O3VEQUVELEVBQStDO1FBQy9DQyxDQUFRO3VNQUFHLFFBQVEsU0FBRkMsS0FBSyxFQUFJLENBQUM7b0JBRWpCQyxRQUFRLEVBR0pDLFFBQVE7Ozs7NEJBSmxCRixLQUFLLENBQUNHLGNBQWM7NEJBQ2RGLFFBQVEsR0FBR1YsOERBQVEsUUFBTWEsS0FBSyxDQUFDQyxPQUFPO21DQUN2Q0MsU0FBUyxDQUFDLENBQUNSO2dDQUFBQSxPQUFPLEVBQUMsSUFBSTs0QkFBQSxDQUFDOzs7bUNBRUZOLHNFQUFvQjs7NEJBQXJDVSxRQUFROzttQ0FDUkQsUUFBUSxDQUFDUSxPQUFPLENBQUNDLFVBQVUsR0FBR0MsSUFBSSxDQUFDLENBQUM7Z0NBQ3RDQyxJQUFJLEVBQUVWLFFBQVEsQ0FBQyxDQUFDO2dDQUNoQk4sS0FBSyxFQUFFSixrRUFBZ0IsUUFBTUcsS0FBSyxDQUFDQyxLQUFLLEVBQUUsQ0FBTzs0QkFDckQsQ0FBQzs7NEJBRUQsRUFBaUQ7NEJBQ2pESCx3REFBbUIsQ0FBRSxDQUFXLGFBQXFCLGNBQWRXLEtBQUssQ0FBQ0MsT0FBTzs7Ozs7O21DQUUvQ1csUUFBUSxDQUFDLENBQUM7Z0NBQUNuQixZQUFZLFVBQU1vQixPQUFPOzRCQUFDLENBQUM7OzRCQUUvQyxFQUFhO21DQUNSRCxRQUFRLENBQUMsQ0FBQztnQ0FBQ2xCLE9BQU8sRUFBRSxLQUFLO2dDQUFFRixLQUFLLEVBQUUsQ0FBRTs0QkFBQSxDQUFDOzs7Ozs7Ozs7OztZQUM5QyxDQUFDOzRCQWxCZ0JJLEtBQUs7Ozs7Ozs7O1lBbUJ0QmtCLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUksQ0FBQzs7Z0JBQ1AsTUFBTSw2RUFDRC9CLG1EQUFJO29CQUFDWSxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRO29CQUFFb0IsS0FBSyxJQUFJLElBQUksQ0FBQ3hCLEtBQUssQ0FBQ3lCLEVBQUU7O29HQUNoRGpDLHlEQUFVOzs0R0FDTm1DLENBQUs7OENBQUMsQ0FBb0I7Ozs7Ozs0R0FDdEJsQyxvREFBSztvQ0FDRlEsS0FBSyxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLO29DQUN2QjJCLFFBQVEsRUFBRXZCLFFBQVEsQ0FBUkEsS0FBSzt3Q0FBRSxNQUFNLE9BQURnQixRQUFRLENBQUMsQ0FBQzs0Q0FBQ3BCLEtBQUssRUFBRUksS0FBSyxDQUFDd0IsTUFBTSxDQUFDNUIsS0FBSzt3Q0FBQyxDQUFDOztvQ0FDNUQwQixLQUFLLEVBQUMsQ0FBTztvQ0FDYkcsYUFBYSxFQUFDLENBQU87Ozs7Ozs7Ozs7OztvR0FHaENuQyxxREFBTTs0QkFBQ29DLE9BQU87NEJBQUM1QixPQUFPLEVBQUUsSUFBSSxDQUFDSCxLQUFLLENBQUNHLE9BQU87c0NBQUUsQ0FFN0M7Ozs7Ozs7Ozs7OztZQUdaLENBQUM7Ozs7RUE3Q3dCWiw0Q0FBUztBQWdEdEMsK0RBQWVRLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzP2UwNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rm9ybSwgSW5wdXQsIE1lc3NhZ2UsIEJ1dHRvbiB9ZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4uL3JvdXRlcyc7XG4vLyBiYWxhbmNlIHJlcG9ydGVkIGlzIGluIGV0aGVyISBiZWNhdXNlIHdlIHdhbnQgdGhlbSB0byBwYXkgaW4gZXRoZXJcbi8vIGluc3RlYWQgb2YgMTBeNSBldGhlclxuY2xhc3MgQ29udHJpYnV0ZUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8vIGdldCB0aGUgYWRkcmVzcyBmcm9tIHRoZSB1cmwgYW5kIGNvbW11bmljYXRlIGl0IGRvd24gd2l0aCBDb250cmlidXRlRm9ybVxuICAgIHN0YXRlID0ge1xuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIC8vIGV2ZW50IGlzIGFuIG9iamVjdCB1c2VkIHRvIGNhbGwgdGhlIGZ1bmN0aW9uXG4gICAgb25TdWJtaXQgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcbiAgICAgICAgdGhpcy5zdGV0U3RhdGUoe2xvYWRpbmc6dHJ1ZX0pXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmNvbnRyaWJ1dGUoKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLnZhbHVlLCAnZXRoZXInKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vd2l0aG91dCB1c2VyIGdldHRpbmcgYmFjayBhbmQgc2VlIHRoZSBzYW1lIHBhZ2VcbiAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YClcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzcGluIHN0b3BzXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgdmFsdWU6ICcnfSlcbiAgICB9O1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcn0+XG4gICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BbW91bnQgdG8gQ29udHJpYnV0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50PT50aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV0aGVyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj0ncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgQ29udHJpYnV0ZSFcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGVGb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJDYW1wYWlnbiIsIndlYjMiLCJSb3V0ZXIiLCJDb250cmlidXRlRm9ybSIsInN0YXRlIiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsImNhbXBhaWduIiwiYWNjb3VudHMiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInN0ZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJzZXRTdGF0ZSIsIm1lc3NhZ2UiLCJyZW5kZXIiLCJlcnJvciIsImVyIiwiRmllbGQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWxQb3NpdGlvbiIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n");

/***/ })

});
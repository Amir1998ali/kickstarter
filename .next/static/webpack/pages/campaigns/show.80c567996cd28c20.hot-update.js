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

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ContributeForm */ \"./components/ContributeForm.js\");\n\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar CampaignShow = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(CampaignShow, Component1);\n    var _super = _createSuper(CampaignShow);\n    function CampaignShow() {\n        _classCallCheck(this, CampaignShow);\n        return _super.apply(this, arguments);\n    }\n    _createClass(CampaignShow, [\n        {\n            key: \"renderCards\",\n            value: function renderCards() {\n                var _props = this.props, balance = _props.balance, manager = _props.manager, minimumContribution = _props.minimumContribution, requestsCount = _props.requestsCount, approversCount = _props.approversCount;\n                var items = [\n                    {\n                        header: manager,\n                        meta: 'Address of Manager',\n                        description: 'The manager created this campaign and can create requests to withdraw money',\n                        style: {\n                            overflowWrap: 'break-word'\n                        }\n                    },\n                    {\n                        header: minimumContribution,\n                        meta: 'Minimum Contribution (wei)',\n                        description: 'You must contribute at least this much wei to become an approver'\n                    },\n                    {\n                        header: requestsCount,\n                        meta: 'Number of Requests',\n                        description: 'A request tries to withdraw money from the contract. Request must be approved by approvers'\n                    },\n                    {\n                        header: approversCount,\n                        meta: 'Number of Approvers',\n                        description: 'Number of people who have already donated to this campaign'\n                    },\n                    {\n                        header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].utils.fromWei(balance, 'ether'),\n                        meta: 'Campaign Balance (ether)',\n                        description: 'The balance is how much money this campaign has left to spend'\n                    }\n                ];\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/pages/campaigns/show.js\",\n                    lineNumber: 60,\n                    columnNumber: 14\n                }, this));\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Campaign Show\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/pages/campaigns/show.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, this),\n                        this.renderCards(),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/pages/campaigns/show.js\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mohseniamirali/Desktop/Blockchain/kickstart/pages/campaigns/show.js\",\n                    lineNumber: 64,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return _asyncToGenerator(_Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var campaign, summary;\n                    return _Users_mohseniamirali_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(props.query.address);\n                                _ctx.next = 3;\n                                return campaign.methods.getSummary().call();\n                            case 3:\n                                summary = _ctx.sent;\n                                return _ctx.abrupt(\"return\", {\n                                    minimumContribution: summary[0],\n                                    balance: summary[1],\n                                    requestsCount: summary[2],\n                                    approversCount: summary[3],\n                                    manager: summary[4]\n                                });\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return CampaignShow;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNBO0FBQ0k7QUFDRTtBQUNSO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ3RETyxZQUFZLGlCQUFsQixRQUFROzs7O2FBQUZBLFlBQVk7Ozs7OztZQWVoQkMsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsR0FBSSxDQUFDO2dCQUVaLEdBQUssQ0FNRCxNQUFVLEdBQVYsSUFBSSxDQUFDQyxLQUFLLEVBTFZDLE9BQU8sR0FLUCxNQUFVLENBTFZBLE9BQU8sRUFDUEMsT0FBTyxHQUlQLE1BQVUsQ0FKVkEsT0FBTyxFQUNQQyxtQkFBbUIsR0FHbkIsTUFBVSxDQUhWQSxtQkFBbUIsRUFDbkJDLGFBQWEsR0FFYixNQUFVLENBRlZBLGFBQWEsRUFDYkMsY0FBYyxHQUNkLE1BQVUsQ0FEVkEsY0FBYztnQkFHbEIsR0FBSyxDQUFDQyxLQUFLLEdBQUcsQ0FBQztvQkFBQSxDQUFDO3dCQUNWQyxNQUFNLEVBQUVMLE9BQU87d0JBQ2ZNLElBQUksRUFBQyxDQUFvQjt3QkFDekJDLFdBQVcsRUFBRSxDQUE2RTt3QkFDMUZDLEtBQUssRUFBRSxDQUFDOzRCQUFDQyxZQUFZLEVBQUUsQ0FBWTt3QkFBQSxDQUFDO29CQUN4QyxDQUFDO29CQUNELENBQUM7d0JBQ0dKLE1BQU0sRUFBRUosbUJBQW1CO3dCQUMzQkssSUFBSSxFQUFFLENBQTRCO3dCQUNsQ0MsV0FBVyxFQUFFLENBQWtFO29CQUNuRixDQUFDO29CQUNELENBQUM7d0JBQ0dGLE1BQU0sRUFBRUgsYUFBYTt3QkFDckJJLElBQUksRUFBRSxDQUFvQjt3QkFDMUJDLFdBQVcsRUFBRSxDQUE0RjtvQkFDN0csQ0FBQztvQkFDRCxDQUFDO3dCQUNHRixNQUFNLEVBQUVGLGNBQWM7d0JBQ3RCRyxJQUFJLEVBQUUsQ0FBcUI7d0JBQzNCQyxXQUFXLEVBQUUsQ0FBNEQ7b0JBQzdFLENBQUM7b0JBQ0QsQ0FBQzt3QkFDR0YsTUFBTSxFQUFDWCxvRUFBa0IsQ0FBQ0ssT0FBTyxFQUFFLENBQU87d0JBQzFDTyxJQUFJLEVBQUUsQ0FBMEI7d0JBQ2hDQyxXQUFXLEVBQUUsQ0FBK0Q7b0JBQ2hGLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxNQUFNLDZFQUFFaEIseURBQVU7b0JBQUNhLEtBQUssRUFBRUEsS0FBSzs7Ozs7O1lBQ25DLENBQUM7OztZQUNEUyxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsTUFBTSw2RUFDSHJCLDBEQUFNOztvR0FDSnNCLENBQUU7c0NBQUMsQ0FBYTs7Ozs7O3dCQUNoQixJQUFJLENBQUNqQixXQUFXO29HQUNoQkYsa0VBQWM7Ozs7Ozs7Ozs7O1lBR3JCLENBQUM7Ozs7WUE5RFlvQixHQUFlLEVBQWZBLENBQWU7bUJBQTVCLFFBQVEsQ0FBS0EsZUFBZSxDQUFDakIsS0FBSzt1TUFBbEMsUUFBUSxXQUE0QixDQUFDO3dCQUM3QmtCLFFBQVEsRUFFUkMsT0FBTzs7OztnQ0FGUEQsUUFBUSxHQUFHdkIsOERBQVEsQ0FBQ0ssS0FBSyxDQUFDb0IsS0FBSyxDQUFDQyxPQUFPOzt1Q0FFdkJILFFBQVEsQ0FBQ0ksT0FBTyxDQUFDQyxVQUFVLEdBQUdDLElBQUk7O2dDQUFsREwsT0FBTzs2REFFTixDQUFDO29DQUNKaEIsbUJBQW1CLEVBQUVnQixPQUFPLENBQUMsQ0FBQztvQ0FDOUJsQixPQUFPLEVBQUVrQixPQUFPLENBQUMsQ0FBQztvQ0FDbEJmLGFBQWEsRUFBRWUsT0FBTyxDQUFDLENBQUM7b0NBQ3hCZCxjQUFjLEVBQUVjLE9BQU8sQ0FBQyxDQUFDO29DQUN6QmpCLE9BQU8sRUFBRWlCLE9BQU8sQ0FBQyxDQUFDO2dDQUN0QixDQUFDOzs7Ozs7Z0JBQ0gsQ0FBQzs7Ozs7RUFid0IzQiw0Q0FBUztBQWtFcEMsK0RBQWVNLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz9iMGRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybVwiO1xuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XG4gICAgXG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcblxuICAgIHJldHVybiB7IFxuICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxuICAgICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxuICAgICAgICByZXF1ZXN0c0NvdW50OiBzdW1tYXJ5WzJdLFxuICAgICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcbiAgICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XVxuICAgIH07XG4gIH1cblxuICByZW5kZXJDYXJkcyAoKSB7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgICBiYWxhbmNlLCBcbiAgICAgICAgICBtYW5hZ2VyLCBcbiAgICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgICAgIHJlcXVlc3RzQ291bnQsXG4gICAgICAgICAgYXBwcm92ZXJzQ291bnRcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBjb25zdCBpdGVtcyA9IFt7XG4gICAgICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXG4gICAgICAgICAgICBtZXRhOidBZGRyZXNzIG9mIE1hbmFnZXInLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgbW9uZXknLFxuICAgICAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgICAgICAgIG1ldGE6ICdNaW5pbXVtIENvbnRyaWJ1dGlvbiAod2VpKScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYW4gYXBwcm92ZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcjogcmVxdWVzdHNDb3VudCxcbiAgICAgICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgUmVxdWVzdHMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgbW9uZXkgZnJvbSB0aGUgY29udHJhY3QuIFJlcXVlc3QgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXG4gICAgICAgICAgICBtZXRhOiAnTnVtYmVyIG9mIEFwcHJvdmVycycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ051bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcjp3ZWIzLnV0aWxzLmZyb21XZWkoYmFsYW5jZSwgJ2V0aGVyJyksXG4gICAgICAgICAgICBtZXRhOiAnQ2FtcGFpZ24gQmFsYW5jZSAoZXRoZXIpJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZCdcbiAgICAgICAgfVxuICAgICAgXTtcblxuICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMz5DYW1wYWlnbiBTaG93PC9oMz5cbiAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cbiAgICAgICAgPENvbnRyaWJ1dGVGb3JtIC8+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvdztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkNhbXBhaWduU2hvdyIsInJlbmRlckNhcmRzIiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiR3JvdXAiLCJyZW5kZXIiLCJoMyIsImdldEluaXRpYWxQcm9wcyIsImNhbXBhaWduIiwic3VtbWFyeSIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n");

/***/ })

});
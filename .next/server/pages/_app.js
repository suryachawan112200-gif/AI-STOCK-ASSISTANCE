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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/context/UserContext.js":
/*!************************************!*\
  !*** ./src/context/UserContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider),\n/* harmony export */   useUser: () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst API_BASE_URL = \"https://your-backend-url.com/api\";\nfunction UserProvider({ children }) {\n    const [isLoggedIn, setLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hasPremium, setPremium] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [freeUploads, setFreeUploads] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Login call to backend\n    async function login(email, password) {\n        try {\n            const res = await fetch($, {\n                API_BASE_URL\n            } / login, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            if (!res.ok) throw new Error(\"Login failed\");\n            const data = await res.json();\n            setLoggedIn(true);\n            setPremium(data.hasPremium);\n            setFreeUploads(data.freeUploads || 0);\n            return true;\n        } catch (error) {\n            alert(\"Login error: \" + error.message);\n            return false;\n        }\n    }\n    // Logout logic (enhance for backend as needed)\n    const logout = async ()=>{\n        setLoggedIn(false);\n        setPremium(false);\n        setFreeUploads(0);\n    };\n    const useFreeUpload = ()=>setFreeUploads(freeUploads + 1);\n    const upgradePremium = ()=>setPremium(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            isLoggedIn,\n            login,\n            logout,\n            hasPremium,\n            upgradePremium,\n            freeUploads,\n            useFreeUpload\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\seemu\\\\ai-stock-assistant\\\\src\\\\context\\\\UserContext.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\nfunction useUser() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb250ZXh0L1VzZXJDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUU7QUFFbkUsTUFBTUksNEJBQWNILG9EQUFhQTtBQUVqQyxNQUFNSSxlQUFlO0FBRWQsU0FBU0MsYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxZQUFZQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ08sWUFBWUMsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUMxQyxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFFL0Msd0JBQXdCO0lBQ3hCLGVBQWVXLE1BQU1DLEtBQUssRUFBRUMsUUFBUTtRQUNsQyxJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNQyxHQUFHO2dCQUFFZDtZQUFhLElBQUlTLE9BQU87Z0JBQ25ETSxRQUFRO2dCQUNSQyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7Z0JBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVUO29CQUFPQztnQkFBUztZQUN6QztZQUNBLElBQUksQ0FBQ0MsSUFBSVEsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1WLElBQUlXLElBQUk7WUFFM0JuQixZQUFZO1lBQ1pFLFdBQVdnQixLQUFLakIsVUFBVTtZQUMxQkcsZUFBZWMsS0FBS2YsV0FBVyxJQUFJO1lBQ25DLE9BQU87UUFDVCxFQUFFLE9BQU9pQixPQUFPO1lBQ2RDLE1BQU0sa0JBQWtCRCxNQUFNRSxPQUFPO1lBQ3JDLE9BQU87UUFDVDtJQUNGO0lBRUEsK0NBQStDO0lBQy9DLE1BQU1DLFNBQVM7UUFDYnZCLFlBQVk7UUFDWkUsV0FBVztRQUNYRSxlQUFlO0lBQ2pCO0lBRUEsTUFBTW9CLGdCQUFnQixJQUFNcEIsZUFBZUQsY0FBYztJQUN6RCxNQUFNc0IsaUJBQWlCLElBQU12QixXQUFXO0lBRXhDLHFCQUNFLDhEQUFDUCxZQUFZK0IsUUFBUTtRQUNuQkMsT0FBTztZQUNMNUI7WUFDQU07WUFDQWtCO1lBQ0F0QjtZQUNBd0I7WUFDQXRCO1lBQ0FxQjtRQUNGO2tCQUVDMUI7Ozs7OztBQUdQO0FBRU8sU0FBUzhCO0lBQ2QsT0FBT25DLGlEQUFVQSxDQUFDRTtBQUNwQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxzZWVtdVxcYWktc3RvY2stYXNzaXN0YW50XFxzcmNcXGNvbnRleHRcXFVzZXJDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBBUElfQkFTRV9VUkwgPSBcImh0dHBzOi8veW91ci1iYWNrZW5kLXVybC5jb20vYXBpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlclByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2hhc1ByZW1pdW0sIHNldFByZW1pdW1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmcmVlVXBsb2Fkcywgc2V0RnJlZVVwbG9hZHNdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIC8vIExvZ2luIGNhbGwgdG8gYmFja2VuZFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGxvZ2luKGVtYWlsLCBwYXNzd29yZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJCwgeyBBUElfQkFTRV9VUkwgfSAvIGxvZ2luLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiTG9naW4gZmFpbGVkXCIpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIHNldExvZ2dlZEluKHRydWUpO1xyXG4gICAgICBzZXRQcmVtaXVtKGRhdGEuaGFzUHJlbWl1bSk7XHJcbiAgICAgIHNldEZyZWVVcGxvYWRzKGRhdGEuZnJlZVVwbG9hZHMgfHwgMCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoXCJMb2dpbiBlcnJvcjogXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTG9nb3V0IGxvZ2ljIChlbmhhbmNlIGZvciBiYWNrZW5kIGFzIG5lZWRlZClcclxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2dnZWRJbihmYWxzZSk7XHJcbiAgICBzZXRQcmVtaXVtKGZhbHNlKTtcclxuICAgIHNldEZyZWVVcGxvYWRzKDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVzZUZyZWVVcGxvYWQgPSAoKSA9PiBzZXRGcmVlVXBsb2FkcyhmcmVlVXBsb2FkcyArIDEpO1xyXG4gIGNvbnN0IHVwZ3JhZGVQcmVtaXVtID0gKCkgPT4gc2V0UHJlbWl1bSh0cnVlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGlzTG9nZ2VkSW4sXHJcbiAgICAgICAgbG9naW4sXHJcbiAgICAgICAgbG9nb3V0LFxyXG4gICAgICAgIGhhc1ByZW1pdW0sXHJcbiAgICAgICAgdXBncmFkZVByZW1pdW0sXHJcbiAgICAgICAgZnJlZVVwbG9hZHMsXHJcbiAgICAgICAgdXNlRnJlZVVwbG9hZCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlcigpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiVXNlckNvbnRleHQiLCJBUElfQkFTRV9VUkwiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzTG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsImhhc1ByZW1pdW0iLCJzZXRQcmVtaXVtIiwiZnJlZVVwbG9hZHMiLCJzZXRGcmVlVXBsb2FkcyIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInJlcyIsImZldGNoIiwiJCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImVycm9yIiwiYWxlcnQiLCJtZXNzYWdlIiwibG9nb3V0IiwidXNlRnJlZVVwbG9hZCIsInVwZ3JhZGVQcmVtaXVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVVzZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/context/UserContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/UserContext */ \"(pages-dir-node)/./src/context/UserContext.js\");\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__.UserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\seemu\\\\ai-stock-assistant\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\seemu\\\\ai-stock-assistant\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNEO0FBRXRELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNILDhEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHNlZW11XFxhaS1zdG9jay1hc3Npc3RhbnRcXHNyY1xccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlclByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlclByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1VzZXJQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiVXNlclByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
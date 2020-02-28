/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_javascripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_javascripts/index.js":
/*!*******************************!*\
  !*** ./_javascripts/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var thimbleful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! thimbleful */ \"./node_modules/thimbleful/src/index.js\");\n\n__webpack_require__(/*! ./slideshow-magic */ \"./_javascripts/slideshow-magic.js\");\n\n/** Handle page navigation with Thimbleful router **/\n\nnew thimbleful__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Router().addRoutes(\n  [\n    'welkom',\n    'onze-visie',\n    'contact'\n  ],\n  function(page) {\n    document.querySelector('.page.active').classList.remove('active');\n    document.querySelector('.page#'+page).classList.add('active');\n  }\n);\n\n/** Handle opening and closing of menu on mobile **/\n\nthimbleful__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Click.instance().register('a[href]', function() {\n  if (!onMobile()) return;\n  document.querySelector('nav').classList.remove('active');\n});\n\nthimbleful__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Click.instance().register('[data-open-nav]', function(e) {\n  document.querySelector('nav').classList.toggle('active');\n  e.preventDefault();\n});\n\n/** Animate menu in on page load on desktop **/\n\nwindow.addEventListener('load', function() {\n  if (onMobile()) return;\n  window.setTimeout(function() {\n    document.querySelector('nav').classList.add('active');\n  }, 500);\n});\n\nwindow.addEventListener('resize', function() {\n  if (onMobile()) {\n    document.querySelector('nav').classList.remove('active');\n  } else {\n    document.querySelector('nav').classList.add('active');\n  }\n});\n\nfunction onMobile() {\n  return window.innerWidth <= 768;\n}\n\n\n//# sourceURL=webpack:///./_javascripts/index.js?");

/***/ }),

/***/ "./_javascripts/slideshow-magic.js":
/*!*****************************************!*\
  !*** ./_javascripts/slideshow-magic.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener('DOMContentLoaded', function() {\n\n  let styling = document.createElement('style');\n  styling.innerHTML = `\n\n    [data-slideshow-magic=true] {\n      position: relative;\n      overflow: hidden;\n      display: initial;\n    }\n\n    [data-slideshow-magic=true] img {\n      position: absolute;\n      margin: 0;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      opacity: 0;\n    }\n\n    [data-slideshow-magic=true] img:first-child {\n      animation: zoom-in 20s linear infinite 0s;\n    }\n\n    [data-slideshow-magic=true] img:nth-child(2) {\n      animation: zoom-out 20s linear infinite 10s;\n    }\n\n    @keyframes zoom-in {\n      0% {\n        opacity: 0;\n        transform: scale(1) translate(0, 0);\n      }\n      10% {\n        opacity: 1\n      }\n      50% {\n        opacity: 1;\n      }\n      60% {\n        opacity: 0;\n        transform:scale(1.2) translate(6%, 6%);\n      }\n    }\n\n    @keyframes zoom-out {\n      0% {\n        opacity: 0;\n        transform: scale(1.2) translate(-6%, -6%);\n      }\n      10% {\n        opacity: 1\n      }\n      50% {\n        opacity: 1;\n      }\n      60% {\n        opacity: 0;\n        transform:scale(1) translate(0, 0);\n      }\n    }\n\n  `\n\n  document.querySelectorAll('[data-slideshow-magic=true]')\n          .forEach(function(slideshow) {\n\n    // Fetch image paths from the DOM\n    let images = [];\n    slideshow.querySelectorAll('img').forEach(function(image) {\n      images.push(image.src);\n    });\n\n    // Initialize slideshow with random images\n    let firstImage = images[Math.floor(Math.random() * images.length)];\n    let options = images.filter(function(image) { return image !== firstImage })\n    let secondImage = options[Math.floor(Math.random() * options.length)];\n    slideshow.children.item(0).src = firstImage;\n    slideshow.children.item(1).src = secondImage;\n\n    // Don't show the same image twice in a row\n    let lastImage = secondImage;\n\n    // Randomly switch images after each animation\n    slideshow.addEventListener('animationiteration', function(evnt) {\n      let options = images.filter(function(image) { return image !== lastImage })\n      let image = options[Math.floor(Math.random() * options.length)];\n      evnt.target.src = image;\n      lastImage = image;\n    });\n\n  });\n\n  document.head.appendChild(styling);\n\n});\n\n\n//# sourceURL=webpack:///./_javascripts/slideshow-magic.js?");

/***/ }),

/***/ "./node_modules/thimbleful/src/click.js":
/*!**********************************************!*\
  !*** ./node_modules/thimbleful/src/click.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n * This class installs one single click handler on the whole document, and\n * evaluates which callback to call at click time, based on the element that has\n * been clicked. This allows us to swap out and rerender whole sections of the\n * DOM without having to reinstall a bunch of click handlers each time. This\n * nicely decouples the render logic from the click event management logic.\n *\n * To make sure we really only install a single click handler, you can use the\n * singleton pattern and ask for `Click.instance()` instead of creating a new\n * object.\n */\n\nclass Click {\n\n  constructor() {\n    this._handlers = {};\n\n    document.addEventListener('click',     (e) => this._callHandler('click',     e));\n    document.addEventListener('mousedown', (e) => this._callHandler('mousedown', e));\n    document.addEventListener('mouseup',   (e) => this._callHandler('mouseup',   e));\n  }\n\n  register(selector, handlers = {click: null, mousedown: null, mouseup: null}) {\n    if (typeof handlers == 'function') handlers = { click: handlers };\n    this._handlers[selector] = this._handlers[selector] || [];\n    this._handlers[selector].push(handlers);\n  }\n\n  _callHandler(type, e) {\n    Object.keys(this._handlers).forEach((selector) => {\n      if (e.target.closest(selector) !== null) {\n        const handlers = this._handlers[selector].map((h) => h[type]);\n        handlers.forEach((handler) => {\n          if (typeof handler == 'function' && !e.defaultPrevented)\n            handler(e, selector)\n        });\n      }\n    });\n  }\n\n}\n\nClick.instance = function() {\n  if (!!Click._instance) return Click._instance;\n  return Click._instance = new Click();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Click);\n\n\n//# sourceURL=webpack:///./node_modules/thimbleful/src/click.js?");

/***/ }),

/***/ "./node_modules/thimbleful/src/energize.js":
/*!*************************************************!*\
  !*** ./node_modules/thimbleful/src/energize.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Energize; });\n/* harmony import */ var _click__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click */ \"./node_modules/thimbleful/src/click.js\");\n/**\n * Given a scope this class adds a bunch of behaviour to elements that\n * you define through data attributes. This behaviour is based around adding\n * or removing an 'active' class when elements are clicked:\n *\n *  - data-open — A selector to put the 'active' class on when clicked\n *  - data-close — A selector to remove the 'active' class from when clicked\n *  - data-toggle — A selector to toggle the 'active' class on when clicked\n *  - data-group — If I get the 'active' class, remove it from others in my group\n *  - data-timer — If I get the 'active' class, remove it again after this many milliseconds\n *  - data-follower — A selector for another element that follows my behaviour\n *\n * If you wish, you can override the class name and the names of all the\n * attributes as options to the constructor.\n */\n\n\n\nclass Energize {\n\n  constructor(scope, options = {}) {\n    this._scope   = scope;\n    this._options = this._normalizeOptions(options);\n\n    _click__WEBPACK_IMPORTED_MODULE_0__[\"default\"].instance().register(`${scope} [${this._options.open}], ${scope} [${this._options.close}], ${scope} [${this._options.toggle}]`, (e) => this._handleClick(e));\n  }\n\n  _normalizeOptions(options) {\n    return Object.assign({\n      class:    'active',\n      open:     'data-open',\n      close:    'data-close',\n      toggle:   'data-toggle',\n      group:    'data-group',\n      timer:    'data-timer',\n      follower: 'data-follower'\n    }, options);\n  }\n\n  _handleClick(evnt) {\n    // Which element did we click?\n    const target = evnt.target.closest(`[${this._options.open}], [${this._options.close}], [${this._options.toggle}]`);\n\n    // What does the clicked element wish to open, close or toggle?\n    const closeSelector  = target.getAttribute(this._options.close);\n    const openSelector   = target.getAttribute(this._options.open);\n    const toggleSelector = target.getAttribute(this._options.toggle);\n\n    let closeElements = closeSelector ? document.querySelectorAll(`${this._scope} ${closeSelector}`)  : [];\n    let openElements  =  openSelector ? document.querySelectorAll(`${this._scope} ${openSelector}`)   : [];\n\n    // Add elements that need to be toggled\n    closeElements = [...closeElements, ...(toggleSelector ? document.querySelectorAll(`${this._scope} ${toggleSelector}.${this._options.class}`)       : [])];\n    openElements  = [...openElements,  ...(toggleSelector ? document.querySelectorAll(`${this._scope} ${toggleSelector}:not(.${this._options.class})`) : [])];\n\n    this._close(closeElements);\n    this._open(openElements);\n\n    // We're done with this event, don't try to evaluate it any further\n    evnt.preventDefault();\n    evnt.stopPropagation();\n  }\n\n  _close(elements) {\n    elements.forEach((element) => {\n      element.classList.remove(this._options.class);\n      this._close(this._followers(element));\n    });\n  }\n\n  _open(elements) {\n    elements.forEach((element) => {\n      this._close(this._group(element));\n      element.classList.add(this._options.class);\n      this._open(this._followers(element));\n\n      // Set self-destruct timer if needed\n      const delay = element.getAttribute(this._options.timer);\n      if (delay) window.setTimeout(() => this._close([element]), delay);\n    });\n  }\n\n  _group(element) {\n    const group = element.getAttribute(this._options.group);\n    if (!group) return [];\n    return [...document.querySelectorAll(`${this._scope} [${this._options.group}=${group}]`)];\n  }\n\n  _followers(element) {\n    const selector = element.getAttribute(this._options.follower);\n    if (!selector) return [];\n    return [...document.querySelectorAll(`${this._scope} ${selector}`)];\n  }\n\n}\n\n\n//# sourceURL=webpack:///./node_modules/thimbleful/src/energize.js?");

/***/ }),

/***/ "./node_modules/thimbleful/src/filetarget.js":
/*!***************************************************!*\
  !*** ./node_modules/thimbleful/src/filetarget.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _click__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click */ \"./node_modules/thimbleful/src/click.js\");\n/*\n * This class installs single drag event handlers on the whole document, and\n * evaluates which element they influence at drag time. If you drop a file the\n * relevant callback gets called, based on the element that the file was dropped\n * on. This allows us to swap out and rerender whole sections of the DOM without\n * having to reinstall a bunch of event handlers each time. This nicely\n * decouples the render logic from the drag event management logic.\n *\n * To make sure we really only install single handlers, you can use the\n * singleton pattern and ask for `FileTarget.instance()` instead of creating a new\n * object.\n */\n\n\n\nclass FileTarget {\n\n  constructor(dragClass = 'dragging') {\n    this._dragClass = dragClass;\n    this._handlers  = {};\n\n    document.addEventListener('dragover',  (e) => this._dragOver(e));\n    document.addEventListener('dragleave', (e) => this._dragLeave(e));\n    document.addEventListener('drop',      (e) => this._drop(e));\n  }\n\n  register(selector, callback) {\n    this._handlers[selector] = callback;\n    _click__WEBPACK_IMPORTED_MODULE_0__[\"default\"].instance().register(selector, (e, s) => this._openFileDialog(e, s));\n  }\n\n  _dragOver(e) {\n    if (!this._isDropTarget(e.target)) return;\n    e.stopPropagation();\n    e.preventDefault();\n    e.dataTransfer.dropEffect = 'copy';\n    e.target.classList.add(this._dragClass);\n  }\n\n  _dragLeave(e) {\n    if (!this._isDropTarget(e.target)) return;\n    e.stopPropagation();\n    e.preventDefault();\n    e.target.classList.remove(this._dragClass);\n  }\n\n  _drop(e) {\n    let selector = this._isDropTarget(e.target);\n    if (!selector) return;\n    e.stopPropagation();\n    e.preventDefault();\n    e.target.classList.remove(this._dragClass);\n    this._handleFile(selector, e, e.dataTransfer.files[0]);\n  }\n\n  _isDropTarget(target) {\n    return Object.keys(this._handlers).find((selector) => {\n      if (target.closest(selector)) return selector;\n    }) || false;\n  }\n\n  _openFileDialog(e, selector) {\n    const input = document.createElement('input');\n    input.type  = 'file';\n    input.addEventListener('change', (c) =>\n      this._handleFile(selector, e, c.target.files[0])\n    );\n    input.click();\n  }\n\n  _handleFile(selector, e, file) {\n    this._readFile(file)\n        .then((r) => this._handlers[selector](file, r, e));\n  }\n\n  _readFile(file) {\n    return new Promise((resolve, reject) => {\n      var reader = new FileReader();\n      reader.addEventListener('load', (e) => resolve(e.target.result));\n      reader.readAsDataURL(file);\n    });\n  }\n\n}\n\nFileTarget.instance = function() {\n  if (!!FileTarget._instance) return FileTarget._instance;\n  return FileTarget._instance = new FileTarget();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileTarget);\n\n\n//# sourceURL=webpack:///./node_modules/thimbleful/src/filetarget.js?");

/***/ }),

/***/ "./node_modules/thimbleful/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/thimbleful/src/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _click__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click */ \"./node_modules/thimbleful/src/click.js\");\n/* harmony import */ var _filetarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filetarget */ \"./node_modules/thimbleful/src/filetarget.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./node_modules/thimbleful/src/router.js\");\n/* harmony import */ var _energize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./energize */ \"./node_modules/thimbleful/src/energize.js\");\n\n\n\n\n\nconst Thimbleful = {\n  Click: _click__WEBPACK_IMPORTED_MODULE_0__[\"default\"], FileTarget: _filetarget__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Router: _router__WEBPACK_IMPORTED_MODULE_2__[\"default\"], Energize: _energize__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thimbleful);\nwindow.Thimbleful = Thimbleful;\n\n\n//# sourceURL=webpack:///./node_modules/thimbleful/src/index.js?");

/***/ }),

/***/ "./node_modules/thimbleful/src/router.js":
/*!***********************************************!*\
  !*** ./node_modules/thimbleful/src/router.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Router; });\n/* harmony import */ var _click__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click */ \"./node_modules/thimbleful/src/click.js\");\n/**\n * This is a very simple routing class that listens to location hash changes and\n * clicks on links to registered routes.\n *\n * You have to explicitly define the routes that you wish to use, so we don't\n * clash (too much) with deep-linking to named anchors on your page. And also\n * because it enables you to handle different routes with different functions.\n */\n\n\n\nclass Router {\n\n  constructor() {\n    this._routes = [];\n\n    _click__WEBPACK_IMPORTED_MODULE_0__[\"default\"].instance().register('a[href]',  (e) => this._handleClick(e));\n    window.addEventListener('hashchange', (e) => this._handleNavigationEvent(e));\n    window.addEventListener('load',       (e) => this._handleNavigationEvent(e));\n  }\n\n  addRoute(route, handler) {\n    this._routes.push([route, handler]);\n  }\n\n  addRoutes(routes, handler = null) {\n    if (Array.isArray(routes))\n      routes.forEach((route) => this.addRoute(route, handler));\n    else\n      Object.keys(routes).forEach(route => this.addRoute(route, routes[route]));\n  }\n\n  _handleClick(evnt) {\n    let link = evnt.target.getAttribute('href');\n    if (!this._matchingLink(link)) return;\n    window.location.hash = link;\n    evnt.preventDefault();\n  }\n\n  _handleNavigationEvent(evnt) {\n    let link = window.location.hash;\n    if (!(link = this._matchingLink(link))) return;\n    let handler = link.route[1]\n    if (handler) handler(link.route[0], link.matches, evnt);\n  }\n\n  _matchingLink(hash) {\n    if (!hash) return false;\n    if (!hash.substr(0,1) == \"#\") return false;\n    for (const route of this._routes) {\n      if (route[0] instanceof RegExp) {\n        const matches = hash.substr(1).match(route[0]);\n        if (matches) return {route, matches};\n      } else {\n        if (route[0] == hash.substr(1)) return {route, matches: null}\n      }\n    }\n    return false;\n  }\n\n}\n\n\n//# sourceURL=webpack:///./node_modules/thimbleful/src/router.js?");

/***/ })

/******/ });
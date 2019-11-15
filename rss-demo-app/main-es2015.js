(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <span class=\"center\">\n      <span class=\"title\"> \n          NETZ\n        </span>\n        <img #titleImage  [src]=\"logo\">\n  </span>\n\n  <span class=\"buttonGroup\">\n    <!-- <input matInput search> -->\n    <button mat-mini-fab (click)=\"refresh()\" *ngIf=\"!spinnerState\">\n        <mat-icon>refresh</mat-icon>\n    </button>\n    <button mat-mini-fab class=\"btn\" type=\"button\" disabled  *ngIf=\"spinnerState\">\n        <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Loading...</span>\n    </button>\n<!-- \n    <button mat-mini-fab class=\"btn\" type=\"button\" disabled>\n        <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Loading...</span>\n    </button> -->\n\n    <button *ngIf=\"feed\" mat-mini-fab disabled  >\n      <mat-icon [matTooltip]=\"feed.feed.description\">info</mat-icon>\n    </button>\n\n  </span>\n</mat-toolbar>\n\n\n <span *ngIf=\"feed\">\n   <div class=\"loading-dots\" *ngIf=\"spinnerState\"> \n     <h1 class=\"dot one\">.</h1><h1 class=\"dot two\">.</h1><h1 class=\"dot three\">.</h1>\n   </div>\n    <span *ngFor=\"let card of cards \">\n        <app-card [cardContent]=\"card\"></app-card>\n    </span>\n </span> \n\n<div *ngIf=\"feedContent$ | async\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/full-news-popup/full-news-popup.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/full-news-popup/full-news-popup.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n        <div class=\"column\" *ngIf=\"feedEntry\">\n                <div class=\"newsbox\">\n                        <button mat-mini-fab (click)=\"close()\"><mat-icon>close</mat-icon></button>\n                        <div class=\"post-img\">\n                                <img [src]=\"feedEntry.thumbnail\" />\n                        </div>\n                        <div class=\"post-content\">\n                                <div class=\"category\">{{feedEntry.pubDate | date}}</div>\n                                <h1 class=\"title\">{{feedEntry.title}}</h1>\n                                <h2 class=\"sub_title\">{{feedEntry.author}}</h2>\n                                <p>\n                                   {{feedEntry.description | stripHtmlTags}}     \n                                </p>\n                                <div class=\"post-meta\">\n                                        <span class=\"timestamp\">\n                                                <i class=\"fa fa-clock-o\"></i> {{feedEntry.pubDate | dateAgo}} \n                                        </span>\n                                        <span>\n                                                <i class=\"fa fa-comments\"></i> \n                                                \n                                        </span>\n                                </div>\n                        </div>\n                </div>\n\n        </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/card/card.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/card/card.component.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card>\n  <div class=\"thumbArea\">\n    <div class=\"view overlay\">\n      <a>\n          <img mat-card-img (click)=\"openDialog()\" [src]=\"cardContent.thumbnail\" id=\"thumbnail\">\n      </a>\n    </div>\n  </div>\n\n  <mat-card-content>\n\n    <div class=\"cardHeader\">\n      <mat-card-title>{{cardContent.title}}\n        <!-- <h4></h4> -->\n      </mat-card-title>\n     <button mat-mini-fab (click)=\"share()\"><mat-icon>share</mat-icon></button>\n    </div>\n\n    <p>{{cardDescription | stripHtmlTags}}</p>\n\n \n\n    <mat-card-subtitle>\n      <div>\n          <span class=\"subElements\"> {{cardContent.author}}</span>\n          <span  class=\"subElements\"> {{cardContent.pubDate | dateAgo}}</span>     \n      </div>\n      \n      <a>\n          <strong (click)=\"openDialog()\">Read more</strong>\n          <mat-icon>double_arrow</mat-icon>\n      </a>\n    </mat-card-subtitle>\n\n   \n  </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.feedURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdev98.de%2Ffeed%2F';
    }
    getFeedContent() {
        return this.http.get(this.feedURL);
        // .map(this.parseResponse)
        // .catch(this.handleError);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n}\n.center {\n  margin: auto;\n}\n.title {\n  color: white;\n  vertical-align: super;\n}\n#titleImage {\n  height: 45px;\n  margin-left: 8px;\n}\n.buttonGroup .mat-mini-fab {\n  background-color: #33B0E0 !important;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.buttonGroup .mat-icon {\n  color: white;\n}\n.mat-toolbar {\n  background: #005097 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbWluYVxcRG9jdW1lbnRzXFxXT1JLU1BBQ0VTXFxuZXR6OThcXFJTUy1UZXN0YXBwXFxyc3MtZGVtby1hcHAvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXGFtaW5hXFxEb2N1bWVudHNcXFdPUktTUEFDRVNcXG5ldHo5OFxcUlNTLVRlc3RhcHBcXHJzcy1kZW1vLWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBRUE7RUFBYSxZQUFBO0FDQ2I7QURBQTtFQUFPLFNBQUE7RUFBVyxxQ0FBQTtBQ0tsQjtBQ05BO0VBQ0ksWUFBQTtBRFNKO0FDTkE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QURTRjtBQ05BO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FEU0o7QUNMRTtFRk5FLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2VKO0FDTkU7RUZMRSxZQVZjO0FDd0JsQjtBQ0pBO0VBQ0UsOEJBQUE7QURPRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxuYm9keSB7IG1hcmdpbjogMDsgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgfVxuXG4kcHJpbWFyeS1jb2xvcjogIzAwNTA5NztcbiRhY2NlbnQtY29sb3I6ICMzM0IwRTA7XG4kZm9udC1vbi1wcmltYXJ5OiB3aGl0ZTtcblxuQG1peGluIG1pbmktZmFiIHtcbiAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvciAhaW1wb3J0YW50OyBcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbkBtaXhpbiBpY29uLWNvbG9yIHtcbiAgICBjb2xvcjogJGZvbnQtb24tcHJpbWFyeTtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xufVxuXG4jdGl0bGVJbWFnZSB7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmJ1dHRvbkdyb3VwIC5tYXQtbWluaS1mYWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNCMEUwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYnV0dG9uR3JvdXAgLm1hdC1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjMDA1MDk3ICFpbXBvcnRhbnQ7XG59IiwiQGltcG9ydCAnLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4uY2VudGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogJGZvbnQtb24tcHJpbWFyeTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XHJcbn1cclxuXHJcbiN0aXRsZUltYWdlIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuICBcclxuLmJ1dHRvbkdyb3VwIHtcclxuICAubWF0LW1pbmktZmFiIFxyXG4gIHsgXHJcbiAgICBAaW5jbHVkZSBtaW5pLWZhYjtcclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBAaW5jbHVkZSBpY29uLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let AppComponent = class AppComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.title = 'rss-demo-app';
        this.cards = [];
        // hideCard = false;
        this.logo = '../assets/cropped-logo_50px.png';
        this.spinnerState = false;
    }
    refresh() {
        this.spinnerState = true;
        this.feedContent$ = this.apiService.getFeedContent()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(feedContent => this.mapFeedToModel(feedContent)));
        setTimeout(() => { this.spinnerState = false; }, 2000);
    }
    // tslint:disable-next-line: ban-types
    mapFeedToModel(feedContent) {
        this.feed = feedContent;
        this.cards = [];
        this.cards = feedContent.items;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]();
    }
    // toggleCard(hideCard: boolean) {
    //   if (!this.hideCard) {
    //     this.hideCard = true;
    //   } else {
    //     this.hideCard = false;
    //   }
    // }
    deleteCard(card) {
        this.cards = this.cards.filter(fdEntry => fdEntry !== card);
        // TODO: create pop-up with a warning or a slide that asks you if you want to delete it
    }
    ngOnInit() {
        this.refresh();
    }
};
AppComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('searchbar', { static: false })
], AppComponent.prototype, "searchbar", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading-dots.scss */ "./src/app/loading-dots.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_strip_html_tags_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/strip-html-tags.pipe */ "./src/app/pipes/strip-html-tags.pipe.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var src_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/material.module */ "./src/material.module.ts");
/* harmony import */ var src_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/card/card.component */ "./src/card/card.component.ts");
/* harmony import */ var _modals_full_news_popup_full_news_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/full-news-popup/full-news-popup.component */ "./src/app/modals/full-news-popup/full-news-popup.component.ts");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/date-ago.pipe */ "./src/app/pipes/date-ago.pipe.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            src_card_card_component__WEBPACK_IMPORTED_MODULE_9__["NewsCardComponent"],
            _modals_full_news_popup_full_news_popup_component__WEBPACK_IMPORTED_MODULE_10__["FullNewsPopupComponent"],
            _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_11__["DateAgoPipe"],
            _pipes_strip_html_tags_pipe__WEBPACK_IMPORTED_MODULE_1__["StripHtmlTagsPipe"],
            _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            src_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
        ],
        providers: [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
        entryComponents: [_modals_full_news_popup_full_news_popup_component__WEBPACK_IMPORTED_MODULE_10__["FullNewsPopupComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/loading-dots.scss":
/*!***********************************!*\
  !*** ./src/app/loading-dots.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading-dots {\n  text-align: center;\n  z-index: 5;\n}\n.loading-dots .dot {\n  display: inline;\n  margin-left: 0.2em;\n  margin-right: 0.2em;\n  position: relative;\n  font-size: 3.5em;\n  opacity: 0;\n  -webkit-animation: showHideDot 2.5s ease-in-out infinite;\n          animation: showHideDot 2.5s ease-in-out infinite;\n}\n.loading-dots .dot.one {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.loading-dots .dot.two {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.loading-dots .dot.three {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n@-webkit-keyframes showHideDot {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  60% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes showHideDot {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  60% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbWluYVxcRG9jdW1lbnRzXFxXT1JLU1BBQ0VTXFxuZXR6OThcXFJTUy1UZXN0YXBwXFxyc3MtZGVtby1hcHAvc3JjXFxhcHBcXGxvYWRpbmctZG90cy5zY3NzIiwic3JjL2FwcC9sb2FkaW5nLWRvdHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKO0FEQ0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0RBQUE7VUFBQSxnREFBQTtBQ0FOO0FERU07RUFBUSw2QkFBQTtVQUFBLHFCQUFBO0FDQ2Q7QURBTTtFQUFRLDZCQUFBO1VBQUEscUJBQUE7QUNHZDtBREZNO0VBQVUsNkJBQUE7VUFBQSxxQkFBQTtBQ0toQjtBRERFO0VBQ0U7SUFBSyxVQUFBO0VDS1A7RURKRTtJQUFNLFVBQUE7RUNPUjtFRE5FO0lBQU0sVUFBQTtFQ1NSO0VEUkU7SUFBTyxVQUFBO0VDV1Q7QUFDRjtBRGhCRTtFQUNFO0lBQUssVUFBQTtFQ0tQO0VESkU7SUFBTSxVQUFBO0VDT1I7RURORTtJQUFNLFVBQUE7RUNTUjtFRFJFO0lBQU8sVUFBQTtFQ1dUO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2FkaW5nLWRvdHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLWRvdHMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogNTtcclxuICBcclxuICAgIC5kb3Qge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjJlbTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gICB0b3A6IC0xZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMy41ZW07XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGFuaW1hdGlvbjogc2hvd0hpZGVEb3QgMi41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICBcclxuICAgICAgJi5vbmUgeyBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cclxuICAgICAgJi50d28geyBhbmltYXRpb24tZGVsYXk6IDAuNHM7IH1cclxuICAgICAgJi50aHJlZSB7IGFuaW1hdGlvbi1kZWxheTogMC42czsgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNob3dIaWRlRG90IHtcclxuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgNTAlIHsgb3BhY2l0eTogMTsgfVxyXG4gICAgNjAlIHsgb3BhY2l0eTogMTsgfVxyXG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxuICB9IiwiLmxvYWRpbmctZG90cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogNTtcbn1cbi5sb2FkaW5nLWRvdHMgLmRvdCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLWxlZnQ6IDAuMmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMy41ZW07XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2hvd0hpZGVEb3QgMi41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cbi5sb2FkaW5nLWRvdHMgLmRvdC5vbmUge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG4ubG9hZGluZy1kb3RzIC5kb3QudHdvIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuLmxvYWRpbmctZG90cyAuZG90LnRocmVlIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIHNob3dIaWRlRG90IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/modals/full-news-popup/full-news-popup.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modals/full-news-popup/full-news-popup.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n}\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\nbody {\n  font-family: \"Montserrat\";\n  background: #f2f2f2;\n  font-size: 14px;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.column {\n  width: 100%;\n  float: left;\n}\n.title {\n  color: #666666;\n  text-transform: uppercase;\n}\n.newsbox {\n  position: relative;\n  background: #fff;\n  min-width: 270px;\n  height: 470px;\n}\n.post-img {\n  height: 400px;\n  overflow: hidden;\n}\n.newsbox img {\n  display: block;\n  width: 100%;\n}\n.date {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 1;\n  background: #005097;\n  width: 55px;\n  height: 55px;\n  border-radius: 100%;\n  color: white;\n  text-align: center;\n  padding: 12.5px 0;\n}\n.post-content {\n  position: absolute;\n  bottom: 0;\n  background: #FFFFFF;\n  padding: 30px;\n}\n.category {\n  position: absolute;\n  top: -34px;\n  left: 0;\n  background: #005097;\n  padding: 10px 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.title {\n  margin: 0;\n  padding: 0 0 10px;\n  color: #33B0E0;\n  font-size: 26px;\n  font-weight: 700;\n}\n.sub_title {\n  margin: 0;\n  padding: 0 0 20px;\n  color: #005097;\n  font-size: 20px;\n  font-weight: 400;\n}\n.description {\n  color: #666666;\n  font-size: 14px;\n  line-height: 1.8em;\n}\n.up-title {\n  margin: 0 0 15px;\n  color: #666666;\n  font-size: 18px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.timestamp {\n  margin: 0 16px 0 0;\n}\n.post-meta a {\n  color: #999999;\n  text-decoration: none;\n}\n.mat-mini-fab {\n  box-shadow: none;\n  background-color: white;\n  z-index: 1;\n  position: absolute;\n  top: -20px;\n  right: 0;\n}\n.mat-mini-fab:hover {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  background-color: white;\n  z-index: 1;\n  position: absolute;\n  top: -20px;\n  right: 0;\n}\n.mat-icon {\n  color: black;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2Z1bGwtbmV3cy1wb3B1cC9DOlxcVXNlcnNcXGFtaW5hXFxEb2N1bWVudHNcXFdPUktTUEFDRVNcXG5ldHo5OFxcUlNTLVRlc3RhcHBcXHJzcy1kZW1vLWFwcC9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9tb2RhbHMvZnVsbC1uZXdzLXBvcHVwL2Z1bGwtbmV3cy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2Z1bGwtbmV3cy1wb3B1cC9DOlxcVXNlcnNcXGFtaW5hXFxEb2N1bWVudHNcXFdPUktTUEFDRVNcXG5ldHo5OFxcUlNTLVRlc3RhcHBcXHJzcy1kZW1vLWFwcC9zcmNcXGFwcFxcbW9kYWxzXFxmdWxsLW5ld3MtcG9wdXBcXGZ1bGwtbmV3cy1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBO0VBQWEsWUFBQTtBQ0NiO0FEQUE7RUFBTyxTQUFBO0VBQVcscUNBQUE7QUNLbEI7QUNOQTs7O0VBR0UsbUJBQUE7QURTRjtBQ05BO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURTRjtBQ05BO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QURTRjtBQ05BO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FEU0Y7QUNKQTtFQUNFLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QURNRjtBQ0RBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FESUY7QUNEQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FESUY7QUNBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJGbERjO0VFbURkLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZRnBEZ0I7RUVxRGhCLGtCQUFBO0VBQ0EsaUJBQUE7QURHRjtBQ0FBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FER0Y7QUNBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxtQkZ0RWM7RUV1RWQsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QURHRjtBQ0FBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0ZoRmE7RUVpRmIsZUFBQTtFQUNBLGdCQUFBO0FER0Y7QUNBQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGNGekZjO0VFMEZkLGVBQUE7RUFDQSxnQkFBQTtBREdGO0FDQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FER0Y7QUNDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FERUY7QUNZQTtFQUNFLGtCQUFBO0FEVEY7QUNZQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBRFRGO0FDWUE7RUFFRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QURWRjtBQ2FBO0VBRUUsaUhBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FEWEY7QUNjQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FEWEYiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvZnVsbC1uZXdzLXBvcHVwL2Z1bGwtbmV3cy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxuYm9keSB7IG1hcmdpbjogMDsgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgfVxuXG4kcHJpbWFyeS1jb2xvcjogIzAwNTA5NztcbiRhY2NlbnQtY29sb3I6ICMzM0IwRTA7XG4kZm9udC1vbi1wcmltYXJ5OiB3aGl0ZTtcblxuQG1peGluIG1pbmktZmFiIHtcbiAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvciAhaW1wb3J0YW50OyBcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbkBtaXhpbiBpY29uLWNvbG9yIHtcbiAgICBjb2xvcjogJGZvbnQtb24tcHJpbWFyeTtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG5cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5jb2x1bW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubmV3c2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWluLXdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiA0NzBweDtcbn1cblxuLnBvc3QtaW1nIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5ld3Nib3ggaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogIzAwNTA5NztcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEyLjVweCAwO1xufVxuXG4ucG9zdC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5jYXRlZ29yeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzRweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogIzAwNTA5NztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAxMHB4O1xuICBjb2xvcjogIzMzQjBFMDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3ViX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMjBweDtcbiAgY29sb3I6ICMwMDUwOTc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xufVxuXG4udXAtdGl0bGUge1xuICBtYXJnaW46IDAgMCAxNXB4O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRpbWVzdGFtcCB7XG4gIG1hcmdpbjogMCAxNnB4IDAgMDtcbn1cblxuLnBvc3QtbWV0YSBhIHtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1hdC1taW5pLWZhYiB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubWF0LW1pbmktZmFiOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubWF0LWljb24ge1xuICBjb2xvcjogYmxhY2s7XG4gIHotaW5kZXg6IDE7XG59IiwiQGltcG9ydCAnLi8uLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4qLFxyXG4qOjphZnRlcixcclxuKjo6YmVmb3JlIHtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7ICBcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzY2NjY2NjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuXHJcbi5uZXdzYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtaW4td2lkdGg6IDI3MHB4O1xyXG4gIGhlaWdodDogNDcwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnBvc3QtaW1ne1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5ld3Nib3ggaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICB3aWR0aDogNTVweDtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBjb2xvcjogJGZvbnQtb24tcHJpbWFyeTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTIuNXB4IDA7XHJcbn1cclxuXHJcbi5wb3N0LWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0zNHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG4gIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc3ViX3RpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAwIDIwcHg7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgLy8gZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVwLXRpdGxlIHtcclxuICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4vLyAuaG92ZXIgLnBvc3QtY29udGVudCAuZGVzY3JpcHRpb24ge1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbi8vICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbi8vICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAucG9zdC1tZXRhIHtcclxuLy8gICBtYXJnaW46IDMwcHggMCAwO1xyXG4vLyAgIGNvbG9yOiAjOTk5OTk5O1xyXG4vLyB9XHJcblxyXG4udGltZXN0YW1wIHtcclxuICBtYXJnaW46IDAgMTZweCAwIDA7XHJcbn1cclxuXHJcbi5wb3N0LW1ldGEgYSB7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubWF0LW1pbmktZmFiIFxyXG57IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMjBweDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLm1hdC1taW5pLWZhYjpob3ZlclxyXG57IFxyXG4gIGJveC1zaGFkb3c6ICAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0yMHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB6LWluZGV4OiAxO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/modals/full-news-popup/full-news-popup.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modals/full-news-popup/full-news-popup.component.ts ***!
  \*********************************************************************/
/*! exports provided: FullNewsPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullNewsPopupComponent", function() { return FullNewsPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let FullNewsPopupComponent = class FullNewsPopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.feedEntry = this.data.feedEntry;
        console.log(this.feedEntry.description);
        // this.date = this.data.feedEntry.pubDate;
        // this.day = this.date.getUTCDay();
    }
    close() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
};
FullNewsPopupComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
FullNewsPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-full-news-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./full-news-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/full-news-popup/full-news-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./full-news-popup.component.scss */ "./src/app/modals/full-news-popup/full-news-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], FullNewsPopupComponent);



/***/ }),

/***/ "./src/app/pipes/date-ago.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/date-ago.pipe.ts ***!
  \****************************************/
/*! exports provided: DateAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function() { return DateAgoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DateAgoPipe = class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            const intervals = {
                year: 31536000,
                month: 2592000,
                week: 604800,
                day: 86400,
                hour: 3600,
                minute: 60,
                second: 1
            };
            let counter;
            if (seconds < 29) {
                value = 'Just now';
            }
            else {
                // tslint:disable-next-line: forin
                for (const i in intervals) {
                    counter = Math.floor(seconds / intervals[i]);
                    if (counter > 0) {
                        if (counter === 1) {
                            value = counter + ' ' + i + ' ago'; // singular (1 day ago)
                        }
                        else {
                            value = counter + ' ' + i + 's ago'; // plural (2 days ago)
                        }
                    }
                }
            }
        }
        return value;
    }
};
DateAgoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateAgo'
    })
], DateAgoPipe);



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, filter, defaultFilter) {
        //   // Option 1
        //   if (!filter) {
        //     return items;
        //   }
        //   if (!Array.isArray(items)) {
        //     return items;
        //   }
        //   if (filter && Array.isArray(items)) {
        //     const filterKeys = Object.keys(filter);
        //     if (defaultFilter) {
        //       return items.filter(item =>
        //           filterKeys.reduce((x, keyName) =>
        //               (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === '', true));
        //     } else {
        //       return items.filter(item => {
        //         return filterKeys.some((keyName) => {
        //           return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === '';
        //         });
        //       });
        //     }
        //   }
        //   // Option 2
        //   transform(items: any[], searchText: string): any[] {
        //     if(!items) return [];
        //     if(!searchText) return items;
        // searchText = searchText.toLowerCase();
        // return items.filter( it => {
        // tslint:disable-next-line: max-line-length
        //       return it.president.toLowerCase().includes(searchText) || it.party.toLowerCase().includes(searchText) || it.took_office.toLowerCase().includes(searchText);
        //     });
        //    }
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/pipes/strip-html-tags.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/strip-html-tags.pipe.ts ***!
  \***********************************************/
/*! exports provided: StripHtmlTagsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripHtmlTagsPipe", function() { return StripHtmlTagsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StripHtmlTagsPipe = class StripHtmlTagsPipe {
    constructor() {
        this.tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
        this.tagOrComment = new RegExp('<(?:'
            // Comment body.
            + '!--(?:(?:-*[^->])*--+|-?)'
            // Special "raw text" elements whose content should be elided.
            + '|script\\b' + this.tagBody + '>[\\s\\S]*?</script\\s*'
            + '|style\\b' + this.tagBody + '>[\\s\\S]*?</style\\s*'
            // Regular name
            + '|/?[a-z]'
            + this.tagBody
            + ')>', 'gi');
    }
    transform(value) {
        let oldHtml;
        do {
            oldHtml = value;
            value = value.replace(this.tagOrComment, '');
        } while (value !== oldHtml);
        let s = value;
        s = s.substring(0, s.indexOf('...'));
        value = s;
        value = value + '...';
        return value.replace(/</g, '&lt;');
    }
};
StripHtmlTagsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'stripHtmlTags'
    })
], StripHtmlTagsPipe);



/***/ }),

/***/ "./src/card/card.component.scss":
/*!**************************************!*\
  !*** ./src/card/card.component.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: \"Montserrat\", sans-serif;\n}\n.mat-card {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  display: grid;\n  grid-template-columns: 0.5fr 3fr;\n  grid-template-rows: 1fr;\n  grid-column-gap: 15pt;\n  grid-row-gap: 2pt;\n  grid-template-areas: \" thumbArea contentArea \";\n}\n.mat-card .thumbArea {\n  grid-area: thumbArea;\n  justify-self: left;\n  width: 200px;\n  height: 150px;\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  margin: 0;\n}\n.mat-card .thumbArea img {\n  border-radius: 15px 15px 15px 15px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n}\n.mat-card .mat-card-actions, .mat-card .mat-card-content, .mat-card .mat-card-subtitle {\n  display: flex !important;\n}\n.mat-card .mat-card-content {\n  grid-area: contentArea !important;\n  min-width: 250px;\n  justify-self: left;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.mat-card .mat-card-content .cardHeader {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.mat-card .mat-card-content .cardHeader .mat-mini-fab {\n  box-shadow: none;\n  background-color: white;\n}\n.mat-card .mat-card-content .cardHeader .mat-mini-fab:hover {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  background-color: white;\n}\n.mat-card .mat-card-content .cardHeader .mat-icon {\n  color: black;\n}\n.mat-card .mat-card-content .mat-card-subtitle {\n  border-top: 0.5px solid lightgray !important;\n  justify-content: space-between;\n  padding-top: 10px;\n}\n.mat-card .mat-card-content .mat-card-subtitle strong {\n  vertical-align: super;\n}\n.mat-card .mat-card-content .subElements {\n  margin: 10px;\n}\n.mat-card .mat-card-content a, .mat-card .mat-card-content a:active, .mat-card .mat-card-content a:hover, .mat-card .mat-card-content a:visited, .mat-card .mat-card-content a:link {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jYXJkL0M6XFxVc2Vyc1xcYW1pbmFcXERvY3VtZW50c1xcV09SS1NQQUNFU1xcbmV0ejk4XFxSU1MtVGVzdGFwcFxccnNzLWRlbW8tYXBwL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2NhcmQvQzpcXFVzZXJzXFxhbWluYVxcRG9jdW1lbnRzXFxXT1JLU1BBQ0VTXFxuZXR6OThcXFJTUy1UZXN0YXBwXFxyc3MtZGVtby1hcHAvc3JjXFxjYXJkXFxjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBRUE7RUFBYSxZQUFBO0FDQ2I7QURBQTtFQUFPLFNBQUE7RUFBVyxxQ0FBQTtBQ0tsQjtBQ05BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7QURPSjtBQ0pJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBRE1SO0FDSlE7RUFDSSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FETVo7QUNGSTtFQUNJLHdCQUFBO0FESVI7QUNESTtFQUNJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLHNCQUFBO0VBQ0EsOEJBQUE7QURFUjtBQ0FRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QURFWjtBQ0FZO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBREVkO0FDQ1k7RUFDSSxpSEFBQTtFQUNBLHVCQUFBO0FEQ2hCO0FDRVk7RUFDRSxZQUFBO0FEQWQ7QUNLUTtFQUNJLDRDQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBREhaO0FDS1k7RUFDSSxxQkFBQTtBREhoQjtBQ09RO0VBQ0ksWUFBQTtBRExaO0FDUVE7RUFDSSxlQUFBO0FETloiLCJmaWxlIjoic3JjL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxuYm9keSB7IG1hcmdpbjogMDsgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgfVxuXG4kcHJpbWFyeS1jb2xvcjogIzAwNTA5NztcbiRhY2NlbnQtY29sb3I6ICMzM0IwRTA7XG4kZm9udC1vbi1wcmltYXJ5OiB3aGl0ZTtcblxuQG1peGluIG1pbmktZmFiIHtcbiAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvciAhaW1wb3J0YW50OyBcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbkBtaXhpbiBpY29uLWNvbG9yIHtcbiAgICBjb2xvcjogJGZvbnQtb24tcHJpbWFyeTtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgM2ZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxNXB0O1xuICBncmlkLXJvdy1nYXA6IDJwdDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIgdGh1bWJBcmVhIGNvbnRlbnRBcmVhIFwiO1xufVxuLm1hdC1jYXJkIC50aHVtYkFyZWEge1xuICBncmlkLWFyZWE6IHRodW1iQXJlYTtcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDA7XG59XG4ubWF0LWNhcmQgLnRodW1iQXJlYSBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWF0LWNhcmQgLm1hdC1jYXJkLWFjdGlvbnMsIC5tYXQtY2FyZCAubWF0LWNhcmQtY29udGVudCwgLm1hdC1jYXJkIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cbi5tYXQtY2FyZCAubWF0LWNhcmQtY29udGVudCB7XG4gIGdyaWQtYXJlYTogY29udGVudEFyZWEgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWF0LWNhcmQgLm1hdC1jYXJkLWNvbnRlbnQgLmNhcmRIZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWF0LWNhcmQgLm1hdC1jYXJkLWNvbnRlbnQgLmNhcmRIZWFkZXIgLm1hdC1taW5pLWZhYiB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1jb250ZW50IC5jYXJkSGVhZGVyIC5tYXQtbWluaS1mYWI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWF0LWNhcmQgLm1hdC1jYXJkLWNvbnRlbnQgLmNhcmRIZWFkZXIgLm1hdC1pY29uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1jb250ZW50IC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1jb250ZW50IC5tYXQtY2FyZC1zdWJ0aXRsZSBzdHJvbmcge1xuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG59XG4ubWF0LWNhcmQgLm1hdC1jYXJkLWNvbnRlbnQgLnN1YkVsZW1lbnRzIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLm1hdC1jYXJkIC5tYXQtY2FyZC1jb250ZW50IGEsIC5tYXQtY2FyZCAubWF0LWNhcmQtY29udGVudCBhOmFjdGl2ZSwgLm1hdC1jYXJkIC5tYXQtY2FyZC1jb250ZW50IGE6aG92ZXIsIC5tYXQtY2FyZCAubWF0LWNhcmQtY29udGVudCBhOnZpc2l0ZWQsIC5tYXQtY2FyZCAubWF0LWNhcmQtY29udGVudCBhOmxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCAnLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgM2ZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDE1cHQ7XHJcbiAgICBncmlkLXJvdy1nYXA6IDJwdDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiIHRodW1iQXJlYSBjb250ZW50QXJlYSBcIjtcclxuXHJcbiAgICAgIFxyXG4gICAgLnRodW1iQXJlYSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiB0aHVtYkFyZWE7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1jYXJkLWFjdGlvbnMsIC5tYXQtY2FyZC1jb250ZW50LCAubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBjb250ZW50QXJlYSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAuY2FyZEhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIC5tYXQtbWluaS1mYWIgeyBcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LW1pbmktZmFiOmhvdmVyIHsgXHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3ViRWxlbWVudHMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhLCBhOmFjdGl2ZSwgYTpob3ZlciwgYTp2aXNpdGVkLCBhOmxpbmsge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/card/card.component.ts":
/*!************************************!*\
  !*** ./src/card/card.component.ts ***!
  \************************************/
/*! exports provided: NewsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCardComponent", function() { return NewsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_modals_full_news_popup_full_news_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/full-news-popup/full-news-popup.component */ "./src/app/modals/full-news-popup/full-news-popup.component.ts");




let NewsCardComponent = class NewsCardComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    share() {
        window.open(this.url);
    }
    cropDescription(feedEntry) {
        let s = feedEntry.description;
        s = s.substring(0, 180);
        this.cardDescription = s;
        this.cardDescription = this.cardDescription + '...';
    }
    delete() {
        console.log('me wants to delete');
    }
    openDialog(feedEntry) {
        const data = {
            feedEntry: this.cardContent
        };
        const dialogRef = this.dialog.open(src_app_modals_full_news_popup_full_news_popup_component__WEBPACK_IMPORTED_MODULE_3__["FullNewsPopupComponent"], { data });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed.');
        });
    }
    ngOnInit() {
        if (this.cardContent) {
            this.cropDescription(this.cardContent);
            this.url = this.cardContent.link;
        }
    }
};
NewsCardComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewsCardComponent.prototype, "cardContent", void 0);
NewsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/card/card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.scss */ "./src/card/card.component.scss")).default]
    })
], NewsCardComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/material.module.ts":
/*!********************************!*\
  !*** ./src/material.module.ts ***!
  \********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"],
        ],
        declarations: []
    })
], MaterialModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\amina\Documents\WORKSPACES\netz98\RSS-Testapp\rss-demo-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myText {\n  font-weight: bold;\n  font-size: 1.5rem;\n  line-height: 130%;\n  font-family: sans-serif;\n}\n\n.myLargeText {\n  font-weight: bold;\n  font-size: 2rem;\n  line-height: 100%;\n  font-family: sans-serif;\n}\n\n.myPanel {\n  margin: 0 auto 0 auto;\n  border-width: 2px;\n}\n\n.mySmallPanel {\n  width: 320px;\n}\n\n.myPanelTitleBar {\n  background: steelblue none;\n  color: white;\n}\n\ninput {\n  text-align: right;\n  font-size: 1.5rem;\n  width: 80%;\n}\n\n.myButton {\n  font-size: 1.3rem;\n  height: 1.8rem;\n  font-weight: bold;\n}\n\ntable {\n  width: 100%;\n}\n\ntr {\n  height: 2rem;\n}\n\ndiv tr:nth-child(odd) {\n  background-color: cornsilk;\n}\n\ntd {\n  text-align: right;\n}\n\ntr td:nth-of-type(1) {\n  width: 30%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default myPanel mySmallPanel myText\">\n  <!--panel-->\n  <div class=\"panel-heading text-center myPanelTitleBar\">\n    福利計算\n  </div>\n  <!--body-->\n  <div class=\"panel-body\">\n    <p>原本\n      <br>\n      <input type=\"tel\" [(ngModel)]=\"initValue\"> 円\n    </p>\n    <p>金利(年間)\n      <br>\n      <input type=\"tel\" [(ngModel)]=\"rate\"> %\n    </p>\n    <p>積立金(月額)\n      <br>\n      <input type=\"tel\" [(ngModel)]=\"fixed\"> 円\n    </p>\n    <p>\n      <input type=\"tel\" [(ngModel)]=\"n\">年後\n    </p>\n    <!--show if both box entered-->\n    <div *ngIf=\"initValue && rate && fixed && n\">\n      <p class=\"alert alert-info myLargeText text-center\">\n        {{n}}年後\n        <br>{{calc() | number}} 円\n        <br> 固定積立費用\n        <br> {{ calcfixed() | number}} 円\n        <br> 運用益\n        <br> {{ calc() - calcfixed() | number}} 円\n        <br>\n      </p>\n\n      <p>\n        <button class=\"btn btn-warning btn-block myButton\" (click)=\"clear()\">clear\n\n        </button>\n      </p>\n\n      <p>\n        <button class=\"btn btn-sucess btn-block myButton\" [disabled]=\"!(initValue && rate)\" (click)=\"save()\">save\n        </button>\n      </p>\n\n      <!--details-->\n      <table class=\"table table-bordered table-stripped\">\n        <tr *ngFor=\"let value of calcArray(); let i = index\">\n          <td>{{i+1}}年目</td>\n          <td>{{value | number}} 円</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("initValue")) {
            this.initValue = Number(localStorage.getItem("initValue"));
            this.rate = Number(localStorage.getItem("rate"));
            this.fixed = Number(localStorage.getItem("fixed"));
            this.n = Number(localStorage.getItem("n"));
        }
        else {
            this.clear();
        }
    };
    AppComponent.prototype.calc = function () {
        if (isNaN(this.initValue) ||
            isNaN(this.rate) ||
            isNaN(this.fixed) ||
            isNaN(this.n)) {
            return null;
        }
        var answer = this.initValue;
        var lambda = 1 + this.rate / 100;
        var constant = 12 * this.fixed;
        for (var i = 1; i <= this.n; i++) {
            answer *= lambda;
            answer += constant;
        }
        return Math.floor(answer);
    };
    AppComponent.prototype.calcfixed = function () {
        if (isNaN(this.n) || isNaN(this.fixed)) {
            return null;
        }
        return this.fixed * this.n * 12;
    };
    AppComponent.prototype.calcArray = function () {
        if (isNaN(this.initValue) ||
            isNaN(this.fixed) ||
            isNaN(this.rate) ||
            isNaN(this.n)) {
            return null;
        }
        var answer = this.initValue;
        var lambda = 1 + this.rate / 100;
        var constant = 12 * this.fixed;
        var returnNum = [answer];
        for (var i = 1; i <= this.n; i++) {
            answer *= lambda;
            answer += constant;
            returnNum.push(Math.floor(answer));
        }
        return returnNum;
    };
    AppComponent.prototype.save = function () {
        localStorage.setItem("initValue", this.initValue.toString());
        localStorage.setItem("rate", this.rate.toString());
        localStorage.setItem("fixed", this.fixed.toString());
        localStorage.setItem("n", this.n.toString());
    };
    AppComponent.prototype.clear = function () {
        localStorage.setItem("initValue", "0");
        localStorage.setItem("rate", "0");
        localStorage.setItem("fixed", "0");
        localStorage.setItem("n", "0");
        this.initValue = 0;
        this.rate = 0;
        this.fixed = 0;
        this.n = 0;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aporia2718/angular-modern-webdev-chap5/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
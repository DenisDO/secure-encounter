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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/sign-in-page/sign-in-page.component */ "./src/app/pages/sign-in-page/sign-in-page.component.ts");
/* harmony import */ var _pages_users_page_users_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/users-page/users-page.component */ "./src/app/pages/users-page/users-page.component.ts");
/* harmony import */ var _pages_users_page_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/users-page/user-details/user-details.component */ "./src/app/pages/users-page/user-details/user-details.component.ts");
/* harmony import */ var _pages_users_page_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/users-page/users-list/users-list.component */ "./src/app/pages/users-page/users-list/users-list.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");








var routes = [
    {
        path: 'home',
        component: _pages_sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"]
    },
    {
        path: 'users',
        component: _pages_users_page_users_page_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["CanActivateApplicationPage"]],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _pages_users_page_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__["UsersListComponent"]
            },
            {
                path: 'details',
                component: _pages_users_page_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailsComponent"],
                canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["CanActivateUserDetails"]]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=root_component>\n    <app-header></app-header>\n    <main>\n        <router-outlet></router-outlet>\n    </main>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root_component {\n  display: grid;\n  grid-template-rows: -webkit-max-content 1fr;\n  grid-template-rows: max-content 1fr;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFdFQlxcVGVzdF90YXNrc1xcc2VjdXJlLWVuY291bnRlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLDJDQUFtQztFQUFuQyxtQ0FBbUM7RUFDbkMsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3RfY29tcG9uZW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'secure-encounter';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _pages_sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/sign-in-page/sign-in-page.component */ "./src/app/pages/sign-in-page/sign-in-page.component.ts");
/* harmony import */ var _pages_users_page_users_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/users-page/users-page.component */ "./src/app/pages/users-page/users-page.component.ts");
/* harmony import */ var _pages_users_page_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/users-page/user-details/user-details.component */ "./src/app/pages/users-page/user-details/user-details.component.ts");
/* harmony import */ var _pages_users_page_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/users-page/users-list/users-list.component */ "./src/app/pages/users-page/users-list/users-list.component.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _pages_users_page_users_page_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/users-page/users-page.service */ "./src/app/pages/users-page/users-page.service.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pages_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _pages_sign_in_page_sign_in_page_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
                _pages_users_page_users_page_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"],
                _pages_users_page_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_12__["UsersListComponent"],
                _pages_users_page_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [
                _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                _pages_users_page_users_page_service__WEBPACK_IMPORTED_MODULE_15__["UsersPageService"],
                _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["CanActivateApplicationPage"],
                _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["CanActivateUserDetails"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: CanActivateApplicationPage, CanActivateUserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateApplicationPage", function() { return CanActivateApplicationPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateUserDetails", function() { return CanActivateUserDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_pages_users_page_users_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/users-page/users-page.service */ "./src/app/pages/users-page/users-page.service.ts");




var CanActivateApplicationPage = /** @class */ (function () {
    function CanActivateApplicationPage(router) {
        this.router = router;
    }
    CanActivateApplicationPage.prototype.canActivate = function (route, state) {
        var jwt = localStorage.getItem('authtoken');
        if (jwt) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    };
    CanActivateApplicationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CanActivateApplicationPage);
    return CanActivateApplicationPage;
}());

var CanActivateUserDetails = /** @class */ (function () {
    function CanActivateUserDetails(router, usersPageService) {
        this.router = router;
        this.usersPageService = usersPageService;
    }
    CanActivateUserDetails.prototype.canActivate = function (route, state) {
        if (this.usersPageService.selectedUser) {
            return true;
        }
        else {
            this.router.navigate(['/users/list']);
            return false;
        }
    };
    CanActivateUserDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_pages_users_page_users_page_service__WEBPACK_IMPORTED_MODULE_3__["UsersPageService"]])
    ], CanActivateUserDetails);
    return CanActivateUserDetails;
}());



/***/ }),

/***/ "./src/app/pages/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"logo\" [routerLink]=\"['/home']\">\n    <img class=\"logo_icon\" src=\"../../../assets/images/lock-orange.svg\" alt=\"logo\">\n    <div class=\"logo_text_container\">\n      <h1 class=\"logo_text primary\">Secure</h1>\n      <h1 class=\"logo_text secondary\">Encounter</h1>\n    </div>\n  </div>\n\n  <div class=\"menu\">\n    <img class=\"menu_item menu_burger\" *ngIf=\"router.url === '/home'\" src=\"../../../assets/images/Hamburger-white.svg\"\n      alt=\"menu\">\n    <img class=\"menu_item menu_logout\" (click)=\"signOut()\" *ngIf=\"router.url !== '/home'\"\n      src=\"../../../assets/images/Logout-white.svg\" alt=\"exit\">\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/pages/header/header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  height: 48px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-image: linear-gradient(to bottom, #011826, #023859);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n  header .logo {\n    display: flex;\n    align-items: center;\n    cursor: pointer; }\n  header .logo .logo_icon {\n      height: 24px;\n      margin: 12px;\n      margin-right: 8px; }\n  header .logo .logo_text_container {\n      display: flex; }\n  header .logo .logo_text_container .logo_text {\n        font-size: 1.25em;\n        font-weight: 800; }\n  header .logo .logo_text_container .primary {\n        color: #9AAFBB; }\n  header .logo .logo_text_container .secondary {\n        color: #F1EBF2; }\n  header .menu .menu_item:hover {\n    cursor: pointer; }\n  header .menu .menu_burger {\n    height: 48px;\n    margin-right: 5px; }\n  header .menu .menu_logout {\n    height: 22px;\n    margin: 20px 17px 13px 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyL0U6XFxXRUJcXFRlc3RfdGFza3NcXHNlY3VyZS1lbmNvdW50ZXIvc3JjXFxhcHBcXHBhZ2VzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiw4REFBOEQ7RUFDOUQsdUNBQXVDLEVBQUE7RUFOM0M7SUFTUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtFQVh2QjtNQWNZLFlBQVk7TUFDWixZQUFZO01BQ1osaUJBQWlCLEVBQUE7RUFoQjdCO01Bb0JZLGFBQWEsRUFBQTtFQXBCekI7UUF1QmdCLGlCQUFpQjtRQUNqQixnQkFBZ0IsRUFBQTtFQXhCaEM7UUE0QmdCLGNBQWMsRUFBQTtFQTVCOUI7UUFnQ2dCLGNBQWMsRUFBQTtFQWhDOUI7SUF1Q1ksZUFBZSxFQUFBO0VBdkMzQjtJQTJDWSxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUE1QzdCO0lBZ0RZLFlBQVk7SUFDWiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDExODI2LCAjMDIzODU5KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgLmxvZ29faWNvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvX3RleHRfY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgIC5sb2dvX3RleHQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJpbWFyeSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzlBQUZCQjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnNlY29uZGFyeSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0YxRUJGMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWVudSB7XHJcbiAgICAgICAgLm1lbnVfaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW51X2J1cmdlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVudV9sb2dvdXQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAxN3B4IDEzcHggMTNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/sign-in-page/sign-in-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/sign-in-page/sign-in-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"signin_page_container\">\n  <div class=\"container_striped\"></div>\n  <div class=\"container_main\">\n\n    <main>\n      <div class=\"signin_card_container\">\n        <form [formGroup]=\"signInForm\" (submit)=\"signIn($event)\">\n          <div class=\"card_header\">\n            <h1>Sign In</h1>\n          </div>\n\n          <div class=\"card_fields\">\n            <input type=\"text\" placeholder=\"Client ID\" formControlName=\"uid\" required>\n            <input type=\"text\" placeholder=\"User Name\" formControlName=\"email\" required>\n            <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n            <label class=\"checkbox_label\">\n              <input type=\"checkbox\" checked=\"checked\" name=\"remember\">Remember me on this computer\n            </label>\n            <button type=\"submit\" [disabled]=\"signInForm.status === 'INVALID'\">Sign In</button>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"forgot_psw_container\">\n        <a href=\"javascript:void(0);\">Forgot your username or password?</a>\n      </div>\n    </main>\n\n    <footer class=\"rights_container\">\n      <span>© 2020 Bridgewing Technologies. All Rights Reserved.</span> | <span><a href=\"javascript:void(0);\">Terms of\n          Use</a> and <a href=\"javascript:void(0);\">Policy Statements</a></span>\n    </footer>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/sign-in-page/sign-in-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/sign-in-page/sign-in-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signin_page_container {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 1fr 2fr; }\n  .signin_page_container .container_striped {\n    background: url('subtle_stripes.png'); }\n  .signin_page_container .container_main {\n    background-color: #F1F2EB;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center; }\n  .signin_page_container .container_main main {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      position: relative;\n      top: -30%; }\n  .signin_page_container .container_main main .signin_card_container {\n        background-color: #F1F2EB;\n        box-shadow: 0 0 5px #00000069;\n        border-radius: 5px;\n        width: 360px;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n        padding: 20px;\n        margin-bottom: 20px; }\n  .signin_page_container .container_main main .signin_card_container .card_header {\n          text-align: center;\n          margin-bottom: 10px; }\n  .signin_page_container .container_main main .signin_card_container .card_header h1 {\n            font-size: 1.2em;\n            font-weight: 800; }\n  .signin_page_container .container_main main .signin_card_container .card_fields {\n          display: flex;\n          flex-direction: column;\n          justify-content: space-around;\n          align-items: center; }\n  .signin_page_container .container_main main .signin_card_container .card_fields > input {\n            width: 280px;\n            height: 35px;\n            padding: 5px;\n            box-sizing: border-box;\n            margin-bottom: 15px;\n            border: none;\n            box-shadow: 0 1px 2px #0000003a; }\n  .signin_page_container .container_main main .signin_card_container .card_fields > input::-webkit-input-placeholder {\n              font-style: italic; }\n  .signin_page_container .container_main main .signin_card_container .card_fields .checkbox_label {\n            margin-bottom: 20px; }\n  .signin_page_container .container_main main .signin_card_container .card_fields button {\n            background-color: #84b13f;\n            color: white;\n            border: none;\n            padding: 10px;\n            box-sizing: border-box;\n            width: 100px;\n            border-radius: 5px; }\n  .signin_page_container .container_main main .signin_card_container .card_fields button:hover:not(:disabled) {\n              box-shadow: 0 0 3px #00000069;\n              cursor: pointer; }\n  .signin_page_container .container_main main .signin_card_container .card_fields button:disabled {\n              background-color: #777777; }\n  .signin_page_container .container_main main .forgot_psw_container a {\n        color: #84b13f; }\n  .signin_page_container .container_main .rights_container {\n      padding: 10px;\n      font-size: 0.7em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbi1pbi1wYWdlL0U6XFxXRUJcXFRlc3RfdGFza3NcXHNlY3VyZS1lbmNvdW50ZXIvc3JjXFxhcHBcXHBhZ2VzXFxzaWduLWluLXBhZ2VcXHNpZ24taW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCLEVBQUE7RUFIL0I7SUFNUSxxQ0FBMEQsRUFBQTtFQU5sRTtJQVVRLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUIsRUFBQTtFQWQzQjtNQWlCWSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsU0FBUyxFQUFBO0VBckJyQjtRQXdCZ0IseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsbUJBQW1CLEVBQUE7RUFqQ25DO1VBb0NvQixrQkFBa0I7VUFDbEIsbUJBQW1CLEVBQUE7RUFyQ3ZDO1lBd0N3QixnQkFBZ0I7WUFDaEIsZ0JBQWdCLEVBQUE7RUF6Q3hDO1VBOENvQixhQUFhO1VBQ2Isc0JBQXNCO1VBQ3RCLDZCQUE2QjtVQUM3QixtQkFBbUIsRUFBQTtFQWpEdkM7WUFvRHdCLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLHNCQUFzQjtZQUN0QixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLCtCQUErQixFQUFBO0VBMUR2RDtjQTZENEIsa0JBQWtCLEVBQUE7RUE3RDlDO1lBa0V3QixtQkFBbUIsRUFBQTtFQWxFM0M7WUFzRXdCLHlCQUF5QjtZQUN6QixZQUFZO1lBQ1osWUFBWTtZQUNaLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsWUFBWTtZQUNaLGtCQUFrQixFQUFBO0VBNUUxQztjQStFNEIsNkJBQTZCO2NBQzdCLGVBQWUsRUFBQTtFQWhGM0M7Y0FvRjRCLHlCQUF5QixFQUFBO0VBcEZyRDtRQTJGZ0IsY0FBYyxFQUFBO0VBM0Y5QjtNQWdHWSxhQUFhO01BQ2IsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWduLWluLXBhZ2Uvc2lnbi1pbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ25pbl9wYWdlX2NvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xyXG5cclxuICAgIC5jb250YWluZXJfc3RyaXBlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3VidGxlX3N0cmlwZXMucG5nKTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyX21haW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRUI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IC0zMCU7XHJcblxyXG4gICAgICAgICAgICAuc2lnbmluX2NhcmRfY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRUI7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDAwMDA2OTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhcmRfaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2FyZF9maWVsZHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmID4gaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjMDAwMDAwM2E7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrYm94X2xhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NGIxM2Y7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCAjMDAwMDAwNjk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZvcmdvdF9wc3dfY29udGFpbmVyIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4NGIxM2Y7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodHNfY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/sign-in-page/sign-in-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/sign-in-page/sign-in-page.component.ts ***!
  \**************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.initSignInForm();
    };
    SignInComponent.prototype.initSignInForm = function () {
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            uid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    SignInComponent.prototype.signIn = function (e) {
        var _this = this;
        e.preventDefault();
        this.authService.signIn(this.signInForm.value)
            .subscribe(function (data) {
            if (data.isOk) {
                _this.router.navigate(['users/list']);
                localStorage.setItem('authtoken', data.tokens.jwt);
            }
            else {
                console.log('Auth error: ', data.errorMessage);
            }
        });
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in-page.component.html */ "./src/app/pages/sign-in-page/sign-in-page.component.html"),
            styles: [__webpack_require__(/*! ./sign-in-page.component.scss */ "./src/app/pages/sign-in-page/sign-in-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/pages/users-page/user-details/user-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/users-page/user-details/user-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/users-page/user-details/user-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/users-page/user-details/user-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzLXBhZ2UvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/users-page/user-details/user-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/users-page/user-details/user-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users-page.service */ "./src/app/pages/users-page/users-page.service.ts");



var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(userPageService) {
        this.userPageService = userPageService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.currentUser = this.userPageService.selectedUser;
    };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/pages/users-page/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.scss */ "./src/app/pages/users-page/user-details/user-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_page_service__WEBPACK_IMPORTED_MODULE_2__["UsersPageService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/users-page/users-list/users-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/users-page/users-list/users-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"users_list_page_container\">\r\n    <div class=\"users_list\">\r\n        <div class=\"users_list_title_container\">\r\n            <img src=\"../../../../assets/images/Temporary.png\" alt=\"user icon\">\r\n            <h1>Scheduled Appointments</h1>\r\n        </div>\r\n        <div class=\"users_list_content_container\">\r\n            <div *ngFor=\"let patient of patients\" class=\"user_item\" (click)=\"selectUser(patient)\">\r\n                <div *ngIf=\"patient.imageData; then imageData else defaultImage\"></div>\r\n                <ng-template #imageData><img src=\"patient.imageData\" alt=\"Avatar\" class=\"user_item_img\"></ng-template>\r\n                <ng-template #defaultImage><img src=\"../../../../assets/images/Bust-Female-124x124.png\" alt=\"Avatar\" class=\"user_item_img\"></ng-template>\r\n                <div class=\"user_item_overlay\">\r\n                    <div class=\"user_item_content\">{{ patient.firstName }} {{ patient.lastName }}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/users-page/users-list/users-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/users-page/users-list/users-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".users_list_page_container {\n  height: 100%;\n  padding: 10px 20px;\n  box-sizing: border-box; }\n  .users_list_page_container .users_list {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    background-color: white;\n    padding: 10px 20px;\n    margin-bottom: 10px; }\n  .users_list_page_container .users_list .users_list_title_container {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      margin-bottom: 20px; }\n  .users_list_page_container .users_list .users_list_title_container img {\n        margin-right: 10px; }\n  .users_list_page_container .users_list .users_list_title_container h1 {\n        font-size: 12pt;\n        font-weight: 600; }\n  .users_list_page_container .users_list .users_list_content_container {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      width: 100%; }\n  .users_list_page_container .users_list .users_list_content_container .user_item {\n        position: relative;\n        width: 120px;\n        margin-right: 20px; }\n  .users_list_page_container .users_list .users_list_content_container .user_item:last-child {\n          margin-right: 0; }\n  .users_list_page_container .users_list .users_list_content_container .user_item:hover {\n          cursor: pointer; }\n  .users_list_page_container .users_list .users_list_content_container .user_item:hover .user_item_overlay {\n            opacity: 1; }\n  .users_list_page_container .users_list .users_list_content_container .user_item .user_item_img {\n          display: block;\n          width: 100%; }\n  .users_list_page_container .users_list .users_list_content_container .user_item .user_item_overlay {\n          position: absolute;\n          bottom: 0;\n          height: 30px;\n          width: 100%;\n          opacity: 0;\n          transition: .5s ease;\n          background-color: #00000030; }\n  .users_list_page_container .users_list .users_list_content_container .user_item .user_item_overlay .user_item_content {\n            color: white;\n            font-size: 6pt;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMtcGFnZS91c2Vycy1saXN0L0U6XFxXRUJcXFRlc3RfdGFza3NcXHNlY3VyZS1lbmNvdW50ZXIvc3JjXFxhcHBcXHBhZ2VzXFx1c2Vycy1wYWdlXFx1c2Vycy1saXN0XFx1c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTtFQUgxQjtJQU1RLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VBWjNCO01BZVksYUFBYTtNQUNiLDJCQUEyQjtNQUMzQixtQkFBbUI7TUFDbkIsbUJBQW1CLEVBQUE7RUFsQi9CO1FBcUJnQixrQkFBa0IsRUFBQTtFQXJCbEM7UUF5QmdCLGVBQWU7UUFDZixnQkFBZ0IsRUFBQTtFQTFCaEM7TUErQlksYUFBYTtNQUNiLDJCQUEyQjtNQUMzQixtQkFBbUI7TUFDbkIsV0FBVyxFQUFBO0VBbEN2QjtRQXFDZ0Isa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixrQkFBa0IsRUFBQTtFQXZDbEM7VUEwQ29CLGVBQWUsRUFBQTtFQTFDbkM7VUE4Q29CLGVBQWUsRUFBQTtFQTlDbkM7WUFpRHdCLFVBQVUsRUFBQTtFQWpEbEM7VUFzRG9CLGNBQWM7VUFDZCxXQUFXLEVBQUE7RUF2RC9CO1VBMkRvQixrQkFBa0I7VUFDbEIsU0FBUztVQUNULFlBQVk7VUFDWixXQUFXO1VBQ1gsVUFBVTtVQUNWLG9CQUFvQjtVQUNwQiwyQkFBMkIsRUFBQTtFQWpFL0M7WUFvRXdCLFlBQVk7WUFDWixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLFFBQVE7WUFDUixTQUFTO1lBQ1QsZ0NBQWdDO1lBQ2hDLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlcnMtcGFnZS91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcnNfbGlzdF9wYWdlX2NvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgIC51c2Vyc19saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgIC51c2Vyc19saXN0X3RpdGxlX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51c2Vyc19saXN0X2NvbnRlbnRfY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIC51c2VyX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZXJfaXRlbV9vdmVybGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnVzZXJfaXRlbV9pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC51c2VyX2l0ZW1fb3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMzA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VyX2l0ZW1fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2cHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/users-page/users-list/users-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/users-page/users-list/users-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users-page.service */ "./src/app/pages/users-page/users-page.service.ts");



var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(usersPageService) {
        this.usersPageService = usersPageService;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersPageService.getPatientsList()
            .subscribe(function (resp) {
            _this.patients = resp.payload.pageData;
        });
    };
    UsersListComponent.prototype.selectUser = function (patient) {
        this.usersPageService.openUserDetails(patient);
    };
    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/pages/users-page/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.scss */ "./src/app/pages/users-page/users-list/users-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_page_service__WEBPACK_IMPORTED_MODULE_2__["UsersPageService"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/pages/users-page/users-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/users-page/users-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"users_page_container\">\r\n    <header>\r\n        <nav *ngIf=\"router.url === '/users/list'\" class=\"users_page_navigation\">\r\n            <img [routerLink]=\"['/home']\" src=\"../../../assets/images/home.svg\" alt=\"home\">\r\n            <a href=\"javascript:void(0);\">\r\n                <img src=\"../../../assets/images/Add-icon.png\" alt=\"add\">\r\n                Add New Patient\r\n            </a>\r\n        </nav>\r\n        <nav *ngIf=\"router.url === '/users/details' && currentUser\" class=\"user_details_navigation\">\r\n            <span><</span> <span>{{ currentUser.firstName }} {{ currentUser.lastName }}</span>\r\n        </nav>\r\n        <nav class=\"users_page_search\">\r\n            <input *ngIf=\"router.url === '/users/list'\" type=\"text\" placeholder=\"Search\" name=\"search\">\r\n        </nav>\r\n    </header>\r\n    <main>\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/users-page/users-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/users-page/users-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".users_page_container {\n  height: 100%; }\n  .users_page_container header {\n    width: 100%; }\n  .users_page_container header nav {\n      height: 48px; }\n  .users_page_container header nav.users_page_navigation {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      background-color: #F1F2EB;\n      padding: 0 12px; }\n  .users_page_container header nav.users_page_navigation > img {\n        height: 20px; }\n  .users_page_container header nav.users_page_navigation > img:hover {\n          cursor: pointer; }\n  .users_page_container header nav.users_page_navigation a {\n        font-size: 10pt;\n        color: #84b13f; }\n  .users_page_container header nav.users_page_navigation a img {\n          height: 13px; }\n  .users_page_container header nav.users_page_search {\n      display: flex;\n      justify-content: center;\n      background-color: #03658C; }\n  .users_page_container header nav.users_page_search input {\n        width: 430px;\n        border: none;\n        border-radius: 50px;\n        margin: 7px;\n        padding: 10px;\n        box-sizing: border-box; }\n  .users_page_container header nav.users_page_search input::-webkit-input-placeholder {\n          font-style: italic; }\n  .users_page_container main {\n    height: 100%;\n    background-color: #E6E6E6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMtcGFnZS9FOlxcV0VCXFxUZXN0X3Rhc2tzXFxzZWN1cmUtZW5jb3VudGVyL3NyY1xcYXBwXFxwYWdlc1xcdXNlcnMtcGFnZVxcdXNlcnMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTtFQURoQjtJQUlRLFdBQVcsRUFBQTtFQUpuQjtNQU9ZLFlBQVksRUFBQTtFQVB4QjtNQVdZLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QixlQUFlLEVBQUE7RUFmM0I7UUFrQmdCLFlBQVksRUFBQTtFQWxCNUI7VUFxQm9CLGVBQWUsRUFBQTtFQXJCbkM7UUEwQmdCLGVBQWU7UUFDZixjQUFjLEVBQUE7RUEzQjlCO1VBOEJvQixZQUFZLEVBQUE7RUE5QmhDO01Bb0NZLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIseUJBQXlCLEVBQUE7RUF0Q3JDO1FBeUNnQixZQUFZO1FBQ1osWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsYUFBYTtRQUNiLHNCQUFzQixFQUFBO0VBOUN0QztVQWlEb0Isa0JBQWtCLEVBQUE7RUFqRHRDO0lBd0RRLFlBQVk7SUFDWix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzLXBhZ2UvdXNlcnMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2Vyc19wYWdlX2NvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2LnVzZXJzX3BhZ2VfbmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjJFQjtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMnB4O1xyXG5cclxuICAgICAgICAgICAgJiA+IGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjODRiMTNmO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXYudXNlcnNfcGFnZV9zZWFyY2gge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzNjU4QztcclxuXHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MzBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDdweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgICAgICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWluIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/users-page/users-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/users-page/users-page.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-page.service */ "./src/app/pages/users-page/users-page.service.ts");




var UsersComponent = /** @class */ (function () {
    function UsersComponent(router, activatedRoute, userPageService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userPageService = userPageService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.url.subscribe(function () {
            if (_this.router.url === '/users/details') {
                _this.currentUser = _this.userPageService.selectedUser;
            }
        });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users-page.component.html */ "./src/app/pages/users-page/users-page.component.html"),
            styles: [__webpack_require__(/*! ./users-page.component.scss */ "./src/app/pages/users-page/users-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _users_page_service__WEBPACK_IMPORTED_MODULE_3__["UsersPageService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/pages/users-page/users-page.service.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/users-page/users-page.service.ts ***!
  \********************************************************/
/*! exports provided: UsersPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageService", function() { return UsersPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_configuration_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/configuration/config */ "./src/app/shared/configuration/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UsersPageService = /** @class */ (function () {
    function UsersPageService(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
    }
    UsersPageService.prototype.getPatientsList = function () {
        return this.http.get(src_app_shared_configuration_config__WEBPACK_IMPORTED_MODULE_2__["BASE_PATIENTS_LIST_URL"], this.getHeaders());
    };
    UsersPageService.prototype.openUserDetails = function (user) {
        this.selectedUser = user;
        this.router.navigate(['/users/details']);
    };
    UsersPageService.prototype.closeUserDetails = function () {
        this.selectedUser = null;
        this.router.navigate(['/users/list']);
    };
    UsersPageService.prototype.getHeaders = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': 'Bearer ' + this.authService.getJWT()
            })
        };
    };
    UsersPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UsersPageService);
    return UsersPageService;
}());



/***/ }),

/***/ "./src/app/shared/configuration/config.ts":
/*!************************************************!*\
  !*** ./src/app/shared/configuration/config.ts ***!
  \************************************************/
/*! exports provided: BASE_AUTH_URL, BASE_PATIENTS_LIST_URL, DEFAULT_AUTH_LOCATION_VALUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_AUTH_URL", function() { return BASE_AUTH_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATIENTS_LIST_URL", function() { return BASE_PATIENTS_LIST_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_AUTH_LOCATION_VALUE", function() { return DEFAULT_AUTH_LOCATION_VALUE; });
var BASE_AUTH_URL = 'http://jerichocentral.quickpractice.com:9876/JerichoCentralAPI/api/Token/Authenticate';
var BASE_PATIENTS_LIST_URL = 'http://jerichocentral.quickpractice.com:9876/JerichoCentralAPI/api/Patients';
var DEFAULT_AUTH_LOCATION_VALUE = 0;


/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_configuration_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/configuration/config */ "./src/app/shared/configuration/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.signIn = function (creds) {
        var body = this.addHiddenFields(creds);
        return this.http.post(_shared_configuration_config__WEBPACK_IMPORTED_MODULE_3__["BASE_AUTH_URL"], body);
    };
    AuthService.prototype.signOut = function () {
        localStorage.removeItem('authtoken');
        this.router.navigate(['/home']);
    };
    AuthService.prototype.addHiddenFields = function (creds) {
        return {
            clientId: creds.uid,
            userName: creds.email,
            password: creds.password,
            authLocation: _shared_configuration_config__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_AUTH_LOCATION_VALUE"]
        };
    };
    AuthService.prototype.getJWT = function () {
        return localStorage.getItem('authtoken');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\WEB\Test_tasks\secure-encounter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
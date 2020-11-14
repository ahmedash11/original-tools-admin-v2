(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var users_tabs_component_1 = __webpack_require__(/*! ./users-tabs/users-tabs.component */ "./src/app/users/users-tabs/users-tabs.component.ts");
var routes = [
    {
        path: '',
        component: users_tabs_component_1.UsersTabsComponent
    },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());
exports.UsersRoutingModule = UsersRoutingModule;


/***/ }),

/***/ "./src/app/users/users-tabs/users-tabs.component.html":
/*!************************************************************!*\
  !*** ./src/app/users/users-tabs/users-tabs.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\n    <kt-generic-list\n      *ngIf=\"authModel\"\n      [modelData]=\"authModel\"\n      [query]=\"authQuery\"\n      [title]=\"'User accounts'\"\n      [gate]=\"authAPI\"\n      (customActionClickEvent)=\"verifyAccount($event)\"\n    ></kt-generic-list>\n</kt-portlet>\n"

/***/ }),

/***/ "./src/app/users/users-tabs/users-tabs.component.scss":
/*!************************************************************!*\
  !*** ./src/app/users/users-tabs/users-tabs.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLXRhYnMvdXNlcnMtdGFicy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/users-tabs/users-tabs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/users-tabs/users-tabs.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var crud_service_1 = __webpack_require__(/*! ../../shared/_services/crud.service */ "./src/app/shared/_services/crud.service.ts");
var crud_1 = __webpack_require__(/*! ../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var UsersTabsComponent = /** @class */ (function () {
    function UsersTabsComponent(modalService, _crudService, layoutUtils) {
        this.modalService = modalService;
        this._crudService = _crudService;
        this.layoutUtils = layoutUtils;
        this.authQuery = {};
        this.authAPI = 'users';
        this.title = 'Auth';
        this.authModel = {
            form: {
                wrapperKey: 'auth',
                type: 'special',
                endPoint: 'api/users',
                httpMethod: 'POST',
                groups: [
                    {
                        title: 'User Data',
                        inputs: [
                            {
                                name: 'Name',
                                type: 'string',
                                gate: 'name',
                                required: true
                            },
                            {
                                name: 'Email',
                                type: 'string',
                                gate: 'email',
                                email: true,
                                required: true
                            },
                            {
                                name: 'Phone',
                                type: 'string',
                                gate: 'phone',
                                required: false
                            }
                        ]
                    }
                ]
            },
            list: [
                {
                    display: 'ID',
                    type: 'number',
                    key: 'id',
                    search: true,
                    searchKey: 'id'
                },
                {
                    display: 'Name',
                    type: 'string',
                    key: 'name'
                },
                {
                    display: 'Email',
                    type: 'string',
                    key: 'email',
                    search: true,
                    searchKey: 'email'
                },
                {
                    display: 'Phone',
                    type: 'number',
                    key: 'phone'
                },
                {
                    display: 'Actions',
                    type: 'array',
                    key: '',
                    actions: {
                        delete: true,
                        view: false,
                        edit: true
                        // custom: {
                        //   label: 'Verify',
                        //   icon: 'check',
                        //   disableKey: 'verified'
                        // }
                    }
                }
            ]
        };
    }
    UsersTabsComponent.prototype.ngOnInit = function () { };
    UsersTabsComponent = __decorate([
        core_1.Component({
            selector: 'kt-users-tabs',
            template: __webpack_require__(/*! ./users-tabs.component.html */ "./src/app/users/users-tabs/users-tabs.component.html"),
            styles: [__webpack_require__(/*! ./users-tabs.component.scss */ "./src/app/users/users-tabs/users-tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            crud_service_1.CRUDService,
            crud_1.LayoutUtilsService])
    ], UsersTabsComponent);
    return UsersTabsComponent;
}());
exports.UsersTabsComponent = UsersTabsComponent;


/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var users_routing_module_1 = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var partials_module_1 = __webpack_require__(/*! ../partials/partials.module */ "./src/app/partials/partials.module.ts");
var users_tabs_component_1 = __webpack_require__(/*! ./users-tabs/users-tabs.component */ "./src/app/users/users-tabs/users-tabs.component.ts");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            declarations: [
                users_tabs_component_1.UsersTabsComponent,
            ],
            imports: [
                common_1.CommonModule,
                users_routing_module_1.UsersRoutingModule,
                shared_module_1.SharedModule,
                partials_module_1.PartialsModule
            ],
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;


/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map
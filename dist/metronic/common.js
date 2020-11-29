(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/brands/brands-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/brands/brands-routing.module.ts ***!
  \*************************************************/
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
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/brands/list/list.component.ts");
var routes = [
    {
        path: '',
        component: list_component_1.ListComponent
    }
];
var BrandsRoutingModule = /** @class */ (function () {
    function BrandsRoutingModule() {
    }
    BrandsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], BrandsRoutingModule);
    return BrandsRoutingModule;
}());
exports.BrandsRoutingModule = BrandsRoutingModule;


/***/ }),

/***/ "./src/app/brands/brands.module.ts":
/*!*****************************************!*\
  !*** ./src/app/brands/brands.module.ts ***!
  \*****************************************/
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
var brands_routing_module_1 = __webpack_require__(/*! ./brands-routing.module */ "./src/app/brands/brands-routing.module.ts");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var partials_module_1 = __webpack_require__(/*! ../partials/partials.module */ "./src/app/partials/partials.module.ts");
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/brands/list/list.component.ts");
var BrandsModule = /** @class */ (function () {
    function BrandsModule() {
    }
    BrandsModule = __decorate([
        core_1.NgModule({
            declarations: [list_component_1.ListComponent],
            imports: [
                common_1.CommonModule,
                brands_routing_module_1.BrandsRoutingModule,
                shared_module_1.SharedModule,
                partials_module_1.PartialsModule
            ]
        })
    ], BrandsModule);
    return BrandsModule;
}());
exports.BrandsModule = BrandsModule;


/***/ }),

/***/ "./src/app/brands/list/list.component.html":
/*!*************************************************!*\
  !*** ./src/app/brands/list/list.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\n  <kt-generic-list\n    *ngIf=\"brandsModel\"\n    [modelData]=\"brandsModel\"\n    [query]=\"brandsQuery\"\n    [title]=\"'Brand'\"\n    [gate]=\"brandsAPI\"\n  ></kt-generic-list>\n</kt-portlet>\n"

/***/ }),

/***/ "./src/app/brands/list/list.component.scss":
/*!*************************************************!*\
  !*** ./src/app/brands/list/list.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5kcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/brands/list/list.component.ts":
/*!***********************************************!*\
  !*** ./src/app/brands/list/list.component.ts ***!
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var crud_service_1 = __webpack_require__(/*! ../../shared/_services/crud.service */ "./src/app/shared/_services/crud.service.ts");
var crud_1 = __webpack_require__(/*! ../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var ListComponent = /** @class */ (function () {
    function ListComponent(modalService, _crudService, layoutUtils) {
        this.modalService = modalService;
        this._crudService = _crudService;
        this.layoutUtils = layoutUtils;
        this.brandsQuery = {};
        this.brandsAPI = 'brands';
        this.title = 'brands';
        this.brandsModel = {
            form: {
                endPoint: 'api/brands',
                httpMethod: 'POST',
                groups: [
                    {
                        title: 'Brand Data',
                        inputs: [
                            {
                                name: 'Title',
                                type: 'string',
                                gate: 'title',
                                required: true
                            },
                            {
                                name: 'Meta Title',
                                type: 'string',
                                gate: 'meta_title',
                            },
                            {
                                name: 'Slug',
                                type: 'string',
                                gate: 'slug',
                            },
                            {
                                name: 'Active',
                                type: 'boolean',
                                gate: 'active',
                            },
                            {
                                name: 'Description',
                                type: 'textarea',
                                gate: 'description'
                            },
                            {
                                name: 'Meta Description',
                                type: 'textarea',
                                gate: 'meta_description'
                            },
                            {
                                name: 'Image',
                                type: 'file',
                                gate: 'img'
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
                    display: 'Title',
                    type: 'string',
                    key: 'title',
                    search: true,
                    searchKey: 'title'
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
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'kt-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/brands/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/brands/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            crud_service_1.CRUDService,
            crud_1.LayoutUtilsService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/categories/categories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
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
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/categories/list/list.component.ts");
var routes = [
    {
        path: '',
        component: list_component_1.ListComponent
    }
];
var CategoriesRoutingModule = /** @class */ (function () {
    function CategoriesRoutingModule() {
    }
    CategoriesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], CategoriesRoutingModule);
    return CategoriesRoutingModule;
}());
exports.CategoriesRoutingModule = CategoriesRoutingModule;


/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
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
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var partials_module_1 = __webpack_require__(/*! ../partials/partials.module */ "./src/app/partials/partials.module.ts");
var categories_routing_module_1 = __webpack_require__(/*! ./categories-routing.module */ "./src/app/categories/categories-routing.module.ts");
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/categories/list/list.component.ts");
var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = __decorate([
        core_1.NgModule({
            declarations: [list_component_1.ListComponent],
            imports: [
                common_1.CommonModule,
                categories_routing_module_1.CategoriesRoutingModule,
                partials_module_1.PartialsModule,
                shared_module_1.SharedModule
            ]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());
exports.CategoriesModule = CategoriesModule;


/***/ }),

/***/ "./src/app/categories/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/categories/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\n  <kt-generic-list\n    *ngIf=\"categoriesModel\"\n    [modelData]=\"categoriesModel\"\n    [query]=\"categoriesQuery\"\n    [title]=\"'Category'\"\n    [gate]=\"categoriesAPI\"\n  ></kt-generic-list>\n</kt-portlet>\n"

/***/ }),

/***/ "./src/app/categories/list/list.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/categories/list/list.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/categories/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/categories/list/list.component.ts ***!
  \***************************************************/
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
var ListComponent = /** @class */ (function () {
    function ListComponent(modalService, _crudService, layoutUtils) {
        this.modalService = modalService;
        this._crudService = _crudService;
        this.layoutUtils = layoutUtils;
        this.categoriesQuery = {};
        this.categoriesAPI = 'categories';
        this.title = 'categories';
        this.categoriesModel = {
            form: {
                wrapperKey: 'categories',
                // type: 'special',
                endPoint: 'api/categories',
                httpMethod: 'POST',
                groups: [
                    {
                        title: 'Category Data',
                        inputs: [
                            {
                                name: 'Title',
                                type: 'string',
                                gate: 'title',
                                required: true
                            },
                            {
                                name: 'Description',
                                type: 'string',
                                gate: 'description',
                            },
                            {
                                name: 'Image',
                                type: 'file',
                                gate: 'img'
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
                    display: 'Title',
                    type: 'string',
                    key: 'title',
                    search: true,
                    searchKey: 'title'
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
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'kt-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/categories/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/categories/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            crud_service_1.CRUDService,
            crud_1.LayoutUtilsService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/posts/list/list.component.html":
/*!************************************************!*\
  !*** ./src/app/posts/list/list.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet-header [title]=\"'Posts'\" [class]=\"'kt-portlet__head--lg'\">\n</kt-portlet-header>\n\n<mat-spinner\n  [hidden]=\"loader || listData\"\n  [diameter]=\"30\"\n></mat-spinner>\n\n<mat-card\n  class=\"example-card\"\n  *ngFor=\"let item of listData\"\n  style=\"margin-bottom: 20px\"\n>\n  <mat-card-header>\n    <mat-card-title>{{ item.title }}</mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <p>\n      {{ item.body }}\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button (click)=\"open(content, item.id)\">\n      COMMENTS\n    </button>\n  </mat-card-actions>\n</mat-card>\n\n<div>\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Comments</h4>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"d('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <mat-spinner [hidden]=\"loader\" [diameter]=\"30\"></mat-spinner>\n      <mat-card\n        *ngFor=\"let comm of commentsData\"\n        class=\"example-card\"\n        style=\"margin-bottom: 20px\"\n      >\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{ comm.name }}</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            {{ comm.body }}\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n    <div class=\"modal-footer\">\n      <button\n        type=\"button\"\n        class=\"btn btn-secondary\"\n        (click)=\"c('Close click')\"\n      >\n        Close\n      </button>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/posts/list/list.component.scss":
/*!************************************************!*\
  !*** ./src/app/posts/list/list.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th {\n  text-align: center; }\n\n.mat-table :hover {\n  background: cornsilk;\n  opacity: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haG1lZGhpc2hhbS9EZXNrdG9wL1dvcmsvZXRvb2xzX2FkbWluL3NyYy9hcHAvcG9zdHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksb0JBQW9CO0VBQ3BCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXQtdGFibGUgOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IGNvcm5zaWxrO1xuICAgIG9wYWNpdHk6IDUwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/posts/list/list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/posts/list/list.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var ListComponent = /** @class */ (function () {
    function ListComponent(crudService, changeDetectorRefs, layoutUtilsService, modalService) {
        this.crudService = crudService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.layoutUtilsService = layoutUtilsService;
        this.modalService = modalService;
        this.POSTS_END_POINT = 'users/1/posts';
        this.COMM_END_POINT = 'posts';
    }
    ListComponent.prototype.open = function (content, postID) {
        this.modalService.open(content, {
            size: 'lg'
        });
        this.loader = false;
        this.changeDetectorRefs.detectChanges();
        this.loadComments(postID);
    };
    ListComponent.prototype.loadList = function () {
        var _this = this;
        return this.crudService
            .getData(this.POSTS_END_POINT, {})
            .then(function (res) {
            _this.listData = res.data || res.results || res;
            console.log(_this.listData);
            _this.loader = true;
            _this.changeDetectorRefs.detectChanges();
            console.log(_this.loader);
        })
            .catch(function (err) {
            _this.layoutUtilsService.showActionNotification('Could not fetch list');
            console.error('Failed to load list', err);
        });
    };
    ListComponent.prototype.loadComments = function (id) {
        var _this = this;
        return this.crudService
            .getData(this.COMM_END_POINT + ("/" + id + "/comments"), {})
            .then(function (res) {
            _this.commentsData = res.data || res.results || res;
            _this.loader = true;
            _this.changeDetectorRefs.detectChanges();
            console.log(__assign({}, _this.commentsData));
            _this.changeDetectorRefs.detectChanges();
        })
            .catch(function (err) {
            _this.layoutUtilsService.showActionNotification('Could not fetch comments');
            console.error('Failed to load comments', err);
        });
    };
    ListComponent.prototype.ngOnInit = function () {
        this.loader = false;
        this.loadList();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'kt-albums-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/posts/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/posts/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [crud_service_1.CRUDService,
            core_1.ChangeDetectorRef,
            crud_1.LayoutUtilsService,
            ng_bootstrap_1.NgbModal])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/posts/posts-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/posts/posts-routing.module.ts ***!
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
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/posts/list/list.component.ts");
var routes = [
    {
        path: 'list',
        component: list_component_1.ListComponent
    },
    {
        path: '',
        component: list_component_1.ListComponent
    }
];
var PostsRoutingModule = /** @class */ (function () {
    function PostsRoutingModule() {
    }
    PostsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], PostsRoutingModule);
    return PostsRoutingModule;
}());
exports.PostsRoutingModule = PostsRoutingModule;


/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
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
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
// NgBootstrap
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
// Partials
var partials_module_1 = __webpack_require__(/*! ../partials/partials.module */ "./src/app/partials/partials.module.ts");
// Pages
var core_module_1 = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
// Modules Components
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/posts/list/list.component.ts");
var posts_routing_module_1 = __webpack_require__(/*! ./posts-routing.module */ "./src/app/posts/posts-routing.module.ts");
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
// Is Imported in theme.module
var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        core_1.NgModule({
            declarations: [list_component_1.ListComponent],
            exports: [],
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                http_1.HttpClientModule,
                ng_bootstrap_1.NgbModule,
                core_module_1.CoreModule,
                partials_module_1.PartialsModule,
                posts_routing_module_1.PostsRoutingModule
            ],
            providers: []
        })
    ], PostsModule);
    return PostsModule;
}());
exports.PostsModule = PostsModule;


/***/ }),

/***/ "./src/app/products/list/list.component.html":
/*!***************************************************!*\
  !*** ./src/app/products/list/list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\n  <kt-generic-list\n    *ngIf=\"productsModel\"\n    [modelData]=\"productsModel\"\n    [query]=\"productsQuery\"\n    [title]=\"'Product'\"\n    [gate]=\"productsAPI\"\n  ></kt-generic-list>\n</kt-portlet>\n"

/***/ }),

/***/ "./src/app/products/list/list.component.scss":
/*!***************************************************!*\
  !*** ./src/app/products/list/list.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/products/list/list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/products/list/list.component.ts ***!
  \*************************************************/
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
var ListComponent = /** @class */ (function () {
    function ListComponent(modalService, _crudService, layoutUtils) {
        this.modalService = modalService;
        this._crudService = _crudService;
        this.layoutUtils = layoutUtils;
        this.productsQuery = {};
        this.productsAPI = 'products';
        this.title = 'products';
        this.productsModel = {
            form: {
                wrapperKey: 'products',
                // type: 'special',
                endPoint: 'api/products',
                httpMethod: 'POST',
                groups: [
                    {
                        title: 'Product Data',
                        inputs: [
                            {
                                name: 'Title',
                                type: 'string',
                                gate: 'title',
                                required: true
                            },
                            {
                                name: 'Meta Title',
                                type: 'string',
                                gate: 'meta_title'
                            },
                            {
                                name: 'Video Url',
                                type: 'string',
                                gate: 'url'
                            },
                            {
                                name: 'Price',
                                type: 'number',
                                gate: 'price',
                                required: true
                            },
                            {
                                name: 'Cost',
                                type: 'number',
                                gate: 'cost'
                            },
                            {
                                name: 'Quantity',
                                type: 'number',
                                gate: 'quantity'
                            },
                            {
                                name: 'Content',
                                type: 'textarea',
                                gate: 'content'
                            },
                            {
                                name: 'Tech Info',
                                type: 'textarea',
                                gate: 'techInfo'
                            },
                            {
                                name: 'Addings',
                                type: 'textarea',
                                gate: 'addings'
                            },
                            {
                                name: 'Description',
                                type: 'textarea',
                                gate: 'description'
                            },
                            {
                                name: 'Meta Description',
                                type: 'textarea',
                                gate: 'meta_description'
                            },
                            {
                                name: 'Image',
                                type: 'file',
                                gate: 'img'
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
                    display: 'Title',
                    type: 'string',
                    key: 'title',
                    search: true,
                    searchKey: 'title'
                },
                {
                    display: 'Price',
                    type: 'number',
                    key: 'price'
                },
                {
                    display: 'Views',
                    type: 'number',
                    key: 'views'
                },
                {
                    display: 'Quantity',
                    type: 'number',
                    key: 'quantity'
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
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'kt-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/products/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/products/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            crud_service_1.CRUDService,
            crud_1.LayoutUtilsService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
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
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/products/list/list.component.ts");
var routes = [
    {
        path: '',
        component: list_component_1.ListComponent
    }
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());
exports.ProductsRoutingModule = ProductsRoutingModule;


/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
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
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var partials_module_1 = __webpack_require__(/*! ../partials/partials.module */ "./src/app/partials/partials.module.ts");
var products_routing_module_1 = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/products/list/list.component.ts");
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        core_1.NgModule({
            declarations: [list_component_1.ListComponent],
            imports: [
                common_1.CommonModule,
                products_routing_module_1.ProductsRoutingModule,
                partials_module_1.PartialsModule,
                shared_module_1.SharedModule
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;


/***/ }),

/***/ "./src/app/tags/list/list.component.html":
/*!***********************************************!*\
  !*** ./src/app/tags/list/list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\n  <kt-generic-list\n    *ngIf=\"tagsModel\"\n    [modelData]=\"tagsModel\"\n    [query]=\"tagsQuery\"\n    [title]=\"'Tag'\"\n    [gate]=\"tagsAPI\"\n  ></kt-generic-list>\n</kt-portlet>\n"

/***/ }),

/***/ "./src/app/tags/list/list.component.scss":
/*!***********************************************!*\
  !*** ./src/app/tags/list/list.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhZ3MvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tags/list/list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/tags/list/list.component.ts ***!
  \*********************************************/
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
var ListComponent = /** @class */ (function () {
    function ListComponent(modalService, _crudService, layoutUtils) {
        this.modalService = modalService;
        this._crudService = _crudService;
        this.layoutUtils = layoutUtils;
        this.tagsQuery = {};
        this.tagsAPI = 'tags';
        this.title = 'tags';
        this.tagsModel = {
            form: {
                wrapperKey: 'tags',
                // type: 'special',
                endPoint: 'api/tags',
                httpMethod: 'POST',
                groups: [
                    {
                        title: 'Tag Data',
                        inputs: [
                            {
                                name: 'Title',
                                type: 'string',
                                gate: 'title',
                                required: true
                            },
                            {
                                name: 'Meta Title',
                                type: 'string',
                                gate: 'meta_title'
                            },
                            {
                                name: 'Slug',
                                type: 'string',
                                gate: 'slug'
                            },
                            {
                                name: 'Active',
                                type: 'boolean',
                                gate: 'active'
                            },
                            {
                                name: 'Meta Description',
                                type: 'textarea',
                                gate: 'meta_description'
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
                    display: 'Title',
                    type: 'string',
                    key: 'title',
                    search: true,
                    searchKey: 'title'
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
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'kt-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/tags/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/tags/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            crud_service_1.CRUDService,
            crud_1.LayoutUtilsService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/tags/tags-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tags/tags-routing.module.ts ***!
  \*********************************************/
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
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/tags/list/list.component.ts");
var routes = [
    {
        path: '',
        component: list_component_1.ListComponent
    }
];
var TagsRoutingModule = /** @class */ (function () {
    function TagsRoutingModule() {
    }
    TagsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], TagsRoutingModule);
    return TagsRoutingModule;
}());
exports.TagsRoutingModule = TagsRoutingModule;


/***/ }),

/***/ "./src/app/tags/tags.module.ts":
/*!*************************************!*\
  !*** ./src/app/tags/tags.module.ts ***!
  \*************************************/
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
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var partials_module_1 = __webpack_require__(/*! ../partials/partials.module */ "./src/app/partials/partials.module.ts");
var tags_routing_module_1 = __webpack_require__(/*! ./tags-routing.module */ "./src/app/tags/tags-routing.module.ts");
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/tags/list/list.component.ts");
var TagsModule = /** @class */ (function () {
    function TagsModule() {
    }
    TagsModule = __decorate([
        core_1.NgModule({
            declarations: [list_component_1.ListComponent],
            imports: [
                common_1.CommonModule,
                tags_routing_module_1.TagsRoutingModule,
                partials_module_1.PartialsModule,
                shared_module_1.SharedModule
            ]
        })
    ], TagsModule);
    return TagsModule;
}());
exports.TagsModule = TagsModule;


/***/ })

}]);
//# sourceMappingURL=common.js.map
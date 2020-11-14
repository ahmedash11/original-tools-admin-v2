(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~albums-albums-module~app-themes-system-admin-theme-module"],{

/***/ "./src/app/albums/albums-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/albums/albums-routing.module.ts ***!
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
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/albums/list/list.component.ts");
var details_component_1 = __webpack_require__(/*! ./details/details.component */ "./src/app/albums/details/details.component.ts");
var routes = [
    {
        path: 'details/:id',
        component: details_component_1.DetailsComponent
    },
    {
        path: 'list',
        component: list_component_1.ListComponent
    },
    {
        path: '',
        component: list_component_1.ListComponent
    }
];
var AlbumsRoutingModule = /** @class */ (function () {
    function AlbumsRoutingModule() {
    }
    AlbumsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AlbumsRoutingModule);
    return AlbumsRoutingModule;
}());
exports.AlbumsRoutingModule = AlbumsRoutingModule;


/***/ }),

/***/ "./src/app/albums/albums.module.ts":
/*!*****************************************!*\
  !*** ./src/app/albums/albums.module.ts ***!
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
var shared_module_1 = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
// Modules Components
var list_component_1 = __webpack_require__(/*! ./list/list.component */ "./src/app/albums/list/list.component.ts");
var details_component_1 = __webpack_require__(/*! ./details/details.component */ "./src/app/albums/details/details.component.ts");
var albums_routing_module_1 = __webpack_require__(/*! ./albums-routing.module */ "./src/app/albums/albums-routing.module.ts");
// Is Imported in theme.module
var AlbumsModule = /** @class */ (function () {
    function AlbumsModule() {
    }
    AlbumsModule = __decorate([
        core_1.NgModule({
            declarations: [details_component_1.DetailsComponent, list_component_1.ListComponent],
            exports: [],
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                http_1.HttpClientModule,
                ng_bootstrap_1.NgbModule,
                core_module_1.CoreModule,
                partials_module_1.PartialsModule,
                albums_routing_module_1.AlbumsRoutingModule
            ],
            providers: []
        })
    ], AlbumsModule);
    return AlbumsModule;
}());
exports.AlbumsModule = AlbumsModule;


/***/ }),

/***/ "./src/app/albums/details/details.component.html":
/*!*******************************************************!*\
  !*** ./src/app/albums/details/details.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet-header\n  [title]=\"'Album Details'\"\n  [class]=\"'kt-portlet__head--lg'\"\n>\n</kt-portlet-header>\n\n<div class=\"row flexbox-container\">\n  <mat-spinner\n    [hidden]=\"loader || listData\"\n    [diameter]=\"30\"\n  ></mat-spinner>\n  <div class=\"col-md-6\" *ngFor=\"let item of listData\">\n    <mat-card\n      class=\"example-card\"\n      style=\"margin-bottom: 20px; text-align: center\"\n    >\n      <mat-card-header>\n        <mat-card-title>{{ item.title }}</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <img\n          class=\"image\"\n          alt=\"image\"\n          width=\"300px\"\n          [src]=\"item.url\"\n        />\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/albums/details/details.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/albums/details/details.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th {\n  text-align: center; }\n\n.mat-table :hover {\n  background: cornsilk;\n  opacity: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haG1lZGhpc2hhbS9EZXNrdG9wL1dvcmsvZXRvb2xzX2FkbWluL3NyYy9hcHAvYWxidW1zL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLG9CQUFvQjtFQUNwQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hbGJ1bXMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGh7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1hdC10YWJsZSA6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogY29ybnNpbGs7XG4gICAgb3BhY2l0eTogNTAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/albums/details/details.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/albums/details/details.component.ts ***!
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var crud_service_1 = __webpack_require__(/*! ../../shared/_services/crud.service */ "./src/app/shared/_services/crud.service.ts");
var crud_1 = __webpack_require__(/*! ../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(crudService, changeDetectorRefs, layoutUtilsService, route) {
        this.crudService = crudService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.layoutUtilsService = layoutUtilsService;
        this.route = route;
        this.END_POINT = 'photos';
    }
    DetailsComponent.prototype.loadList = function () {
        var _this = this;
        return this.crudService
            .getData(this.END_POINT, { albumId: this.albumID })
            .then(function (res) {
            _this.listData = res.data || res.results || res;
            console.log(_this.listData);
            _this.loader = true;
            _this.changeDetectorRefs.detectChanges();
        })
            .catch(function (err) {
            _this.layoutUtilsService.showActionNotification('Could not fetch list');
            console.error('Failed to load list', err);
        });
    };
    DetailsComponent.prototype.ngOnInit = function () {
        this.loader = false;
        this.albumID = this.route.snapshot.paramMap.get('id');
        this.loadList();
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'kt-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/albums/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/albums/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [crud_service_1.CRUDService,
            core_1.ChangeDetectorRef,
            crud_1.LayoutUtilsService,
            router_1.ActivatedRoute])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;


/***/ }),

/***/ "./src/app/albums/list/list.component.html":
/*!*************************************************!*\
  !*** ./src/app/albums/list/list.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet-header\n  [title]=\"'Albums'\"\n  [class]=\"'kt-portlet__head--lg'\"\n>\n</kt-portlet-header>\n\n<div class=\"row flexbox-container\">\n  <mat-spinner\n    [hidden]=\"loader || listData\"\n    [diameter]=\"30\"\n  ></mat-spinner>\n  <div class=\"col-md-6\" *ngFor=\"let item of listData\">\n    <mat-card\n      class=\"example-card\"\n      style=\"margin-bottom: 20px; text-align: center\"\n    >\n      <mat-card-header>\n        <mat-card-title>{{ item.title }}</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <img\n          class=\"patient_image\"\n          alt=\"user_image\"\n          src=\"https://picsum.photos/500/200?nocache=0.2\"\n        />\n      </mat-card-content>\n      <mat-card-actions>\n        <a mat-button [routerLink]=\"['details', item.id]\">VIEW</a>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/albums/list/list.component.scss":
/*!*************************************************!*\
  !*** ./src/app/albums/list/list.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th {\n  text-align: center; }\n\n.mat-table :hover {\n  background: cornsilk;\n  opacity: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haG1lZGhpc2hhbS9EZXNrdG9wL1dvcmsvZXRvb2xzX2FkbWluL3NyYy9hcHAvYWxidW1zL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLG9CQUFvQjtFQUNwQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hbGJ1bXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGh7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1hdC10YWJsZSA6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogY29ybnNpbGs7XG4gICAgb3BhY2l0eTogNTAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/albums/list/list.component.ts":
/*!***********************************************!*\
  !*** ./src/app/albums/list/list.component.ts ***!
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
var crud_service_1 = __webpack_require__(/*! ../../shared/_services/crud.service */ "./src/app/shared/_services/crud.service.ts");
var crud_1 = __webpack_require__(/*! ../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var ListComponent = /** @class */ (function () {
    function ListComponent(crudService, changeDetectorRefs, layoutUtilsService) {
        this.crudService = crudService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.layoutUtilsService = layoutUtilsService;
        this.END_POINT = 'users/1/albums';
    }
    ListComponent.prototype.loadList = function () {
        var _this = this;
        return this.crudService
            .getData(this.END_POINT, {})
            .then(function (res) {
            _this.listData = res.data || res.results || res;
            console.log(_this.listData);
            _this.loader = true;
            _this.changeDetectorRefs.detectChanges();
        })
            .catch(function (err) {
            _this.layoutUtilsService.showActionNotification('Could not fetch list');
            console.error('Failed to load list', err);
        });
    };
    ListComponent.prototype.ngOnInit = function () {
        this.loader = false;
        this.loadList();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'kt-albums-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/albums/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/albums/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [crud_service_1.CRUDService,
            core_1.ChangeDetectorRef,
            crud_1.LayoutUtilsService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ })

}]);
//# sourceMappingURL=default~albums-albums-module~app-themes-system-admin-theme-module.js.map
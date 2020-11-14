(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~albums-albums-module~app-themes-system-admin-theme-module~brands-brands-module~categories-ca~86bbbb91"],{

/***/ "./src/app/shared/_services/crud.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/_services/crud.service.ts ***!
  \**************************************************/
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
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var CRUDService = /** @class */ (function () {
    function CRUDService(http) {
        this.http = http;
        this.url = '/api/';
        this.genericListFlagSubject = new rxjs_1.BehaviorSubject(false);
        this.forceRefreshValue = this.genericListFlagSubject.asObservable();
    }
    CRUDService.prototype.forwardForceRefresh = function (flag) {
        this.genericListFlagSubject.next(flag);
    };
    CRUDService.prototype.getData = function (gate, query) {
        var params = new http_1.HttpParams();
        var requestUrl = this.url + gate;
        query = {
            filter: JSON.stringify(query)
        };
        for (var index in query) {
            params = params.set(index, query[index]);
        }
        return this.http.get(requestUrl, { params: params }).toPromise();
    };
    CRUDService.prototype.getCount = function (gate, query) {
        var params = new http_1.HttpParams();
        var requestUrl = this.url + gate + '/count';
        delete query.skip;
        delete query.limit;
        for (var index in query) {
            params = params.set(index, JSON.stringify(query[index]));
        }
        return this.http.get(requestUrl, { params: params }).toPromise();
    };
    CRUDService.prototype.getOne = function (gate, ID, query) {
        if (query === void 0) { query = {}; }
        var params = new http_1.HttpParams();
        var requestUrl = this.url + gate;
        query = {
            filter: JSON.stringify(query)
        };
        for (var index in query) {
            params = params.set(index, query[index]);
        }
        return this.http
            .get(requestUrl + "/" + ID, { params: params })
            .toPromise();
    };
    CRUDService.prototype.deleteData = function (gate, query) {
        var params = new http_1.HttpParams();
        var requestUrl = this.url + gate;
        for (var index in query) {
            params = params.set(index, query[index]);
        }
        return this.http
            .delete("" + requestUrl, { params: params })
            .toPromise();
    };
    CRUDService.prototype.addData = function (gate, data, query) {
        if (query === void 0) { query = {}; }
        var params = new http_1.HttpParams();
        var requestUrl = this.url + gate;
        for (var index in query) {
            params = params.set(index, query[index]);
        }
        return this.http
            .post(requestUrl, data, { params: params })
            .toPromise();
    };
    CRUDService.prototype.editData = function (gate, data, dataid) {
        var requestUrl = this.url + gate;
        return this.http
            .patch(requestUrl + "/" + dataid, data)
            .toPromise();
    };
    CRUDService.prototype.api = function (uri, body, method, query) {
        if (body === void 0) { body = {}; }
        if (method === void 0) { method = 'GET'; }
        if (query === void 0) { query = {}; }
        var requestPromise;
        switch (method) {
            case 'POST':
                requestPromise = this.http.post(uri, body, {
                    params: query
                });
                break;
            case 'GET':
                requestPromise = this.http.get(uri, { params: __assign({}, body) });
                break;
            case 'PATCH':
                requestPromise = this.http.patch(uri, body, {
                    params: query
                });
                break;
            case 'PUT':
                requestPromise = this.http.put(uri, body, {
                    params: query
                });
                break;
            case 'DELETE':
                requestPromise = this.http.delete(uri, {
                    params: __assign({}, body)
                });
                break;
            default:
                requestPromise = this.http.get(uri, {
                    params: __assign({}, body)
                });
                break;
        }
        return requestPromise.toPromise();
    };
    CRUDService.prototype.uploadAttachment = function (file, key) {
        if (key === void 0) { key = 'files'; }
        var input = new FormData();
        input.append(key, file, file.name);
        return this.http
            .post("/api//attachments/upload", input, {
            headers: {}
        })
            .toPromise();
    };
    CRUDService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CRUDService);
    return CRUDService;
}());
exports.CRUDService = CRUDService;


/***/ }),

/***/ "./src/app/shared/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"statsMap\">\n  <div class=\"col-md-3 col-xs-6\">\n    <kt-simple-box\n      [label]=\"'Completed Orders'\"\n      [icon]=\"'fa-check'\"\n      [value]=\"statsMap.completed_orders\"\n    ></kt-simple-box>\n  </div>\n\n  <div class=\"col-md-3 col-xs-6\">\n    <kt-simple-box\n      [label]=\"'Active Orders'\"\n      [icon]=\"'fa-spinner'\"\n      [value]=\"statsMap.active_orders\"\n    ></kt-simple-box>\n  </div>\n\n  <div class=\"col-md-3 col-xs-6\">\n    <kt-simple-box\n      [label]=\"'Total Customers'\"\n      [icon]=\"'fa-user-friends'\"\n      [value]=\"statsMap.total_customers\"\n    ></kt-simple-box>\n  </div>\n\n  <div class=\"col-md-3 col-xs-6\">\n    <kt-simple-box\n      [label]=\"'Total Chemists'\"\n      [icon]=\"'fa-motorcycle'\"\n      [value]=\"statsMap.total_chemists\"\n    ></kt-simple-box>\n  </div>\n\n  <div class=\"col-md-6 col-xs-6\">\n    <kt-simple-box\n      [label]=\"'Available Chemists'\"\n      [icon]=\"'fa-signal'\"\n      [value]=\"statsMap.active_chemists\"\n    ></kt-simple-box>\n  </div>\n\n  <div class=\"col-md-6 col-xs-6\">\n    <kt-simple-box\n      [label]=\"'Samples Collected'\"\n      [icon]=\"'fa-vials'\"\n      [value]=\"statsMap.total_samples\"\n    ></kt-simple-box>\n  </div>\n\n  <div class=\"col-md-3 col-xs-3\">\n    <kt-simple-box\n      [label]=\"'Rejected Samples'\"\n      [icon]=\"'fa-times'\"\n      [value]=\"statsMap.rejected_samples\"\n    ></kt-simple-box>\n  </div>\n\n  <div class=\"col-md-3 col-xs-3\">\n    <kt-simple-box\n      [label]=\"'Cancelled Orders'\"\n      [icon]=\"'fa-times'\"\n      [value]=\"statsMap.cancelled_orders\"\n    ></kt-simple-box>\n  </div>\n\n  <div class=\"col-md-6 col-xs-6\">\n    <kt-simple-box\n      [label]=\"'Results Exported'\"\n      [icon]=\"'fas fa-file-export'\"\n      [value]=\"statsMap.total_results\"\n    ></kt-simple-box>\n  </div>\n\n  <div class=\"col-md-6 col-xs-6\">\n    <kt-simple-box\n      [label]=\"'Total Tests'\"\n      [icon]=\"'fa-file-alt'\"\n      [value]=\"statsMap.total_tests\"\n    ></kt-simple-box>\n  </div>\n\n  <div class=\"col-md-6 col-xs-6\">\n    <kt-simple-box\n      [label]=\"'Total Labs'\"\n      [icon]=\"'fas fa-flask'\"\n      [value]=\"statsMap.total_labs\"\n    ></kt-simple-box>\n  </div>\n</div>\n<kt-widget1 [data]=\"profitsData\"></kt-widget1>\n\n<!-- TOP Labs Section -->\n<div class=\"row\" *ngIf=\"statsMap\">\n  <kt-portlet style=\"width: 100%;\">\n    <kt-portlet-header [title]=\"'Top Labs'\"> </kt-portlet-header>\n    <kt-portlet-body>\n      <div\n        class=\"lab-row d-flex align-items-center\"\n        *ngFor=\"let labObj of statsMap.top_labs\"\n      >\n        <div class=\"img kt-padding-15\" style=\"width: 120px;\">\n          <img\n            style=\"width: 60px; height: 60px; object-fit: cover;\"\n            src=\"{{\n              labObj.logo ||\n                'https://i.stack.imgur.com/agMKZ.png?s=32&g=1'\n            }}\"\n            alt=\"lab_img\"\n          />\n        </div>\n        <div style=\"flex-grow: 1;\">\n          <h4\n            class=\"d-flex justify-content-between align-items-center\"\n          >\n            <span>\n              {{ labObj.name }}\n              <span>\n                <i\n                  *ngIf=\"labObj.verified\"\n                  class=\"fas fa-check-circle\"\n                  style=\"font-size: 12px; color: green;\"\n                ></i>\n              </span>\n            </span>\n            <span style=\"font-size: 12px; color: #ccc;\"\n              >{{ labObj.total_orders }} order(s)</span\n            >\n          </h4>\n          <div class=\"text-body\">\n            {{ labObj.overview }}\n          </div>\n        </div>\n      </div>\n    </kt-portlet-body>\n  </kt-portlet>\n</div>\n\n<!-- TOP ordered Tests -->\n<div class=\"row\" *ngIf=\"statsMap\">\n  <kt-portlet style=\"width: 100%;\">\n    <kt-portlet-header [title]=\"'Top Tests'\"> </kt-portlet-header>\n    <kt-portlet-body>\n      <div\n        class=\"lab-row d-flex align-items-center\"\n        *ngFor=\"let testObj of statsMap.top_tests\"\n      >\n        <div style=\"flex-grow: 1;\">\n          <h4\n            class=\"d-flex justify-content-between align-items-center\"\n          >\n            {{ testObj.name }}\n\n            <span style=\"font-size: 12px; color: #ccc;\"\n              >{{ testObj.total_orders }} order(s)</span\n            >\n          </h4>\n          <div class=\"text-body\">\n            {{ testObj.overview }}\n          </div>\n        </div>\n      </div>\n    </kt-portlet-body>\n  </kt-portlet>\n</div>\n\n<!-- TOP Areas -->\n<div class=\"row\" *ngIf=\"statsMap\">\n  <kt-portlet style=\"width: 100%;\">\n    <kt-portlet-header [title]=\"'Top Areas'\"> </kt-portlet-header>\n    <kt-portlet-body>\n      <div\n        class=\"lab-row d-flex align-items-center\"\n        *ngFor=\"let areaObj of statsMap.top_areas\"\n      >\n        <div style=\"flex-grow: 1;\">\n          <h4\n            class=\"d-flex justify-content-between align-items-center\"\n          >\n            {{ areaObj.name }}\n\n            <span style=\"font-size: 12px; color: #ccc;\"\n              >{{ areaObj.total_orders }} order(s)</span\n            >\n          </h4>\n        </div>\n      </div>\n    </kt-portlet-body>\n  </kt-portlet>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kt-portlet--height-fluid-half {\n  height: calc(100% - 20px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haG1lZGhpc2hhbS9EZXNrdG9wL1dvcmsvZXRvb2xzX2FkbWluL3NyYy9hcHAvc2hhcmVkL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmt0LXBvcnRsZXQtLWhlaWdodC1mbHVpZC1oYWxmIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/dashboard/dashboard.component.ts ***!
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var crud_service_1 = __webpack_require__(/*! ../_services/crud.service */ "./src/app/shared/_services/crud.service.ts");
var crud_1 = __webpack_require__(/*! ../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_crudService, layoutService, cd) {
        this._crudService = _crudService;
        this.layoutService = layoutService;
        this.cd = cd;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.fetchStats();
    };
    DashboardComponent.prototype.fetchStats = function () {
        var _this = this;
        this._crudService
            .api('/api/app/statistics', {}, 'GET')
            .then(function (res) {
            _this.statsMap = res;
            console.log('DashboardComponent -> fetchStats -> this.statsMap', _this.statsMap);
            _this.cd.detectChanges();
            _this.profitsData = [
                {
                    title: 'Total Orders',
                    desc: 'Total Order requested from Patient APP',
                    value: _this.statsMap.total_orders + ' Order',
                    valueClass: 'kt-font-brand'
                },
                {
                    title: 'Total Income',
                    desc: 'Total Order prices (not including tax)',
                    value: _this.statsMap.total_price + ' EGP',
                    valueClass: 'kt-font-success'
                },
                {
                    title: 'Complaint Reports',
                    desc: 'Reports issued by customers',
                    value: _this.statsMap.total_reports + ' Report',
                    valueClass: 'kt-font-danger'
                }
            ];
        })
            .catch(function (err) {
            _this.layoutService.showActionNotification('Failed to fetch statistics');
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'kt-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/shared/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/shared/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [crud_service_1.CRUDService,
            crud_1.LayoutUtilsService,
            core_1.ChangeDetectorRef])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/shared/generic-form-modal/generic-form-modal.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/generic-form-modal/generic-form-modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ title }}</h4>\n  <button\n    type=\"button\"\n    class=\"close\"\n    aria-label=\"Close\"\n    (click)=\"activeModal.dismiss('Cross click')\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <kt-generic-form\n    *ngIf=\"modelData\"\n    [title]=\"title\"\n    [modelData]=\"modelData\"\n    [instanceData]=\"instanceData\"\n    (notifyParentCancel)=\"_onCancel()\"\n    (notifyParentSuccess)=\"_onSubmitSuccess($event)\"\n    [modalFlag]=\"true\"\n    [gate]=\"gate\"\n    [query]=\"query\"\n  >\n  </kt-generic-form>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/generic-form-modal/generic-form-modal.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/generic-form-modal/generic-form-modal.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9nZW5lcmljLWZvcm0tbW9kYWwvZ2VuZXJpYy1mb3JtLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/generic-form-modal/generic-form-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/generic-form-modal/generic-form-modal.component.ts ***!
  \***************************************************************************/
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
var GenericFormModalComponent = /** @class */ (function () {
    function GenericFormModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.wizard = false;
        this.notifyParentSuccess = new core_1.EventEmitter();
    }
    GenericFormModalComponent.prototype.ngOnInit = function () {
        console.log(this.modelData);
    };
    GenericFormModalComponent.prototype._onSubmitSuccess = function (data) {
        console.log(data);
        this.activeModal.close(data);
        this.notifyParentSuccess.emit(data);
    };
    GenericFormModalComponent.prototype._onSubmitFail = function () { };
    GenericFormModalComponent.prototype._onCancel = function (emittedCancel) {
        this.activeModal.close('cancel');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], GenericFormModalComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericFormModalComponent.prototype, "modelData", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericFormModalComponent.prototype, "instanceData", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], GenericFormModalComponent.prototype, "gate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericFormModalComponent.prototype, "query", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericFormModalComponent.prototype, "wizard", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GenericFormModalComponent.prototype, "notifyParentSuccess", void 0);
    GenericFormModalComponent = __decorate([
        core_1.Component({
            selector: 'kt-form-modal',
            template: __webpack_require__(/*! ./generic-form-modal.component.html */ "./src/app/shared/generic-form-modal/generic-form-modal.component.html"),
            styles: [__webpack_require__(/*! ./generic-form-modal.component.scss */ "./src/app/shared/generic-form-modal/generic-form-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
    ], GenericFormModalComponent);
    return GenericFormModalComponent;
}());
exports.GenericFormModalComponent = GenericFormModalComponent;


/***/ }),

/***/ "./src/app/shared/generic-form/generic-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/generic-form/generic-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"actual-form\"\n  [ngClass]=\"{ 'modal-form': modalFlag }\"\n  *ngIf=\"formGroup\"\n>\n  <kt-portlet>\n    <div *ngIf=\"wizardFlag\" class=\"form-wizard\">\n      <div class=\"form-body kt-wizard-v1\" style=\"padding: 10px;\">\n        <div class=\"kt-wizard-v1__nav\">\n          <div class=\"kt-wizard-v1__nav-items\">\n            <a\n              *ngFor=\"let item of formGroups; let i = index\"\n              class=\"kt-wizard-v1__nav-item\"\n              data-ktwizard-type=\"step\"\n              [ngClass]=\"{ completed: activeStep >= i + 1 }\"\n            >\n              <div class=\"kt-wizard-v1__nav-body\">\n                <div class=\"kt-wizard-v1__nav-icon\">\n                  <i [ngClass]=\"item.icon\"></i>\n                </div>\n                <div class=\"kt-wizard-v1__nav-label\">\n                  {{ i + 1 }}) {{ item.title }}\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n        <div\n          id=\"bar\"\n          class=\"progress progress-striped\"\n          role=\"progressbar\"\n        >\n          <div\n            class=\"progress-bar progress-bar-success\"\n            [ngStyle]=\"{\n              width: (activeStep / totalSteps) * 100 + '%'\n            }\"\n          ></div>\n        </div>\n      </div>\n    </div>\n    <kt-portlet-body>\n      <form\n        *ngIf=\"formGroup\"\n        [formGroup]=\"formGroup\"\n        class=\"kt-form kt-form--group-seperator-dashed\"\n        (ngSubmit)=\"submit()\"\n      >\n        <!-- FIXME: handle forms array (multiple sections within a form) -->\n        <div class=\"kt-form__section kt-form__section--first\">\n          <div\n            class=\"form-group kt-form__group row\"\n            *ngFor=\"let formSection of formGroups; let i = index\"\n            [hidden]=\"activeStep != i + 1 && wizardFlag\"\n          >\n            <div\n              *ngIf=\"formSection.title && !wizardFlag\"\n              style=\"padding-bottom: 20px;\"\n              class=\"col-xs-12 col-lg-12 col-12\"\n            >\n              {{ formSection.title }}\n            </div>\n            <div\n              *ngFor=\"let input of formSection.inputs\"\n              [ngStyle]=\"{ display: input.hidden ? 'none' : 'block' }\"\n              class=\"kt-margin-bottom-20-mobile\"\n              [ngClass]=\"{\n                'col-lg-12': input.type == 'textarea',\n                'col-lg-6': input.type != 'textarea'\n              }\"\n            >\n              <!--Add Asterisk to required fields-->\n              <mat-form-field\n                class=\"mat-form-field-fluid\"\n                *ngIf=\"\n                  input.type != 'boolean' && input.type != 'file'\n                \"\n                [ngSwitch]=\"input.type\"\n                appearance=\"outline\"\n              >\n                <mat-label>\n                  {{ input.name | titlecase }}\n                </mat-label>\n                <div *ngSwitchCase=\"'select'\">\n                  <mat-select\n                    *ngIf=\"input.simpleOpts\"\n                    formControlName=\"{{ input.gate }}\"\n                    [required]=\"input.required\"\n                  >\n                    <mat-option\n                      *ngFor=\"let option of input.options\"\n                      [value]=\"option\"\n                    >\n                      <!-- this span is specific for Color tub eselect case -->\n                      <label\n                        *ngIf=\"input.colorOptionStyle\"\n                        [ngStyle]=\"{\n                          backgroundColor: option,\n                          color: option,\n                          'margin-right': '20px',\n                          margin: 'auto',\n                          height: '10px',\n                          width: '20px'\n                        }\"\n                      >\n                      </label>\n                      {{ option | titlecase }}</mat-option\n                    >\n                  </mat-select>\n\n                  <mat-select\n                    *ngIf=\"!input.simpleOpts\"\n                    [required]=\"input.required\"\n                    formControlName=\"{{ input.gate }}\"\n                  >\n                    <mat-option\n                      *ngFor=\"let option of input.options\"\n                      [value]=\"option.id\"\n                      >{{\n                        option.label ||\n                          option.name ||\n                          option.email ||\n                          (option.firstName + ' ' + option.lastName\n                            | titlecase)\n                      }}</mat-option\n                    >\n                  </mat-select>\n                </div>\n\n                <div *ngSwitchCase=\"'date'\">\n                  <input\n                    matInput\n                    (dateChange)=\"\n                      handleDateChange(input.gate, $event)\n                    \"\n                    [matDatepicker]=\"picker\"\n                    placeholder=\"Choose a date\"\n                    formControlName=\"{{ input.gate }}\"\n                  />\n                  <mat-datepicker-toggle\n                    matSuffix\n                    [for]=\"picker\"\n                  ></mat-datepicker-toggle>\n                  <mat-datepicker\n                    #picker\n                    startView=\"year\"\n                  ></mat-datepicker>\n                </div>\n\n                <textarea\n                  matInput\n                  *ngSwitchCase=\"'textarea'\"\n                  [required]=\"input.required\"\n                  placeholder=\"{{ input.placeholder || input.name }}\"\n                  formControlName=\"{{ input.gate }}\"\n                ></textarea>\n\n                <input\n                  matInput\n                  *ngSwitchDefault\n                  [required]=\"input.required\"\n                  placeholder=\"{{ input.placeholder || input.name }}\"\n                  [type]=\"input.type\"\n                  [minlength]=\"input.minLength\"\n                  formControlName=\"{{ input.gate }}\"\n                />\n\n                <mat-error\n                  *ngIf=\"\n                    input.type == 'select' &&\n                    input.options &&\n                    input.options.length == 0 &&\n                    input.required\n                  \"\n                >\n                  <strong\n                    >No options provided, please check your seeded\n                    data.</strong\n                  >\n                </mat-error>\n\n                <mat-error\n                  *ngIf=\"isControlHasError(input.gate, 'required')\"\n                >\n                  <strong\n                    >{{ input.name | titlecase }} is required.</strong\n                  >\n                </mat-error>\n\n                <mat-error\n                  *ngIf=\"isControlHasError(input.gate, 'minlength')\"\n                >\n                  <strong>\n                    {{ input.name | titlecase }} must be 8 characters\n                    long</strong\n                  >\n                </mat-error>\n\n                <mat-error\n                  *ngIf=\"isControlHasError(input.gate, 'email')\"\n                >\n                  <strong\n                    >{{ input.name | titlecase }} must be a valid\n                    email.</strong\n                  >\n                </mat-error>\n              </mat-form-field>\n\n              <mat-checkbox\n                formControlName=\"{{ input.gate }}\"\n                [required]=\"input.required\"\n                *ngIf=\"input.type == 'boolean'\"\n              >\n                {{ input.placeholder || input.name }}\n              </mat-checkbox>\n\n              <!-- File Input -->\n              <div class=\"\" *ngIf=\"input.type === 'file'\">\n                <label for=\"\">\n                  {{ input.name }}\n                </label>\n                <input\n                  (change)=\"onFileChange($event, input.gate)\"\n                  #fileBtn\n                  type=\"file\"\n                  accept=\"image/*\"\n                  style=\"display: none;\"\n                />\n                <button\n                  type=\"button\"\n                  (click)=\"fileBtn.click()\"\n                  class=\"btn\"\n                  [disabled]=\"loading\"\n                >\n                  {{ input.label || 'Choose File' }}\n                </button>\n                <mat-spinner\n                  style=\"color: black;\"\n                  [hidden]=\"uploading == 0\"\n                  [diameter]=\"30\"\n                ></mat-spinner>\n                <div\n                  class=\"d-flex flex-column\"\n                  style=\"padding: 5px;\"\n                  *ngIf=\"uploading == 0 && (imgURL || instanceData)\"\n                >\n                  <img\n                    [src]=\"\n                      imgURL ||\n                      (instanceData && instanceData[input.gate]\n                        ? instanceData[input.gate]\n                        : null)\n                    \"\n                    height=\"200\"\n                    *ngIf=\"\n                      imgURL ||\n                      (instanceData && instanceData[input.gate])\n                    \"\n                  />\n                  <span *ngIf=\"selectedFile\">\n                    {{ selectedFile.name }}\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </kt-portlet-body>\n  </kt-portlet>\n</div>\n\n<div\n  *ngIf=\"formGroup\"\n  [ngClass]=\"{\n    'modal-footer': modalFlag,\n    'normal-footer': !modalFlag\n  }\"\n>\n  <button\n    type=\"button\"\n    class=\"btn btn-outline-dark\"\n    (click)=\"cancelChanges()\"\n    [hidden]=\"wizardFlag && activeStep != 1\"\n  >\n    {{ cancelBtnText || 'Cancel' }}\n  </button>\n  <button\n    type=\"button\"\n    class=\"btn btn-outline-dark\"\n    (click)=\"backChanges()\"\n    [hidden]=\"(wizardFlag && activeStep == 1) || !wizardFlag\"\n  >\n    {{ 'Back' }}\n  </button>\n  <button\n    type=\"submit\"\n    class=\"btn btn-primary\"\n    (click)=\"next()\"\n    [hidden]=\"(wizardFlag && activeStep == totalSteps) || !wizardFlag\"\n  >\n    {{ 'Next' }}\n  </button>\n  <button\n    type=\"submit\"\n    class=\"btn btn-primary\"\n    [disabled]=\"formGroup.invalid || loading > 0\"\n    (click)=\"submit()\"\n    [hidden]=\"wizardFlag && activeStep != totalSteps\"\n  >\n    {{ submitBtnText || 'Submit' }}\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/generic-form/generic-form.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/generic-form/generic-form.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-form {\n  max-height: calc(100vh - 210px);\n  overflow-y: scroll; }\n\n.kt-wizard-v1 {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.kt-wizard-v1 .kt-wizard-v1__nav {\n    border-bottom: 1px solid #eeeef4; }\n\n.kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center; }\n\n.kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n                justify-content: center;\n        flex-wrap: wrap;\n        -webkit-box-flex: 1;\n                flex: 1; }\n\n.kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item a {\n          color: kt-base-color(label, 1); }\n\n.kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item:after {\n          font-size: 1.25rem;\n          color: kt-base-color(label, 1);\n          margin-left: 0.5rem;\n          margin-right: 0.5rem; }\n\n.kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item:last-child:after {\n          content: none; }\n\n.kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item .kt-wizard-v1__nav-body {\n          -webkit-box-flex: 1;\n                  flex: 1;\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n                  flex-direction: column;\n          -webkit-box-align: center;\n                  align-items: center;\n          -webkit-box-pack: center;\n                  justify-content: center;\n          padding: 2rem 1rem;\n          text-align: center; }\n\n.kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item .kt-wizard-v1__nav-body .kt-wizard-v1__nav-icon {\n            font-size: 2rem;\n            color: kt-base-color(label, 1);\n            margin-bottom: 0.5rem; }\n\n.kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item .kt-wizard-v1__nav-body .kt-wizard-v1__nav-label {\n            font-size: 1.1rem;\n            font-weight: 500;\n            color: kt-base-color(label, 1); }\n\n.kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item[data-ktwizard-state='done']:after, .kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item[data-ktwizard-state='current']:after, .kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item.completed:after {\n          color: #5867dd; }\n\n.kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item[data-ktwizard-state='done'] .kt-wizard-v1__nav-body .kt-wizard-v1__nav-icon, .kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item[data-ktwizard-state='current'] .kt-wizard-v1__nav-body .kt-wizard-v1__nav-icon, .kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item.completed .kt-wizard-v1__nav-body .kt-wizard-v1__nav-icon {\n          color: #5867dd; }\n\n.kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item[data-ktwizard-state='done'] .kt-wizard-v1__nav-body .kt-wizard-v1__nav-label, .kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item[data-ktwizard-state='current'] .kt-wizard-v1__nav-body .kt-wizard-v1__nav-label, .kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items .kt-wizard-v1__nav-item.completed .kt-wizard-v1__nav-body .kt-wizard-v1__nav-label {\n          color: #5867dd; }\n\n.kt-wizard-v1 .kt-wizard-v1__nav .kt-wizard-v1__nav-items.kt-wizard-v1__nav-items--clickable .kt-wizard-v1__nav-item {\n        cursor: pointer; }\n\n.normal-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.normal-footer button {\n    margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haG1lZGhpc2hhbS9EZXNrdG9wL1dvcmsvZXRvb2xzX2FkbWluL3NyYy9hcHAvc2hhcmVkL2dlbmVyaWMtZm9ybS9nZW5lcmljLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFEeEI7SUFJSSxnQ0FiOEIsRUFBQTs7QUFTbEM7TUFPTSxvQkFBYTtNQUFiLGFBQWE7TUFDYix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLHdCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQTs7QUFUN0I7UUFZUSxvQkFBYTtRQUFiLGFBQWE7UUFDYix5QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsbUJBQU87Z0JBQVAsT0FBTyxFQUFBOztBQWhCZjtVQW1CVSw4QkE5QnNDLEVBQUE7O0FBV2hEO1VBdUJVLGtCQUFrQjtVQUNsQiw4QkFuQ3NDO1VBb0N0QyxtQkFBbUI7VUFDbkIsb0JBQW9CLEVBQUE7O0FBMUI5QjtVQStCWSxhQUFhLEVBQUE7O0FBL0J6QjtVQW9DVSxtQkFBTztrQkFBUCxPQUFPO1VBQ1Asb0JBQWE7VUFBYixhQUFhO1VBQ2IsNEJBQXNCO1VBQXRCLDZCQUFzQjtrQkFBdEIsc0JBQXNCO1VBQ3RCLHlCQUFtQjtrQkFBbkIsbUJBQW1CO1VBQ25CLHdCQUF1QjtrQkFBdkIsdUJBQXVCO1VBQ3ZCLGtCQUFrQjtVQUNsQixrQkFBa0IsRUFBQTs7QUExQzVCO1lBNkNZLGVBQWU7WUFDZiw4QkF6RG9DO1lBMERwQyxxQkFBcUIsRUFBQTs7QUEvQ2pDO1lBbURZLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsOEJBakVxQyxFQUFBOztBQVlqRDtVQTZEWSxjQXZFeUIsRUFBQTs7QUFVckM7VUFrRWMsY0E1RXVCLEVBQUE7O0FBVXJDO1VBc0VjLGNBaEZ1QixFQUFBOztBQVVyQztRQThFVSxlQUFlLEVBQUE7O0FBNkJ6QjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUhyQjtJQUtJLGlCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2dlbmVyaWMtZm9ybS9nZW5lcmljLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIka3Qtd2l6YXJkLXYxLXN0ZXAtbGFiZWw6IGt0LWJhc2UtY29sb3IobGFiZWwsIDEpO1xuJGt0LXdpemFyZC12MS1zdGVwLWljb246IGt0LWJhc2UtY29sb3IobGFiZWwsIDEpO1xuJGt0LXdpemFyZC12MS1zdGVwLWhpZ2hsaWdodDogIzU4NjdkZDtcbiRrdC13aXphcmQtdjEtc3RlcC1ib3JkZXI6ICNlZWVlZjQ7XG4ka3Qtd2l6YXJkLXYxLWZvcm0tYmc6ICNmOWZhZmM7XG4ka3Qtd2l6YXJkLXYxLWZvcm0taW5uZXItYmc6ICNmZmZmZmY7XG5cbi5tb2RhbC1mb3JtIHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIxMHB4KTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ua3Qtd2l6YXJkLXYxIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLy8gTmF2XG4gIC5rdC13aXphcmQtdjFfX25hdiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRrdC13aXphcmQtdjEtc3RlcC1ib3JkZXI7XG5cbiAgICAua3Qtd2l6YXJkLXYxX19uYXYtaXRlbXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgLmt0LXdpemFyZC12MV9fbmF2LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAka3Qtd2l6YXJkLXYxLXN0ZXAtaWNvbjtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBjb2xvcjogJGt0LXdpemFyZC12MS1zdGVwLWljb247XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5rdC13aXphcmQtdjFfX25hdi1ib2R5IHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAua3Qtd2l6YXJkLXYxX19uYXYtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBjb2xvcjogJGt0LXdpemFyZC12MS1zdGVwLWljb247XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmt0LXdpemFyZC12MV9fbmF2LWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAka3Qtd2l6YXJkLXYxLXN0ZXAtbGFiZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJltkYXRhLWt0d2l6YXJkLXN0YXRlPSdkb25lJ10sXG4gICAgICAgICZbZGF0YS1rdHdpemFyZC1zdGF0ZT0nY3VycmVudCddLFxuICAgICAgICAmLmNvbXBsZXRlZCB7XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb2xvcjogJGt0LXdpemFyZC12MS1zdGVwLWhpZ2hsaWdodDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAua3Qtd2l6YXJkLXYxX19uYXYtYm9keSB7XG4gICAgICAgICAgICAua3Qtd2l6YXJkLXYxX19uYXYtaWNvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAka3Qtd2l6YXJkLXYxLXN0ZXAtaGlnaGxpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua3Qtd2l6YXJkLXYxX19uYXYtbGFiZWwge1xuICAgICAgICAgICAgICBjb2xvcjogJGt0LXdpemFyZC12MS1zdGVwLWhpZ2hsaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5rdC13aXphcmQtdjFfX25hdi1pdGVtcy0tY2xpY2thYmxlIHtcbiAgICAgICAgLmt0LXdpemFyZC12MV9fbmF2LWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ka3QtYmFzZS1jb2xvcnM6IChcbiAgbGFiZWw6IChcbiAgICAxOiAjYTJhNWI5LFxuICAgIDI6ICM3NDc4OGQsXG4gICAgMzogIzU5NWQ2ZSxcbiAgICA0OiAjNDg0NjViXG4gICksXG4gIHNoYXBlOiAoXG4gICAgMTogI2YwZjNmZixcbiAgICAyOiAjZThlY2ZhLFxuICAgIDM6ICM5M2EyZGQsXG4gICAgNDogIzY0NmM5YVxuICApLFxuICBncmV5OiAoXG4gICAgMTogI2Y3ZjhmYSxcbiAgICAvLyNmNGY1ZjhcbiAgICAgIDI6ICNlYmVkZjIsXG4gICAgMzogZGFya2VuKCNlYmVkZjIsIDMlKSxcbiAgICA0OiBkYXJrZW4oI2ViZWRmMiwgNiUpXG4gIClcbikgIWRlZmF1bHQ7XG5cbi5ub3JtYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweFx0O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/generic-form/generic-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/generic-form/generic-form.component.ts ***!
  \***************************************************************/
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
var crud_service_1 = __webpack_require__(/*! ../_services/crud.service */ "./src/app/shared/_services/crud.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var crud_1 = __webpack_require__(/*! ../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var GenericFormComponent = /** @class */ (function () {
    function GenericFormComponent(_crudService, changeDetectorRefs, layoutUtilsService) {
        this._crudService = _crudService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.layoutUtilsService = layoutUtilsService;
        this.modalFlag = false;
        this.notifyParentCancel = new core_1.EventEmitter();
        this.notifyParentSuccess = new core_1.EventEmitter();
        this.notifyParentFailure = new core_1.EventEmitter();
        this.emitFormValue = new core_1.EventEmitter();
        this.loading = 0;
        this.uploading = 0;
        this.formGroup = new forms_1.FormGroup({});
    }
    GenericFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formData = this.modelData.form;
        this.formGroups = this.modelData.form['groups'];
        this.wizardFlag = this.formData.wizardFlag;
        this.activeStep = 1;
        this.totalSteps = this.formGroups.length;
        // making sure form data is an array for consistency
        if (!Array.isArray(this.formGroups)) {
            this.formGroups = [this.formGroups];
        }
        var group = {};
        var formInputs = this.formGroups.reduce(function (acc, singleForm) {
            return acc.concat(singleForm['inputs']);
        }, []);
        formInputs.forEach(function (element, j) {
            if (!element.gate) {
                element.gate = element.name;
            }
            var inputValidators = [];
            if (element.email) {
                inputValidators.push(forms_1.Validators.email);
            }
            if (element.required) {
                inputValidators.push(forms_1.Validators.required);
            }
            group[element.gate] = new forms_1.FormControl(element.value || element.defaultValue || null, inputValidators);
            if (element.type === 'select' && !element.simpleOpts) {
                _this._crudService
                    .getData(element.apiend, { limit: 70 })
                    .then(function (res) {
                    element.options = (res.data ? res.data : res) || [];
                })
                    .catch(function (err) {
                    console.error(err);
                });
            }
        });
        this.formGroup = new forms_1.FormGroup(group);
        var editData = __assign({}, this.instanceData);
        for (var key in editData) {
            if (editData[key] != null &&
                typeof editData[key] === 'object') {
                editData[key] = editData[key].id;
            }
        }
        this.formGroup.patchValue(editData);
    };
    GenericFormComponent.prototype.handleDateChange = function (formControlName, event) {
        var _a;
        // formatting date
        var d = new Date(event.target.value);
        var ye = new Intl.DateTimeFormat('en', {
            year: 'numeric'
        }).format(d);
        var mo = new Intl.DateTimeFormat('en', {
            month: '2-digit'
        }).format(d);
        var da = new Intl.DateTimeFormat('en', {
            day: '2-digit'
        }).format(d);
        this.formGroup.patchValue((_a = {},
            _a[formControlName] = ye + "-" + mo + "-" + da,
            _a));
    };
    GenericFormComponent.prototype.submit = function () {
        var _this = this;
        var _a;
        var sentData = {};
        var formValue = this.formGroup.value;
        for (var index in formValue) {
            if (formValue[index]) {
                sentData[index] = formValue[index];
            }
        }
        if (this.formData['type'] === 'notifyParent') {
            return this.emitFormValue.emit(formValue);
        }
        var modifyPromise;
        if (this.formData['type'] === 'special') {
            console.log('Sepcial form');
            var formBody = __assign({}, sentData);
            if (this.formData['wrapperKey']) {
                formBody = (_a = {},
                    _a[this.formData['wrapperKey']] = __assign({}, sentData),
                    _a);
            }
            modifyPromise = this._crudService.api(this.formData['endPoint'], formBody, this.formData['httpMethod']);
        }
        else {
            if (this.query.id) {
                console.log('Edit mode');
                modifyPromise = this._crudService.editData(this.gate, sentData, this.query.id);
            }
            else {
                console.log('Create mode');
                modifyPromise = this._crudService.addData(this.gate, sentData, this.query);
            }
        }
        this.loading++;
        return modifyPromise
            .then(function (res) {
            _this.loading--;
            _this._crudService.forwardForceRefresh(true);
            _this.layoutUtilsService.showActionNotification(res.message || 'Successfully sent', crud_1.MessageType.Create);
            if (_this.notifyParentSuccess) {
                _this.notifyParentSuccess.emit(__assign({ id: _this.query.id }, sentData));
            }
        })
            .catch(function (err) {
            _this.loading--;
            _this.layoutUtilsService.showActionNotification('Failed: ' + err.error.message ||
                false, crud_1.MessageType.Delete);
            if (_this.notifyParentFailure) {
                _this.notifyParentFailure.emit(err);
            }
        });
    };
    GenericFormComponent.prototype.cancelChanges = function () {
        // FIXME: edit case
        this.formGroup.reset();
        if (this.notifyParentCancel) {
            this.notifyParentCancel.emit(true);
        }
    };
    GenericFormComponent.prototype.backChanges = function () {
        this.activeStep -= 1;
    };
    GenericFormComponent.prototype.next = function () {
        this.activeStep += 1;
    };
    GenericFormComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.formGroup.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) &&
            (control.dirty || control.touched);
        return result;
    };
    GenericFormComponent.prototype.onFileChange = function (event, controlName) {
        var _this = this;
        console.log('GenericFormComponent -> onFileChange -> controlName', controlName);
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            this.selectedFile = file;
            event.target.value = '';
            var mimeType = file.type;
            if (mimeType.match(/image\/*/) == null) {
                this.layoutUtilsService.showActionNotification('Not Allowed\n' + 'Only image files are allowed.', crud_1.MessageType.Delete);
                return;
            }
            this.imgURL = null;
            if (this.instanceData) {
                this.instanceData[controlName] = null;
            }
            this.uploadFile()
                .then(function (fileUri) {
                var _a;
                console.log('GenericFormComponent -> onFileChange -> fileUri', fileUri);
                _this.uploading--;
                _this.formGroup.patchValue((_a = {},
                    _a[controlName] = fileUri,
                    _a));
                if (_this.instanceData) {
                    _this.instanceData[controlName] = fileUri;
                }
                _this.imgURL = fileUri;
                console.log('Detetcing changesf');
                // this.changeDetectorRefs.detectChanges();
            })
                .catch(function (err) {
                console.log('GenericFormComponent -> onFileChange -> err', err);
                _this.uploading--;
                _this.layoutUtilsService.showActionNotification('Sorry, failed to upload image', crud_1.MessageType.Delete);
            });
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file);
            reader_1.onload = function (_event) {
                _this.imgURL = reader_1.result;
            };
        }
    };
    GenericFormComponent.prototype.uploadFile = function () {
        this.uploading++;
        return this._crudService
            .uploadAttachment(this.selectedFile)
            .then(function (response) {
            return response['uploadedFile'].link;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], GenericFormComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericFormComponent.prototype, "modelData", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericFormComponent.prototype, "instanceData", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], GenericFormComponent.prototype, "gate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericFormComponent.prototype, "query", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], GenericFormComponent.prototype, "cancelBtnText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], GenericFormComponent.prototype, "submitBtnText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericFormComponent.prototype, "modalFlag", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], GenericFormComponent.prototype, "notifyParentCancel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], GenericFormComponent.prototype, "notifyParentSuccess", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], GenericFormComponent.prototype, "notifyParentFailure", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], GenericFormComponent.prototype, "emitFormValue", void 0);
    GenericFormComponent = __decorate([
        core_1.Component({
            selector: 'kt-generic-form',
            template: __webpack_require__(/*! ./generic-form.component.html */ "./src/app/shared/generic-form/generic-form.component.html"),
            styles: [__webpack_require__(/*! ./generic-form.component.scss */ "./src/app/shared/generic-form/generic-form.component.scss")]
        }),
        __metadata("design:paramtypes", [crud_service_1.CRUDService,
            core_1.ChangeDetectorRef,
            crud_1.LayoutUtilsService])
    ], GenericFormComponent);
    return GenericFormComponent;
}());
exports.GenericFormComponent = GenericFormComponent;


/***/ }),

/***/ "./src/app/shared/generic-list/generic-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/generic-list/generic-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\n  <kt-portlet-header\n    [title]=\"title + ' List'\"\n    [class]=\"'kt-portlet__head--lg'\"\n  >\n    <ng-container ktPortletTools>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        matTooltip=\"Create new {{ title }}\"\n        (click)=\"open({}, 'add')\"\n      >\n        Add {{ title }}\n      </button>\n    </ng-container>\n  </kt-portlet-header>\n  <div *ngIf=\"alert\" class=\"row alert alert-info\">\n    {{ alert }}\n  </div>\n  <kt-portlet-body>\n    <div class=\"kt-form kt-margin-b-5\">\n      <div *ngIf=\"search\" class=\"kt-form__filtration\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-md-12 kt-margin-bottom-5-mobile\">\n            <mat-form-field class=\"mat-form-field-fluid\">\n              <input\n                matInput\n                #searchInput\n                placeholder=\"Search\"\n                (keyup.enter)=\"sendSearch(searchInput.value)\"\n              />\n              <mat-hint>\n                <strong>Search</strong> by Name or ID\n              </mat-hint>\n            </mat-form-field>\n          </div>\n        </div>\n        <br />\n      </div>\n    </div>\n\n    <table\n      mat-table\n      *ngIf=\"listData\"\n      [dataSource]=\"listData\"\n      class=\"full-width\"\n      style=\"text-align: left\"\n    >\n      <div *ngFor=\"let item of Columns\">\n        <ng-container matColumnDef=\"{{ item.display }}\">\n          <th\n            mat-header-cell\n            *matHeaderCellDef\n            style=\"text-align: left\"\n          >\n            {{ item.display | titlecase }}\n          </th>\n          <div *ngIf=\"item.actions; else ntActions\">\n            <td\n              mat-cell\n              *matCellDef=\"let element; let eleIdx = index\"\n            >\n              <button\n                *ngIf=\"item.actions.custom\"\n                mat-icon-button\n                matTooltip=\"{{ item.actions.custom.label }}\"\n                type=\"button\"\n                [disabled]=\"\n                  item.actions.custom.disableKey &&\n                  element[item.actions.custom.disableKey]\n                \"\n                [ngClass]=\"\n                  item.actions.custom.class\n                    ? item.actions.custom.class\n                    : {}\n                \"\n                (click)=\"customActionClickEvent.emit(element)\"\n              >\n                <mat-icon>{{ item.actions.custom.icon }}</mat-icon>\n              </button>\n\n              <button\n                *ngIf=\"item.actions.edit\"\n                mat-icon-button\n                color=\"primary\"\n                matTooltip=\"Edit Record\"\n                (click)=\"edit(element)\"\n              >\n                <mat-icon>create</mat-icon>\n              </button>\n\n              <button\n                *ngIf=\"item.actions.view\"\n                mat-icon-button\n                color=\"accent\"\n                matTooltip=\"View\"\n                (click)=\"handleViewClick(item.actions.view, element)\"\n              >\n                <mat-icon>remove_red_eye</mat-icon>\n              </button>\n\n              <button\n                *ngIf=\"item.actions.delete\"\n                mat-icon-button\n                color=\"warn\"\n                matTooltip=\"Delete Record\"\n                type=\"button\"\n                (click)=\"delete(element)\"\n              >\n                <mat-icon>delete</mat-icon>\n              </button>\n            </td>\n          </div>\n          <ng-template #ntActions>\n            <td\n              mat-cell\n              *matCellDef=\"let element\"\n              [ngSwitch]=\"item.type\"\n            >\n              <div *ngSwitchCase=\"'obj'\">\n                <span\n                  [ngStyle]=\"item.nativeStyle ? item.nativeStyle : {}\"\n                  [className]=\"item.styleClass\"\n                  style=\"text-transform: capitalize\"\n                >\n                  <div *ngIf=\"element[item.objKey]; else isNull\">\n                    {{ element[item.objKey][item.key] }}\n                  </div>\n                  <ng-template #isNull>\n                    <span class=\"kt-font-danger\">\n                      {{ item.nullValue || '__' }}\n                    </span></ng-template\n                  >\n                </span>\n              </div>\n              <div *ngSwitchCase=\"'date'\">\n                <span>\n                  <div>\n                    {{\n                      element[item.key] | date: 'dd/MM/yyyy hh:mm:ss'\n                    }}\n                  </div>\n                  <ng-template #isNull>\n                    <span class=\"kt-font-danger\">\n                      {{ item.nullValue || '__' }}\n                    </span></ng-template\n                  >\n                </span>\n              </div>\n              <div\n                *ngSwitchCase=\"'boolean'\"\n                [className]=\"item.className + ' '\"\n              >\n                <ng-container *ngIf=\"item.renderHTML\">\n                  <div\n                    *ngIf=\"\n                      item.trueHTML && item.key && element[item.key]\n                    \"\n                    [innerHTML]=\"item.trueHTML\"\n                  ></div>\n                </ng-container>\n                <div\n                  *ngIf=\"\n                    item.falseHTML && item.key && !element[item.key]\n                  \"\n                  [innerHTML]=\"item.falseHTML\"\n                ></div>\n                <ng-container *ngIf=\"!item.renderHTML\">\n                  <i\n                    *ngIf=\"\n                      item.objKey && !element[item.objKey][item.key]\n                    \"\n                    class=\"fas fa-times\"\n                  ></i>\n                  <i\n                    *ngIf=\"\n                      item.objKey && element[item.objKey][item.key]\n                    \"\n                    class=\"fas fa-check\"\n                  ></i>\n                  <i\n                    *ngIf=\"!item.objKey && !element[item.key]\"\n                    class=\"fas fa-times\"\n                  ></i>\n                  <i\n                    *ngIf=\"!item.objKey && element[item.key]\"\n                    class=\"fas fa-check\"\n                  ></i>\n                </ng-container>\n              </div>\n\n              <div *ngSwitchCase=\"'combination'\">\n                <span\n                  *ngFor=\"\n                    let itemKey of item.keys;\n                    let keyIdx = index\n                  \"\n                  style=\"margin-right: 2px\"\n                >\n                  {{ element[itemKey] || '__' }}\n                  <span *ngIf=\"keyIdx < item.keys.length - 1\">\n                    {{ item.separator || ' ' }}\n                  </span>\n                </span>\n                <span *ngIf=\"item.postFix\">\n                  {{ item.postFix }}\n                </span>\n              </div>\n              <div *ngSwitchDefault>\n                <span\n                  *ngIf=\"item.parentStyle\"\n                  [className]=\"\n                    item.parentStyle\n                      ? item.parentStyle[element[item.key]]\n                      : null\n                  \"\n                >\n                  &nbsp;\n                </span>\n                <div\n                  [className]=\"\n                    item.className +\n                    ' ' +\n                    (item.styles\n                      ? item.styles[element[item.key]]\n                      : null)\n                  \"\n                  style=\"text-transform: capitalize\"\n                  [ngStyle]=\"item.nativeStyle ? item.nativeStyle : {}\"\n                >\n                  {{ element[item.key] || item.nullValue }}\n                  <span *ngIf=\"item.postFix\">\n                    {{ item.postFix }}\n                  </span>\n                </div>\n              </div>\n            </td>\n          </ng-template>\n        </ng-container>\n      </div>\n\n      <tr mat-header-row *matHeaderRowDef=\"Column\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: Column\"></tr>\n    </table>\n\n    <tr\n      [hidden]=\"!(loader && listData && listData.length == 0)\"\n      style=\"text-align: center; padding-top: 1rem\"\n    >\n      <td colspan=\"10\">No {{ title }} Found</td>\n    </tr>\n  </kt-portlet-body>\n\n  <div class=\"mat-table__bottom\">\n    <mat-spinner [hidden]=\"loader\" [diameter]=\"20\"></mat-spinner>\n    <mat-paginator\n      [pageSize]=\"pageSize\"\n      [length]=\"totalLength\"\n      [showFirstLastButtons]=\"false\"\n      (page)=\"loadList()\"\n    >\n    </mat-paginator>\n  </div>\n</kt-portlet>\n"

/***/ }),

/***/ "./src/app/shared/generic-list/generic-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/generic-list/generic-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9nZW5lcmljLWxpc3QvZ2VuZXJpYy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/generic-list/generic-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/generic-list/generic-list.component.ts ***!
  \***************************************************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var crud_service_1 = __webpack_require__(/*! ../_services/crud.service */ "./src/app/shared/_services/crud.service.ts");
var crud_1 = __webpack_require__(/*! ../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var generic_form_modal_component_1 = __webpack_require__(/*! ../generic-form-modal/generic-form-modal.component */ "./src/app/shared/generic-form-modal/generic-form-modal.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var GenericListComponent = /** @class */ (function () {
    function GenericListComponent(_crudService, layoutUtilsService, modalService, router, changeDetectorRefs) {
        this._crudService = _crudService;
        this.layoutUtilsService = layoutUtilsService;
        this.modalService = modalService;
        this.router = router;
        this.changeDetectorRefs = changeDetectorRefs;
        this.wizard = false;
        this.search = true;
        this.paginate = true;
        this.enabledTestsFlag = false;
        this.addClickEvent = new core_1.EventEmitter();
        this.listChanged = new core_1.EventEmitter();
        this.customActionClickEvent = new core_1.EventEmitter();
        this.customViewEvent = new core_1.EventEmitter();
        this.pageSize = 10;
        this.Columns = [];
        this.Column = [];
    }
    GenericListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = false;
        this.Columns = this.modelData.list;
        this.Columns.forEach(function (element) {
            _this.Column.push(element.display);
        });
        if (this.enabledTestsFlag) {
            this.getLabsFilters();
        }
        // if (this.refreshInterval > 0) {
        //   // auto refresh mode
        //   this.intervalListener = interval(this.refreshInterval * 1000)
        //     .pipe(
        //       startWith(0),
        //       switchMap(() => this.loadList())
        //     )
        //     .subscribe((res) => console.log(res));
        // } else {
        // single fetch mode
        this.loadList();
        // }
        // force refresh triggered from other components
        // this.refreshListner = this._crudService.forceRefreshValue.subscribe(
        //   (res) => {
        //     if (res) {
        //       this.loadList();
        //     }
        //   }
        // );
    };
    GenericListComponent.prototype.getLabsFilters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var labs, filters, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._crudService.api('/api/labs')];
                    case 1:
                        labs = _a.sent();
                        filters = labs.data.map(function (lab) {
                            return { label: lab.name, value: lab.id };
                        });
                        this.modelData.filters = [
                            { label: 'Lab', options: filters, queryParam: 'lab' }
                        ];
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GenericListComponent.prototype.sendSearch = function (value) {
        this.loader = false;
        var query = {};
        // query['searchFields'] = [];
        // query['searchTerm'] = value;
        this.modelData.list.forEach(function (listItem) {
            if (listItem.search) {
                if (isNaN(value) && listItem.type === 'string') {
                    query[listItem.searchKey] = {
                        like: value + '%'
                    };
                }
                else if (!isNaN(value) && listItem.key === 'id') {
                    query[listItem.searchKey] = +value;
                }
            }
        });
        // query['searchFields'] = query['searchFields'].join(',');
        if (+value === 0) {
            return this.loadList();
        }
        this.loadList({ where: query });
    };
    GenericListComponent.prototype.delete = function (data) {
        var _this = this;
        var _title = this.title + " Delete";
        var _description = "Are you sure to permanently delete this " + this.title + "?";
        var _waitDesciption = this.title + " is  being deleted...";
        var _deleteMessage = this.title + " has been deleted";
        var q = __assign({ id: data.id });
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            console.log('TCL: GenericListComponent -> delete -> res', res);
            if (!res) {
                return;
            }
            _this.listChanged.emit(true);
            _this.listData = _this.listData.filter(function (item) { return item['id'] !== data.id; });
            _this.changeDetectorRefs.detectChanges();
            _this.layoutUtilsService.showActionNotification(_deleteMessage);
            // this._crudService
            //   .deleteData(this.gate, q)
            //   .then((deleteRes) => {
            //     this.listChanged.emit(true);
            //     this.layoutUtilsService.showActionNotification(
            //       _deleteMessage
            //     );
            //     this.loadList().then(() => {
            //       this.changeDetectorRefs.detectChanges();
            //     });
            //   })
            //   .catch((err) => {
            //     this.layoutUtilsService.showActionNotification(
            //       `Failed to delete ${this.title}`,
            //       MessageType.Delete
            //     );
            //     console.error(err);
            //   });
        });
    };
    GenericListComponent.prototype.handleFilterChange = function ($event, filterObj) {
        // const eventValue = $event.target.value;
        // console.log(
        //   'GenericListComponent -> handleFilterChange -> $event.target.value',
        //   eventValue
        // );
        // if (eventValue && eventValue != 'null') {
        //   this.query[filterObj.queryParam] = eventValue;
        // } else {
        //   delete this.query[filterObj.queryParam];
        // }
        // this.loadList();
    };
    GenericListComponent.prototype.loadList = function (search) {
        var _this = this;
        if (search === void 0) { search = null; }
        this.query.skip = this.paginator.pageIndex * this.pageSize;
        this.query.limit = this.pageSize;
        var query = __assign({}, this.query);
        if (search) {
            query = __assign({}, search, this.query);
        }
        return this._crudService
            .getData(this.gate, query)
            .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._crudService.getCount(this.gate, query)];
                    case 1:
                        _a.totalLength = (_b.sent()).count;
                        console.log({ gate: this.gate, length: this.totalLength });
                        this.listData = res.data || res.results || res;
                        console.log(this.listData);
                        this.changeDetectorRefs.detectChanges();
                        this.loader = true;
                        return [2 /*return*/];
                }
            });
        }); })
            .catch(function (err) {
            _this.layoutUtilsService.showActionNotification('Could not fetch list');
            console.error('Failed to load list', err);
        });
    };
    GenericListComponent.prototype.edit = function (item) {
        var q = {
            id: item.id
        };
        this.selectedItem = item;
        this.open(q, 'edit');
    };
    // opens edit/add modal
    GenericListComponent.prototype.open = function (query, mode) {
        var _this = this;
        if (query === void 0) { query = {}; }
        if (mode === void 0) { mode = 'add'; }
        var addModeFlag = mode === 'add';
        var info = {
            title: addModeFlag ? 'Add new' : 'Edit',
            gate: this.gate,
            mode: addModeFlag ? 'add' : 'edit',
            instance: this.selectedItem
        };
        this.addClickEvent.emit(info);
        if (!this.modelData.externalForm ||
            (this.modelData.inlineEdit && mode === 'edit')) {
            var q = __assign({}, this.query, query);
            var self_1 = this;
            var modalRef = this.modalService.open(this.modelData.customEditModal
                ? this.modelData.customEditModal
                : generic_form_modal_component_1.GenericFormModalComponent, {
                size: 'lg'
            });
            modalRef.componentInstance.title = info.title;
            modalRef.componentInstance.modelData = this.modelData;
            modalRef.componentInstance.gate = this.gate;
            modalRef.componentInstance.query = q;
            modalRef.componentInstance.instanceData = addModeFlag
                ? {}
                : this.selectedItem;
            modalRef.componentInstance.wizard = this.wizard;
            // if (!this.modelData.customEditModal) {
            //   modalRef.componentInstance.notifyParentSuccess.subscribe(
            //     (res) => {
            //       // this.loadList();
            //     }
            //   );
            // }
            modalRef.result
                .then(function (res) {
                if (res.id) {
                    _this.listData = _this.listData.map(function (elem) {
                        return elem['id'] === res.id ? res : elem;
                    });
                }
                else {
                    res.id = _this.listData.length + 1;
                    console.log(res);
                    _this.listData = _this.listData.concat([
                        __assign({}, res)
                    ]);
                }
                _this.changeDetectorRefs.detectChanges();
            })
                .catch(function (err) {
                console.error(err);
            });
        }
    };
    GenericListComponent.prototype.handleViewClick = function (mode, element) {
        if (mode === 'custom') {
            this.customViewEvent.emit(element);
        }
        else {
            if (element.order_type === 'Test')
                this.router.navigate([
                    '/requests/orders/details',
                    element.id
                ]);
            else if (element.order_type === 'Prescription')
                this.router.navigate([
                    '/requests/prescription/details',
                    element.id
                ]);
            else
                this.router.navigate([mode, element.id]);
        }
    };
    GenericListComponent.prototype.ngOnDestroy = function () {
        if (this.refreshListner) {
            this.refreshListner.unsubscribe();
        }
        if (this.intervalListener) {
            this.intervalListener.unsubscribe();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], GenericListComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericListComponent.prototype, "modelData", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericListComponent.prototype, "alert", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], GenericListComponent.prototype, "gate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericListComponent.prototype, "query", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericListComponent.prototype, "wizard", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericListComponent.prototype, "search", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericListComponent.prototype, "paginate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GenericListComponent.prototype, "enabledTestsFlag", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], GenericListComponent.prototype, "refreshInterval", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GenericListComponent.prototype, "addClickEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GenericListComponent.prototype, "listChanged", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GenericListComponent.prototype, "customActionClickEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GenericListComponent.prototype, "customViewEvent", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], GenericListComponent.prototype, "paginator", void 0);
    GenericListComponent = __decorate([
        core_1.Component({
            selector: 'kt-generic-list',
            template: __webpack_require__(/*! ./generic-list.component.html */ "./src/app/shared/generic-list/generic-list.component.html"),
            styles: [__webpack_require__(/*! ./generic-list.component.scss */ "./src/app/shared/generic-list/generic-list.component.scss")]
        }),
        __metadata("design:paramtypes", [crud_service_1.CRUDService,
            crud_1.LayoutUtilsService,
            ng_bootstrap_1.NgbModal,
            router_1.Router,
            core_1.ChangeDetectorRef])
    ], GenericListComponent);
    return GenericListComponent;
}());
exports.GenericListComponent = GenericListComponent;


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
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
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var generic_form_component_1 = __webpack_require__(/*! ./generic-form/generic-form.component */ "./src/app/shared/generic-form/generic-form.component.ts");
var generic_form_modal_component_1 = __webpack_require__(/*! ./generic-form-modal/generic-form-modal.component */ "./src/app/shared/generic-form-modal/generic-form-modal.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var checkbox_1 = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
var partials_module_1 = __webpack_require__(/*! ../partials/partials.module */ "./src/app/partials/partials.module.ts");
var generic_list_component_1 = __webpack_require__(/*! ./generic-list/generic-list.component */ "./src/app/shared/generic-list/generic-list.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var dashboard_component_1 = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/shared/dashboard/dashboard.component.ts");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                generic_list_component_1.GenericListComponent,
                generic_form_component_1.GenericFormComponent,
                generic_form_modal_component_1.GenericFormModalComponent,
                dashboard_component_1.DashboardComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule,
                partials_module_1.PartialsModule,
                // Angular Material Module
                material_1.MatDatepickerModule,
                checkbox_1.MatCheckboxModule,
                material_1.MatTabsModule,
                material_1.MatButtonModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatRippleModule,
                material_1.MatTableModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
                material_1.MatButtonModule,
                material_1.MatTooltipModule,
                material_1.MatDialogModule,
                material_1.MatSelectModule,
                material_1.MatDividerModule,
                material_1.MatIconModule,
                material_1.MatAutocompleteModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatMenuModule,
                material_1.MatTreeModule,
                material_1.MatNativeDateModule,
                material_1.MatRadioModule,
                material_1.MatCardModule,
                material_1.MatChipsModule,
                material_1.MatProgressBarModule,
                material_1.MatSliderModule,
                material_1.MatSidenavModule,
                material_1.MatSnackBarModule,
                material_1.MatStepperModule,
                material_1.MatToolbarModule,
                material_1.MatListModule,
                material_1.MatGridListModule,
                material_1.MatButtonToggleModule,
                material_1.MatBottomSheetModule,
                material_1.MatExpansionModule
            ],
            entryComponents: [
                generic_form_modal_component_1.GenericFormModalComponent,
            ],
            exports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule,
                material_1.MatTabsModule,
                material_1.MatButtonModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatRippleModule,
                material_1.MatTableModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
                material_1.MatButtonModule,
                material_1.MatTooltipModule,
                material_1.MatDialogModule,
                material_1.MatSelectModule,
                material_1.MatDividerModule,
                material_1.MatIconModule,
                material_1.MatAutocompleteModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatMenuModule,
                material_1.MatTreeModule,
                material_1.MatNativeDateModule,
                material_1.MatRadioModule,
                material_1.MatCardModule,
                material_1.MatChipsModule,
                material_1.MatProgressBarModule,
                material_1.MatSliderModule,
                material_1.MatSidenavModule,
                material_1.MatSnackBarModule,
                material_1.MatStepperModule,
                material_1.MatToolbarModule,
                material_1.MatListModule,
                material_1.MatGridListModule,
                material_1.MatButtonToggleModule,
                material_1.MatBottomSheetModule,
                material_1.MatExpansionModule,
                checkbox_1.MatCheckboxModule,
                // Exported components
                generic_list_component_1.GenericListComponent,
                generic_form_component_1.GenericFormComponent,
                generic_form_modal_component_1.GenericFormModalComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ })

}]);
//# sourceMappingURL=default~albums-albums-module~app-themes-system-admin-theme-module~brands-brands-module~categories-ca~86bbbb91.js.map
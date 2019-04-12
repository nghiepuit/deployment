webpackJsonp(["main"],{

/***/ "./client/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account": [
		"./client/app/account/account.module.ts"
	],
	"./admin": [
		"./client/app/admin/admin.module.ts",
		"admin.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./client/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./client/app/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("./client/app/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_guards_auth_guard__ = __webpack_require__("./client/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_reset_component__ = __webpack_require__("./client/app/account/password/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./client/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_logout_component__ = __webpack_require__("./client/app/account/login/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_modal_component__ = __webpack_require__("./client/app/account/login/login-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cp_cp_component__ = __webpack_require__("./client/app/account/cp/cp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_detail_component__ = __webpack_require__("./client/app/account/profile/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__password_forgot_component__ = __webpack_require__("./client/app/account/password/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");











// import { LoginComponent } from './login/login.component';





var routes = [
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */],
        data: { title: 'Login' }
    },
    {
        path: 'logout', component: __WEBPACK_IMPORTED_MODULE_7__login_logout_component__["a" /* LogoutComponent */],
        data: { title: 'Logout' }
    },
    {
        path: 'change-password', component: __WEBPACK_IMPORTED_MODULE_12__cp_cp_component__["a" /* CpComponent */],
        data: { title: 'Change Password' }, canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_14__password_forgot_component__["a" /* ForgotPasswordComponent */],
        data: { title: 'Forgot Password' }
    },
    {
        path: 'reset-password/:id', component: __WEBPACK_IMPORTED_MODULE_4__password_reset_component__["a" /* ResetPasswordComponent */],
        data: { title: 'Reset Password' }
    },
    {
        path: 'edit-profile', component: __WEBPACK_IMPORTED_MODULE_13__profile_detail_component__["a" /* DetailComponent */],
        data: { title: 'Edit Profile' }, canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_guards_auth_guard__["a" /* AuthGuard */]]
    },
];
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_15__angular_material__["l" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_15__angular_material__["m" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_15__angular_material__["x" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_15__angular_material__["r" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["h" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_15__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_15__angular_material__["y" /* MatToolbarModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_11__login_login_modal_component__["a" /* LoginModalComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_11__login_login_modal_component__["a" /* LoginModalComponent */], __WEBPACK_IMPORTED_MODULE_12__cp_cp_component__["a" /* CpComponent */], __WEBPACK_IMPORTED_MODULE_7__login_logout_component__["a" /* LogoutComponent */], __WEBPACK_IMPORTED_MODULE_13__profile_detail_component__["a" /* DetailComponent */], __WEBPACK_IMPORTED_MODULE_13__profile_detail_component__["a" /* DetailComponent */], __WEBPACK_IMPORTED_MODULE_14__password_forgot_component__["a" /* ForgotPasswordComponent */], __WEBPACK_IMPORTED_MODULE_4__password_reset_component__["a" /* ResetPasswordComponent */]],
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./client/app/account/cp/cp.component.css":
/***/ (function(module, exports) {

module.exports = ".cp-container{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.cp{width: 400px;}"

/***/ }),

/***/ "./client/app/account/cp/cp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content cp-container\">\r\n  <mat-card class=\"cp\">\r\n    <mat-toolbar class=\"mat-accent\">\r\n      <h3 class=\"mat-toolbar-tools\">Change Password</h3>\r\n    </mat-toolbar>\r\n    <br/>\r\n    <form #f=\"ngForm\" (ngSubmit)=\"cp(f.value)\" novalidate autocomplete=\"off\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\r\n      <mat-form-field>\r\n        <input matInput type=\"password\" #oldPassword=\"ngModel\" name=\"oldPassword\" ngModel required minlength=\"3\" placeholder=\"Current Password\"\r\n          autofocus />\r\n      </mat-form-field>\r\n      <div *ngIf=\"oldPassword.errors && (oldPassword.dirty || oldPassword.touched)\" class=\"alert\">\r\n        <div [hidden]=\"!oldPassword.errors.required\">\r\n          Password is required\r\n        </div>\r\n        <div [hidden]=\"!oldPassword.errors.minlength\">\r\n          Password must be at least 3 characters long.\r\n        </div>\r\n      </div>\r\n      <br/>\r\n      <mat-form-field>\r\n        <input matInput type=\"password\" #newPassword=\"ngModel\" name=\"newPassword\" ngModel required minlength=\"3\" placeholder=\"New Password\"\r\n        />\r\n      </mat-form-field>\r\n      <div *ngIf=\"newPassword.errors && (newPassword.dirty || newPassword.touched)\" class=\"alert\">\r\n        <div [hidden]=\"!newPassword.errors.required\">\r\n          New Password is required\r\n        </div>\r\n        <div [hidden]=\"!newPassword.errors.minlength\">\r\n          Password must be at least 3 characters long.\r\n        </div>\r\n      </div>\r\n      <submit-button [loading]=\"loading\" [form]=\"f\" icon=\"lock\" text=\"Change Password\"></submit-button>\r\n    </form>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./client/app/account/cp/cp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");





var CpComponent = /** @class */ (function () {
    function CpComponent(auth, snack, router) {
        this.auth = auth;
        this.snack = snack;
        this.router = router;
        this.loading = false;
        this.submitted = false;
    }
    CpComponent.prototype.ngOnInit = function () { };
    CpComponent.prototype.cp = function (form) {
        var _this = this;
        this.loading = true;
        this.submitted = true;
        if (form) {
            this.auth.changePassword(form).subscribe(function (data) { return _this.success(); }, function (err) {
                err = err.json();
                _this.snack.open(err.message, 'OK', { duration: 2000 });
                _this.loading = false;
            });
        }
        else {
            this.snack.open('Blank password!', 'OK', { duration: 2000 });
            this.loading = false;
        }
    };
    CpComponent.prototype.success = function () {
        this.loading = false;
        this.router.navigateByUrl("/admin/dashboard");
        this.snack.open('Password change successful.', 'OK', { duration: 2000 });
    };
    CpComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'account-cp',
            template: __webpack_require__("./client/app/account/cp/cp.component.html"),
            styles: [__webpack_require__("./client/app/account/cp/cp.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */]])
    ], CpComponent);
    return CpComponent;
}());



/***/ }),

/***/ "./client/app/account/login/login-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("./client/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");







var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent(userService, auth, router, route, snack, _fb, dialogRef) {
        this.userService = userService;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.snack = snack;
        this._fb = _fb;
        this.dialogRef = dialogRef;
        this.loading = false;
        this.errors = {};
    }
    LoginModalComponent.prototype.ngOnInit = function () {
        this.loginForm = this._fb.group({
            email: ['admin@codenx.com', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].email]],
            password: ['codenx', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
        });
        this.signupForm = this._fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
        });
    };
    LoginModalComponent.prototype.gotoForgotPassword = function (url) {
        this.router.navigateByUrl('/account/forgot-password?email=' + url);
    };
    LoginModalComponent.prototype.login = function (form) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.user = {};
        this.auth.login(form)
            .subscribe(function (result) {
            if (result === true) {
                _this.loading = false;
                _this.dialogRef.close(true);
            }
            else {
                _this.errMessage = 'Username or password is incorrect';
                _this.loading = false;
            }
        }, function (err) { return _this.error(err, 'login'); });
    };
    LoginModalComponent.prototype.signup = function (form) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.userService.register(form)
            .subscribe(function (result) {
            _this.loading = false;
            _this.signupForm = _this._fb.group({
                email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].email]],
                password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
                name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]],
            });
            _this.snack.open('User registration successful', 'OK', { duration: 2000 });
        }, function (err) { return _this.error(err, 'signup'); });
    };
    LoginModalComponent.prototype.error = function (err, from) {
        this.loading = false;
        if (err.status === 504) {
            this.snack.open(err.statusText, 'OK', { duration: 2000 });
            return;
        }
        err = err.json();
        if (!err.message) {
            this.errMessage = err;
            return;
        }
        var msg = err.message;
        if (err.email)
            msg = err.email.message;
        if (msg === 'Unexpected token E in JSON at position 0')
            msg = 'Could not communicate to api server';
        (from === 'login') ? this.errMessage = msg : this.signupErrMessage = msg;
        this.snack.open(msg, 'OK', { duration: 2000 });
    };
    LoginModalComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'account-login-modal',
            template: __webpack_require__("./client/app/account/login/login.component.html"),
            styles: [__webpack_require__("./client/app/account/login/login.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */]])
    ], LoginModalComponent);
    return LoginModalComponent;
}());



/***/ }),

/***/ "./client/app/account/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n  max-width:700px;\r\n}\r\n.pointer{\r\n  cursor: pointer;\r\n}\r\n.mat-dialog-container{\r\n  padding:0px !important;\r\n}\r\n.muted{\r\n  font-size:9px;\r\n}"

/***/ }),

/***/ "./client/app/account/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content row\">\r\n  <mat-card class=\"item\">\r\n    <button mat-button mat-icon-button (click)=\"dialogRef.close()\" class=\"close\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n    <mat-tab-group class=\"row\">\r\n      <mat-tab label=\"Login\">\r\n        <div class=\"col center\">\r\n          <!-- remove in production -->\r\n          <p class=\"muted\">User account is\r\n            <code>user@codenx.com</code> /\r\n            <code>codenx</code>\r\n            <br/> Vendor account is\r\n            <code>vendor@codenx.com</code> /\r\n            <code>codenx</code>\r\n            <br/> Admin account is\r\n            <code>admin@codenx.com</code> /\r\n            <code>codenx</code>\r\n            <br/>\r\n          </p>\r\n          <!-- /remove in production -->\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\" autocomplete=\"false\" novalidate>\r\n            <section class=\"section\" layout=\"column\">\r\n              <!--<div class=\"help-block\" [hidden]=\"!errMessage\">\r\n                {{ errMessage }}\r\n              </div>-->\r\n              <div>\r\n                <mat-form-field style=\"width:100%\">\r\n                  <input matInput type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\" mongoose-error />\r\n                </mat-form-field>\r\n                <div [hidden]=\"loginForm.get('email').valid || (loginForm.get('email').pristine && !submitted)\">\r\n                  <div *ngIf=\"loginForm.get('email').hasError('required')\" class=\"error\">\r\n                    Email is required\r\n                  </div>\r\n                  <div *ngIf=\"loginForm.get('email').hasError('minlength')\" class=\"error\">\r\n                    Email must be minimum 3 characters\r\n                  </div>\r\n                  <div *ngIf=\"loginForm.get('email').hasError('pattern')\" class=\"error\">\r\n                    Email address is invalid.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <mat-form-field>\r\n                  <input matInput type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\" />\r\n                </mat-form-field>\r\n                <div [hidden]=\"loginForm.get('password').valid || (loginForm.get('password').pristine && !submitted)\">\r\n                  <div *ngIf=\"loginForm.get('password').hasError('required')\" class=\"error\">\r\n                    Password is required\r\n                  </div>\r\n                  <div *ngIf=\"loginForm.get('password').hasError('minlength')\" class=\"error\">\r\n                    Password must be minimum 3 characters\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"pointer\">\r\n                <a class=\"err\" (click)=\"gotoForgotPassword(loginForm.value.email)\">+ Forgot Password</a>\r\n              </p>\r\n            </section>\r\n            <submit-button [loading]=\"loading\" [form]=\"loginForm\" icon=\"lock\" text=\"Secure Login\"></submit-button>\r\n          </form>\r\n        </div>\r\n\r\n      </mat-tab>\r\n      <mat-tab label=\"Signup\">\r\n        <div class=\"col center\">\r\n          <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup(signupForm.value)\" autocomplete=\"false\" novalidate>\r\n            <!--<div class=\"help-block\" [hidden]=\"!signupErrMessage\">\r\n              {{ signupErrMessage }}\r\n            </div>-->\r\n            <div>\r\n              <mat-form-field style=\"width:100%\">\r\n                <input matInput type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\" />\r\n              </mat-form-field>\r\n              <div [hidden]=\"signupForm.get('name').valid || (signupForm.get('name').pristine && !submitted)\">\r\n                <div *ngIf=\"signupForm.get('name').hasError('required')\" class=\"error\">\r\n                  Name is required\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div>\r\n              <mat-form-field style=\"width:100%\">\r\n                <input matInput type=\"email\" name=\"email\" formControlName=\"email\" mongoose-error placeholder=\"Email\" />\r\n              </mat-form-field>\r\n              <div [hidden]=\"signupForm.get('email').valid || (signupForm.get('email').pristine && !submitted)\">\r\n                <div *ngIf=\"signupForm.get('email').hasError('required')\" class=\"error\">\r\n                  Email is required\r\n                </div>\r\n                <div *ngIf=\"signupForm.get('email').hasError('minlength')\" class=\"error\">\r\n                  Email must be minimum 3 characters\r\n                </div>\r\n                <div *ngIf=\"signupForm.get('email').hasError('pattern')\" class=\"error\">\r\n                  Email address is invalid.\r\n                </div>\r\n              </div>\r\n              <!--<div class=\"help-block\" [hidden]=\"!errMessage\" class=\"alert alert-danger\">\r\n                  {{ errMessage }}\r\n                </div>-->\r\n            </div>\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\" />\r\n              </mat-form-field>\r\n              <div [hidden]=\"signupForm.get('password').valid || (signupForm.get('password').pristine && !submitted)\">\r\n                <div *ngIf=\"signupForm.get('password').hasError('required')\" class=\"error\">\r\n                  Password is required\r\n                </div>\r\n                <div *ngIf=\"signupForm.get('password').hasError('minlength')\" class=\"error\">\r\n                  Password must be minimum 3 characters\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <submit-button [loading]=\"loading\" [form]=\"signupForm\" icon=\"lock\" text=\"Signup\"></submit-button>\r\n          </form>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n    <mat-card-actions>\r\n      <br/>\r\n      <oauth-buttons classes=\"btn-block\"></oauth-buttons>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./client/app/account/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("./client/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, route, snack, _fb, userService) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.snack = snack;
        this._fb = _fb;
        this.userService = userService;
        this.loading = false;
        this.errors = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this._fb.group({
            email: ['admin@codenx.com', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]],
            password: ['codenx', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
        });
        this.signupForm = this._fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
        });
    };
    LoginComponent.prototype.gotoForgotPassword = function (url) {
        this.router.navigateByUrl('/account/forgot-password?email=' + url);
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.user = {};
        this.auth.login({ email: form.email, password: form.password })
            .subscribe(function (result) {
            if (result === true) {
                _this.loading = false;
                _this.router.navigate([_this.route.snapshot.params['returnUrl'] || '/']);
            }
            else {
                _this.errMessage = 'Username or password is incorrect';
                _this.loading = false;
            }
        }, function (err) { return _this.error(err, 'login'); });
    };
    LoginComponent.prototype.signup = function (form) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.auth.register(form)
            .subscribe(function (result) {
            _this.loading = false;
            _this.signupForm = _this._fb.group({
                email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]],
                password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
                name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            });
            _this.snack.open('User registration successful', 'OK', { duration: 2000 });
            _this.router.navigate([_this.route.snapshot.params['returnUrl'] || '/']);
        }, function (err) { return _this.error(err, 'signup'); });
    };
    LoginComponent.prototype.error = function (err, from) {
        this.loading = false;
        if (err.status === 504) {
            this.snack.open(err.statusText, 'OK', { duration: 2000 });
            return;
        }
        err = err.json();
        if (!err.message) {
            this.errMessage = err;
            return;
        }
        var msg = err.message;
        if (err.email)
            msg = err.email.message;
        if (msg === 'Unexpected token E    JSON at position 0')
            msg = 'Could not communicate to api server';
        (from === 'login') ? this.errMessage = msg : this.signupErrMessage = msg;
        this.snack.open(msg, 'OK', { duration: 2000 });
    };
    LoginComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'account-login',
            template: __webpack_require__("./client/app/account/login/login.component.html"),
            styles: [__webpack_require__("./client/app/account/login/login.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./client/app/account/login/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var vm = this;
        this.auth.logout();
        // vm.router.navigateByUrl("/");
    };
    LogoutComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'account-logout',
            template: ''
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./client/app/account/password/forgot.component.css":
/***/ (function(module, exports) {

module.exports = ".cp-container{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.cp{width: 250px;}"

/***/ }),

/***/ "./client/app/account/password/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content row center\">\r\n  <div class=\"column center\">\r\n    <mat-card>\r\n      <mat-toolbar class=\"mat-accent\">\r\n        <h3 class=\"mat-toolbar-tools\">Forgot Password</h3>\r\n      </mat-toolbar>\r\n      <br/>\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"forgot(form.value)\" autocomplete=\"false\" novalidate>\r\n        <section class=\"section\" layout=\"column\">\r\n          <div class=\"help-block\" [hidden]=\"!errMessage\">\r\n            {{ errMessage?.message }}\r\n          </div>\r\n          <div>\r\n            <mat-form-field>\r\n              <input matInput type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\" autofocus />\r\n            </mat-form-field>\r\n            <div [hidden]=\"form.get('email').valid || (form.get('email').pristine && !submitted)\">\r\n              <div *ngIf=\"form.get('email').hasError('required')\" class=\"error\">\r\n                Email is required\r\n              </div>\r\n              <div *ngIf=\"form.get('email').hasError('minlength')\" class=\"error\">\r\n                Email must be minimum 3 characters\r\n              </div>\r\n              <div *ngIf=\"form.get('email').hasError('pattern')\" class=\"error\">\r\n                Email address is invalid.\r\n              </div>\r\n            </div>\r\n            <submit-button [form]=\"form\" text=\"Send Reset Password Email\" icon=\"email\"></submit-button>\r\n          </div>\r\n        </section>\r\n      </form>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./client/app/account/password/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");







var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(fb, crud, auth, router, route, snack) {
        this.fb = fb;
        this.crud = crud;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.snack = snack;
        this.errors = {};
        this.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        var email = this.route.queryParams['value'].email;
        this.form = this.fb.group({
            email: [email, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern(this.EMAIL_REGEXP)]],
        });
    };
    ForgotPasswordComponent.prototype.forgot = function (form) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.crud.post('users/forgot', form, false).subscribe(function (data) {
            _this.snack.open(data.message, 'OK', { duration: 2000 });
            _this.errMessage = data;
            _this.loading = false;
        }, function (err) {
            _this.snack.open(err, 'OK', { duration: 2000 });
            _this.errMessage = '';
            _this.loading = false;
        });
    };
    ForgotPasswordComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'shopnx-password-forgot',
            template: __webpack_require__("./client/app/account/password/forgot.component.html"),
            styles: [__webpack_require__("./client/app/account/password/forgot.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatSnackBar */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./client/app/account/password/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content row center\">\r\n  <div class=\"column center\">\r\n    <mat-card class=\"cp\">\r\n      <mat-toolbar class=\"mat-accent\">\r\n        <h3 class=\"mat-toolbar-tools\">Reset Password</h3>\r\n      </mat-toolbar>\r\n      <br/>\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"reset(form.value)\" autocomplete=\"false\" novalidate>\r\n        <section class=\"section\" layout=\"column\">\r\n          <div class=\"help-block\" [hidden]=\"!errMessage\">\r\n            {{ errMessage?.message }}\r\n          </div>\r\n          <div>\r\n            <mat-form-field>\r\n              <input matInput type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"New Password\" autofocus />\r\n            </mat-form-field>\r\n            <br/>\r\n            <mat-form-field>\r\n              <input matInput type=\"password\" name=\"passwordcf\" formControlName=\"passwordcf\" placeholder=\"Confirm Password\" />\r\n            </mat-form-field>\r\n\r\n            <submit-button [form]=\"form\" text=\"Reset Password\" icon=\"vpn_key\"></submit-button>\r\n          </div>\r\n        </section>\r\n      </form>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./client/app/account/password/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__ = __webpack_require__("./client/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");







var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(fb, crud, route, snack, modal) {
        this.fb = fb;
        this.crud = crud;
        this.route = route;
        this.snack = snack;
        this.modal = modal;
        this.errors = {};
        this.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var email = this.route.queryParams['value'].email;
        this.form = this.fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            passwordcf: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
        });
    };
    ResetPasswordComponent.prototype.reset = function (form) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.crud.post('users/reset/' + this.route.params['value'].id, form, false)
            .subscribe(function (data) {
            _this.snack.open(data.message, 'OK', { duration: 2000 });
            // this.router.navigateByUrl('/account/login');
            _this.modal.login().subscribe();
            _this.loading = false;
        }, function (err) {
            _this.snack.open('Password reset email is invalid or has expired.', 'OK', { duration: 2000 });
            _this.loading = false;
        });
    };
    ResetPasswordComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'shopnx-password-reset',
            template: __webpack_require__("./client/app/account/password/reset.component.html"),
            styles: [__webpack_require__("./client/app/account/password/forgot.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__["a" /* ModalService */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./client/app/account/profile/detail.component.css":
/***/ (function(module, exports) {

module.exports = "img{\r\n  max-height:40vh !important;\r\n}\r\n.mat-form-field .mat-icon{\r\n  cursor: pointer;\r\n}"

/***/ }),

/***/ "./client/app/account/profile/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around center\" fxOffset=\"30\">\r\n  <h1>Edit Profile</h1>\r\n  <form [formGroup]=\"profileForm\" (ngSubmit)=\"saveUser(profileForm.value)\" autocomplete=\"false\" novalidate fxLayout=\"column\"\r\n    fxLayoutAlign=\"space-around stretch\">\r\n    <img [src]=\"profileForm.value.avatar\" *ngIf=\"profileForm.value.avatar\" />\r\n    <div class=\"help-block\" [hidden]=\"!errMessage\">\r\n      {{ errMessage }}\r\n    </div>\r\n    <mat-form-field fxFlex>\r\n      <input matInput type=\"name\" name=\"name\" formControlName=\"name\" placeholder=\"Name\" autofocus />\r\n    </mat-form-field>\r\n    <div [hidden]=\"profileForm.get('name').valid || (profileForm.get('name').pristine && !submitted)\">\r\n      <div *ngIf=\"profileForm.get('name').hasError('required')\" class=\"error\">\r\n        Name is required\r\n      </div>\r\n      <div *ngIf=\"profileForm.get('name').hasError('minlength')\" class=\"error\">\r\n        Name must be minimum 3 characters\r\n      </div>\r\n    </div>\r\n    <mat-form-field fxFlex>\r\n      <input matInput type=\"email\" name=\"email\" placeholder=\"Email\" [value]=\"auth.currentUser.email\" disabled/>\r\n    </mat-form-field>\r\n    <mat-form-field fxFlex>\r\n      <input matInput type=\"text\" name=\"avatar\" formControlName=\"avatar\" placeholder=\"Avatar\" />\r\n      <mat-icon mdPrefix (click)=\"chooseImage()\" class=\"pointer\">add_to_photos</mat-icon>\r\n    </mat-form-field>\r\n    <div [hidden]=\"profileForm.get('avatar').valid || (profileForm.get('avatar').pristine && !submitted)\">\r\n      <div *ngIf=\"profileForm.get('avatar').hasError('required')\" class=\"error\">\r\n        Avatar url required\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center stretch\">\r\n      <submit-button fxFlex [loading]=\"loading\" [form]=\"profileForm\" icon=\"save\" text=\"Save\"></submit-button>\r\n    </div>\r\n    <br/>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./client/app/account/profile/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_media_media_library__ = __webpack_require__("./client/app/shared/media/media-library.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("./client/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");








var DetailComponent = /** @class */ (function () {
    function DetailComponent(snack, _fb, auth, router, dialog, userService) {
        this.snack = snack;
        this._fb = _fb;
        this.auth = auth;
        this.router = router;
        this.dialog = dialog;
        this.userService = userService;
        this.user = {};
        this.cols = [];
        this.loading = false;
        this.submitted = false;
        this.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.profileForm = this._fb.group({
            name: [this.auth.currentUser.name, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            avatar: [this.auth.currentUser.avatar, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
        });
    };
    DetailComponent.prototype.saveUser = function (data) {
        var _this = this;
        if (!data) {
            return;
        }
        delete data['_id'];
        this.busy = this.auth.saveProfile(data).subscribe(function (res) {
            _this.snack.open('User Profile Modified', 'OK', { duration: 2000 });
            _this.auth.updateProfile(data);
        }, function (error) { return _this.snack.open(error, 'OK', { duration: 2000 }); });
    };
    DetailComponent.prototype.chooseImage = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__shared_media_media_library__["a" /* MediaLibraryModal */], {
            width: '80%',
            height: '80%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.profileForm.controls['avatar'].setValue(result);
            }
        });
    };
    DetailComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'user-detail',
            template: __webpack_require__("./client/app/account/profile/detail.component.html"),
            styles: [__webpack_require__("./client/app/account/profile/detail.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./client/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "html, body{\r\n  height: 100%;\r\n  font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\na.active {\r\n  background-color: gray;\r\n}\r\n\r\nmat-list-item img{\r\n  width:50px;\r\n}\r\n\r\n.product-image{\r\n    height:100px;\r\n    width:50px;\r\n}\r\n\r\n.column{\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n}\r\n\r\n.example-sidenav-fab-container {\r\n  height: 100vh;\r\n}\r\n\r\n.app-height {\r\n  min-height:89vh;\r\n}\r\n\r\n.floating-fab {\r\n  position: fixed !important;\r\n  right: 20px;\r\n  bottom: 20px;\r\n  z-index: 1000;\r\n}\r\n\r\n.example-fab {\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 10px;\r\n}"

/***/ }),

/***/ "./client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-overlay\" *ngIf=\"loading\">\r\n  <mat-progress-bar mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\r\n</div>\r\n<div [ngBusy]=\"busy\" *ngIf=\"loading\"></div>\r\n<mat-sidenav-container>\r\n  <mat-sidenav #cart mode=\"over\" align=\"end\">\r\n    <mat-toolbar color=\"primary\">\r\n      <h2 class=\"mat-toolbar-tools\">Cart Details</h2>\r\n      <button mat-icon-button class=\"close\" (click)=\"cart.close()\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </mat-toolbar>\r\n    <mat-list>\r\n      <mat-list-item *ngFor=\"let i of cartItems\">\r\n        <img mat-list-avatar [src]=\"'uploads/'+i?.image\" onError=\"this.src='/assets/img/product-placeholder.png'\" alt=\"...\">\r\n        <h3 mat-line> {{i.name}} </h3>\r\n        <p mat-line>\r\n          <span>\r\n            <button mat-icon-button class=\"mat-raised mat-primary\" (click)=\"addItem({sku:i.sku, name:i.name, slug:i.slug, mrp:i.mrp, price:i.price, weight:i.weight, vid:i.vid}, -1)\">\r\n              <i class=\"material-icons\">remove</i>\r\n            </button>\r\n            <button mat-button class=\"mat-primary\" routerLink=\"product/checkout\">{{getQ(i.sku, i.vid)}}</button>\r\n            <button mat-icon-button class=\"mat-raised mat-primary\" (click)=\"addItem({sku:i.sku, name:i.name, slug:i.slug, mrp:i.mrp, price:i.price, weight:i.weight, vid:i.vid}, +1)\">\r\n              <i class=\"material-icons\">add</i>\r\n            </button>\r\n          </span>\r\n        </p>\r\n        <p mat-line>\r\n          {{i.price | currency:Settings.currency.code}} * {{i.quantity}} = {{i.price * i.quantity | currency:Settings.currency.code}}\r\n        </p>\r\n        <div class=\"close\">\r\n          <button mat-icon-button (click)=\"addItem({sku:i.sku, vid: i.vid}, -10000000)\">\r\n            <mat-icon>close</mat-icon>\r\n          </button>\r\n        </div>\r\n        <hr/>\r\n      </mat-list-item>\r\n      <h3 mat-subheader>Summary</h3>\r\n\r\n      <div *ngIf=\"getTotalP()>0\">\r\n        <mat-list-item>\r\n          <p mat-line>\r\n            <b>Shipping:</b>\r\n            <span *ngIf=\"shipping?.best.charge<=0\">&nbsp;Free</span>\r\n            <span *ngIf=\"shipping?.best.charge>0\">&nbsp;{{shipping?.best.charge | currency:Settings.currency.code}}</span>\r\n          </p>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n          <p mat-line>\r\n            <b>Grand Total:</b> {{getTotalP() + shipping?.best.charge | currency:Settings.currency.code}}\r\n          </p>\r\n        </mat-list-item>\r\n      </div>\r\n    </mat-list>\r\n    <mat-toolbar>\r\n      <button mat-raised-button [disabled]=\"cartItems.length <=0\" class=\"mat-primary\" (click)=\"cart.close()\" routerLink=\"/checkout\">\r\n        <mat-icon>local_grocery_store</mat-icon>Checkout →</button>\r\n    </mat-toolbar>\r\n  </mat-sidenav>\r\n  <header (openCrt)=\"cart.open()\"> </header>\r\n  <div class=\"app-height\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <footer></footer>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_cart_service__ = __webpack_require__("./client/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings__ = __webpack_require__("./client/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");

/**
 * Angular 2 decorators and services
 */






/**
 * App Component
 * Top Level Component
 */
var AppComponent = /** @class */ (function () {
    function AppComponent(router, cart, http, activatedRoute, titleService) {
        this.router = router;
        this.cart = cart;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.loading = true;
        this.Settings = __WEBPACK_IMPORTED_MODULE_5__settings__["a" /* Settings */];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.busy = this.router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
        this.cartItems = this.cart.items;
        this.cart.getBestShipper().subscribe(function (data) {
            _this.shipping = data[0];
        }, function (err) { return console.log(err); });
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            if (event.title)
                _this.titleService.setTitle(event.title + ' - ShopNx');
        });
    };
    AppComponent.prototype.getQ = function (pid, vid) {
        return this.cart.getQuantity(pid, vid);
    };
    AppComponent.prototype.getTotalP = function () {
        return this.cart.getTotalPrice();
    };
    AppComponent.prototype.addItem = function (product, qty) {
        this.cart.addItem(product, qty);
        // this.getQ(product._id, product.vid);
    };
    // Shows and hides the loading spinner during RouterEvent changes
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* NavigationStart */]) {
            this.loading = true;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* NavigationEnd */]) {
            this.loading = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationCancel */]) {
            this.loading = false;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* NavigationError */]) {
            this.loading = false;
        }
    };
    AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("./client/app/app.component.css")],
            template: __webpack_require__("./client/app/app.component.html")
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["f" /* Title */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_checkout_checkout_guarg__ = __webpack_require__("./client/app/home/checkout/checkout.guarg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account_module__ = __webpack_require__("./client/app/account/account.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_infinite_scroll__ = __webpack_require__("./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_busy__ = __webpack_require__("./node_modules/angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_busy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_modal_module__ = __webpack_require__("./client/app/modal/modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./client/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_wish_button_wish_button_component__ = __webpack_require__("./client/app/home/wish-button/wish-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_product_card_product_card_component__ = __webpack_require__("./client/app/home/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_shop_shop_component__ = __webpack_require__("./client/app/home/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_megamenu_megamenu_component__ = __webpack_require__("./client/app/home/megamenu/megamenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_success_success_component__ = __webpack_require__("./client/app/home/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_checkout_checkout_component__ = __webpack_require__("./client/app/home/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_featured_products_featured_products_component__ = __webpack_require__("./client/app/home/featured-products/featured-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_product_product_detail_component__ = __webpack_require__("./client/app/home/product/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_owl_carousel_owl_carousel_component__ = __webpack_require__("./client/app/home/owl-carousel/owl-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_news_banner_news_banner_component__ = __webpack_require__("./client/app/home/news-banner/news-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_banner_banner_component__ = __webpack_require__("./client/app/home/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_cart_service__ = __webpack_require__("./client/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_guards_auth_guard__ = __webpack_require__("./client/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_crud_helper__ = __webpack_require__("./client/app/shared/services/crud.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_pipes_pluralize_pipe__ = __webpack_require__("./client/app/shared/pipes/pluralize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_api_service__ = __webpack_require__("./client/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_404_404_component__ = __webpack_require__("./client/app/shared/404/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_services_user_service__ = __webpack_require__("./client/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_nouislider__ = __webpack_require__("./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular2_moment__ = __webpack_require__("./node_modules/angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_services_users_resolve__ = __webpack_require__("./client/app/shared/services/users.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__home_product_product_resolve__ = __webpack_require__("./client/app/home/product/product.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__app_routes__ = __webpack_require__("./client/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__app_component__ = __webpack_require__("./client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__home_home_home_component__ = __webpack_require__("./client/app/home/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__styles_scss__ = __webpack_require__("./client/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43__styles_scss__);






























// import { OwlModule } from 'angular-owl-carousel';













// import '../assets/css/style.default.css';

function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_41_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_41_angular2_jwt__["AuthConfig"]({
        tokenName: 'id_token',
        tokenGetter: (function () { return localStorage.getItem('id_token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }]
    }), http, options);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_34__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_38__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_39__home_home_home_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home_banner_banner_component__["a" /* BannerComponent */], __WEBPACK_IMPORTED_MODULE_17__home_news_banner_news_banner_component__["a" /* NewsBannerComponent */], __WEBPACK_IMPORTED_MODULE_16__home_owl_carousel_owl_carousel_component__["a" /* ShopnxCarouselComponent */], __WEBPACK_IMPORTED_MODULE_14__home_featured_products_featured_products_component__["a" /* FeaturedProductsComponent */], __WEBPACK_IMPORTED_MODULE_13__home_checkout_checkout_component__["a" /* CheckoutComponent */], __WEBPACK_IMPORTED_MODULE_9__home_product_card_product_card_component__["a" /* ProductCardComponent */], __WEBPACK_IMPORTED_MODULE_10__home_shop_shop_component__["a" /* ShopComponent */], __WEBPACK_IMPORTED_MODULE_15__home_product_product_detail_component__["a" /* ProductDetailComponent */], __WEBPACK_IMPORTED_MODULE_11__home_megamenu_megamenu_component__["a" /* MegamenuComponent */], __WEBPACK_IMPORTED_MODULE_11__home_megamenu_megamenu_component__["a" /* MegamenuComponent */], __WEBPACK_IMPORTED_MODULE_12__home_success_success_component__["a" /* SuccessComponent */], __WEBPACK_IMPORTED_MODULE_8__home_wish_button_wish_button_component__["a" /* WishButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_25__shared_404_404_component__["a" /* NotFoundComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_40__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_29__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__modal_modal_module__["a" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_42__angular_material__["m" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["l" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["x" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["r" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["t" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["b" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["p" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["y" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["n" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["q" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_36__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
                __WEBPACK_IMPORTED_MODULE_2__account_account_module__["AccountModule"],
                // OwlModule,
                __WEBPACK_IMPORTED_MODULE_30_ng2_nouislider__["NouisliderModule"],
                __WEBPACK_IMPORTED_MODULE_31_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_35__angular_router__["h" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_37__app_routes__["a" /* ROUTES */], { useHash: false, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_35__angular_router__["f" /* PreloadAllModules */] })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_24__shared_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_27__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_26__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_23__shared_pipes_pluralize_pipe__["a" /* PluralizePipe */], __WEBPACK_IMPORTED_MODULE_41_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_22__shared_services_crud_helper__["a" /* CrudHelper */], __WEBPACK_IMPORTED_MODULE_20__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_32__shared_services_users_resolve__["a" /* UsersResolve */], __WEBPACK_IMPORTED_MODULE_19__shared_services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_33__home_product_product_resolve__["a" /* ProductResolve */], __WEBPACK_IMPORTED_MODULE_21__shared_guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_1__home_checkout_checkout_guarg__["a" /* CheckoutGuard */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_41_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_40__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_40__angular_http__["RequestOptions"]]
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_38__app_component__["a" /* AppComponent */]]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./client/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_shop_shop_component__ = __webpack_require__("./client/app/home/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_product_product_resolve__ = __webpack_require__("./client/app/home/product/product.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_product_product_detail_component__ = __webpack_require__("./client/app/home/product/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_success_success_component__ = __webpack_require__("./client/app/home/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_checkout_checkout_guarg__ = __webpack_require__("./client/app/home/checkout/checkout.guarg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_checkout_checkout_component__ = __webpack_require__("./client/app/home/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_404_404_component__ = __webpack_require__("./client/app/shared/404/404.component.ts");






// import { HomePageComponent } from './home/home/home.component';

var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_shop_shop_component__["a" /* ShopComponent */], data: { title: 'ShopNx - Single Page e-commerce app using Angular4' } },
    { path: 'admin', loadChildren: './admin#AdminModule' },
    { path: 'account', loadChildren: './account#AccountModule' },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_5__home_checkout_checkout_component__["a" /* CheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__home_checkout_checkout_guarg__["a" /* CheckoutGuard */]], data: { title: 'Checkout' } },
    { path: 'success', component: __WEBPACK_IMPORTED_MODULE_3__home_success_success_component__["a" /* SuccessComponent */], data: { title: 'Order Placed' } },
    { path: 'product/:slug/:id', component: __WEBPACK_IMPORTED_MODULE_2__home_product_product_detail_component__["a" /* ProductDetailComponent */], resolve: { product: __WEBPACK_IMPORTED_MODULE_1__home_product_product_resolve__["a" /* ProductResolve */] } },
    { path: 'shop', component: __WEBPACK_IMPORTED_MODULE_0__home_shop_shop_component__["a" /* ShopComponent */], data: { title: 'ShopNx - Single Page e-commerce app using Angular4' } },
    { path: 'product/category/:slug/:categoryId', component: __WEBPACK_IMPORTED_MODULE_0__home_shop_shop_component__["a" /* ShopComponent */], data: { title: 'Product Details' } },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__shared_404_404_component__["a" /* NotFoundComponent */] },
];


/***/ }),

/***/ "./client/app/base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var BaseCtrl = /** @class */ (function () {
    function BaseCtrl() {
        var _this = this;
        this.data = [];
        this.filterText = '';
        this.flush = function (noResetData) {
            if (noResetData === void 0) { noResetData = true; }
            _this.meta.after = 0;
            _this.meta.end = false;
            _this.meta.skip = 0;
            // if (!noResetData) 
            _this.data = []; // Reset query parameters        
        };
        this.api2 = this.api2;
    }
    BaseCtrl.prototype.scroll = function () {
        if (this.meta.busy || this.meta.end)
            return;
        this.meta.busy = false;
        var q = { skip: this.meta.after };
        this.getData(q, true);
    };
    BaseCtrl.prototype.order = function (predicate) {
        this.flush();
        this.sort.reverse = (this.sort.predicate === predicate) ? !this.sort.reverse : false;
        this.sort.predicate = predicate;
        var pr = predicate;
        if (this.sort.reverse) {
            pr = '-' + pr;
        }
        this.meta.sort = pr;
        this.getData({ sort: pr });
    };
    BaseCtrl.prototype.clone = function (item) {
        var _this = this;
        if (!item) {
            return;
        }
        this.modal.confirm('Copy', 'Would you like to copy the ' + this.api2 + '?').subscribe(function (result) {
            if (result) {
                var clone = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](item);
                delete clone._id;
                _this.crud.add(_this.api2 || _this.api, clone).subscribe(function (data) { _this.flush(); _this.filterText = ''; _this.getData(); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
            }
        });
    };
    BaseCtrl.prototype.delete = function (item) {
        var _this = this;
        if (!item) {
            return;
        }
        this.modal.confirm('Delete?', 'Would you like to delete the ' + this.api2 + '?').subscribe(function (result) {
            if (result) {
                _this.crud.delete(_this.api2 || _this.api, item._id).subscribe(function (data) { _this.flush(); _this.filterText = ''; _this.getData(); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
            }
        });
    };
    BaseCtrl.prototype.getData = function (q, scrolled) {
        var _this = this;
        var limit = '10';
        q = q || {};
        if (q.sort) {
            this.meta.sort = q.sort;
        }
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["URLSearchParams"]();
        params.set('limit', limit);
        q.limit ? params.set('limit', q.limit) : params.set('limit', limit);
        q.skip ? params.set('skip', q.skip) : params.set('skip', '0');
        if (this.meta.sort) {
            params.set('sort', this.meta.sort);
        }
        ;
        if (q.where)
            params.set('where', JSON.stringify(q.where));
        if (q.search || this.meta.search) {
            this.meta.search = q.search;
            params.set('search', JSON.stringify({ q: q.search }));
        }
        if (q.sort) {
            params.set('sort', q.sort);
        }
        if (q.type) {
            params.set('type', q.type);
        }
        if (this.meta.busy || this.meta.end)
            return;
        this.meta.busy = true;
        this.busy = this.crud.get(this.api, params, true).subscribe(function (data) {
            _this.meta.filtered = data.length + _this.meta.after;
            _this.data = scrolled ? _this.data.concat(data) : data;
            _this.meta.busy = false;
            if (data.length >= limit) {
                _this.meta.after = _this.meta.filtered;
                _this.meta.end = false;
            }
            else {
                _this.meta.end = true;
            }
        }, function (error) { return _this.snack.open(error, 'OK', { duration: 2000 }); });
    };
    return BaseCtrl;
}());
/* harmony default export */ __webpack_exports__["a"] = (BaseCtrl);


/***/ }),

/***/ "./client/app/home/banner/banner.component.css":
/***/ (function(module, exports) {

module.exports = ".banner{\r\n    height:450px;\r\n    overflow: hidden;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19) !important;\r\n            box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19) !important;\r\n}\r\n.banner .img{\r\n    height:394px;\r\n    width:100%;\r\n}\r\n.owl-carousel .owl-stage-outer{\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 100%;\r\n    line-height: 0;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19) !important;\r\n            box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19) !important;\r\n}"

/***/ }),

/***/ "./client/app/home/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <owl-carousel [options]=\"carouselOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n  <div class=\"banner\" *ngFor=\"let image of images\">\r\n    <img [src]=\"image.src\" />\r\n  </div>\r\n</owl-carousel> -->"

/***/ }),

/***/ "./client/app/home/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var BannerComponent = /** @class */ (function () {
    function BannerComponent(el) {
        this.el = el;
        this.carouselOptions = {
            items: 1,
            autoplay: true,
            loop: true,
            center: true,
            lazyLoad: true,
            margin: 10,
        };
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.images = [
            { src: 'assets/fashion/fashion-glasses-go-pro-female-157888.jpeg' },
            { src: 'assets/fashion/girl-dandelion-yellow-flowers-160699.jpeg' },
            { src: 'assets/fashion/model-fashion-attractive-female-39657.jpeg' },
            { src: 'assets/fashion/pexels-photo-24156.jpeg' },
            { src: 'assets/fashion/pexels-photo-26549.jpeg' },
            { src: 'assets/fashion/pexels-photo-119654.jpeg' },
            { src: 'assets/fashion/pexels-photo-179909.jpeg' },
            { src: 'assets/fashion/pexels-photo-247199.jpeg' },
            { src: 'assets/fashion/pexels-photo-247295.jpeg' },
            { src: 'assets/fashion/pexels-photo-298863.jpeg' },
            { src: 'assets/fashion/pexels-photo-285171.jpeg' },
            { src: 'assets/fashion/pexels-photo-291762.jpeg' },
        ];
    };
    BannerComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'shopnx-banner',
            template: __webpack_require__("./client/app/home/banner/banner.component.html"),
            styles: [__webpack_require__("./client/app/home/banner/banner.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./client/app/home/checkout/checkout.component.css":
/***/ (function(module, exports) {

module.exports = ".center{\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-webkit-box-pack: start;-ms-flex-pack: start;justify-content: start;\r\n}\r\n.close-button{\r\n    cursor: pointer;\r\n}\r\n.container{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex; \r\n  -webkit-box-pack: center; \r\n      -ms-flex-pack: center; \r\n          justify-content: center;\r\n  \r\n}\r\n.checkout-card{\r\n  /*width: 40em;*/\r\n  margin: 10px;\r\n}\r\n.address-card{\r\n  width: 15em;\r\n  margin: 10px;\r\n  cursor: pointer;  \r\n}\r\n.checkout-button{\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n.selected{\r\n  border:1px solid yellow;\r\n}\r\n.w100{\r\n  max-width:100px;\r\n}"

/***/ }),

/***/ "./client/app/home/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<megamenu></megamenu>\r\n<!--<div *ngIf=\"msg\"> {{msg}} </div>-->\r\n<div class=\"center\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center start\" fxLayoutWrap>\r\n    <mat-card class=\"checkout-card\">\r\n      <form [formGroup]=\"checkoutForm\" autocomplete=\"false\" novalidate>\r\n        <h3>Process Order</h3>\r\n        <mat-card-content>\r\n          <table class=\"checkout-table\">\r\n            <tr>\r\n              <td>Cart Total:</td>\r\n              <td>{{cart.getTotalPrice() | currency : Settings.currency.code}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Shipping</td>\r\n              <td>\r\n                <span *ngIf=\"shipping?.best?.charge<=0 \">Free</span>\r\n                <span *ngIf=\"shipping?.best?.charge>0\"> {{shipping?.best?.charge | currency : Settings.currency.code}} [{{shipping?.best?.carrier}}] Add {{shipping?.free?.freeShipping\r\n                  - cart.getTotalPrice() | currency : Settings.currency.code}} more for free shipping through {{shipping?.free?.carrier}}\r\n                </span>\r\n              </td>\r\n              <td *ngIf=\"shipping?.best.charge === undefined\">\r\n                Sorry, but no supplier supplies to your location\r\n              </td>\r\n            </tr>\r\n            <!-- <tr>\r\n              <td>Discount Coupon:</td>\r\n              <td>\r\n                <mat-form-field class=\"w100\">\r\n                  <input matInput formControlName=\"coupon\" #coupon />\r\n                </mat-form-field>\r\n                <button type=\"button\" [disabled]=\"couponCode\" mat-button (click)=\"applyCoupon(coupon.value)\">Apply</button>\r\n                <button mat-button (click)=\"removeCoupon()\" *ngIf=\"couponCode\">{{couponCode}}\r\n                  <mat-icon>close</mat-icon>\r\n                </button>\r\n              </td>\r\n            </tr> -->\r\n            <tr>\r\n              <td>Payment Method:</td>\r\n              <td>\r\n                <mat-radio-group formControlName=\"selectedPaymentMethod\">\r\n                  <mat-radio-button *ngFor=\"let paymentMethod of Settings.paymentMethods\" [value]=\"paymentMethod\">\r\n                    {{paymentMethod}}&nbsp;&nbsp;&nbsp;&nbsp;\r\n                  </mat-radio-button>\r\n                </mat-radio-group>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Total Amount:</td>\r\n              <td>\r\n                <h2>{{cart.getTotalPrice() | currency : Settings.currency.code}}</h2>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button class=\"checkout-button circular-progress-button\" mat-raised-button color=\"primary\" (click)=\"checkout(checkoutForm.value)\"\r\n            [disabled]=\"cart.getTotalPrice()===0\">\r\n            <mat-icon>payment</mat-icon>Make Payment</button>\r\n        </mat-card-actions>\r\n      </form>\r\n    </mat-card>\r\n    <div *ngIf=\"!newAddressForm\">\r\n      <button color=\"primary\" class=\"checkout-button\" mat-raised-button (click)=\"showNewAddressForm(true)\">\r\n        <mat-icon>add</mat-icon>New Address</button>\r\n      <mat-card *ngFor=\"let address of addresses; let i=index;\" class=\"address-card\" [ngClass]=\"{'selected': selected === address?._id }\"\r\n        (click)=\"selectAddress(address)\">\r\n        <mat-card-content>\r\n          <h3>{{address.name}}</h3>\r\n          <br/> {{address.address}}, {{address.city}}, {{address.zip}}, {{address.state}}, {{address.phone}}\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-icon-button (click)=\"editAddress(address)\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n          <button mat-icon-button (click)=\"removeAddress(address)\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <mat-card class=\"address-card\" *ngIf=\"newAddressForm\">\r\n      <h3>Add New Address</h3>\r\n      <button mat-button mat-icon-button (click)=\"showNewAddressForm(false)\" class=\"close\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n      <edit [item]=\"address\" [fields]=\"fields\" api=\"addresses\" (save)=\"save($event)\"></edit>\r\n    </mat-card>\r\n  </div>"

/***/ }),

/***/ "./client/app/home/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__ = __webpack_require__("./client/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings__ = __webpack_require__("./client/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_cart_service__ = __webpack_require__("./client/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");










var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(cart, crud, snack, route, _fb, auth, modal) {
        this.cart = cart;
        this.crud = crud;
        this.snack = snack;
        this.route = route;
        this._fb = _fb;
        this.auth = auth;
        this.modal = modal;
        this.shipping = { best: { charge: 0 } };
        this.coupon = { amount: 0 };
        this.totalAmount = 0;
        this.totalAmountNoCoupon = 0;
        this.Settings = __WEBPACK_IMPORTED_MODULE_7__settings__["a" /* Settings */];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.msg = this.route.snapshot.queryParams['msg'];
        this.id = this.route.snapshot.queryParams['id'];
        this.checkoutForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(5)]],
            selectedPaymentMethod: ['COD', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            coupon: ['A100'],
        });
        this.fields = [
            { field: 'name' },
            { field: 'address' },
            { field: 'city' },
            { field: 'zip', dataType: 'number' },
            { field: 'state' },
            { field: 'phone', dataType: 'number' },
        ];
        this.totalAmount = this.cart.getTotalPrice();
        this.getMyAddress();
        this.getBestShipper();
    };
    CheckoutComponent.prototype.initAddress = function (a) {
        return this._fb.group({
            name: [a.name],
            address: [a.address],
            city: [a.city],
            zip: [a.zip],
            state: [a.state],
            phone: [a.phone],
        });
    };
    CheckoutComponent.prototype.addAddress = function (a) {
        var _this = this;
        var control = this.checkoutForm.controls['addresses'];
        if (!a) {
            var addrCtrl = this.initAddress({});
            control.push(addrCtrl);
        }
        else {
            a.forEach(function (element) {
                var addrCtrl = _this.initAddress(element);
                control.push(addrCtrl);
            });
        }
    };
    CheckoutComponent.prototype.getMyAddress = function () {
        var _this = this;
        this.showNewAddressForm(false);
        this.crud.get('addresses/my', null, true).subscribe(function (data) {
            if (data.length > 0) {
                _this.addresses = data;
                _this.selectAddress(data[0]);
            }
        }, function (err) { return _this.snack.open(err, 'OK'); });
    };
    CheckoutComponent.prototype.selectAddress = function (a) {
        this.address = a;
        this.selected = a._id;
    };
    CheckoutComponent.prototype.editAddress = function (a) {
        this.address = a;
        this.newAddressForm = true;
    };
    CheckoutComponent.prototype.removeAddress = function (item) {
        var _this = this;
        this.modal.confirm('Delete?', 'Are you sure to delete')
            .subscribe(function (res) {
            if (res) {
                _this.crud.delete('addresses', item._id).subscribe(function (data) {
                    _this.loading = false;
                    _this.getMyAddress();
                }, function (err) {
                    _this.snack.open(err, 'OK');
                    _this.loading = false;
                });
            }
        });
    };
    CheckoutComponent.prototype.save = function (data) {
        var _this = this;
        this.loading = true;
        if (data._id) {
            this.crud.patch('addresses', data._id, data, true).subscribe(function (res) {
                _this.loading = false;
                _this.getMyAddress();
            }, function (err) {
                _this.snack.open(err, 'OK');
                _this.loading = false;
            });
        }
        else {
            this.crud.post('addresses', data, true, true).subscribe(function (data) {
                _this.loading = false;
                _this.getMyAddress();
            }, function (err) {
                _this.snack.open(err, 'OK');
                _this.loading = false;
            });
        }
    };
    CheckoutComponent.prototype.applyCoupon = function (code) {
        var _this = this;
        this.couponCode = ''; // To prevent same code being applied twice
        this.crud.get('coupons', { where: { code: code, active: true, 'minimumCartValue': { $gte: this.totalAmountNoCoupon } } }).subscribe(function (data) {
            if (data.length === 0) {
                _this.snack.open('Coupon is not active', 'OK', { duration: 2000 });
                return;
            }
            if (data[0].amount >= _this.totalAmount) {
                _this.snack.open('Please add some more items before applying this coupon', 'OK', { duration: 2000 });
                return;
            }
            else {
                _this.coupon = data[0];
                _this.couponCode = data[0].code + " (" + data[0].amount + ")";
                _this.totalAmount -= parseInt(data[0].amount) || 0;
            }
        }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
    };
    CheckoutComponent.prototype.removeCoupon = function () {
        this.coupon = this.couponCode = undefined;
        this.totalAmount = this.totalAmountNoCoupon;
        this.getBestShipper();
    };
    CheckoutComponent.prototype.getBestShipper = function () {
        var _this = this;
        this.cart.getBestShipper().subscribe(function (data) {
            _this.shipping = data[0] || {};
            _this.totalAmountNoCoupon = _this.totalAmount = _this.cart.getTotalPrice() + _this.shipping.best.charge || 0;
        }, function (err) {
            // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', err);
        });
    };
    CheckoutComponent.prototype.checkout = function (order) {
        this.submitted = true;
        if (!order) {
            this.snack.open('Something went wrong.', 'OK', { duration: 2000 });
            return;
        }
        if (this.cart.items.length == 0) {
            this.snack.open('Your cart found empty. Please add some items', 'OK', { duration: 2000 });
            return;
        }
        if (!this.address.zip) {
            this.snack.open('You should enter an address with phone number', 'OK', { duration: 2000 });
            this.newAddressForm = true;
            return;
        }
        order.shipping = this.shipping.best.charge;
        if (!this.coupon)
            this.coupon = { amount: 0 };
        else if (!this.coupon.amount)
            this.coupon = { amount: 0 };
        order.couponAmount = this.coupon.amount;
        var address = {};
        address.recipient_name = this.address.name;
        address.line1 = this.address.address;
        address.city = this.address.city;
        address.postal_code = this.address.zip;
        address.country_code = this.Settings.country.code;
        address.merchantID = 'ShopNx';
        order.address = address;
        this.loading = true;
        this.cart.checkout(order.selectedPaymentMethod, [], order, true);
    };
    CheckoutComponent.prototype.showNewAddressForm = function (show) {
        this.newAddressForm = show;
        this.address = {};
    };
    CheckoutComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Component"])({
            selector: 'checkout',
            template: __webpack_require__("./client/app/home/checkout/checkout.component.html"),
            styles: [__webpack_require__("./client/app/home/checkout/checkout.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__shared_services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_6__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__["a" /* ModalService */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./client/app/home/checkout/checkout.guarg.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__ = __webpack_require__("./client/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");






var CheckoutGuard = /** @class */ (function () {
    function CheckoutGuard(router, crud, modal) {
        this.router = router;
        this.crud = crud;
        this.modal = modal;
    }
    CheckoutGuard.prototype.canActivate = function (route) {
        var _this = this;
        return this.crud.get('users/me', null, true)
            .map(function (e) { if (e) {
            return true;
        } }).catch(function () {
            _this.modal.login().subscribe(function (data) { if (data) {
                _this.router.navigateByUrl('/checkout');
            } });
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].of(false);
        });
    };
    CheckoutGuard = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__["a" /* ModalService */]])
    ], CheckoutGuard);
    return CheckoutGuard;
}());



/***/ }),

/***/ "./client/app/home/featured-products/featured-products.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/app/home/featured-products/featured-products.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <owl-carousel [options]=\"carouselOptions\" [items]=\"products\" [carouselClasses]=\"['owl-theme', 'sliding']\">\r\n  <product-card [product]=\"product\" *ngFor=\"let product of products;let i = index\"></product-card>\r\n</owl-carousel> -->"

/***/ }),

/***/ "./client/app/home/featured-products/featured-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var FeaturedProductsComponent = /** @class */ (function () {
    function FeaturedProductsComponent() {
        this.carouselOptions = {
            autoplay: false,
            loop: true,
            center: true,
            lazyLoad: true,
            margin: 30,
            autoplaySpeed: 500,
            navSpeed: 300,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1400: {
                    items: 4
                },
                1800: {
                    items: 5
                }
            }
        };
    }
    FeaturedProductsComponent.prototype.ngOnInit = function () { };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], FeaturedProductsComponent.prototype, "products", void 0);
    FeaturedProductsComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'shopnx-featured-products',
            template: __webpack_require__("./client/app/home/featured-products/featured-products.component.html"),
            styles: [__webpack_require__("./client/app/home/featured-products/featured-products.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [])
    ], FeaturedProductsComponent);
    return FeaturedProductsComponent;
}());



/***/ }),

/***/ "./client/app/home/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/*.product-cards{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  min-height:80vh;\r\n}\r\n.product-card{\r\n  margin: 10px;  \r\n  max-width: 350px; \r\n}*/\r\n"

/***/ }),

/***/ "./client/app/home/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<shopnx-banner></shopnx-banner>\r\n<shopnx-news-banner></shopnx-news-banner>\r\n<shopnx-featured-products [products]=\"products\"></shopnx-featured-products>"

/***/ }),

/***/ "./client/app/home/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(crud, el) {
        this.crud = crud;
        this.el = el;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.busy = this.crud.get('products', { params: { limit: 20, where: { sale: true } } }).subscribe(function (data) {
            _this.products = data;
        }, function (error) { });
    };
    HomePageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'shopnx-homepage',
            template: __webpack_require__("./client/app/home/home/home.component.html"),
            styles: [__webpack_require__("./client/app/home/home/home.component.css")],
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./client/app/home/megamenu/megamenu.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-fab img{\r\n   position: absolute;\r\n   top: 0%;\r\n   left: 0%;\r\n   width: 100%;\r\n}\r\n#wrapper {\r\n  /*width: 980px;*/\r\n  margin: 0 auto;\r\n}\r\n#wrapper nav {\r\n  position: relative;\r\n  height: 50px;\r\n  /*margin: 0 2px;*/\r\n  background: rgb(33,150,243);\r\n}\r\nheader, nav { \r\n  display: block;\r\n}\r\n#wrapper nav ul#menu {\r\n  display: block;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: 0;\r\n}\r\n#wrapper nav ul#menu li {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n#wrapper nav ul#menu li a {\r\n  display: block;\r\n  height: 50px;\r\n  font-size: 1em;\r\n  line-height: 50px;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  padding: 0 15px;\r\n}\r\n#wrapper nav ul#menu li a:hover, nav ul#menu li:hover > a {\r\n  background: #333;\r\n}\r\n#wrapper nav ul#menu li:hover > #mega {\r\n  display: block;\r\n}\r\n#mega {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  width: 80vw;\r\n  height: auto;\r\n  padding: 20px 30px;\r\n  background: #333;\r\n  display: none;\r\n}\r\nul#menu ul {\r\n  float: left;\r\n  /*width: 23%;*/\r\n  margin: 0 2% 15px 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\nul#menu ul li {\r\n  display: block;\r\n}\r\nul#menu ul li a {\r\n  float: left;\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n  line-height: 1.3em;\r\n  color: #888;\r\n  text-decoration: none;\r\n  padding: 6px 0;\r\n}\r\nul#menu ul li a.header {\r\n  font-size: 1.2em;\r\n  color: rgb(33,150,243);\r\n}\r\nul#menu ul li a:hover {\r\n  color: #fff;\r\n  background: none;\r\n}\r\nul#menu ul li:first-child a:hover {\r\n  color: #fff;\r\n}\r\n/* clearfix */\r\nnav ul:after {\r\n  content: \".\";\r\n  display: block;\r\n  clear: both;\r\n  visibility: hidden;\r\n  line-height: 0;\r\n  height: 0;\r\n}\r\nnav ul {\r\n  display: inline-block;\r\n}\r\nhtml[xmlns] nav ul {\r\n  display: block;\r\n}\r\n* html nav ul {\r\n  height: 1%;\r\n}\r\n#content {\r\n  padding: 30px 0;\r\n}"

/***/ }),

/***/ "./client/app/home/megamenu/megamenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <nav>\r\n    <ul id=\"menu\">\r\n      <li *ngFor=\"let c of categories\">\r\n        <a class=\"cursor\">{{c.name}}</a>\r\n        <div id=\"mega\" style=\"z-index:10000\">\r\n          <ul>\r\n            <li *ngFor=\"let h of c.children\"><a routerLink=\"/product/category/{{h.slug}}/{{h._id}}\">{{h.name}}</a> </li>\r\n          </ul>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>"

/***/ }),

/***/ "./client/app/home/megamenu/megamenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MegamenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");




var MegamenuComponent = /** @class */ (function () {
    function MegamenuComponent(crud, snack) {
        this.crud = crud;
        this.snack = snack;
    }
    MegamenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crud.get('categories').subscribe(function (data) { return _this.categories = data; }, function (err) { return _this.handleErr; });
    };
    MegamenuComponent.prototype.handleErr = function (err) {
        this.snack.open('Categories could not be loaded', 'OK', { duration: 2000 });
    };
    MegamenuComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'megamenu',
            template: __webpack_require__("./client/app/home/megamenu/megamenu.component.html"),
            styles: [__webpack_require__("./client/app/home/megamenu/megamenu.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSnackBar */]])
    ], MegamenuComponent);
    return MegamenuComponent;
}());



/***/ }),

/***/ "./client/app/home/news-banner/news-banner.component.css":
/***/ (function(module, exports) {

module.exports = ".featuredNewsBanner {\r\n\tmax-width: 940px;\r\n\twidth: 100%;\r\n\tmargin: 20px auto;\r\n\tposition: relative;\r\n\tpadding: 52px;\r\n\tbackground-size: cover;\r\n\tbackground-position-y: center;\r\n\tborder-radius: 6px;\r\n\t-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.15);\r\n\t        box-shadow: 0 1px 1px rgba(0,0,0,.15);\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n}\r\n.saleNewsBanner {\r\n\tmax-width: 440px;\r\n\twidth: 100%;\r\n\tmargin: 20px auto;\r\n\tposition: relative;\r\n\tpadding: 52px;\r\n\tbackground-size: cover;\r\n\tbackground-position-y: center;\r\n\tborder-radius: 6px;\r\n\t-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.15);\r\n\t        box-shadow: 0 1px 1px rgba(0,0,0,.15);\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n}\r\n.featuredNewsSubcontainer {\r\n\tz-index: 9;\r\n\tposition: relative;\r\n}\r\n.featuredBannerColorOverlay {\r\n\tbackground: rgba(6, 19, 16, 0.44);\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tborder-radius: 6px;\r\n}\r\n.saleBannerColorOverlay {\r\n\tbackground: rgba(156, 39, 176, 0.44);\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tborder-radius: 6px;\r\n}\r\n.featuredNewsSubcontainer a {\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n}\r\n.featuredNewsSubcontainer h1 {\r\n\tcolor: #fff;\r\n\tfont-size: 34px;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-weight: 400;\r\n\tline-height: 44px;\r\n}\r\n.featuredNewsSubcontainer p {\r\n\tcolor: rgba(255, 255, 255, 0.64);\r\n\tfont-size: 16px;\r\n\tmax-width: 500px;\r\n\tmargin-top: 14px;\r\n\tmargin-bottom: 0;\r\n}\r\n.bannerFeaturedButton {\r\n\ttext-align: right;\r\n}\r\n.bannerFeaturedButton a.featuredLink div {\r\n\tbackground: #4DD0E1;\r\n\theight: 36px;\r\n\tline-height: 37px;\r\n\tpadding: 0 24px;\r\n\tborder-radius: 2px;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tcolor: rgb(255, 255, 255);\r\n\t-webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\r\n\t        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\r\n\t-webkit-transition: all 200ms ease-in-out;\r\n\ttransition: all 200ms ease-in-out;\r\n\tdisplay: inline-block;\r\n}\r\n.bannerFeaturedButton a.featuredLink div:hover {\r\n\t-webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);\r\n\t        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);\r\n\tcursor: pointer;\r\n\tbackground: #26C6DA;\r\n}"

/***/ }),

/***/ "./client/app/home/news-banner/news-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\" fxLayout.xs=\"column\">\r\n  <div class=\"featuredNewsBanner\" style=\"background-image: url('assets/fashion/pexels-photo-298863.jpeg');\">\r\n    <div class=\"featuredNewsSubcontainer\">\r\n      <a routerLink=\"/shop\">\r\n        <h1>Explore our new arrivals</h1>\r\n      </a>\r\n      <p>By Swadesh Behera - Store Manager</p>\r\n      <div class=\"bannerFeaturedButton\">\r\n        <a routerLink=\"/shop\" class=\"featuredLink\">\r\n          <div>Read more</div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"featuredBannerColorOverlay\"></div>\r\n  </div>\r\n  <div class=\"saleNewsBanner\" style=\"background-image: url('assets/fashion/pexels-photo-247295.jpeg');\">\r\n    <div class=\"featuredNewsSubcontainer\">\r\n      <a routerLink=\"/shop\">\r\n        <h1>Its fashion sale 2017</h1>\r\n      </a>\r\n      <p></p>\r\n      <div class=\"bannerFeaturedButton\">\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"saleBannerColorOverlay\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./client/app/home/news-banner/news-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var NewsBannerComponent = /** @class */ (function () {
    function NewsBannerComponent() {
    }
    NewsBannerComponent.prototype.ngOnInit = function () {
    };
    NewsBannerComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'shopnx-news-banner',
            template: __webpack_require__("./client/app/home/news-banner/news-banner.component.html"),
            styles: [__webpack_require__("./client/app/home/news-banner/news-banner.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [])
    ], NewsBannerComponent);
    return NewsBannerComponent;
}());



/***/ }),

/***/ "./client/app/home/owl-carousel/owl-carousel.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/app/home/owl-carousel/owl-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"owl-carousel owl-theme\">\r\n  <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "./client/app/home/owl-carousel/owl-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopnxCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var ShopnxCarouselComponent = /** @class */ (function () {
    function ShopnxCarouselComponent(el) {
        this.el = el;
        this.defaultOptions = {};
    }
    ShopnxCarouselComponent.prototype.ngAfterViewInit = function () {
        // for (let key in this.options) {
        //   if (this.options.hasOwnProperty(key)) {
        //     this.defaultOptions[key] = this.options[key];
        //   }
        // }
        var outerHtmlElement = $(this.el.nativeElement);
        this.$carouselElement = outerHtmlElement.find('.owl-carousel').owlCarousel(this.defaultOptions);
    };
    ShopnxCarouselComponent.prototype.ngOnDestroy = function () {
        this.$carouselElement.trigger('destroy.owl.carousel');
        this.$carouselElement = null;
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], ShopnxCarouselComponent.prototype, "options", void 0);
    ShopnxCarouselComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'shopnx-owl-carousel',
            template: __webpack_require__("./client/app/home/owl-carousel/owl-carousel.component.html"),
            styles: [__webpack_require__("./client/app/home/owl-carousel/owl-carousel.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]])
    ], ShopnxCarouselComponent);
    return ShopnxCarouselComponent;
}());



/***/ }),

/***/ "./client/app/home/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n  <div class=\"list\">\r\n    <div class=\"product-card\">\r\n      <div class=\"bestseller-badge\" *ngIf=\"product.sale\">\r\n        <mat-icon>star</mat-icon>\r\n        <span class=\"txt\">Sale</span>\r\n        <mat-icon>star</mat-icon>\r\n      </div>\r\n      <h2 routerLink=\"/product/{{product.slug}}/{{product._id}}\">{{product.name}}</h2>\r\n      <h4 class=\"variants\">\r\n        <div [ngClass]=\"{'highlight': v._id === i._id }\" class=\"variant\" *ngFor=\"let v of product?.variants\" (click)=\"changeVariant(v)\"\r\n          fxFlex>{{v.size}}</div>\r\n      </h4>\r\n      <figure>\r\n        <img [src]=\"'uploads/'+i?.image\" onError=\"this.src='/assets/img/product-placeholder.png'\" />\r\n      </figure>\r\n      <span class=\"price\"> {{i?.price | currency : Settings.currency.code}}\r\n        <del class=\"del\" *ngIf=\"i?.price !== i?.mrp\">{{i?.mrp | currency : Settings.currency.code}}</del>\r\n      </span>\r\n      <cart-buttons [variant]=\"i\" [product]=\"product\"></cart-buttons>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./client/app/home/product-card/product-card.component.scss":
/***/ (function(module, exports) {

module.exports = ".bestseller-badge {\n  position: absolute;\n  top: 3px;\n  border-radius: 10px;\n  background-color: #EF364C;\n  color: white;\n  font-size: 0.7em;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 70%;\n  z-index: 40;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  overflow: hidden;\n  height: 20px;\n  -webkit-transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  -webkit-box-shadow: 0 2px 7px rgba(0, 0, 0, 0.48);\n          box-shadow: 0 2px 7px rgba(0, 0, 0, 0.48); }\n\n.bestseller-badge mat-icon {\n  font-size: 10px;\n  margin-top: 5px; }\n\n#content .list {\n  text-align: center; }\n\n.product-card {\n  padding-top: 20px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  height: 100%;\n  min-width: 250px !important;\n  max-width: 450px !important; }\n\n.product-card {\n  display: inline-block;\n  background-color: #fff;\n  position: relative;\n  z-index: 20;\n  -webkit-box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  margin-bottom: 40px;\n  padding-bottom: 30px;\n  -webkit-transition: all 250ms ease-out;\n  transition: all 250ms ease-out; }\n\n.product-card span.tag {\n    position: absolute;\n    left: 0px;\n    width: 28px;\n    height: 50px;\n    line-height: 40px;\n    color: #fff;\n    font-size: 14px; }\n\n.product-card span.tag:after {\n      content: '';\n      position: absolute;\n      left: 0;\n      z-index: -1;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 40px 40px 0 0;\n      border-color: #ff57ee transparent transparent transparent; }\n\n.product-card h2 {\n    width: 100%;\n    font-size: 24px;\n    font-weight: 700;\n    color: #323232;\n    padding: 0px;\n    margin: 30px 0 0;\n    text-transform: uppercase;\n    height: 1.2em;\n    overflow: hidden;\n    cursor: pointer; }\n\n.product-card h4 {\n    width: 100%;\n    font-size: 14px;\n    padding: 0px;\n    margin: 5px 0 0;\n    font-weight: 300;\n    letter-spacing: 4px;\n    color: #bbb; }\n\n.product-card figure {\n    width: 100%;\n    display: inline-block;\n    margin: 0px;\n    padding: 0px; }\n\n.product-card figure img {\n      display: inline-block;\n      width: 100%;\n      margin: 30px 0; }\n\n.product-card .price {\n    width: 100%;\n    margin-bottom: 20px;\n    font-size: 36px;\n    display: block;\n    color: #feca16;\n    font-weight: 400; }\n\n.product-card:hover {\n    -webkit-box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.3);\n            box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.3); }\n\n.product-card .variants {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 100%; }\n\n.product-card .variant {\n    padding: 10px;\n    margin: 4px;\n    -webkit-box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.4);\n            box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.4);\n    cursor: pointer; }\n\n.product-card .price del {\n    font-size: 12px;\n    color: #999; }\n\n.product-card .highlight {\n    background-color: lightgrey; }\n"

/***/ }),

/***/ "./client/app/home/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__("./client/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");



var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent() {
        this.Settings = __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* Settings */];
    }
    ProductCardComponent.prototype.ngOnInit = function () {
        this.i = this.product.variants[0];
    };
    ProductCardComponent.prototype.changeVariant = function (i) {
        this.i = i;
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    ProductCardComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'product-card',
            template: __webpack_require__("./client/app/home/product-card/product-card.component.html"),
            styles: [__webpack_require__("./client/app/home/product-card/product-card.component.scss")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./client/app/home/product/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<megamenu></megamenu>\r\n<div [ngBusy]=\"busy\"></div>\r\n<div class=\"page-title\">\r\n  <div class=\"sort-products mat-whiteframe-z2\">\r\n    <div>\r\n      <a routerLink=\"/\">Home</a> >\r\n      <a routerLink=\"/shop\">Products</a> > {{product.name}}\r\n    </div>\r\n  </div>\r\n</div>\r\n<div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n  <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n    <div class=\"side-thumb\" fxLayout=\"column\" fxLayout.xs=\"row\" fxFlexOrder.xs=1>\r\n      <div *ngFor=\"let v of product.variants; let i = index;\" (click)=\"changeIndex(i);\">\r\n        <img *ngIf=\"v.size!=product.variants[selectedIndex]?.size\" [src]=\"'uploads/'+v.image\" onError=\"this.src='/assets/img/product-placeholder.png'\"\r\n          alt=\"{{product.name}}\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"column main-product\">\r\n      <img [src]=\"'uploads/'+product?.variants[selectedIndex]?.image\" onError=\"this.src='/assets/img/product-placeholder.png'\"\r\n        alt=\"{{product.name}}\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"product-description\">\r\n    <h2 class=\"name\">{{product.name}}</h2>\r\n    <mat-divider>\r\n    </mat-divider>\r\n    <br/>\r\n    <div class=\"price\">\r\n      <div class=\"price\">Price:\r\n        <span class=\"text-muted\">{{product.variants[selectedIndex]?.price | currency : Settings.currency.code}}</span>\r\n      </div>\r\n      <del *ngIf=\"product?.variants[selectedIndex]?.price!=product.variants[selectedIndex]?.mrp\">\r\n        MRP: {{product?.variants[selectedIndex]?.mrp | currency : Settings.currency.code}}\r\n      </del>\r\n    </div>\r\n    Seller:\r\n    <a (click)=\"gotoVendor(product.vendor_id)\">{{product.vendor_name}}</a>\r\n    <br/>\r\n    <mat-divider>\r\n    </mat-divider>\r\n    <br/>\r\n\r\n    <div class=\"row\">\r\n      <cart-buttons [variant]=\"product.variants[selectedIndex]\" [product]=\"product\"></cart-buttons>\r\n      <wish-button [variant]=\"product.variants[selectedIndex]\" [product]=\"product\"></wish-button>\r\n    </div>\r\n    <br/>\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"category\">\r\n      <div class=\"row\" *ngIf=\"product.variants[selectedIndex]?.size\">\r\n        <mat-icon>format_shapes</mat-icon>\r\n        <div> Size: &nbsp; </div>\r\n        <b> {{product.variants[selectedIndex]?.size}} </b>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"product.brand\">\r\n        <mat-icon>verified_user</mat-icon>\r\n        <div> Brand: &nbsp; </div>\r\n        <b> {{product.brand.name}} </b>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"product.category\">\r\n        <mat-icon>subject</mat-icon>\r\n        <div> Category: &nbsp; </div>\r\n        <b> {{product.category?.name}} </b>\r\n      </div>\r\n    </div>\r\n    <br/>\r\n    <mat-divider>\r\n    </mat-divider>\r\n    <div *ngIf=\"product.info\">\r\n      <b>Description: </b>\r\n      <div class=\"description\">\r\n        {{product.info}}\r\n      </div>\r\n    </div>\r\n    <br/>\r\n    <mat-divider>\r\n    </mat-divider>\r\n    <div *ngIf=\"product.keyFeatures && product.keyFeatures?.length>0\">\r\n      <div class=\"subheader\">Key Features </div>\r\n      <ul>\r\n        <li *ngFor=\"let k of product.keyFeatures\" class=\"list\">\r\n          <b>{{k.key}}</b> : {{k.val}}</li>\r\n      </ul>\r\n    </div>\r\n    <div *ngIf=\"product.features && product.features?.length>0\">\r\n      <div class=\"subheader\"> Features </div>\r\n      <ul>\r\n        <li *ngFor=\"let k of product.features\" class=\"list\">\r\n          <b>{{k.key}}</b> : {{k.val}}</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"rows\" *ngIf=\"reviewSettings?.enabled && reviews?.length===0\">\r\n      <button mat-raised-button (click)=\"reviewForm()\" class=\"mat-raised circular-progress-button mat-primary\">\r\n        <i class=\"material-icons\">star</i> Be the first to review this item\r\n      </button>\r\n    </div>\r\n    <div class=\"reviews\">\r\n      <div class=\"reviews-header\" fxLayout=\"row\">\r\n        <div *ngIf=\"reviews?.length>0 && reviewSettings.enabled\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n          <div class=\"total-rating\">\r\n            <div class=\"total\"> {{rating.avg}}\r\n              <mat-icon>star</mat-icon>\r\n            </div>\r\n            <div>{{rating.count}} Ratings</div>\r\n            <div>{{reviewCount}} Reviews</div>\r\n          </div>\r\n          <div class=\"rating-signal\" fxFlex>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">5&nbsp;\r\n              <mat-icon color=\"fill:rgb(33,150,243)\">star</mat-icon>\r\n              <mat-progress-bar color=\"primary\" mat-mode=\"determinate\" value=\"{{rating.r5*100 / rating.count}}\">\r\n              </mat-progress-bar>{{rating.r5}}</div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">4&nbsp;\r\n              <mat-icon color=\"fill:rgb(33,150,243)\">star</mat-icon>\r\n              <mat-progress-bar mat-mode=\"determinate\" value=\"{{rating.r4*100 / rating.count}}\">\r\n              </mat-progress-bar>{{rating.r4}}</div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">3&nbsp;\r\n              <mat-icon color=\"fill:rgb(33,150,243)\">star</mat-icon>\r\n              <mat-progress-bar color=\"accent\" mat-mode=\"determinate\" value=\"{{rating.r3*100 / rating.count}}\">\r\n              </mat-progress-bar>{{rating.r3}}</div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">2&nbsp;\r\n              <mat-icon color=\"fill:rgb(255,87,34)\">star</mat-icon>\r\n              <mat-progress-bar color=\"warn\" mat-mode=\"determinate\" value=\"{{rating.r2*100 / rating.count}}\">\r\n              </mat-progress-bar>{{rating.r2}}</div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">1&nbsp;\r\n              <mat-icon color=\"fill:rgb(255,87,34)\">star</mat-icon>\r\n              <mat-progress-bar color=\"warn\" mat-mode=\"determinate\" value=\"{{rating.r1*100 / rating.count}}\">\r\n              </mat-progress-bar>{{rating.r1}}</div>\r\n          </div>\r\n        </div>\r\n        <div fxFlexOffset=\"25px\" fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"reviewSettings?.enabled && reviews?.length > 0\">\r\n          <button mat-raised-button class=\"mat-raised circular-progress-button mat-primary\" (click)=\"reviewForm()\">Rate & Review</button>\r\n        </div>\r\n      </div>\r\n      <mat-card *ngFor=\"let review of reviews\">\r\n        <button class=\"close\" mat-icon-button *ngIf=\"myReview(review)\" (click)=\"deleteReview(review)\">\r\n          <mat-icon style=\"fill: #aaa\">delete</mat-icon>\r\n        </button>\r\n        <div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <list-image [string]=\"review.message || review.rating\"></list-image>\r\n            <div fxLayout=\"column\" fxFlex>\r\n              <div *ngIf=\"review.rating\" class=\"rating-button\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <div>{{review.rating}}</div>\r\n                <mat-icon class=\"reviewRating\">star</mat-icon>\r\n              </div>\r\n              <div fxLayout=\"column\">\r\n                <div>{{review.message}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <mat-card-actions class=\"card-actions\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n              <i class=\"material-icons\">person</i>&nbsp;{{review.reviewer}}&nbsp;\r\n              <i class=\"material-icons\">access_time</i>&nbsp;{{review.created | amTimeAgo}}\r\n            </div>\r\n          </div>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./client/app/home/product/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__ = __webpack_require__("./client/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings__ = __webpack_require__("./client/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");









var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(crud, route, router, auth, modal, snack, title) {
        this.crud = crud;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.modal = modal;
        this.snack = snack;
        this.title = title;
        this.product = {};
        this.Settings = __WEBPACK_IMPORTED_MODULE_5__settings__["a" /* Settings */];
        this.reviewSettings = __WEBPACK_IMPORTED_MODULE_5__settings__["a" /* Settings */].reviewSettings || {};
        this.selectedIndex = 0;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.product = this.route.snapshot.data['product'];
        this.title.setTitle(this.product.name + ' - ShopNx');
        var id = this.route.snapshot.params['id'];
        this.getReviews();
    };
    ProductDetailComponent.prototype.changeIndex = function (i) {
        this.selectedIndex = i;
    };
    ProductDetailComponent.prototype.getReviews = function () {
        var _this = this;
        if (!this.product._id)
            return;
        this.busy = this.crud.get('reviews/product/' + this.product._id).subscribe(function (r) {
            _this.publishRatings(r);
            _this.reviews = r;
        }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
    };
    ProductDetailComponent.prototype.publishRatings = function (r) {
        var vm = this;
        var reviewCount = 0;
        var rating = { r5: 0, r4: 0, r3: 0, r2: 0, r1: 0, count: 0, total: 0, avg: 0 };
        r.forEach(function (i) {
            if (i.message)
                reviewCount++;
            if (i.rating)
                rating.count++;
            if (i.rating)
                rating.total = rating.total + i.rating;
            if (i.rating == 5)
                rating.r5++;
            if (i.rating == 4)
                rating.r4++;
            if (i.rating == 3)
                rating.r3++;
            if (i.rating == 2)
                rating.r2++;
            if (i.rating == 1)
                rating.r1++;
        }, this);
        this.reviewCount = reviewCount;
        rating.avg = Math.round(rating.total / rating.count * 10) / 10;
        this.rating = rating;
    };
    ProductDetailComponent.prototype.deleteReview = function (review) {
        var _this = this;
        this.modal.confirm('Are you sure to delete your review?', 'This is unrecoverable')
            .subscribe(function (result) {
            if (result)
                _this.crud.delete('reviews', review._id).subscribe(function (data) { return _this.getReviews(); }, function (err) { return _this.snack.open('Error while saving your review.', 'OK', { duration: 2000 }); });
        });
    };
    ProductDetailComponent.prototype.myReview = function (review) {
        return true;
    };
    ProductDetailComponent.prototype.reviewForm = function () {
        var _this = this;
        if (!this.auth.loggedIn) {
            this.snack.open('Please login to review', 'OK', { duration: 2000 });
            this.modal.login().subscribe(function (data) {
                if (data)
                    _this.review();
            }, function (err) {
                _this.snack.open(err, 'OK', { duration: 2000 });
            });
            return;
        }
        else {
            this.review();
        }
    };
    ProductDetailComponent.prototype.review = function () {
        var _this = this;
        this.modal.review()
            .subscribe(function (data) {
            if (!data) {
                _this.message = 'Please rate the item from a scale of 1-5';
                return;
            }
            _this.user = _this.auth.currentUser;
            data.pid = _this.product._id;
            data.pname = _this.product.name;
            data.pslug = _this.product.slug;
            data.vendor_id = _this.product.vendor_id;
            data.vendor_name = _this.product.vendor_name;
            data.vendor_email = _this.product.vendor_email;
            data.email = _this.user.email;
            data.reviewer = _this.user.name;
            _this.crud.post('reviews', data).subscribe(function (res) {
                _this.getReviews();
                if (_this.reviewSettings.moderate)
                    _this.snack.open('Your review is under moderation. Will be visible to public after approval.', 'OK', { duration: 2000 });
            }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        });
    };
    ProductDetailComponent.prototype.gotoVendor = function (id) {
        // this.$state.go('vendor', { id: id }, { reload: false });
    };
    ProductDetailComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
            selector: 'product-detail-component',
            template: __webpack_require__("./client/app/home/product/product-detail.component.html"),
            styles: [__webpack_require__("./client/app/home/product/product-detail.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./client/app/home/product/product-detail.css":
/***/ (function(module, exports) {

module.exports = "mat-card{\r\n    margin-bottom: 10px;\r\n}\r\n.card-actions{\r\n    color:#777;\r\n    padding-left: 70px;\r\n}\r\nlist-image{\r\n    margin-left:-20px;\r\n}\r\n.card-actions .material-icons{\r\n    font-size: 15px;\r\n}\r\n.reviewRating{\r\n    font-size: 18px;\r\n}\r\n.mat-icon{\r\n    margin-top: 2px;\r\n    height: 18px;\r\n    width: auto;\r\n}\r\n.rating-signal .mat-icon{\r\n    margin-top: -7px;\r\n    height: 18px;\r\n    width: auto;\r\n}\r\n.category .mat-icon{\r\n    font-size: 16px;\r\n}\r\n.rating-button {\r\n    background-color: #32cd32;\r\n    color: #fff;\r\n    border-radius: 4px;\r\n    padding: 0 6px;\r\n    width:40px;\r\n}\r\n.subheader {\r\n  font-size: 1rem;\r\n  color: rgba(0, 0, 0, .54);\r\n  text-align: left;\r\n  height: 32px;\r\n  padding-top: 8px;\r\n  margin-left: 16px;\r\n}\r\n.list {\r\n  font-size: 1rem;\r\n  color: rgba(0, 0, 0, .87);\r\n  text-align: left;\r\n  height: 20px;\r\n  padding-top: 5px;\r\n  display: block;\r\n  border-bottom: 1px solid rgba(0,0,0,.12);\r\n }\r\n.side-thumb img{\r\n    width: 100%;\r\n    max-width: 100px;    \r\n    cursor: pointer;\r\n}\r\n.main-product{\r\n    -webkit-box-flex:4;\r\n        -ms-flex:4;\r\n            flex:4;\r\n    margin: 0 10px;\r\n    max-width: 550px;        \r\n}\r\n.main-product img{\r\n    width: 100%;\r\n}\r\n.reviews list-image div, list-image img {\r\n    margin: 0;\r\n}\r\n.reviews{\r\n    padding: 20px 0;\r\n}\r\n.reviews list-image div {\r\n  text-align: center;\r\n}\r\n.reviews mat-card-actions span{\r\n    margin-left: 10px;\r\n    color: #999;\r\n}\r\n.reviews mat-card mat-card-content{\r\n    padding: 0 16px;\r\n}\r\n.reviews .reviews-header .total-rating{\r\n    margin: 10px 50px 10px 10px;\r\n    \r\n}\r\n.reviews .rating-signal mat-progress-linear{\r\n    width:150px;\r\n    margin: 0 20px;\r\n}\r\n.reviews .reviews-header .total{\r\n    font-size: 2em;\r\n    margin-bottom : 2px;\r\n}\r\n.reviews mat-card-header-text .mat-subhead .rating-button{\r\n    font-size: 1.1em;\r\n    background-color: limegreen;\r\n    color: #fff;\r\n    width: 35px;\r\n    border-radius: 4px;\r\n    padding: 0 6px;\r\n}\r\n.reviews mat-card-header-text .mat-subhead .rating-button ng-mat-icon{\r\n    margin-top: -3px;\r\n}\r\n.product-description{\r\n    margin: 10px;\r\n}\r\n.product-details-container .price{\r\n  font-size: 25px;\r\n  color: #555;\r\n}\r\n.product-details-container .price .text-muted{\r\n  font-size: 28px;\r\n  color: #333;\r\n}\r\n.product-details-container .mat-content{\r\n    margin-left: 10px;\r\n}\r\n/*.side-thumb{\r\n    width:150px;\r\n}*/\r\n.side-thumb mat-card{\r\n    cursor: pointer;\r\n    max-width: 150px;\r\n}\r\n.side-thumb mat-card img{\r\n    max-width: 150px;\r\n}\r\n/*.product-details-container mat-card img{\r\n    width:100%;\r\n}*/\r\n.big-thumb{\r\n    width:40%;\r\n}\r\n.detail-cta{\r\n    width:15%;\r\n}\r\nul.filter-list{\r\n    padding-left: 0;\r\n}\r\nul.filter-list li {\r\n    cursor: pointer;\r\n}\r\n.open .filters-col {\r\n    position: relative;\r\n}\r\n.filters-col {\r\n    background-color: #ffffff;\r\n}\r\n.filters-col {\r\n    width: 280px;\r\n    float: left;\r\n    -webkit-transition: opacity 300ms ease-out 0s;\r\n    transition: opacity 300ms ease-out 0s;\r\n    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    padding: 4px 20px 4px;\r\n    position: absolute;\r\n}\r\n.filters-col__collapse__title {\r\n    cursor: pointer;\r\n    padding: 20px 20px 20px 0;\r\n    margin-top: 0 !important;\r\n    position: relative;\r\n}\r\n.text-uppercase {\r\n    text-transform: uppercase;\r\n}\r\nh4 {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 1.692em;\r\n    padding: 0 0 0.9em;\r\n    margin: 0;\r\n}\r\n.filters-col__collapse__content {\r\n    padding-bottom: 15px;\r\n}\r\n.filter-list li {\r\n    margin: 0 0 5px;\r\n    text-transform: uppercase;\r\n}\r\n.checkbox-group {\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./client/app/home/product/product.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");





var ProductResolve = /** @class */ (function () {
    function ProductResolve(crud, router, snack) {
        this.crud = crud;
        this.router = router;
        this.snack = snack;
    }
    ProductResolve.prototype.resolve = function (route) {
        var id = route.params['id'];
        return this.crud.getOne('products/deep/', id, false);
    };
    ProductResolve = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSnackBar */]])
    ], ProductResolve);
    return ProductResolve;
}());



/***/ }),

/***/ "./client/app/home/shop/shop.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.products-container{\r\n    height:81vh;\r\n    overflow-x: hidden !important;\r\n}\r\n.filter-container{\r\n    overflow-x: hidden;\r\n}\r\n.product-cards{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.product-card{\r\n  margin: 10px;  \r\n  max-width: 320px; \r\n}\r\nmat-sidenav h3{\r\n    margin-top: 0;\r\n}\r\nmat-sidenav mat-divider{\r\n    padding: 8px 8px 10px 8px;\r\n}\r\nmat-sidenav h4 {\r\n    text-transform: uppercase;\r\n    font-size: 16px;\r\n    /*font-weight: 400;*/\r\n}\r\nmat-sidenav rzslider {\r\n    margin-bottom: 30px;\r\n}\r\nmat-sidenav label {\r\n    cursor: pointer;\r\n}\r\nmat-chips.mat-blue-theme .mat-chip {\r\n    color: #fff;\r\n    font-size: 11px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n}\r\n.filter-brands{\r\n  max-height: 200px;\r\n}\r\n.applied-filters{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    margin-top:5px;\r\n}\r\n.dark{\r\n    color: rgba(0, 0, 0, 0.54); \r\n}\r\n"

/***/ }),

/***/ "./client/app/home/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<megamenu></megamenu>\r\n<mat-sidenav-container class=\"products-container\">\r\n  <mat-sidenav #sidenav mode=\"side\" [opened]=\"isLargeScreen()\" class=\"filter-container\">\r\n    <form [formGroup]=\"filterForm\" #form autocomplete=\"false\" novalidate>\r\n      <mat-card>\r\n        <button class=\"close\" mat-button mat-icon-button (click)=\"sidenav.close()\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n        <mat-card-content>\r\n          <h3>Adjust Price</h3>\r\n          <nouislider [config]=\"priceSliderConfig\" [min]=\"priceRange.min\" [max]=\"priceRange.max\" (change)=\"priceSliderChanged($event)\"\r\n            [tooltips]=\"[ true, true ]\" style=\"margin-top: 4em;\"></nouislider>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <h4>Filter Brands</h4>\r\n          <div class=\"filter-brands\">\r\n            <div *ngFor=\"let i of brands\">\r\n              <mat-checkbox (click)=\"toggleBrands(i, fl.brands)\">{{i.name}}</mat-checkbox>\r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <div class=\"filter-features\">\r\n        <mat-card *ngFor=\"let k of features\">\r\n          <mat-card-content>\r\n            <h4>{{k.key}}</h4>\r\n            <p *ngFor=\"let i of k.v\">\r\n              <mat-checkbox (checked)=\"exists(i, fl.features[k.key])\" (click)=\"toggleFeatures(i, k.key)\">{{i}}</mat-checkbox>\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </form>\r\n  </mat-sidenav>\r\n\r\n  <div [ngBusy]=\"busy\"></div>\r\n\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-between center\" fxFlex style=\"height:100px !important;\">\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" style=\"width:100%\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\r\n          <i class=\"material-icons app-toolbar-menu dark\">filter_list</i>\r\n        </button>\r\n        <span>Showing {{meta.skip}} of {{meta.total}}</span>\r\n      </div>\r\n      <span class=\"app-toolbar-filler\"></span>\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"products.length>0\">\r\n        <span fxHide.xs>Sort: &nbsp;</span>\r\n        <mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n          <mat-button-toggle value=\"price\" (click)=\"sortNow('variants.price')\">\r\n            {{Settings.currency.symbol}}\r\n            <mat-icon>arrow_downward</mat-icon>\r\n          </mat-button-toggle>\r\n          <mat-button-toggle value=\"-price\" (click)=\"sortNow('-variants.price')\">\r\n            {{Settings.currency.symbol}}\r\n            <mat-icon>arrow_upward</mat-icon>\r\n          </mat-button-toggle>\r\n          <mat-button-toggle value=\"name\" (click)=\"sortNow('name')\">\r\n            A-Z\r\n            <mat-icon>arrow_downward</mat-icon>\r\n          </mat-button-toggle>\r\n          <mat-button-toggle value=\"-name\" (click)=\"sortNow('-name')\">\r\n            Z-A\r\n            <mat-icon>arrow_upward</mat-icon>\r\n          </mat-button-toggle>\r\n        </mat-button-toggle-group>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"applied-filters\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n      <div *ngFor=\"let b of fl.brands\" class=\"applied-filters\">\r\n        <button mdButton mat-raised-button>\r\n          <mat-icon mat-menu-align-target>verified_user</mat-icon>\r\n          {{b.name}}\r\n        </button>\r\n      </div>\r\n      <button *ngIf=\"searchParam\" mat-raised-button routerLink=\"/shop\">\r\n        <mat-icon mat-menu-align-target>subject</mat-icon>\r\n        {{searchParam}}\r\n      </button>\r\n      <div *ngIf=\"categoryQueried && fl && fl.categories\" class=\"applied-filters\">\r\n        <button *ngFor=\"let c of fl.categories\" mat-raised-button>\r\n          <mat-icon mat-menu-align-target>subject</mat-icon>\r\n          {{c.slug}}\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"fl.features.Type\" class=\"applied-filters\">\r\n        <button *ngFor=\"let f of fl.features.Type\" mat-raised-button>\r\n          <mat-icon mat-menu-align-target>format_shapes</mat-icon>\r\n          {{f}}\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"fl.features.Fit\" class=\"applied-filters\">\r\n        <button *ngFor=\"let f of fl.features.Fit\" mat-raised-button>\r\n          <mat-icon mat-menu-align-target>format_shapes</mat-icon>\r\n          {{f}}\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"fl.features.Fabric\" class=\"applied-filters\">\r\n        <button *ngFor=\"let f of fl.features.Fabric\" mat-raised-button>\r\n          <mat-icon mat-menu-align-target>format_shapes</mat-icon>\r\n          {{f}}\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"fl.features.Neck\" class=\"applied-filters\">\r\n        <button *ngFor=\"let f of fl.features.Neck\" mat-raised-button>\r\n          <mat-icon mat-menu-align-target>format_shapes</mat-icon>\r\n          {{f}}\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"fl.features.Color\" class=\"applied-filters\">\r\n        <button *ngFor=\"let f of fl.features.Color\" mat-raised-button>\r\n          <mat-icon mat-menu-align-target>format_shapes</mat-icon>\r\n          {{f}}\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <mat-card *ngIf=\"!meta.busy && products.length===0\" class=\"noproduct\" fxLayoutAlign=\"center center\" fxLayout=\"column\">\r\n      <div>No Product match the search criteria</div>\r\n      <button mat-button mat-raised-button class=\"mat-primary\" routerLink=\"/shop\">\r\n        <mat-icon>home</mat-icon>Browse All...</button>\r\n    </mat-card>\r\n    <div class=\"product-cards\" infinite-scroll infiniteScrollDistance=\"1\" infiniteScrollThrottle=\"300\" (scrolled)=\"scroll()\"\r\n      fxFlex>\r\n      <product-card *ngFor=\"let product of products\" [product]=\"product\" class=\"product-card products\"></product-card>\r\n    </div>\r\n  </div>\r\n</mat-sidenav-container>\r\n<div style=\"text-align:center\" *ngIf=\"!meta.busy\">\r\n  <button mat-button mat-raised-button (click)=\"scroll()\" *ngIf=\"!meta.end\">\r\n    <mat-icon>arrow_downwards</mat-icon>Load More...</button>\r\n</div>"

/***/ }),

/***/ "./client/app/home/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./client/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);









var ShopComponent = /** @class */ (function () {
    function ShopComponent(crud, snack, _fb, route, router, http) {
        this.crud = crud;
        this.snack = snack;
        this._fb = _fb;
        this.route = route;
        this.router = router;
        this.http = http;
        this.products = [];
        this.api = 'products';
        this.fl = { brands: [], categories: [], features: {}, price: [] };
        this.meta = { skip: 0, limit: 10 };
        this.scrollConfig = { suppressScrollX: true };
        this.priceSliderConfig = {
            start: [20, 8000],
            connect: true,
            range: {
                'min': 0,
                'max': 10000 // overridden by [max]
            },
            format: {
                to: function (value) {
                    return __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].currency.symbol + Math.round(value);
                },
                from: function (value) {
                    return value.replace(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].currency.symbol, '');
                }
            }
        };
        this.priceRange = {};
        this.myDate = new Date();
        this.Settings = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */];
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fl = {};
        this.q = {};
        this.fl.brands = [];
        this.fl.price = [];
        this.fl.categories = [];
        this.fl.features = { Type: [], Fit: [], Fabric: [], Neck: [], Color: [] };
        this.featuresFilter = {};
        this.brandsFilter = [];
        this.priceSlider = {};
        this.filterForm = this._fb.group({
            slider: [10]
        });
        this.http.get('/api/brands', { params: { limit: 3, sort: '-brand' } }).map(function (doc) { return doc.json(); }).subscribe();
        this.flush();
        this.searchParam = this.route.queryParams['value'].q;
        (this.searchParam) ? this.searchProducts(this.searchParam) : this.checkCategory(); // Required on page load too
        this.sub = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.flush();
            _this.searchParam = _this.route.queryParams['value'].q;
            (_this.searchParam) ? _this.searchProducts(_this.searchParam) : _this.checkCategory(); // Required on page load too
        });
        this.crud.get('products/count').subscribe(function (data) { return _this.meta.total = data[0].count; });
        this.crud.get('products/priceRange').subscribe(function (data) {
            _this.priceRange = data;
            _this.priceSliderConfig.range.min = data.min;
            _this.priceSliderConfig.range.max = data.max;
        });
        this.busy = this.crud.get('brands').subscribe(function (data) { return _this.brands = data; }, this.err);
        this.busy = this.crud.get('features/group').subscribe(function (data) { return _this.features = data; }, this.err);
    };
    ShopComponent.prototype.checkCategory = function () {
        if (this.route.params['value'].categoryId) {
            this.categoryQueried = true;
            this.fl.categories = [{ _id: this.route.params['value'].categoryId, slug: this.route.params['value'].slug }];
            this.filter();
        }
        else {
            this.categoryQueried = false;
            this.fl.search = undefined; // Required when browse all button at search page is clicked
            this.filter();
        }
    };
    ShopComponent.prototype.isLargeScreen = function () {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width > 1024) {
            return true;
        }
        else {
            return false;
        }
    };
    ShopComponent.prototype.getProducts = function (q, scrolled) {
        var _this = this;
        q = q || {};
        var params = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["URLSearchParams"]();
        params.set('limit', '10');
        q.limit ? params.set('limit', q.limit) : params.set('limit', '10');
        q.skip ? params.set('skip', q.skip) : params.set('skip', '0');
        if (this.meta.sort) {
            params.set('sort', this.meta.sort);
        }
        ;
        if (q.where)
            params.set('where', JSON.stringify(q.where));
        if (q.search)
            params.set('search', JSON.stringify(q.search));
        if (this.meta.busy || this.meta.end)
            return;
        this.meta.busy = true;
        this.busy = this.crud.get('products', params).subscribe(function (data) {
            _this.meta.busy = false;
            _this.meta.skip = data.length + _this.meta.skip || 0;
            _this.meta.end = (data.length >= 5) ? false : true;
            _this.products = scrolled ? _this.products.concat(data) : data;
        }, function (error) { _this.meta.busy = false; _this.snack.open(error, 'OK', { duration: 2000 }); });
    };
    ShopComponent.prototype.filter = function (q, scrolled) {
        if (q === void 0) { q = {}; }
        var f = [];
        if (this.fl.features) {
            __WEBPACK_IMPORTED_MODULE_8_lodash__["forEach"](this.fl.features, function (val, key) {
                if (val.length > 0) {
                    f.push({ 'features.key': key, 'features.val': { $in: val } });
                }
            });
        }
        if (this.fl.brands) {
            if (this.fl.brands.length > 0) {
                var brandIds_1 = [];
                __WEBPACK_IMPORTED_MODULE_8_lodash__["forEach"](this.fl.brands, function (brand) {
                    brandIds_1.push(brand._id);
                });
                f.push({ 'brand': { $in: brandIds_1 } });
            }
        }
        if (this.fl.categories) {
            this.categories = this.fl.categories;
            if (this.fl.categories.length > 0) {
                var categoryIds_1 = [];
                __WEBPACK_IMPORTED_MODULE_8_lodash__["forEach"](this.fl.categories, function (category) {
                    categoryIds_1.push(category._id);
                });
                f.push({ 'category': { $in: categoryIds_1 } });
            }
        }
        if (this.fl.price && this.fl.price.length > 0) {
            f.push({ 'variants.price': { $gt: this.fl.price[0], $lt: this.fl.price[1] } }); // For price slider
        }
        if (this.fl.search) {
            q.search = this.fl.search; // For price slider
        }
        if (f.length > 0) {
            q.where = { $and: f };
        }
        else {
            q.where = {};
        }
        this.getProducts(q, scrolled);
    };
    ShopComponent.prototype.toggleBrands = function (item, list) {
        if (!this.brandsFilter)
            this.brandsFilter = [];
        var listArray = this.brandsFilter;
        var idx = listArray.indexOf(item);
        if (idx > -1)
            listArray.splice(idx, 1);
        else
            listArray.push(item);
        this.fl.brands = this.brandsFilter;
        this.flush(); // To allow http get request
        this.filter(); // Filters the product list with this.fl as global variable
    };
    ShopComponent.prototype.toggleFeatures = function (item, list) {
        if (!this.featuresFilter[list])
            this.featuresFilter[list] = [];
        var listArray = this.featuresFilter[list];
        var idx = listArray.indexOf(item);
        if (idx > -1)
            listArray.splice(idx, 1);
        else
            listArray.push(item);
        this.fl.features = this.featuresFilter;
        this.flush(); // To allow http get request    
        this.filter(); // Filters the product list with this.fl as global variable
    };
    ShopComponent.prototype.sortNow = function (sort) {
        this.flush(); // To allow http get request
        this.meta.sort = sort;
        this.filter();
    };
    ShopComponent.prototype.searchProducts = function (q, flush) {
        if (flush === void 0) { flush = false; }
        this.flush();
        this.fl.search = { name: q };
        this.filter();
    };
    ShopComponent.prototype.scroll = function () {
        if (this.meta.busy || this.meta.end)
            return;
        this.filter({ skip: this.meta.skip, limit: 10 }, true);
    };
    ShopComponent.prototype.flush = function () {
        this.meta.end = false;
        this.meta.skip = 0;
        this.meta.limit = 10;
        this.products = []; // Reset query parameters        
    };
    ShopComponent.prototype.removeFeatures = function (k, v) {
        var index = this.fl.features[k].indexOf(v);
        if (index > -1) {
            this.fl.features[k].splice(index, 1);
            this.filter();
        }
    };
    ShopComponent.prototype.removeBrand = function (brand) {
        var index = this.fl.brands.indexOf(brand);
        if (index > -1) {
            this.fl.brands.splice(index, 1);
            this.filter();
        }
    };
    ShopComponent.prototype.removeCategory = function () {
        this.fl.categories = undefined;
        this.filter();
    };
    ShopComponent.prototype.err = function (err) {
        var _this = this;
        (function (error) { return _this.snack.open(error, 'OK', { duration: 2000 }); });
    };
    ShopComponent.prototype.priceSliderChanged = function (price) {
        this.flush(); // To allow http get request    
        this.fl.price = price;
        this.filter();
    };
    ShopComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe(); // Used for searching
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], ShopComponent.prototype, "sort", void 0);
    ShopComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'shopnx-home',
            template: __webpack_require__("./client/app/home/shop/shop.component.html"),
            styles: [__webpack_require__("./client/app/home/shop/shop.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./client/app/home/success/success.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/app/home/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<megamenu></megamenu>\r\n<div class=\"app-content\">\r\n  <div class=\"page-title\">\r\n    <div *ngIf=\"msg\"> {{msg}} </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./client/app/home/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");



var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(route) {
        this.route = route;
    }
    SuccessComponent.prototype.ngOnInit = function () {
        this.msg = this.route.snapshot.queryParams['msg'];
        this.id = this.route.snapshot.queryParams['id'];
    };
    SuccessComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'shopnx-success',
            template: __webpack_require__("./client/app/home/success/success.component.html"),
            styles: [__webpack_require__("./client/app/home/success/success.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./client/app/home/wish-button/wish-button.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/app/home/wish-button/wish-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"wished\" mat-button class=\"mat-raised circular-progress-button mat-warn\" (click)=\"toggleWishlist()\">\r\n  <mat-icon>favorite</mat-icon>&nbsp;Wished\r\n</button>\r\n<button *ngIf=\"!wished\" mat-button class=\"mat-raised circular-progress-button mat-primary\" (click)=\"toggleWishlist()\">\r\n  <mat-spinner color=\"#fff\" class=\"app-spinner\" mode=\"indeterminate\" *ngIf=\"loading\">\r\n  </mat-spinner>\r\n  <mat-icon>favorite</mat-icon>&nbsp;Add To Wishlist\r\n</button>"

/***/ }),

/***/ "./client/app/home/wish-button/wish-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__ = __webpack_require__("./client/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");






var WishButtonComponent = /** @class */ (function () {
    function WishButtonComponent(crud, auth, snack, modal) {
        this.crud = crud;
        this.auth = auth;
        this.snack = snack;
        this.modal = modal;
        this.loading = false;
    }
    WishButtonComponent.prototype.ngOnInit = function () {
    };
    WishButtonComponent.prototype.ngOnChanges = function () {
        if (!this.auth.loggedIn)
            return;
        this.checkWish();
    };
    WishButtonComponent.prototype.checkWish = function () {
        var _this = this;
        this.wished = false;
        this.loading = true;
        var wishlist = this.crud.get('wishlists/product/' + this.product._id + '/' + this.variant._id, null, true).subscribe(function (data) {
            _this.wished = data[0] ? true : false;
            _this.loading = false;
        });
    };
    // On click select star
    WishButtonComponent.prototype.toggleWishlist = function () {
        var _this = this;
        if (this.readOnly)
            return;
        if (!this.auth.loggedIn) {
            this.modal.login().subscribe(function (data) {
                if (data) {
                    _this.checkWish();
                    _this.save();
                }
                ;
            }, function (err) {
                _this.snack.open(err, 'OK', { duration: 2000 });
            });
            return;
        }
        else {
            this.save();
        }
    };
    WishButtonComponent.prototype.save = function () {
        var _this = this;
        var p = { product: this.product, variant: this.variant };
        this.loading = true;
        this.crud.post('wishlists', p).subscribe(function (res) {
            if (res.msg !== 'deleted') {
                _this.snack.open('Added to your wishlist', 'OK', { duration: 2000 });
                _this.wished = true;
            }
            else {
                _this.wished = false;
            }
            _this.loading = false;
        }, function (err) {
            _this.snack.open('Please logout and login again', 'OK', { duration: 2000 });
        });
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Boolean)
    ], WishButtonComponent.prototype, "readOnly", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], WishButtonComponent.prototype, "product", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], WishButtonComponent.prototype, "variant", void 0);
    WishButtonComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'wish-button',
            template: __webpack_require__("./client/app/home/wish-button/wish-button.component.html"),
            styles: [__webpack_require__("./client/app/home/wish-button/wish-button.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__["a" /* ModalService */]])
    ], WishButtonComponent);
    return WishButtonComponent;
}());



/***/ }),

/***/ "./client/app/modal/cancel-order.component.css":
/***/ (function(module, exports) {

module.exports = ".angular-material-rating{\r\n    margin: 0 20px;\r\n}\r\n.angular-material-rating .button {\r\n  cursor: pointer; \r\n}\r\n.angular-material-rating .button mat-icon {\r\n  font-size: 30px; \r\n}\r\n.angular-material-rating {\r\n  text-shadow: 0.06em .04em #000000; \r\n}\r\n.angular-material-rating .star-on mat-icon {\r\n  color: limegreen; \r\n}\r\n.angular-material-rating .star-off mat-icon {\r\n  color: #ddd; \r\n}\r\n.error{\r\n  color: mediumvioletred;\r\n}"

/***/ }),

/***/ "./client/app/modal/cancel-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\r\n  <content fxLayout=\"column\">\r\n    <section fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <h1>Cancel Order</h1>\r\n      <form [formGroup]=\"myForm\" name=\"form\" novalidate>\r\n        <section class=\"section\" fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <label>Reason</label>\r\n            <textarea name=\"order\" rows=\"3\" matInput formControlName=\"comment\"></textarea>\r\n            <!--<div ng-messages=\"form.comment.$error\" ng-if=\"form.comment.$dirty\">\r\n              <div ng-message=\"required\">Reason required</div>\r\n            </div>-->\r\n          </mat-form-field>\r\n        </section>\r\n        <div class=\"mat-dialog-actions\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n          <div class=\"error\" fxLayoutAlign=\"center center\">{{message}}</div>\r\n          <div fxLayout=\"row\">\r\n            <button type=\"button\" mat-raised-button class=\"mat-primary\" (click)=\"dialogRef.close({comment: myForm.value.comment})\">\r\n              <mat-icon>save</mat-icon>\r\n              Save</button>\r\n            <button type=\"button\" mat-button (click)=\"dialogRef.close()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </section>\r\n  </content>\r\n</div>"

/***/ }),

/***/ "./client/app/modal/cancel-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");






var CancelOrderComponent = /** @class */ (function () {
    function CancelOrderComponent(auth, crud, _fb, dialogRef) {
        this.auth = auth;
        this.crud = crud;
        this._fb = _fb;
        this.dialogRef = dialogRef;
    }
    CancelOrderComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            comment: [''],
        });
    };
    CancelOrderComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'cancel-order',
            template: __webpack_require__("./client/app/modal/cancel-order.component.html"),
            styles: [__webpack_require__("./client/app/modal/cancel-order.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */]])
    ], CancelOrderComponent);
    return CancelOrderComponent;
}());



/***/ }),

/***/ "./client/app/modal/confirm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");



var ConfirmModal = /** @class */ (function () {
    function ConfirmModal(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmModal = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'confirm-dialog',
            template: "\n        <p>{{ title }}</p>\n        <p>{{ message }}</p>\n        <button type=\"button\" mat-raised-button  class=\"mat-primary\"\n            (click)=\"dialogRef.close(true)\">OK</button>\n        <button type=\"button\" mat-button \n            (click)=\"dialogRef.close()\">Cancel</button>\n    ",
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */]])
    ], ConfirmModal);
    return ConfirmModal;
}());



/***/ }),

/***/ "./client/app/modal/modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cancel_order_component__ = __webpack_require__("./client/app/modal/cancel-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_login_login_modal_component__ = __webpack_require__("./client/app/account/login/login-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./client/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__review_form_component__ = __webpack_require__("./client/app/modal/review-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__confirm_modal_component__ = __webpack_require__("./client/app/modal/confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modal_service__ = __webpack_require__("./client/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");












var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["j" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["l" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__confirm_modal_component__["a" /* ConfirmModal */], __WEBPACK_IMPORTED_MODULE_7__review_form_component__["a" /* ReviewFormComponent */], __WEBPACK_IMPORTED_MODULE_1__cancel_order_component__["a" /* CancelOrderComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__confirm_modal_component__["a" /* ConfirmModal */], __WEBPACK_IMPORTED_MODULE_7__review_form_component__["a" /* ReviewFormComponent */], __WEBPACK_IMPORTED_MODULE_1__cancel_order_component__["a" /* CancelOrderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__modal_service__["a" /* ModalService */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__confirm_modal_component__["a" /* ConfirmModal */], __WEBPACK_IMPORTED_MODULE_7__review_form_component__["a" /* ReviewFormComponent */], __WEBPACK_IMPORTED_MODULE_3__account_login_login_modal_component__["a" /* LoginModalComponent */], __WEBPACK_IMPORTED_MODULE_1__cancel_order_component__["a" /* CancelOrderComponent */]
            ],
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "./client/app/modal/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancel_order_component__ = __webpack_require__("./client/app/modal/cancel-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_login_login_modal_component__ = __webpack_require__("./client/app/account/login/login-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirm_modal_component__ = __webpack_require__("./client/app/modal/confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__review_form_component__ = __webpack_require__("./client/app/modal/review-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");








var ModalService = /** @class */ (function () {
    function ModalService(dialog, auth) {
        this.dialog = dialog;
        this.auth = auth;
    }
    ModalService.prototype.confirm = function (title, message) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__confirm_modal_component__["a" /* ConfirmModal */]);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    ModalService.prototype.review = function () {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__review_form_component__["a" /* ReviewFormComponent */]);
        return dialogRef.afterClosed();
    };
    ModalService.prototype.cancelOrder = function () {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__cancel_order_component__["a" /* CancelOrderComponent */]);
        return dialogRef.afterClosed();
    };
    ModalService.prototype.login = function () {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__account_login_login_modal_component__["a" /* LoginModalComponent */]);
        return dialogRef.afterClosed();
    };
    ModalService.prototype.logout = function () {
        this.auth.logout();
    };
    ModalService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./client/app/modal/review-form.component.css":
/***/ (function(module, exports) {

module.exports = ".angular-material-rating{\r\n    margin: 0 20px;\r\n    cursor: pointer;\r\n}\r\n.angular-material-rating .button {\r\n  cursor: pointer; \r\n}\r\n.angular-material-rating .button mat-icon {\r\n  font-size: 30px; \r\n}\r\n.angular-material-rating {\r\n  text-shadow: 0.06em .04em #000000; \r\n}\r\n.angular-material-rating .star-on mat-icon {\r\n  color: limegreen; \r\n}\r\n.angular-material-rating .star-off mat-icon {\r\n  color: #ddd; \r\n}\r\n.error{\r\n  color: mediumvioletred;\r\n}"

/***/ }),

/***/ "./client/app/modal/review-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <section fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n    <h1 fxFlex>Rating & Review</h1>\r\n    <form [formGroup]=\"myForm\" #form autocomplete=\"false\" novalidate fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n      <div class=\"row\">\r\n        <div class=\"angular-material-rating\" *ngFor=\"let item of starsArray; let i = index;\">\r\n          <a class=\"button star-button\" [class]=\"item.class\" (mouseover)=\"setMouseOverRating(i + 1)\" (mouseleave)=\"setMouseOverRating(rating)\"\r\n            (click)=\"setRating(i + 1)\">\r\n            <mat-icon>star</mat-icon>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <br/>\r\n      <mat-form-field fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <textarea matInput formControlName=\"message\" placeholder=\"Message\"></textarea>\r\n      </mat-form-field>\r\n      <div class=\"error\">{{message}}</div>\r\n      <div class=\"mat-dialog-actions\" fxLayout=\"row\" fxLayoutAlign=\"center stretch\">\r\n        <button type=\"button\" mat-raised-button class=\"mat-primary\" (click)=\"dialogRef.close({rating: rating, message: myForm.value.message})\"\r\n          fxFlex>\r\n          <mat-icon>save</mat-icon>\r\n          Save</button>\r\n        <button type=\"button\" mat-button (click)=\"dialogRef.close()\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./client/app/modal/review-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");






var ReviewFormComponent = /** @class */ (function () {
    // @Input() product;
    // @Output() save = new EventEmitter();
    function ReviewFormComponent(auth, crud, _fb, dialogRef) {
        this.auth = auth;
        this.crud = crud;
        this._fb = _fb;
        this.dialogRef = dialogRef;
    }
    ReviewFormComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            message: [''],
        });
        var starsArray = [];
        // Initialize to 5 stars 
        for (var index = 0; index < 5; index++) {
            var starItem = {
                index: index,
                class: 'star-off'
            };
            starsArray.push(starItem);
        }
        this.starsArray = starsArray;
        // this.user = this.auth.getMe();
    };
    // On mousover
    ReviewFormComponent.prototype.setMouseOverRating = function (rating) {
        if (this.readOnly) {
            return;
        }
        this.validateStars(rating);
    };
    ;
    // Highlight stars
    ReviewFormComponent.prototype.validateStars = function (rating) {
        if (!this.starsArray || this.starsArray.length === 0) {
            return;
        }
        for (var index = 0; index < this.starsArray.length; index++) {
            var starItem = this.starsArray[index];
            if (index <= (rating - 1)) {
                starItem.class = 'star-on';
            }
            else {
                starItem.class = 'star-off';
            }
        }
    };
    // On click select star
    ReviewFormComponent.prototype.setRating = function (rating) {
        if (this.readOnly)
            return;
        this.rating = rating;
        this.validateStars(this.rating);
        // $timeout(function () {
        // this.onRating({
        //   rating: this.rating
        // });
        // });
    };
    ReviewFormComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'review-form',
            template: __webpack_require__("./client/app/modal/review-form.component.html"),
            styles: [__webpack_require__("./client/app/modal/review-form.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */]])
    ], ReviewFormComponent);
    return ReviewFormComponent;
}());



/***/ }),

/***/ "./client/app/settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
var Settings = /** @class */ (function () {
    function Settings() {
    }
    Settings.demo = false;
    Settings.reviewSettings = {
        enabled: true,
        moderate: false // If enabled, the review will be visible to public after admin approval
    };
    Settings.userRoles = ['user', 'vendor', 'manager', 'admin']; // This should be in ascending order of authority. e.g. In this case guest will not have access to any other role, where as admin will have the role of guest+user+vendor+manager+admin
    Settings.paymentStatus = ['Pending', 'Paid', 'created']; // On success from Paypal it stores as created
    Settings.orderStatus = ['Payment Pending', 'Order Placed', 'Paid', 'Order Accepted', 'Order Executed', 'Shipped', 'Delivered', 'Not in Stock', 'Cancellation Requested', 'Cancelled'];
    Settings.paymentMethods = ['PayPal', 'COD'];
    Settings.country = { name: 'India', code: 'IN' };
    Settings.currency = {
        symbol: 'Rs',
        code: 'INR',
        paypal: 'USD',
        exchange_rate: '0.015' // Paypal currency code(USD) / Shop currency (INR) ***  exchange_rate should not be 0 else it will generate divided by 0 error
    };
    Settings.menu = [
        { name: 'Products', url: '/admin/product', icon: 'store', authenticate: 'vendor', color: 'black', dashboard: true },
        { name: 'My Orders', url: '/admin/my-orders', icon: 'watch_later', authenticate: 'user', color: 'grey', dashboard: true },
        { name: 'Manage Orders', url: '/admin/manage-orders', icon: 'history', authenticate: 'manager', color: 'orange', dashboard: true },
        { name: 'Address', url: '/admin/address', icon: 'location_city', authenticate: 'user', color: 'yellow', dashboard: true },
        { name: 'Reviews', url: '/admin/reviews', icon: 'stars', authenticate: 'manager', color: 'blue', dashboard: true },
        { name: 'My Reviews', url: '/admin/my-reviews', icon: 'star_rate', authenticate: 'user', color: 'green', dashboard: true },
        { name: 'My Wishlist', url: '/admin/wishlist', icon: 'favorite', authenticate: 'user', color: 'purple', dashboard: true },
        { name: 'Brands', url: '/admin/brands', icon: 'wb_auto', authenticate: 'manager', color: 'purple', dashboard: true },
        { name: 'Categories', url: '/admin/categories', icon: 'view_comfy', authenticate: 'manager', color: 'light-blue', dashboard: true },
        { name: 'Features', url: '/admin/features', icon: 'check_circle', authenticate: 'manager', color: 'brown', dashboard: true },
        { name: 'Coupons', url: '/admin/coupons', icon: 'style', authenticate: 'admin', color: 'pink', dashboard: true },
        { name: 'Shippings', url: '/admin/shippings', icon: 'local_shipping', authenticate: 'admin', color: 'red', dashboard: true },
        { name: 'Users', url: '/admin/users', icon: 'face', img: 'auth.png', authenticate: 'admin', color: 'lime', dashboard: true },
        { name: 'Media Library', url: '/admin/media-library', authenticate: 'user', icon: 'perm_media' },
        { name: 'Profile', url: '/account/edit-profile', authenticate: 'user', icon: 'face' },
        { name: 'Change Password', url: '/account/change-password', authenticate: 'user', icon: 'lock' },
    ];
    return Settings;
}());



/***/ }),

/***/ "./client/app/shared/404/404.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/app/shared/404/404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content\">\r\n  <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <p class=\"text-center\">\r\n      <img src=\"/assets/img/angular.png\" alt=\"Not Found\">\r\n    </p>\r\n    <div>\r\n      <h3>We are sorry - this page is not here anymore</h3>\r\n      <h4 class=\"text-muted\">Error 404 - Page not found</h4>\r\n\r\n      <p class=\"text-center\">To continue please use the\r\n        <strong>Search form</strong> or\r\n        <strong>Menu</strong> above.</p>\r\n    </div>\r\n    <hr/>\r\n    <button routerLink=\"/\" mat-raised-button class=\"mat-raised mat-primary\">\r\n      <i class=\"material-icons\">home</i> Go to Homepage</button>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./client/app/shared/404/404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-404',
            template: __webpack_require__("./client/app/shared/404/404.component.html"),
            styles: [__webpack_require__("./client/app/shared/404/404.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./client/app/shared/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"adressForm\">\r\n    <mat-form-field>\r\n        <input type=\"text\" matInput formControlName=\"name\" placeholder=\"Name\">\r\n        <small [hidden]=\"adressForm.get('name').valid\" class=\"text-danger\">\r\n            Name is required\r\n        </small>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input type=\"text\" matInput formControlName=\"address\" placeholder=\"Address\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input type=\"text\" matInput formControlName=\"city\" placeholder=\"City\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input type=\"text\" matInput formControlName=\"zip\" placeholder=\"Zip\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input type=\"text\" matInput formControlName=\"state\" placeholder=\"State\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input type=\"text\" matInput formControlName=\"phone\" placeholder=\"Phone\">\r\n    </mat-form-field>\r\n</div>"

/***/ }),

/***/ "./client/app/shared/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");



var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.ngOnInit = function () {
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('group'),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"])
    ], AddressComponent.prototype, "adressForm", void 0);
    AddressComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'address',
            template: __webpack_require__("./client/app/shared/address/address.component.html"),
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./client/app/shared/cart-buttons/cart-buttons.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/app/shared/cart-buttons/cart-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"cart.checkCart(product?._id, variant?._id)\">\r\n  <div>\r\n    <button mat-raised-button class=\"mat-raised circular-progress-button mat-primary\" (click)=\"addItem(product, variant)\">\r\n      <i class=\"material-icons\">shopping_cart</i>Add to cart\r\n    </button>\r\n  </div>\r\n</section>\r\n\r\n<section *ngIf=\"!cart.checkCart(product?._id, variant?._id)\">\r\n  <button mat-icon-button class=\"mat-raised mat-primary\" (click)=\"addItem(product, variant,-1)\">\r\n    <i class=\"material-icons\">remove</i>\r\n  </button>\r\n\r\n  <button mat-button class=\"mat-primary\" routerLink=\"/checkout\">Buy {{cart.getQuantity(product?._id, variant?._id)}}</button>\r\n\r\n  <button mat-icon-button class=\"mat-raised mat-primary\" (click)=\"addItem(product, variant,1)\">\r\n    <i class=\"material-icons\">add</i>\r\n  </button>\r\n</section>"

/***/ }),

/***/ "./client/app/shared/cart-buttons/cart-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_cart_service__ = __webpack_require__("./client/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");



var CartButtonsComponent = /** @class */ (function () {
    function CartButtonsComponent(cart) {
        this.cart = cart;
    }
    CartButtonsComponent.prototype.ngOnInit = function () {
    };
    CartButtonsComponent.prototype.addItem = function (product, variant, i) {
        if (variant) {
            i = i || 1;
            this.cart.addItem({ sku: product._id, name: product.name, slug: product.slug, mrp: variant.mrp, price: variant.price, quantity: 1, image: variant.image, category: product.category, size: variant.size, weight: variant.weight, vid: variant._id }, i);
        }
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], CartButtonsComponent.prototype, "product", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], CartButtonsComponent.prototype, "variant", void 0);
    CartButtonsComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'cart-buttons',
            template: __webpack_require__("./client/app/shared/cart-buttons/cart-buttons.component.html"),
            styles: [__webpack_require__("./client/app/shared/cart-buttons/cart-buttons.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_cart_service__["a" /* CartService */]])
    ], CartButtonsComponent);
    return CartButtonsComponent;
}());



/***/ }),

/***/ "./client/app/shared/dialogs/accept-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");



var AcceptDialog = /** @class */ (function () {
    function AcceptDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AcceptDialog = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'accept-dialog',
            template: "\n        <p>{{ title }}</p>\n        <p>{{ message }}</p>\n        <button type=\"button\" mat-raised-button \n            (click)=\"dialogRef.close('accept')\" class=\"mat-raised circular-progress-button mat-primary\">ACCEPT</button>\n        <button type=\"button\" mat-raised-button \n            (click)=\"dialogRef.close('reject')\">REJECT</button>\n        <button type=\"button\" mat-button \n            (click)=\"dialogRef.close()\">Cancel</button>\n    ",
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */]])
    ], AcceptDialog);
    return AcceptDialog;
}());



/***/ }),

/***/ "./client/app/shared/dialogs/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");



var ConfirmDialog = /** @class */ (function () {
    function ConfirmDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDialog = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'confirm-dialog',
            template: "\n        <p>{{ title }}</p>\n        <p>{{ message }}</p>\n        <button type=\"button\" mat-raised-button \n            (click)=\"dialogRef.close(true)\">OK</button>\n        <button type=\"button\" mat-button \n            (click)=\"dialogRef.close()\">Cancel</button>\n    ",
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */]])
    ], ConfirmDialog);
    return ConfirmDialog;
}());



/***/ }),

/***/ "./client/app/shared/dialogs/dialogs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogs_service__ = __webpack_require__("./client/app/shared/dialogs/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accept_dialog_component__ = __webpack_require__("./client/app/shared/dialogs/accept-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirm_dialog_component__ = __webpack_require__("./client/app/shared/dialogs/confirm-dialog.component.ts");





var DialogsModule = /** @class */ (function () {
    function DialogsModule() {
    }
    DialogsModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__confirm_dialog_component__["a" /* ConfirmDialog */], __WEBPACK_IMPORTED_MODULE_3__accept_dialog_component__["a" /* AcceptDialog */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__confirm_dialog_component__["a" /* ConfirmDialog */], __WEBPACK_IMPORTED_MODULE_3__accept_dialog_component__["a" /* AcceptDialog */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__dialogs_service__["a" /* DialogsService */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__confirm_dialog_component__["a" /* ConfirmDialog */], __WEBPACK_IMPORTED_MODULE_3__accept_dialog_component__["a" /* AcceptDialog */],
            ],
        })
    ], DialogsModule);
    return DialogsModule;
}());



/***/ }),

/***/ "./client/app/shared/dialogs/dialogs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirm_dialog_component__ = __webpack_require__("./client/app/shared/dialogs/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accept_dialog_component__ = __webpack_require__("./client/app/shared/dialogs/accept-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");





var DialogsService = /** @class */ (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.accept = function (title, message, viewContainerRef) {
        var dialogRef;
        var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialogConfig */]();
        config.viewContainerRef = viewContainerRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__accept_dialog_component__["a" /* AcceptDialog */], config);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.confirm = function (title, message, viewContainerRef) {
        var dialogRef;
        var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialogConfig */]();
        config.viewContainerRef = viewContainerRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__confirm_dialog_component__["a" /* ConfirmDialog */], config);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    DialogsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialog */]])
    ], DialogsService);
    return DialogsService;
}());



/***/ }),

/***/ "./client/app/shared/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ".flex {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n.row{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n.space-between{\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n.pull-left{\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n}\r\n.pull-right{\r\n  -ms-flex-item-align: end;\r\n      align-self: flex-end;\r\n}\r\n.mat-form-field .mat-icon{\r\n  cursor: pointer;\r\n}"

/***/ }),

/***/ "./client/app/shared/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm.value)\" autocomplete=\"false\" novalidate>\r\n  <div class=\"help-block\" [hidden]=\"!err\">\r\n    {{ err }}\r\n  </div>\r\n  <div *ngFor=\"let i of cols\" [ngSwitch]=\"i.dataType\">\r\n    <div *ngSwitchCase=\"'boolean'\" class=\"flex\">\r\n      <mat-slide-toggle [formControlName]=\"i.field\">{{i.heading | labelcase}}</mat-slide-toggle>\r\n    </div>\r\n    <div *ngSwitchCase=\"'hidden'\" class=\"flex\">\r\n      <input type=\"hidden\" [formControlName]=\"i.field\" [placeholder]=\"i.heading | labelcase\" />\r\n    </div>\r\n    <!-- <div *ngSwitchCase=\"'date'\" class=\"flex\">\r\n      <mat-form-field>\r\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [formControlName]=\"i.field\" autofocus>\r\n        <button type=\"button\" matSuffix></button>\r\n      </mat-form-field>\r\n      <mat-datepicker #picker>\r\n      </mat-datepicker>\r\n    </div> -->\r\n    <div *ngSwitchCase=\"'select'\" class=\"flex\">\r\n      <mat-select [formControlName]=\"i.field\" [placeholder]=\"i.heading\" *ngIf=\"i.type !=='obj'\" autofocus>\r\n        <mat-option *ngFor=\"let o of i.options\" [value]=\"o\">\r\n          {{ o }}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-select [formControlName]=\"i.field\" [placeholder]=\"i.heading\" *ngIf=\"i.type==='obj' \" autofocus>\r\n        <mat-option *ngFor=\"let o of i.options\" [value]=\"o.val\">\r\n          {{ o.name }}\r\n        </mat-option>\r\n      </mat-select>\r\n\r\n    </div>\r\n    <div *ngSwitchCase=\"'array'\" class=\"flex\">\r\n      <div *ngIf=\"item['_id']\">\r\n        {{i.heading}}\r\n        <div *ngIf=\"!i.disabled\">\r\n          <mat-checkbox *ngFor=\"let user of remainingItems[i.field]\" (change)=\"assign($event,i.field, user, checked, i.options)\" autofocus>\r\n            {{user.name}}\r\n          </mat-checkbox>\r\n        </div>\r\n\r\n        <input [formControlName]=\"i.field\" [(ngModel)]=\"item[i.field]\" type=\"hidden\" [placeholder]=\"i.heading | labelcase \" autofocus\r\n        />\r\n        <mat-chip-list class=\"mat-chip-list-stacked \">\r\n          <mat-chip *ngFor=\"let chip of item[i.field]\" selected=\"true \" color=\"primary\" (click)=\"remove(chip, i.field,\r\n          i.disabled) \">\r\n            {{chip.name}}\r\n          </mat-chip>\r\n        </mat-chip-list>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'number'\" class=\"flex\">\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" [formControlName]=\"i.field\" [name]=\"i.field\" [placeholder]=\"i.heading | labelcase\" autofocus\r\n        />\r\n      </mat-form-field>\r\n      <div *ngIf=\"editForm.get(i.field).hasError('required') && editForm.get(i.field).touched\">\r\n        {{i.heading | labelcase}} is required\r\n      </div>\r\n      <div *ngIf=\"editForm.get(i.field).hasError('pattern') && editForm.get(i.field).touched\">\r\n        {{i.heading | labelcase}} must be a number.\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'image'\" class=\"flex \">\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" [formControlName]=\"i.field\" [name]=\"i.field \" [placeholder]=\"i.heading | labelcase\" autofocus\r\n        />\r\n        <mat-icon matPrefix (click)=\"chooseImage(i.field)\" class=\"pointer\">image</mat-icon>\r\n      </mat-form-field>\r\n    </div>\r\n    <div *ngSwitchDefault class=\"flex\">\r\n      <mat-form-field>\r\n        <input matInput type=\"text \" [formControlName]=\"i.field\" [name]=\"i.field\" [placeholder]=\"i.heading | labelcase\" autofocus\r\n        />\r\n      </mat-form-field>\r\n      <div *ngIf=\"editForm.get(i.field).hasError( 'required') && editForm.get(i.field).touched\">\r\n        {{i.heading | labelcase}} is required\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <div fxLayoutAlign=\"center center\">\r\n    <submit-button [loading]=\"loading\" [form]=\"editForm\" icon=\"save\"></submit-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./client/app/shared/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crud_helper__ = __webpack_require__("./client/app/shared/services/crud.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_media_library__ = __webpack_require__("./client/app/shared/media/media-library.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);







var URL = '/api/media';
var EditComponent = /** @class */ (function () {
    function EditComponent(dialog, _fb, helper) {
        this.dialog = dialog;
        this._fb = _fb;
        this.helper = helper;
        this.item = {};
        this.save = new __WEBPACK_IMPORTED_MODULE_5__angular_core__["EventEmitter"]();
        this.o = {};
        this.remainingItems = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.fields)
            this.cols = __WEBPACK_IMPORTED_MODULE_6_lodash__["clone"](this.helper.help(this.fields));
        if (this.item.constructor === Object) {
            this.cols.push({ field: '_id', dataType: 'hidden' });
        }
        this.cols.forEach(function (i) {
            var validators = [];
            i.required ? validators.push(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required) : false;
            if (!i.heading)
                i.heading = i.field;
            i.dataType === 'number' ? validators.push(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern("^[-+]?[0-9]*\.?[0-9]+$")) : false;
            _this.o[i.field] = [_this.item[i.field], validators];
            _this.editForm = _this._fb.group(_this.o);
            if (i.dataType === 'array')
                _this.getRemainingOptions(i.field, i.options);
        });
    };
    EditComponent.prototype.getRemainingOptions = function (field, fromArray) {
        var assigned = this.item[field];
        var diff = __WEBPACK_IMPORTED_MODULE_6_lodash__["differenceBy"](fromArray, assigned, '_id');
        this.remainingItems[field] = diff;
    };
    EditComponent.prototype.remove = function (chip, field, disabled) {
        if (!disabled) {
            this.item[field] = __WEBPACK_IMPORTED_MODULE_6_lodash__["pull"](this.item[field], chip);
            this.remainingItems[field].push(chip);
        }
    };
    EditComponent.prototype.chooseImage = function (field) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__media_media_library__["a" /* MediaLibraryModal */], {
            width: '80%',
            height: '80%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.editForm.controls[field].setValue(result);
            }
        });
    };
    EditComponent.prototype.onSubmit = function (data) {
        this.save.emit(data);
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], EditComponent.prototype, "item", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], EditComponent.prototype, "cols", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], EditComponent.prototype, "fields", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", String)
    ], EditComponent.prototype, "api", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Output"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], EditComponent.prototype, "save", void 0);
    EditComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'edit',
            template: __webpack_require__("./client/app/shared/edit/edit.component.html"),
            styles: [__webpack_require__("./client/app/shared/edit/edit.component.css")],
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__services_crud_helper__["a" /* CrudHelper */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./client/app/shared/export/export.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/app/shared/export/export.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-icon-button [mdMenuTriggerFor]=\"exportMenu\">\r\n    <mat-icon>cloud_download</mat-icon>\r\n</button>\r\n<mat-menu #exportMenu=\"mdMenu\">\r\n    <button mat-menu-item (click)=\"export('json', data)\">\r\n        <mat-icon>voicemail</mat-icon>\r\n        <span>JSON</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"export('text', data)\">\r\n        <mat-icon>notifications_off</mat-icon>\r\n        <span>Text</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"export('csv', data)\">\r\n        <mat-icon>dialpad</mat-icon>\r\n        <span>CSV</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"export('excel', data)\">\r\n        <mat-icon>dialpad</mat-icon>\r\n        <span>Excel</span>\r\n    </button>\r\n</mat-menu> -->"

/***/ }),

/***/ "./client/app/shared/export/export.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);




var ExportComponent = /** @class */ (function () {
    function ExportComponent(snack) {
        this.snack = snack;
        this.data = [];
        this.filename = 'codenx';
        this.data1 = [];
    }
    ExportComponent.prototype.ngOnInit = function () {
    };
    ExportComponent.prototype.export = function (format, data) {
        this.data1 = [];
        this.data1.push(JSON.stringify(this.data));
        if (!document.getElementById('exportable')) {
            this.snack.open('Please create a div with  id="exportable" whose data is to be exported', 'OK', { duration: 2000 });
            return;
        }
        var blob;
        if (format === 'csv') {
            blob = new Blob([document.getElementById('exportable').innerHTML], { type: "application/vnd.ms-excel;charset=charset=utf-8" });
            __WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"](blob, this.filename + ".csv");
        }
        else if (format === 'excel') {
            blob = new Blob([document.getElementById('exportable').innerHTML], {
                type: "application/vnd.ms-excel;charset=charset=utf-8"
            });
            __WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"](blob, this.filename + ".xls");
        }
        else if (format === 'json') {
            blob = new Blob(this.data1, { type: "text/json;charset=utf-8" });
            __WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"](blob, this.filename + ".json");
        }
        else if (format === 'text') {
            blob = new Blob(this.data1, { type: "text/plain;charset=utf-8" });
            __WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"](blob, this.filename + ".txt");
        }
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Array)
    ], ExportComponent.prototype, "data", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", String)
    ], ExportComponent.prototype, "filename", void 0);
    ExportComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'export',
            template: __webpack_require__("./client/app/shared/export/export.component.html"),
            styles: [__webpack_require__("./client/app/shared/export/export.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSnackBar */]])
    ], ExportComponent);
    return ExportComponent;
}());



/***/ }),

/***/ "./client/app/shared/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer .footer-content{\r\n    text-align: center;\r\n    padding: 10px 16px;\r\n    color: rgba(0, 0, 0, 0.54);\r\n    font-size: 0.9em;\r\n    -webkit-box-shadow:  0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n            box-shadow:  0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.footer .footer-content a {\r\n    color: #999;\r\n}\r\n.fixed-bottom {\r\n    position: fixed;\r\n    bottom: 1px;\r\n    left: 35%;\r\n    width: 100%;\r\n}\r\nmd-toast {\r\n    width: 600px !important;\r\n}"

/***/ }),

/***/ "./client/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"app-toolbar-filler\"></span>\r\n<div class=\"footer\">\r\n  <div class=\"footer-content\">\r\n    <div>Copyright | <a href=\"http://codenx.com\" target=\"_blank\">CodeNx</a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./client/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'footer',
            template: __webpack_require__("./client/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("./client/app/shared/footer/footer.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./client/app/shared/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__ = __webpack_require__("./client/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth, modal) {
        this.router = router;
        this.auth = auth;
        this.modal = modal;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn) {
            return true;
        }
        this.modal.login().subscribe();
        // this.router.navigate(['/account/login']);
        return false;
    };
    AuthGuard = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__["a" /* ModalService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./client/app/shared/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".spacer {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n}\r\nmd-toolbar{\r\n    -webkit-box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n            box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n    -webkit-transform: translate3d(0,0,0);\r\n            transform: translate3d(0,0,0);\r\n    -webkit-transition: background .4s cubic-bezier(.25,.8,.25,1),-webkit-box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n    transition: background .4s cubic-bezier(.25,.8,.25,1),-webkit-box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n    transition: background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n    transition: background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1),-webkit-box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n}\r\n.clearSearchBarField{\r\n    cursor:pointer;\r\n}\r\n.search-icon{\r\n    margin-top:5px;\r\n    cursor: pointer;\r\n}\r\n.brand{\r\n    margin-top:5px;\r\n    margin-right:20px;\r\n}\r\n.avatar{\r\n     overflow:hidden;\r\n}\r\n.avatar img{\r\n    width:120%;height:auto;\r\n}"

/***/ }),

/***/ "./client/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"start center\">\r\n    <div fxLayout=\"row\" *ngIf=\"!searchBar\">\r\n      <button mat-icon-button>\r\n        <mat-icon>home</mat-icon>\r\n      </button>\r\n      <div routerLink=\"/shop\" fxHide.xs *ngIf=\"!searchBar\" class=\"brand\">ShopNx</div>\r\n    </div>\r\n    <i class=\"material-icons clearSearchBarField noUserSelect\" *ngIf=\"searchBar\" (click)=\"show(false)\">close</i>\r\n\r\n    <shopnx-search fxFlex fxHide fxShow.gt-sm *ngIf=\"!searchBar\"></shopnx-search>\r\n    <shopnx-search fxFlex *ngIf=\"searchBar\"></shopnx-search>\r\n\r\n    <div fxShow fxHide.gt-sm layoutAlign=\"center center\" *ngIf=\"!searchBar\">\r\n      <mat-icon (click)=\"show(true)\" class=\"search-icon\">search</mat-icon>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n    <button mat-raised-button class=\"mat-raised mat-accent\" *ngIf=\"!searchBar\" (click)=\"openCart()\" [disabled]=\"cart.getTotalCount()===0\">\r\n      <mat-icon>shopping_cart</mat-icon>\r\n      <span fxShow fxHide.xs>Cart ({{cart.getTotalCount()}}) - {{cart.getTotalPrice() | currency:Settings.currency.code}}</span>\r\n    </button>\r\n    <button mat-button (click)=\"login()\" *ngIf=\"!auth.loggedIn &&  !searchBar\" fxLayout=\"column\">\r\n      <mat-icon>fingerprint</mat-icon>\r\n      <span fxHide fxShow.gt-xs>Login / Signup</span>\r\n    </button>\r\n    <button mat-button *ngIf=\"auth.loggedIn && !searchBar\" routerLink=\"/admin/dashboard\">\r\n      <mat-icon *ngIf=\"!auth.loggedIn\">fingerprint</mat-icon>\r\n      <button mat-fab *ngIf=\"auth.loggedIn\" class=\"avatar\">\r\n        <img src=\"{{auth.currentUser.avatar}}\" alt=\"{{auth.currentUser.name}}\" />\r\n      </button>\r\n      <span fxShow=\"false\" fxShow.gt-sm>{{auth.currentUser.name}}</span>\r\n    </button>\r\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\" *ngIf=\"auth.loggedIn && !searchBar\">\r\n      <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <div *ngFor=\"let item of Settings.menu\">\r\n        <button mat-menu-item *ngIf=\"auth.loggedIn && item.authenticate && auth.hasRole(item.authenticate)\" routerLink=\"{{item.url}}\">\r\n          <mat-icon>{{item.icon}}</mat-icon>\r\n          <span>{{item.name}}</span>\r\n        </button>\r\n      </div>\r\n      <button mat-menu-item *ngIf=\"auth.loggedIn\" (click)=\"auth.logout()\">\r\n        <mat-icon>vpn_key</mat-icon>\r\n        <span>Logout</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</mat-toolbar>"

/***/ }),

/***/ "./client/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__ = __webpack_require__("./client/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./client/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_cart_service__ = __webpack_require__("./client/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, cart, media, modal) {
        this.auth = auth;
        this.cart = cart;
        this.media = media;
        this.modal = modal;
        this.openCrt = new __WEBPACK_IMPORTED_MODULE_5__angular_core__["EventEmitter"]();
        this.isDarkTheme = false;
        this.progress = 0;
        this.toggleSidenav = new __WEBPACK_IMPORTED_MODULE_5__angular_core__["EventEmitter"]();
        this.Settings = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */];
        // media.subscribe((change: MediaChange) => {
        //     if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        //         this.searchBar = false;
        //     }
        // })
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openCart = function () {
        this.openCrt.emit();
    };
    HeaderComponent.prototype.show = function (x) {
        this.searchBar = x;
    };
    HeaderComponent.prototype.login = function () {
        this.modal.login().subscribe();
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Output"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], HeaderComponent.prototype, "openCrt", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Output"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], HeaderComponent.prototype, "toggleSidenav", void 0);
    HeaderComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'header',
            template: __webpack_require__("./client/app/shared/header/header.component.html"),
            styles: [__webpack_require__("./client/app/shared/header/header.component.css")],
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["b" /* ObservableMedia */], __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__["a" /* ModalService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./client/app/shared/list-image/list-image.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/app/shared/list-image/list-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.background]=\"bgColor\" class=\"circle\"><span>{{firstLetter}}</span></div>"

/***/ }),

/***/ "./client/app/shared/list-image/list-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);



var ListImageComponent = /** @class */ (function () {
    function ListImageComponent() {
        this.colors = [
            '#f9a43e',
            '#59a2be',
            '#67bf74',
            '#f58559',
            '#e4c62e',
            '#f16364',
            '#2093cd',
            '#ad62a7'
        ];
        this.firstLetter = '';
        this.numberOfColors = this.colors.length;
    }
    ListImageComponent.prototype.ngOnInit = function () {
        if (this.string) {
            var firstLetter = this.firstLetter = __WEBPACK_IMPORTED_MODULE_2_lodash__["capitalize"](this.string.toString().charAt(0));
            this.bgColor = this.getColor(firstLetter);
        }
    };
    ListImageComponent.prototype.hashCode = function (str) {
        var hash = 0, length = str.length, i, chr;
        if (length === 0) {
            return hash;
        }
        for (i = 0; i < length; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };
    ListImageComponent.prototype.getColor = function (string) {
        var color = Math.abs(this.hashCode(string.charAt(0))) % this.numberOfColors;
        return this.colors[color];
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", String)
    ], ListImageComponent.prototype, "string", void 0);
    ListImageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'list-image',
            template: __webpack_require__("./client/app/shared/list-image/list-image.component.html"),
            styles: [__webpack_require__("./client/app/shared/list-image/list-image.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [])
    ], ListImageComponent);
    return ListImageComponent;
}());



/***/ }),

/***/ "./client/app/shared/list/list.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-fab{\r\n  position:absolute !important;\r\n  bottom:20px;\r\n  right:20px;\r\n}\r\n.mat-icon-button .mat-icon {\r\n    font-size: 24px;\r\n}\r\n.mat-icon-button .mat-icon.filtericon {\r\n    padding-top:20px;\r\n}\r\n.sort .mat-icon {\r\n    font-size: 18px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./client/app/shared/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-fab class=\"floating-fab\" *ngIf=\"!no.add\" color=\"accent\" routerLink=\"{{url}}/new\">\r\n  <mat-icon>add</mat-icon>\r\n</button>\r\n<div [ngBusy]=\"busy\"></div>\r\n\r\n<div class=\"app-content cp-container\">\r\n  <mat-card fxFlex>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"example-scrolling-content\">\r\n      <h3>{{title}}</h3>\r\n      <span class=\"app-toolbar-filler\"></span>\r\n      <div *ngIf=\"!no.search\">\r\n        <button mat-icon-button *ngIf=\"showFilter\" (click)=\"showFilter=false\">\r\n          <mat-icon class=\"filtericon\">search</mat-icon>\r\n        </button>\r\n        <mat-form-field *ngIf=\"showFilter\" fxFlex>\r\n          <input type=\"text\" [value]=\"filterText\" placeholder=\"Filter\" [formControl]=\"filterInput\" matInput autofocus/>\r\n        </mat-form-field>\r\n        <button mat-icon-button *ngIf=\"showFilter\" (click)=\"showFilter=false;filterText='';flush();getData({ sort: '-updatedAt' })\">\r\n          <mat-icon class=\"filtericon\">close</mat-icon>\r\n        </button>\r\n        <button mat-icon-button *ngIf=\"!showFilter\" (click)=\"showFilter=true\">\r\n          <mat-icon>filter_list</mat-icon>\r\n        </button>\r\n      </div>\r\n      <export [data]=\"data\" *ngIf=\"!no.export\"></export>\r\n    </div>\r\n\r\n    <div class=\"mt20\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <mat-card *ngIf=\"!meta.busy && data.length===0\" class=\"noproduct\" fxLayoutAlign=\"center center\" fxLayout=\"column\">\r\n        <div>No {{title}} found</div>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div infiniteScroll infiniteScrollDistance=\"2\" infiniteScrollThrottle=\"500\" (scrolled)=\"scroll()\" scrollWindow=\"false\" id=\"exportable\"\r\n      *ngIf=\"data.length>0\">\r\n      <table>\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th *ngFor=\"let h of fie\">\r\n              <a class=\"sort\" (click)=\"reverse=!reverse;order(h.field)\" *ngIf=\"!no.sort && !h.noSort\" fxLayout=\"row\">\r\n                {{h.heading | labelcase}}\r\n                <mat-icon *ngIf=\"reverse && h.field === sort.predicate\">arrow_downward</mat-icon>\r\n                <mat-icon *ngIf=\"!reverse && h.field === sort.predicate\">arrow_upwards</mat-icon>\r\n              </a>\r\n              <span *ngIf=\"no.sort || h.noSort\">\r\n                {{h.heading | labelcase}}\r\n              </span>\r\n            </th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let d of data; let i = index;\">\r\n            <td>{{i+1}}</td>\r\n            <td *ngFor=\"let f of fie\" [ngSwitch]=\"f.dataType\">\r\n              <img [src]=\"d[f.field]\" err-src=\"/assets/img/1px.png\" width=\"100px\" *ngSwitchCase=\"'image'\" />\r\n              <img [src]=\"'uploads/'+d.variants[0].image\" err-src=\"/assets/img/1px.png\" width=\"100px\" *ngSwitchCase=\"'product-image'\" />\r\n              <span *ngSwitchCase=\"'date'\">{{d[f.field] | date}}</span>\r\n              <!--<mat-slide-toggle [checked]=\"d[f.field]\" *ngSwitchCase=\"'boolean'\"></mat-slide-toggle>-->\r\n              <mat-checkbox [checked]=\"d[f.field]\" *ngSwitchCase=\"'boolean'\" disabled=\"true\">\r\n              </mat-checkbox>\r\n              <a *ngSwitchCase=\"'product-detail'\" routerLink=\"/product/{{d[f.slug]}}/{{d[f.id]}}\">{{d[f.field]}}</a>\r\n              <span *ngSwitchDefault>{{d[f.field]}}</span>\r\n            </td>\r\n            <td>\r\n              <button *ngIf=\"!no.clone\" mat-icon-button (click)=\"clone(d)\">\r\n                <mat-icon>content_copy</mat-icon>\r\n              </button>\r\n              <button *ngIf=\"!no.edit\" mat-icon-button routerLink=\"{{url}}/{{d._id}}\">\r\n                <mat-icon>edit</mat-icon>\r\n              </button>\r\n              <button *ngIf=\"!no.delete\" mat-icon-button (click)=\"delete(d)\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div style=\"text-align:center\" *ngIf=\"!meta.busy\">\r\n      <button mat-button mat-raised-button (click)=\"scroll()\" *ngIf=\"!meta.end\">\r\n        <mat-icon>arrow_downwards</mat-icon>Load More...</button>\r\n    </div>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./client/app/shared/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal_service__ = __webpack_require__("./client/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_crud_helper__ = __webpack_require__("./client/app/shared/services/crud.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base__ = __webpack_require__("./client/app/base.ts");









var ListComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](ListComponent, _super);
    function ListComponent(crud, snack, helper, route, modal) {
        var _this = _super.call(this) || this;
        _this.crud = crud;
        _this.snack = snack;
        _this.helper = helper;
        _this.route = route;
        _this.modal = modal;
        _this.save = new __WEBPACK_IMPORTED_MODULE_7__angular_core__["EventEmitter"]();
        _this.showFilter = false;
        _this.data = [];
        _this.meta = {};
        _this.filterInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        _this.no = {};
        return _this;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flush();
        this.sort = { predicate: null, reverse: false };
        this.url = this.route.url;
        this.fie = this.helper.help(this.fields);
        this.getData({ sort: '-updatedAt' });
        this.filterText = "";
        var typingTimer;
        this.filterInput.valueChanges.subscribe(function (term) {
            clearTimeout(typingTimer);
            var vm = _this;
            typingTimer = setTimeout(function () {
                vm.filterText = term;
                vm.flush();
                vm.meta.search = term;
                vm.getData({ search: term });
            }, 400);
        });
    };
    ListComponent.prototype.change = function (type) {
        this.flush();
        this.loading = true;
        this.getData({ type: type });
    };
    ListComponent.prototype.err = function (err) {
        this.snack.open(err, 'OK', { duration: 2000 });
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Array)
    ], ListComponent.prototype, "fields", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], ListComponent.prototype, "no", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Array)
    ], ListComponent.prototype, "fie", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", String)
    ], ListComponent.prototype, "title", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", String)
    ], ListComponent.prototype, "api", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Output"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], ListComponent.prototype, "save", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], ListComponent.prototype, "sort", void 0);
    ListComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'crud-list',
            template: __webpack_require__("./client/app/shared/list/list.component.html"),
            styles: [__webpack_require__("./client/app/shared/list/list.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_4__shared_services_crud_helper__["a" /* CrudHelper */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_2__modal_modal_service__["a" /* ModalService */]])
    ], ListComponent);
    return ListComponent;
}(__WEBPACK_IMPORTED_MODULE_8__base__["a" /* default */]));



/***/ }),

/***/ "./client/app/shared/media/media-library.css":
/***/ (function(module, exports) {

module.exports = "img{\r\n  max-height:20vh !important;\r\n  width:auto;\r\n}\r\n.card{\r\n  margin-bottom:20px;\r\n  cursor:pointer;\r\n}"

/***/ }),

/***/ "./client/app/shared/media/media-library.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-actions>\r\n    <button class=\"close\" mat-icon-button color=\"warn\" (click)=\"dialogRef.close()\">\r\n        <mat-icon>cancel</mat-icon>\r\n    </button>\r\n</div>\r\n<div mat-dialog-content>\r\n    <mat-progress-bar mode=\"determinate\" [value]=\"uploader.progress\" *ngIf=\"uploader?.queue?.length>0\">\r\n    </mat-progress-bar>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" name=\"avatar\" />\r\n        <div *ngFor=\"let item of uploader.queue\" class=\"flex space-between\">\r\n            <button mat-raised-button (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\" class=\"mat-warn\">\r\n                <i class=\"material-icons\">save</i> Upload </button>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <mat-grid-list class=\"media-list\" cols=\"3\" rowHeight=\"4:3\" gutterSize=\"12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\r\n        fxLayoutWrap>\r\n        <mat-grid-tile *ngFor=\"let i of media\" (click)=\"ok(i.path)\">\r\n            <mat-card class=\"card\">\r\n                <button mat-button mat-icon-button (click)=\"close()\" class=\"close\">\r\n                    <mat-icon>close</mat-icon>\r\n                </button>\r\n                <mat-card-header>\r\n                    <h3>{{i.name}}</h3>\r\n                </mat-card-header>\r\n                <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <img src=\"{{i.path}}\" draggable=\"false\" alt=\"{{i.name}}\">\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n    </mat-grid-list>\r\n    <!--<mat-card class=\"card\" *ngFor=\"let p of media; let i = index;\" id=\"{{p?._id}}\">\r\n        <mat-card-header>\r\n            <mat-card-title>{{p.name}}</mat-card-title>\r\n            <mat-card-subtitle>{{p.path}}</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <img mat-card-image [src]=\"p?.path\">\r\n        <mat-card-actions>\r\n            <button mat-button><b>Uploaded by:</b> {{p.uname}} ({{p.uemail}})</button>\r\n            <button mat-button><b>Size:</b>{{ p.size/1024/1024 | number:'.2' }} MB</button>\r\n            <button mat-button><b>Created:</b> {{p.createdAt}}</button>\r\n        </mat-card-actions>\r\n    </mat-card>-->\r\n</div>"

/***/ }),

/***/ "./client/app/shared/media/media-library.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaLibraryModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");







var MediaLibraryModal = /** @class */ (function () {
    function MediaLibraryModal(dialogRef, auth, crud, snack) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.auth = auth;
        this.crud = crud;
        this.snack = snack;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileUploader"]({
            url: 'api/media',
            authToken: this.auth.getToken()
        });
        this.hasBaseDropZoneOver = false;
        this.loading = false;
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.getData('-createdAt');
        };
    }
    MediaLibraryModal.prototype.ngOnInit = function () {
        this.getData('-createdAt');
    };
    MediaLibraryModal.prototype.getData = function (sort) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["URLSearchParams"]();
        this.loading = true;
        params.set('sort', sort);
        this.busy = this.crud.get('media', params, true)
            .subscribe(function (data) { _this.media = data; _this.loading = false; }, function (error) { _this.snack.open(error, 'OK', { duration: 2000 }); _this.loading = false; });
    };
    MediaLibraryModal.prototype.ok = function (item) {
        this.dialogRef.close(item);
    };
    MediaLibraryModal.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    MediaLibraryModal = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'media-library',
            template: __webpack_require__("./client/app/shared/media/media-library.html"),
            styles: [__webpack_require__("./client/app/shared/media/media-library.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSnackBar */]])
    ], MediaLibraryModal);
    return MediaLibraryModal;
}());



/***/ }),

/***/ "./client/app/shared/media/media.component.css":
/***/ (function(module, exports) {

module.exports = ".well{\r\n  padding: 50px;\r\n}\r\n.my-drop-zone {\r\n    border: dotted 3px lightgray;\r\n}\r\n.nv-file-over {\r\n    border: dotted 3px red;\r\n}\r\n/* Default class applied to drop zones on over */\r\n.another-file-over-class {\r\n    border: dotted 3px green;\r\n}\r\n.flex {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n.row{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n.space-between{\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n.pull-left{\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n}\r\n.pull-right{\r\n  -ms-flex-item-align: end;\r\n      align-self: flex-end;\r\n}\r\n.app-spinner{\r\n  width:20px;\r\n}"

/***/ }),

/***/ "./client/app/shared/media/media.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialog()\">Launch dialog</button> You chose: {{selectedOption}}"

/***/ }),

/***/ "./client/app/shared/media/media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_single__ = __webpack_require__("./client/app/shared/media/modal-single.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");




var MediaComponent = /** @class */ (function () {
    function MediaComponent(dialog) {
        this.dialog = dialog;
    }
    MediaComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__modal_single__["a" /* SingleFileUploadModal */]);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    MediaComponent.prototype.ngOnInit = function () {
    };
    MediaComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'media-library',
            template: __webpack_require__("./client/app/shared/media/media.component.html"),
            styles: [__webpack_require__("./client/app/shared/media/media.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialog */]])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),

/***/ "./client/app/shared/media/modal-single.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-actions>\r\n    <button class=\"close\" mat-icon-button color=\"warn\" (click)=\"dialogRef.close()\">\r\n        <mat-icon>cancel</mat-icon>\r\n    </button>\r\n</div>\r\n<h1 mat-dialog-title>Please choose image to upload</h1>\r\n<div mat-dialog-content></div>\r\n<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" name=\"avatar\" />\r\n<div mat-dialog-actions *ngFor=\"let item of uploader.queue\" class=\"flex space-between\">\r\n    <div *ngIf=\"item.progress\">{{item.progress}}%</div>\r\n    <!--<mat-progress-bar color=\"accent\" mode=\"determinate\" [value]=\"item.progress\" aria-label=\"uploading image\" *ngIf=\"item.progress\"></mat-progress-bar>-->\r\n    <button mat-raised-button (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\" class=\"mat-warn\">\r\n        <i class=\"material-icons\" *ngIf=\"!item.progress\">save</i>\r\n        <mat-spinner color=\"#fff\" class=\"button-spinner\" mode=\"determinate\" [value]=\"item.progress\" aria-label=\"uploading image\"\r\n            *ngIf=\"item.progress\">\r\n        </mat-spinner>\r\n        <span>Upload</span>\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./client/app/shared/media/modal-single.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleFileUploadModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");





var SingleFileUploadModal = /** @class */ (function () {
    function SingleFileUploadModal(dialogRef, auth) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.auth = auth;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__["FileUploader"]({
            url: 'api/media',
            authToken: this.auth.getToken()
        });
        this.hasBaseDropZoneOver = false;
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.image = response; // log response
            // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', JSON.parse(response));
            _this.dialogRef.close(response);
        };
    }
    SingleFileUploadModal.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    SingleFileUploadModal = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'modal-single',
            template: __webpack_require__("./client/app/shared/media/modal-single.html"),
            styles: [__webpack_require__("./client/app/shared/media/media.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], SingleFileUploadModal);
    return SingleFileUploadModal;
}());



/***/ }),

/***/ "./client/app/shared/oauth-buttons/oauth-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OauthButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var OauthButtonsComponent = /** @class */ (function () {
    function OauthButtonsComponent() {
        this.googleLoading = false;
        this.facebookLoading = false;
        this.twitterLoading = false;
    }
    OauthButtonsComponent.prototype.ngOnInit = function () {
    };
    OauthButtonsComponent.prototype.loginOauth = function (provider) {
        window.location.href = "/auth/" + provider;
    };
    ;
    OauthButtonsComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'oauth-buttons',
            template: __webpack_require__("./client/app/shared/oauth-buttons/oauth-buttons.html"),
            styles: [__webpack_require__("./client/app/shared/oauth-buttons/oauth-buttons.css")],
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [])
    ], OauthButtonsComponent);
    return OauthButtonsComponent;
}());



/***/ }),

/***/ "./client/app/shared/oauth-buttons/oauth-buttons.css":
/***/ (function(module, exports) {

module.exports = ".app-spinner {\r\n  height: 30px;\r\n  width: 30px;\r\n  display: inline-block;\r\n  color: #fff;\r\n}\r\n.mat-hue-2{\r\n  color:white;\r\n}\r\n.facebook{\r\n  background-color:rgb(21,101,192);\r\n}\r\n.google{\r\n  background-color:rgb(216,67,21);\r\n}\r\n.twitter{\r\n  background-color:rgb(33,150,243);\r\n}"

/***/ }),

/***/ "./client/app/shared/oauth-buttons/oauth-buttons.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap>\r\n    <button mat-raised-button class=\"facebook mat-hue-2\" aria-label=\"Connect with Facebook\" (click)=\"loginOauth('facebook')\"\r\n        [disabled]=\"facebookLoading\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\r\n            <path d=\"M17 2v4h-2c-.69 0-1 .81-1 1.5V10h3v4h-3v8h-4v-8H7v-4h3V6a4 4 0 0 1 4-4h3z\"></path>\r\n        </svg>\r\n        <mat-spinner mode=\"indeterminate\" *ngIf=\"facebookLoading\" class=\"app-spinner\">\r\n        </mat-spinner>\r\n        <span>&nbsp;Connect with Facebook</span>\r\n    </button>\r\n    <button mat-raised-button class=\"google mat-hue-2\" aria-label=\"Connect with Google\" (click)=\"loginOauth('google')\" [disabled]=\"googleLoading\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\r\n            <path d=\"M13.3 13.45l-1.08-.85c-.36-.3-.82-.69-.82-1.42s.55-1.29.97-1.62c1.31-1.02 2.57-2.1 2.57-4.34 0-2.07-1.27-3.26-2.04-3.92h1.75L15.9.05H9.67c-4.36 0-6.6 2.71-6.6 5.72 0 2.33 1.79 4.83 4.98 4.83h.8c-.13.35-.35.84-.35 1.3 0 1.01.42 1.43.92 2-1.42.1-4.01.43-5.92 1.6-1.86 1.1-2.3 2.63-2.3 3.75 0 2.3 2.06 4.5 6.57 4.5 5.35 0 8.03-2.96 8.03-5.88 0-2.16-1.13-3.27-2.5-4.42M5.65 4.31c0-2.21 1.31-3.21 2.69-3.21 2.66 0 4.01 3.45 4.01 5.53 0 2.57-2.07 3.07-2.89 3.07C7 9.7 5.65 6.64 5.65 4.31M9.3 22.3c-3.33 0-5.45-1.49-5.45-3.7 0-2.2 1.96-2.91 2.65-3.16 1.3-.44 3-.49 3.27-.49.3 0 .46 0 .73.02 2.34 1.69 3.35 2.44 3.35 4.03 0 1.77-1.82 3.3-4.55 3.3\"></path>\r\n            <path d=\"M21 10V7h-2v3h-3v2h3v3h2v-3h3v-2h-3z\"></path>\r\n        </svg>\r\n        <mat-spinner mode=\"indeterminate\" *ngIf=\"googleLoading\" class=\"app-spinner\">\r\n        </mat-spinner>\r\n        <span>&nbsp;Connect with Google</span>\r\n    </button>\r\n    <button mat-raised-button class=\"twitter mat-hue-2\" aria-label=\"Connect with Twitter\" (click)=\"loginOauth('twitter')\" [disabled]=\"twitterLoading\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\r\n            <path d=\"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z\"></path>\r\n        </svg>\r\n        <mat-spinner mode=\"indeterminate\" *ngIf=\"twitterLoading\" class=\"app-spinner\">\r\n        </mat-spinner>\r\n        <span>&nbsp;Connect with Twitter</span>\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./client/app/shared/pipes/dashboardFilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var DashboardFilterPipe = /** @class */ (function () {
    function DashboardFilterPipe() {
    }
    DashboardFilterPipe.prototype.transform = function (items, term) {
        if (term === undefined)
            return items;
        return items.filter(function (item) { return item.dashboard; });
    };
    DashboardFilterPipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: 'dashboardFilter' })
    ], DashboardFilterPipe);
    return DashboardFilterPipe;
}());



/***/ }),

/***/ "./client/app/shared/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ObjectFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, term) {
        if (!items)
            return;
        return items.filter(function (item) { return item.key === term; });
    };
    FilterPipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: 'filter' })
    ], FilterPipe);
    return FilterPipe;
}());

var ObjectFilterPipe = /** @class */ (function () {
    function ObjectFilterPipe() {
    }
    ObjectFilterPipe.prototype.transform = function (items, filter) {
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            return items.filter(function (item) {
                return filterKeys_1.reduce(function (memo, keyName) {
                    return (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "";
                }, true);
            });
        }
        else {
            return items;
        }
    };
    ObjectFilterPipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'objectfilter'
        })
    ], ObjectFilterPipe);
    return ObjectFilterPipe;
}());



/***/ }),

/***/ "./client/app/shared/pipes/labelcase.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelcasePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var LabelcasePipe = /** @class */ (function () {
    function LabelcasePipe() {
    }
    LabelcasePipe.prototype.transform = function (input) {
        if ((typeof input) !== 'string') {
            return input;
        }
        return input.length > 0 ? input.replace(/\w\S*/g, (function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); })) : '';
    };
    LabelcasePipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'labelcase'
        })
    ], LabelcasePipe);
    return LabelcasePipe;
}());



/***/ }),

/***/ "./client/app/shared/pipes/pluralize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluralizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var PluralizePipe = /** @class */ (function () {
    function PluralizePipe() {
    }
    PluralizePipe.prototype.transform = function (noun) {
        if (typeof noun !== 'string') {
            return noun;
        }
        var rules = [
            { regex: /octopus/gi, suffix: 'octopusses' },
            { regex: /person/gi, suffix: 'people' },
            { regex: /ox/gi, suffix: 'oxen' },
            { regex: /bison|buffalo|deer|duck|fish|moose|pike|plankton|salmon|sheep|squid|swine|trout|sheap|equipment|information|rice|money|species|series|news/i, suffix: '$&' },
            { regex: /(x|ch|ss|sh)$/gi, suffix: '$1es' },
            { regex: /(hetero|canto|photo|zero|piano|pro|kimono|portico|quarto)$/gi, suffix: '$1s' },
            { regex: /(?:([^f])fe|([lr])f)$/, suffix: '$1$2ves' },
            { regex: /o$/gi, suffix: 'oes' },
            { regex: /([^aeiouy]|qu)y$/gi, suffix: '$1ies' },
            { regex: /s$/gi, suffix: 's' },
            { regex: /$/gi, suffix: 's' } // cat -> cats
        ];
        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            if (noun.match(rule.regex)) {
                noun = noun.replace(rule.regex, rule.suffix);
                break;
            }
        }
        return noun;
    };
    PluralizePipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'pluralize'
        })
    ], PluralizePipe);
    return PluralizePipe;
}());



/***/ }),

/***/ "./client/app/shared/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (data, searchTerm) {
        if (!data || !searchTerm)
            return;
        searchTerm = searchTerm.toUpperCase();
        return data.filter(function (item) {
            if (item.q)
                return item.q.toString().toUpperCase().indexOf(searchTerm) !== -1;
            else
                return null;
        });
    };
    SearchPipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'searchpipe',
            pure: false
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./client/app/shared/pipes/unique.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniquePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var UniquePipe = /** @class */ (function () {
    function UniquePipe() {
    }
    UniquePipe.prototype.transform = function (input, key) {
        var unique = {};
        var uniqueList = [];
        if (input) {
            for (var i = 0; i < input.length; i++) {
                if (typeof unique[input[i][key]] === 'undefined') {
                    unique[input[i][key]] = '';
                    uniqueList.push(input[i]);
                }
            }
        }
        return uniqueList;
    };
    UniquePipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'unique'
        })
    ], UniquePipe);
    return UniquePipe;
}());



/***/ }),

/***/ "./client/app/shared/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".search{\r\n    margin: 0 20px;\r\n    max-width:850px;\r\n    min-width:100px;\r\n}\r\n\r\n/* ========== Page header (Top bar) ========== */\r\n\r\n/* Search bar (header) */\r\n\r\n.searchBarMain {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\tmargin:0 20px;\r\n\tbackground: #fff;\r\n    /* max-width: 680px; */\r\n    border-radius: 2px;\r\n\t-webkit-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.14);\r\n\t        box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.14);\r\n\t-webkit-transition: all 0.2s ease-in-out;\r\n\ttransition: all 0.2s ease-in-out;\r\n}\r\n\r\n.searchBarMain i.searchBarSearchIcon {\r\n\theight: 100%;\r\n\tline-height: 42px;\r\n\tfloat: left;\r\n\twidth: 45px;\r\n\ttext-align: center;\r\n\tcolor: rgba(68, 68, 68, 0.5);\r\n}\r\n\r\n.searchBarMain input#searchBarInput {\r\n\theight: 42px;\r\n\t-webkit-box-flex:1;\r\n\t    -ms-flex:1;\r\n\t        flex:1;\r\n    /* padding: 0; */\r\n    /* margin: 0; */\r\n    border: 0;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    background: transparent;\r\n    /* width: calc(100% - 52px); */\r\n\toutline: none;\r\n\tfont-size: 16px;\r\n\tcolor: rgba(0, 0, 0, 0.76);\r\n\tfont-weight: 400;\r\n\tfont-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.searchBarMain i.clearSearchBarField {\r\n\tposition: relative;\r\n    margin: 11px;\r\n    /* right: 2px; */\r\n    /* margin: 12px 0; */\r\n    color: rgba(0, 0, 0, 0.84);\r\n    font-size: 20px;\r\n}\r\n\r\n.searchBarMain i.clearSearchBarField:hover {\r\n\tcursor: pointer;\r\n}"

/***/ }),

/***/ "./client/app/shared/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"searchBarMain\">\r\n  <mat-icon>search</mat-icon>\r\n  <input [formControl]=\"searchInput\" (keyup)=\"search(searchInput.value)\" type=\"text\" name=\"header-search\" value=\"\" id=\"searchBarInput\"\r\n    autofocus placeholder=\"Search, discover, explore...\">\r\n  <i class=\"material-icons clearSearchBarField noUserSelect\">mic</i>\r\n</div>"

/***/ }),

/***/ "./client/app/shared/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");






var SearchComponent = /** @class */ (function () {
    function SearchComponent(crud, router, route) {
        this.crud = crud;
        this.router = router;
        this.route = route;
        this.searchBar = false;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]();
    }
    SearchComponent.prototype.filterStates = function (val) {
        return val ? this.products.filter(function (s) { return new RegExp(val, 'gi').test(s.name); }) : this.products;
    };
    SearchComponent.prototype.search = function (q) {
        var vm = this;
        // if (vm.route.url === '/' && q === '') return
        var typingTimer;
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function () {
            vm.router.navigateByUrl('/shop?q=' + q);
        }, 600);
    };
    SearchComponent.prototype.show = function (x) {
        this.searchBar = false;
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Boolean)
    ], SearchComponent.prototype, "searchBar", void 0);
    SearchComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'shopnx-search',
            template: __webpack_require__("./client/app/shared/search/search.component.html"),
            styles: [__webpack_require__("./client/app/shared/search/search.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./client/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.apiPath = '/api/';
    }
    ApiService.prototype.get = function () {
        return this.http.get(this.apiPath + 'products')
            .map(function (res) { return res.json(); });
        // .catch(this.handleError);
    };
    ApiService.prototype.getProduct = function (id) {
        return this.http.get(this.apiPath + 'products/' + id)
            .map(function (res) { return res.json(); });
        // .catch(this.handleError);
    };
    ApiService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./client/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./client/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings__ = __webpack_require__("./client/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_cookies_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_cookies_ng2_cookies__);











var AuthService = /** @class */ (function () {
    function AuthService(userService, router, snack) {
        this.userService = userService;
        this.router = router;
        this.snack = snack;
        this.loggedIn = false;
        this.isAdmin = false;
        this.userRoles = __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* Settings */].userRoles || [];
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["JwtHelper"]();
        this.currentUser = { _id: '', name: '', email: '', role: '', avatar: '' };
        var token = localStorage.getItem('id_token') || __WEBPACK_IMPORTED_MODULE_10_ng2_cookies_ng2_cookies__["Cookie"].get('token'); //Cookies set through auth strategy
        if (token && token !== 'null') {
            var decodedUser = this.decodeUserFromToken(token);
            this.setCurrentUser(decodedUser);
            if (this.jwtHelper.isTokenExpired(token)) {
                this.logout();
            }
        }
    }
    AuthService.prototype.isLoggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.isSessionExpired = function (token) {
        return this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.login = function (emailAndPassword) {
        var _this = this;
        return this.userService.login(emailAndPassword).map(function (res) { return res.json(); }).map(function (res) {
            localStorage.setItem('id_token', res.token);
            var decodedUser = _this.decodeUserFromToken(res.token);
            _this.setCurrentUser(decodedUser);
            return _this.loggedIn;
        });
    };
    AuthService.prototype.register = function (user) {
        var _this = this;
        return this.userService.register(user).map(function (res) { return res.json(); }).map(function (res) {
            localStorage.setItem('id_token', res.token);
            var decodedUser = _this.decodeUserFromToken(res.token);
            _this.setCurrentUser(decodedUser);
            return _this.loggedIn;
        });
    };
    AuthService.prototype.logout = function (url) {
        localStorage.removeItem('id_token');
        __WEBPACK_IMPORTED_MODULE_10_ng2_cookies_ng2_cookies__["Cookie"].delete('token');
        this.loggedIn = false;
        this.isAdmin = false;
        this.currentUser = { _id: '', name: '', email: '', role: '', avatar: '' };
        var navigateUrl = url || '/';
        this.router.navigate([navigateUrl]);
    };
    AuthService.prototype.decodeUserFromToken = function (token) {
        return this.jwtHelper.decodeToken(token);
    };
    AuthService.prototype.setCurrentUser = function (decodedUser) {
        this.loggedIn = true;
        this.currentUser._id = decodedUser._id;
        this.currentUser.email = decodedUser.email;
        this.currentUser.name = decodedUser.name;
        this.currentUser.avatar = decodedUser.avatar;
        this.currentUser.role = decodedUser.role;
        decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
        // delete decodedUser.role;
    };
    AuthService.prototype.updateProfile = function (user) {
        this.currentUser.avatar = user.avatar;
        this.currentUser.name = user.name;
    };
    AuthService.prototype.saveProfile = function (data) {
        return this.userService.saveProfile(this.currentUser._id, data).map(function (res) { return res.json(); }).map(function (res) { return res; });
    };
    AuthService.prototype.changePassword = function (data) {
        var _this = this;
        return this.userService.changePassword(this.currentUser._id, data.oldPassword, data.newPassword).map(function (res) {
            _this.snack.open(res.json().message, 'OK', { duration: 2000 });
            return res.json() || [];
        }).catch(this.handleError);
    };
    AuthService.prototype.hasRole = function (role) {
        return this.currentUser ? this.userRoles.indexOf(this.currentUser.role) >= this.userRoles.indexOf(role) : false;
    };
    AuthService.prototype.getToken = function () {
        return 'Bearer ' + localStorage.getItem('id_token');
    };
    AuthService.prototype.handleError = function (err) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(err || 'Server error');
    };
    AuthService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSnackBar */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./client/app/shared/services/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudBaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");





var CrudBaseService = /** @class */ (function () {
    function CrudBaseService() {
        this.data = { api: null };
        this.record = { api: null };
    }
    CrudBaseService.prototype.callCache = function (res, post) {
        this.record.api = res.json();
        (post) ? this.data.api.push(res.json()) : this.data.api = null; // Invalidate cache if not inserting
        return this.record.api;
    };
    CrudBaseService.prototype.extractData = function (res) {
        this.observable = null;
        if (res.status >= 400) {
            return "FAILURE";
        }
        else if (res.status >= 200 && res.status <= 300) {
            return res.json() || [];
        }
    };
    CrudBaseService.prototype.handleError = function (error) {
        var status = error.status;
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["AuthHttpError"]) {
            errMsg = error.message;
        }
        else if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            if (error.status === 403)
                errMsg = 'Unauthorized... ';
            else if (error.status === 404)
                errMsg = 'Requested url ' + error.url + ' not found';
            else {
                var body = error.json() || '';
                if (status === 500) {
                    errMsg = body.message;
                }
                else {
                    var err = body.error || JSON.stringify(body);
                    errMsg = error.status + " - " + (error.statusText || '') + " " + err;
                }
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return CrudBaseService;
}());



/***/ }),

/***/ "./client/app/shared/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./client/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crud_service__ = __webpack_require__("./client/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);







var CartService = /** @class */ (function () {
    function CartService(crud, router, auth) {
        this.crud = crud;
        this.router = router;
        this.auth = auth;
        this.items = [];
        this.skuArray = [];
        this.variantsArray = [];
        this.totalWeight = 0;
        this.clearCart = false;
        this.cartName = 'ShopNx';
        this.checkoutCOD = function (parms, clearCart) {
            var _this = this;
            var data = this.items;
            var total = Math.round((this.getTotalPrice() - parms.couponAmount) * parms.exchange_rate * 100) / 100;
            var subtotal = Math.round((this.getTotalPrice() - parms.couponAmount) * parms.exchange_rate * 100) / 100;
            var items = [];
            for (var k = 0; k < data.length; k++) {
                var i = data[k];
                items.push({ sku: i.sku, name: i.name, url: i.image, description: i.slug, price: Math.round(i.price * parms.exchange_rate * 100) / 100, quantity: i.quantity, currency: parms.currency_code });
            }
            if (parms.discount > 0)
                items.push({ sku: '#', name: 'Coupon Discount', url: '-', description: '-', price: -Math.round(parms.discount * parms.exchange_rate * 100) / 100, quantity: 1, currency: parms.currency_code });
            var orderDetails = {
                uid: parms.uid,
                email: parms.email,
                phone: parms.phone,
                address: parms.address,
                payment: { state: 'Pending', method: 'COD' },
                amount: { total: total, currency: parms.currency_code, exchange_rate: parms.exchange_rate, details: { shipping: Math.round(parms.shipping * 100) / 100, subtotal: subtotal } },
                items: items,
                status: 'Payment Pending'
            };
            // When order.status is null, the client will replace with the Array[0] of order status at appConfig page
            this.crud.post('orders', orderDetails, true, true).subscribe(function (data) {
                if (clearCart)
                    _this.clearItems();
                _this.router.navigateByUrl('/admin/my-orders');
            });
        };
        this.loadItems();
    }
    CartService.prototype.checkout = function (method, items, params, clearCart) {
        params.exchange_rate = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].currency.exchange_rate;
        if (!params.exchange_rate || isNaN(params.exchange_rate) || params.exchange_rate === '')
            params.exchange_rate = 1;
        if (!params.couponAmount || isNaN(params.couponAmount) || params.couponAmount === '')
            params.couponAmount = 0;
        params.currency_code = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].currency.code;
        params.paypal_currency = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].currency.paypal;
        params.email = this.auth.currentUser.email;
        params.uid = this.auth.currentUser._id;
        params.recipient_name = (params.name === '') ? this.auth.currentUser.name : params.name;
        switch (method) {
            case "PayPal":
                this.checkoutPayPal(params, clearCart);
                break;
            case "COD":
                this.checkoutCOD(params, clearCart);
                break;
            default:
                console.log("Unknown checkout service: " + method);
                break;
        }
    };
    CartService.prototype.checkoutPayPal = function (params, clearCart) {
        var data = {
            cmd: "_cart",
            business: params.merchantID,
            upload: "1",
            rm: "2",
            charset: "utf-8",
            data: this.items,
            options: params
        };
        var form = $('<form/></form>');
        form.attr("id", "paypalForm");
        form.attr("action", "/api/pay/paypal");
        form.attr("method", "GET");
        form.attr("style", "display:none;");
        this.addFormFields(form, data);
        $("body").append(form);
        // this.clearCart = clearCart == null || clearCart;
        if (clearCart)
            this.clearItems();
        form.submit();
        form.remove();
    };
    // check out using Google Wallet
    // for details see:
    // developers.google.com/checkout/developer/Google_Checkout_Custom_Cart_How_To_HTML
    // developers.google.com/checkout/developer/interactive_demo
    CartService.prototype.checkoutGoogle = function (parms, clearCart) {
        // global data
        var data = {};
        // item data
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            var ctr = i + 1;
            data["item_name_" + ctr] = item.sku;
            data["item_description_" + ctr] = item.name;
            data["item_price_" + ctr] = item.price.toFixed(2);
            data["item_quantity_" + ctr] = item.quantity;
            data["item_merchant_id_" + ctr] = parms.merchantID;
        }
        // build form
        var form = $('<form/></form>');
        // NOTE: in production projects, use the checkout.google url below;
        // for debugging/testing, use the sandbox.google url instead.
        //form.attr("action", "https://checkout.google.com/api/checkout/v2/merchantCheckoutForm/Merchant/" + parms.merchantID);
        form.attr("action", "https://sandbox.google.com/checkout/api/checkout/v2/checkoutForm/Merchant/" + parms.merchantID);
        form.attr("method", "POST");
        form.attr("style", "display:none;");
        this.addFormFields(form, data);
        if (!parms.options) {
            parms.options = {};
        }
        this.addFormFields(form, parms.options);
        $("body").append(form);
        // submit form
        this.clearCart = clearCart == null || clearCart;
        form.submit();
        form.remove();
    };
    CartService.prototype.addFormFields = function (form, data) {
        if (data !== null) {
            $.each(data, function (name, value) {
                if (value !== null) {
                    var input = $('<input></input>').attr('type', 'hidden').attr('name', name).val(JSON.stringify(value));
                    form.append(input);
                }
            });
        }
    };
    CartService.prototype.toNumber = function (value) {
        value = value * 1;
        return isNaN(value) ? 0 : value;
    };
    CartService.prototype.loadItems = function () {
        var items = localStorage !== null ? localStorage[this.cartName + '_items'] : null;
        if (items !== null && JSON !== null) {
            try {
                items = JSON.parse(items);
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.sku !== null && item.name !== null && item.price !== null) {
                        this.items.push(item);
                        this.skuArray.push(item.sku);
                        this.variantsArray.push(item.vid);
                        // this.totalWeight = item.weight;
                    }
                }
            }
            catch (err) {
                // ignore errors while loading...
            }
        }
    };
    // save items to local storage
    CartService.prototype.saveItems = function () {
        if (localStorage !== null && JSON !== null) {
            localStorage[this.cartName + '_items'] = JSON.stringify(this.items);
        }
    };
    // adds an item to the cart
    CartService.prototype.addItem = function (product, quantity) {
        quantity = this.toNumber(quantity);
        if (quantity !== 0) {
            // update quantity for existing item
            var found = false;
            for (var i = 0; i < this.items.length && !found; i++) {
                var item = this.items[i];
                if (item.sku === product.sku && item.vid === product.vid) {
                    found = true;
                    item.quantity = this.toNumber(this.toNumber(item.quantity) + quantity);
                    if (item.weight == null) {
                        item.weight = 0;
                    }
                    item.slug = product.slug;
                    if (item.quantity <= 0) {
                        this.items.splice(i, 1);
                        this.skuArray.splice(i, 1);
                        this.variantsArray.splice(i, 1);
                    }
                }
            }
            // new item, add now
            if (!found && product.price) {
                var itm = product;
                this.items.push(itm);
                this.skuArray.push(itm.sku);
                this.variantsArray.push(itm.vid);
            }
            // save changes
            this.saveItems();
        }
    };
    // get the total price for all items currently in the cart
    CartService.prototype.getBestShipper = function () {
        // let params = new URLSearchParams();
        // params.set('weight', this.getTotalWeight().toString());
        // params.set('cartValue', this.getTotalPrice().toString());
        return this.crud.get('shippings/best', { weight: this.getTotalWeight().toString(), cartValue: this.getTotalPrice().toString() });
    };
    // get the total price for all items currently in the cart
    CartService.prototype.getTotalWeight = function () {
        var totalWeight = 0;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            totalWeight += this.toNumber(item.quantity * item.weight);
        }
        return totalWeight;
    };
    // get the total price for all items currently in the cart
    CartService.prototype.getTotalPrice = function () {
        var total = 0;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            total += this.toNumber(item.quantity * item.price);
        }
        return total;
    };
    CartService.prototype.checkCart = function (id, vid) {
        if (!__WEBPACK_IMPORTED_MODULE_6_lodash__["includes"](this.skuArray, id) || !__WEBPACK_IMPORTED_MODULE_6_lodash__["includes"](this.variantsArray, vid)) {
            return true;
        }
        else {
            return false;
        }
    };
    CartService.prototype.getQuantity = function (sku, vid) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].sku === sku && this.items[i].vid === vid) {
                return this.items[i].quantity;
            }
        }
    };
    // get the total price for all items currently in the cart
    CartService.prototype.getTotalCount = function (sku) {
        var count = 0;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (sku === undefined || item.sku === sku) {
                count += this.toNumber(item.quantity);
            }
        }
        return count;
    };
    // clear the cart
    CartService.prototype.clearItems = function () {
        this.items = [];
        this.skuArray = [];
        this.variantsArray = [];
        this.saveItems();
    };
    CartService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./client/app/shared/services/crud.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_labelcase_pipe__ = __webpack_require__("./client/app/shared/pipes/labelcase.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");



var CrudHelper = /** @class */ (function () {
    function CrudHelper() {
    }
    // private labelcasePipe: LabelcasePipe;
    // constructor(private labelcasePipe: LabelcasePipe) { }
    CrudHelper.prototype.help = function (fields) {
        var obj = [];
        fields.filter(function (i) {
            var o = {};
            // if(!i.heading){
            //     i.heading = i.field;
            // }
            // i.heading = this.labelCasePipe.transform(i.heading);
            // Extract sortType from type
            if (i.dataType === 'numeric' || i.dataType === 'number' || i.dataType === 'float' || i.dataType === 'integer' || i.dataType === 'currency') {
                i.dataType = 'parseFloat';
                o.sortType = 'parseFloat';
            }
            else if (i.dataType === 'date' || i.dataType === 'calendar') {
                i.dataType = 'date';
                o.sortType = 'date';
            }
            else if (i.dataType === 'link' || i.dataType === 'ref' || i.dataType === 'href' || i.dataType === 'hyperlink') {
                i.dataType = 'link';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'product-detail') {
                i.dataType = 'product-detail';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'product-image') {
                i.dataType = 'product-image';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'array' || i.dataType === 'multi' || i.dataType === 'multiple') {
                i.dataType = 'array';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'dropdown' || i.dataType === 'select' || i.dataType === 'option') {
                i.dataType = 'select';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'textarea' || i.dataType === 'multiline') {
                i.dataType = 'textarea';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'image' || i.dataType === 'photo' || i.dataType === 'picture') {
                i.dataType = 'image';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'boolean') {
                i.dataType = 'boolean';
                o.sortType = 'lowercase';
            }
            else {
                i.dataType = 'text';
                o.sortType = 'lowercase';
            }
            // check heading (Assign heading if not exists)
            if ('heading' in i) {
                o.heading = i.heading;
            }
            else if ('title' in i) {
                o.heading = i.title;
            }
            else {
                o.heading = i.field;
            }
            // Assign fields to object
            o.heading = new __WEBPACK_IMPORTED_MODULE_1__pipes_labelcase_pipe__["a" /* LabelcasePipe */]().transform(o.heading);
            o.field = i.field;
            o.noSort = i.noSort;
            o.noAdd = i.noAdd;
            o.noEdit = i.noEdit;
            o.dataType = i.dataType;
            o.options = i.options;
            o.link = i.link;
            o.id = i.id;
            o.slug = i.slug;
            obj.push(o);
            // return element.postId == id;
        });
        return obj;
    };
    CrudHelper = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])()
    ], CrudHelper);
    return CrudHelper;
}());



/***/ }),

/***/ "./client/app/shared/services/crud.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__("./client/app/shared/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__("./client/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");









var CrudService = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](CrudService, _super);
    function CrudService(authHttp, http, snack) {
        var _this = _super.call(this) || this;
        _this.authHttp = authHttp;
        _this.http = http;
        _this.snack = snack;
        _this.apiPath = '/api/';
        _this.headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        _this.options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: _this.headers });
        return _this;
    }
    CrudService.prototype.get = function (api, params, auth) {
        var http = auth ? this.authHttp : this.http;
        return http.get(this.apiPath + api + '/', { search: params })
            .map(this.extractData)
            .share()
            .catch(this.handleError);
    };
    CrudService.prototype.getOne = function (api, id, auth, cache) {
        var _this = this;
        if (!this.record.api) {
            this.record.api = {};
        }
        if (!this.record.api.id) {
            this.record.api.id = {};
        }
        if (this.record.api.id && this.record.api.id._id === id && !cache) {
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(this.record.api.id);
        }
        else {
            var http = auth ? this.authHttp : this.http;
            return http.get(this.apiPath + api + '/' + id)
                .map(this.extractData)
                .share()
                .catch(this.handleError)
                .do(function (res) { return _this.extractData; });
        }
    };
    CrudService.prototype.add = function (api, body, notdemo) {
        if (__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* Settings */].demo && !notdemo)
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw('Demo mode: Unable to save');
        return this.authHttp.post(this.apiPath + api, body)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CrudService.prototype.post = function (api, body, auth, notdemo) {
        if (auth === void 0) { auth = true; }
        // Auth true/false required for change password
        if (__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* Settings */].demo && !notdemo)
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw('Demo mode: Unable to save');
        if (!auth) {
            return this.http.post(this.apiPath + api, body)
                .map(this.extractData)
                .catch(this.handleError);
        }
        else {
            return this.authHttp.post(this.apiPath + api, body)
                .map(this.extractData)
                .catch(this.handleError);
        }
    };
    CrudService.prototype.put = function (api, body, notdemo) {
        if (__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* Settings */].demo && !notdemo)
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw('Demo mode: Unable to save');
        return this.authHttp.put("" + this.apiPath + api, body)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CrudService.prototype.patch = function (api, id, body, notdemo) {
        if (__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* Settings */].demo && !notdemo)
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw('Demo mode: Unable to save');
        return this.authHttp.patch("" + this.apiPath + api + "/" + id, body)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CrudService.prototype.delete = function (api, id, notdemo) {
        if (__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* Settings */].demo && !notdemo)
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw('Demo mode: Unable to save');
        return this.authHttp.delete("" + this.apiPath + api + "/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CrudService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSnackBar */]])
    ], CrudService);
    return CrudService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* CrudBaseService */]));



/***/ }),

/***/ "./client/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);









var UserService = /** @class */ (function () {
    function UserService(authHttp, http) {
        this.authHttp = authHttp;
        this.http = http;
        this.url = '/api/users/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    UserService.prototype.getUsers = function (params) {
        var _this = this;
        if (this.users && !params) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].of(this.users);
        }
        else if (this.observable && !params) {
            return this.observable;
        }
        else {
            this.observable = this.authHttp.get(this.url, { search: params })
                .map(function (res) {
                _this.observable = null;
                if (res.status == 400) {
                    return "FAILURE";
                }
                else if (res.status == 200) {
                    return res.json() || [];
                }
            })
                .share()
                .catch(this.handleError);
            return this.observable;
        }
    };
    UserService.prototype.query = function () {
        return this.authHttp.get(this.url);
    };
    UserService.prototype.get = function (user) {
        if (user === void 0) { user = { id: 'me' }; }
        var myHeader = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        myHeader.append('Authorization', 'application/json');
        return this.authHttp.get("" + this.url + (user.id || user._id), { headers: myHeader });
    };
    UserService.prototype.editUser = function (user) {
        return this.authHttp.put("" + this.url + user._id, JSON.stringify(user), this.options);
    };
    UserService.prototype.deleteUser = function (user) {
        return this.authHttp.delete("" + this.url + user._id, this.options);
    };
    UserService.prototype.login = function (credentials) {
        return this.http.post('/auth/local', JSON.stringify(credentials), this.options);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(this.url, JSON.stringify(user), this.options);
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.url, JSON.stringify(user), this.options);
    };
    UserService.prototype.remove = function (user) {
        return this.authHttp.delete("" + this.url + (user.id || user._id));
    };
    UserService.prototype.changePassword = function (id, oldPassword, newPassword) {
        return this.authHttp.put("" + this.url + id + "/password", { oldPassword: oldPassword, newPassword: newPassword });
    };
    UserService.prototype.getProfile = function (uid) {
        return this.authHttp.get(this.url + uid).map(function (res) { return res.json() || []; });
    };
    UserService.prototype.saveProfile = function (uid, data) {
        return this.authHttp.put(this.url + uid, data);
    };
    UserService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Response"]) {
            if (error.status < 200 || error.status >= 300) {
                errMsg = 'This request has failed ' + error.status + ' - ' + error.statusText;
            }
            else {
                errMsg = error.status + " - " + (error.statusText || '');
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(errMsg || 'Server Error');
    };
    UserService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./client/app/shared/services/users.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./client/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");





var UsersResolve = /** @class */ (function () {
    function UsersResolve(users, router, snack) {
        this.users = users;
        this.router = router;
        this.snack = snack;
    }
    UsersResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        return this.users.getUsers();
    };
    UsersResolve = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSnackBar */]])
    ], UsersResolve);
    return UsersResolve;
}());



/***/ }),

/***/ "./client/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("./client/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("./client/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list_component__ = __webpack_require__("./client/app/shared/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media_media_library__ = __webpack_require__("./client/app/shared/media/media-library.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_cart_buttons_cart_buttons_component__ = __webpack_require__("./client/app/shared/cart-buttons/cart-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__address_address_component__ = __webpack_require__("./client/app/shared/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_dashboardFilter_pipe__ = __webpack_require__("./client/app/shared/pipes/dashboardFilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_search_pipe__ = __webpack_require__("./client/app/shared/pipes/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dialogs_dialogs_module__ = __webpack_require__("./client/app/shared/dialogs/dialogs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__media_modal_single__ = __webpack_require__("./client/app/shared/media/modal-single.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_unique_pipe__ = __webpack_require__("./client/app/shared/pipes/unique.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__ = __webpack_require__("./client/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_labelcase_pipe__ = __webpack_require__("./client/app/shared/pipes/labelcase.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_pluralize_pipe__ = __webpack_require__("./client/app/shared/pipes/pluralize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__submit_button_submit_button_component__ = __webpack_require__("./client/app/shared/submit-button/submit-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__search_search_component__ = __webpack_require__("./client/app/shared/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__oauth_buttons_oauth_buttons_component__ = __webpack_require__("./client/app/shared/oauth-buttons/oauth-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__media_media_component__ = __webpack_require__("./client/app/shared/media/media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__list_image_list_image_component__ = __webpack_require__("./client/app/shared/list-image/list-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__header_header_component__ = __webpack_require__("./client/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__footer_footer_component__ = __webpack_require__("./client/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__export_export_component__ = __webpack_require__("./client/app/shared/export/export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__edit_edit_component__ = __webpack_require__("./client/app/shared/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_busy__ = __webpack_require__("./node_modules/angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angular2_busy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_jquery__);


































var routes = [];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_26__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_27__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_13__angular_router__["h" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_29_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_10__dialogs_dialogs_module__["a" /* DialogsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_30_angular2_busy__["BusyModule"],
                __WEBPACK_IMPORTED_MODULE_31__angular_material__["w" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["o" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["o" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["u" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["s" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["f" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["k" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["e" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["l" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["p" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["q" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["m" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["r" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_31__angular_material__["y" /* MatToolbarModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_23__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_24__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_20__oauth_buttons_oauth_buttons_component__["a" /* OauthButtonsComponent */], __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__["a" /* FilterPipe */], __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__["b" /* ObjectFilterPipe */], __WEBPACK_IMPORTED_MODULE_8__pipes_dashboardFilter_pipe__["a" /* DashboardFilterPipe */], __WEBPACK_IMPORTED_MODULE_17__pipes_pluralize_pipe__["a" /* PluralizePipe */], __WEBPACK_IMPORTED_MODULE_9__pipes_search_pipe__["a" /* SearchPipe */], __WEBPACK_IMPORTED_MODULE_16__pipes_labelcase_pipe__["a" /* LabelcasePipe */], __WEBPACK_IMPORTED_MODULE_18__submit_button_submit_button_component__["a" /* SubmitButtonComponent */], __WEBPACK_IMPORTED_MODULE_28__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_25__export_export_component__["a" /* ExportComponent */], __WEBPACK_IMPORTED_MODULE_11__media_modal_single__["a" /* SingleFileUploadModal */], __WEBPACK_IMPORTED_MODULE_22__list_image_list_image_component__["a" /* ListImageComponent */], __WEBPACK_IMPORTED_MODULE_14__pipes_unique_pipe__["a" /* UniquePipe */], __WEBPACK_IMPORTED_MODULE_7__address_address_component__["a" /* AddressComponent */], __WEBPACK_IMPORTED_MODULE_5__shared_cart_buttons_cart_buttons_component__["a" /* CartButtonsComponent */], __WEBPACK_IMPORTED_MODULE_4__media_media_library__["a" /* MediaLibraryModal */], __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_25__export_export_component__["a" /* ExportComponent */], __WEBPACK_IMPORTED_MODULE_24__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_23__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_22__list_image_list_image_component__["a" /* ListImageComponent */], __WEBPACK_IMPORTED_MODULE_21__media_media_component__["a" /* MediaComponent */], __WEBPACK_IMPORTED_MODULE_20__oauth_buttons_oauth_buttons_component__["a" /* OauthButtonsComponent */], __WEBPACK_IMPORTED_MODULE_19__search_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_18__submit_button_submit_button_component__["a" /* SubmitButtonComponent */], __WEBPACK_IMPORTED_MODULE_17__pipes_pluralize_pipe__["a" /* PluralizePipe */], __WEBPACK_IMPORTED_MODULE_16__pipes_labelcase_pipe__["a" /* LabelcasePipe */], __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__["a" /* FilterPipe */], __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__["b" /* ObjectFilterPipe */], __WEBPACK_IMPORTED_MODULE_8__pipes_dashboardFilter_pipe__["a" /* DashboardFilterPipe */], __WEBPACK_IMPORTED_MODULE_14__pipes_unique_pipe__["a" /* UniquePipe */], __WEBPACK_IMPORTED_MODULE_9__pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_28__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_11__media_modal_single__["a" /* SingleFileUploadModal */], __WEBPACK_IMPORTED_MODULE_7__address_address_component__["a" /* AddressComponent */], __WEBPACK_IMPORTED_MODULE_5__shared_cart_buttons_cart_buttons_component__["a" /* CartButtonsComponent */], __WEBPACK_IMPORTED_MODULE_4__media_media_library__["a" /* MediaLibraryModal */],
                __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ListComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__media_modal_single__["a" /* SingleFileUploadModal */], __WEBPACK_IMPORTED_MODULE_4__media_media_library__["a" /* MediaLibraryModal */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./client/app/shared/submit-button/submit-button.component.css":
/***/ (function(module, exports) {

module.exports = ".app-spinner {\r\n  height: 30px;\r\n  width: 30px;\r\n  display: inline-block;\r\n  color: #fff;\r\n}"

/***/ }),

/***/ "./client/app/shared/submit-button/submit-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" align=\"center stretch\">\r\n  <button mat-raised-button type=\"submit\" fxFlex class=\"mat-raised circular-progress-button mat-primary\" [disabled]=\"!form.valid || loading || disabled\"\r\n    style=\"width:100%\">\r\n    <i class=\"material-icons\" *ngIf=\"!loading\">{{icon}}</i>\r\n    <mat-spinner [diameter]=\"28\" [strokeWidth]=\"3\" color=\"#fff\" class=\"app-spinner\" mode=\"indeterminate\" *ngIf=\"loading\" aria-label=\"Please wait.\">\r\n    </mat-spinner>\r\n    <span>{{text}}</span>\r\n  </button>\r\n</div>"

/***/ }),

/***/ "./client/app/shared/submit-button/submit-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");


var SubmitButtonComponent = /** @class */ (function () {
    function SubmitButtonComponent() {
        // this.form = this.form.form;
        this.text = 'Save';
        this.icon = 'save';
    }
    SubmitButtonComponent.prototype.ngOnInit = function () {
        this.loading = !!this.loading;
        this.disabled = !!this.disabled;
    };
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
    ], SubmitButtonComponent.prototype, "form", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", String)
    ], SubmitButtonComponent.prototype, "text", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Boolean)
    ], SubmitButtonComponent.prototype, "loading", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Boolean)
    ], SubmitButtonComponent.prototype, "disabled", void 0);
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", String)
    ], SubmitButtonComponent.prototype, "icon", void 0);
    SubmitButtonComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'submit-button',
            template: __webpack_require__("./client/app/shared/submit-button/submit-button.component.html"),
            styles: [__webpack_require__("./client/app/shared/submit-button/submit-button.component.css")]
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [])
    ], SubmitButtonComponent);
    return SubmitButtonComponent;
}());



/***/ }),

/***/ "./client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./client/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--8-3!./client/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--8-3!./client/styles.scss":
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z0{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-elevation-z1{-webkit-box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.mat-elevation-z2{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-elevation-z3{-webkit-box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mat-elevation-z4{-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mat-elevation-z5{-webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.mat-elevation-z6{-webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-elevation-z7{-webkit-box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12);box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mat-elevation-z8{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-elevation-z9{-webkit-box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12);box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.mat-elevation-z10{-webkit-box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12);box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.mat-elevation-z11{-webkit-box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12);box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.mat-elevation-z12{-webkit-box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12);box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-elevation-z13{-webkit-box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12);box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.mat-elevation-z14{-webkit-box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12);box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.mat-elevation-z15{-webkit-box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12);box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.mat-elevation-z16{-webkit-box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.mat-elevation-z17{-webkit-box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12);box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.mat-elevation-z18{-webkit-box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12);box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mat-elevation-z19{-webkit-box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12);box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.mat-elevation-z20{-webkit-box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12);box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.mat-elevation-z21{-webkit-box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12);box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.mat-elevation-z22{-webkit-box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12);box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.mat-elevation-z23{-webkit-box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12);box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.mat-elevation-z24{-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-card-title{font-size:24px;font-weight:400}.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:13px;line-height:18px}.mat-chip .mat-chip-remove.mat-icon{font-size:18px}.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell{font-size:14px}.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{padding:.4375em 0;border-top:.84375em solid transparent}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}.mat-form-field-label{top:1.28125em}.mat-form-field-underline{bottom:1.25em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.54167em;top:calc(100% - 1.66667em)}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-ripple{overflow:hidden}@media screen and (-ms-high-contrast:active){.mat-ripple{display:none}}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;-webkit-transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;-webkit-transition:opacity .4s cubic-bezier(.25,.8,.25,1);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.mat-ripple-element{background-color:rgba(0,0,0,.1)}.mat-option{color:rgba(0,0,0,.87)}.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#673ab7}.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ffd740}.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}.mat-optgroup-label{color:rgba(0,0,0,.54)}.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}.mat-pseudo-checkbox::after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ffd740}.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#673ab7}.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-theme-loaded-marker{display:none}.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}.mat-button,.mat-icon-button,.mat-stroked-button{background:0 0}.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(103,58,183,.12)}.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,215,64,.12)}.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#673ab7}.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ffd740}.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:rgba(0,0,0,.87)}.mat-fab.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-fab.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#673ab7}.mat-fab.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ffd740}.mat-fab.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-fab.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-fab.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.2)}.mat-fab.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.1)}.mat-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.1)}.mat-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}.mat-flat-button{color:rgba(0,0,0,.87);background-color:#fff}.mat-flat-button.mat-primary{color:#fff}.mat-flat-button.mat-accent{color:rgba(0,0,0,.87)}.mat-flat-button.mat-warn{color:#fff}.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled]{color:rgba(0,0,0,.26)}.mat-flat-button.mat-primary{background-color:#673ab7}.mat-flat-button.mat-accent{background-color:#ffd740}.mat-flat-button.mat-warn{background-color:#f44336}.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}.mat-flat-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-flat-button.mat-accent .mat-ripple-element{background-color:rgba(0,0,0,.2)}.mat-flat-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.2)}.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.2)}.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,215,64,.2)}.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}.mat-button-toggle{color:rgba(0,0,0,.38)}.mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}.mat-card{background:#fff;color:rgba(0,0,0,.87)}.mat-card-subtitle{color:rgba(0,0,0,.54)}.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}.mat-checkbox-checkmark{fill:#fafafa}.mat-checkbox-checkmark-path{stroke:#fafafa!important}.mat-checkbox-mixedmark{background-color:#fafafa}.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#673ab7}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ffd740}.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-chip:not(.mat-basic-chip){background-color:#e0e0e0;color:rgba(0,0,0,.87)}.mat-chip:not(.mat-basic-chip) .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-primary{background-color:#673ab7;color:#fff}.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}.mat-chip.mat-chip-selected.mat-accent{background-color:#ffd740;color:rgba(0,0,0,.87)}.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}.mat-table{background:#fff}.mat-header-row,.mat-row{border-bottom-color:rgba(0,0,0,.12)}.mat-header-cell{color:rgba(0,0,0,.54)}.mat-cell{color:rgba(0,0,0,.87)}.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}.mat-calendar-next-button,.mat-calendar-previous-button{color:rgba(0,0,0,.54)}.mat-calendar-table-header{color:rgba(0,0,0,.38)}.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}.mat-calendar-body-label{color:rgba(0,0,0,.54)}.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}.mat-calendar-body-selected{background-color:#673ab7;color:#fff}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(103,58,183,.4)}.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}.mat-calendar-body-today.mat-calendar-body-selected{-webkit-box-shadow:inset 0 0 0 1px #fff;box-shadow:inset 0 0 0 1px #fff}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}.mat-datepicker-toggle-active{color:#673ab7}.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}.mat-divider{border-top-color:rgba(0,0,0,.12)}.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}.mat-action-row{border-top-color:rgba(0,0,0,.12)}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}.mat-form-field-label{color:rgba(0,0,0,.54)}.mat-hint{color:rgba(0,0,0,.54)}.mat-focused .mat-form-field-label{color:#673ab7}.mat-focused .mat-form-field-label.mat-accent{color:#ffd740}.mat-focused .mat-form-field-label.mat-warn{color:#f44336}.mat-focused .mat-form-field-required-marker{color:#ffd740}.mat-form-field-underline{background-color:rgba(0,0,0,.42)}.mat-form-field-disabled .mat-form-field-underline{background-image:-webkit-gradient(linear,left top, right top,color-stop(0, rgba(0,0,0,.42)),color-stop(33%, rgba(0,0,0,.42)),color-stop(0, transparent));background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 1px;background-repeat:repeat-x}.mat-form-field-ripple{background-color:#673ab7}.mat-form-field-ripple.mat-accent{background-color:#ffd740}.mat-form-field-ripple.mat-warn{background-color:#f44336}.mat-form-field-invalid .mat-form-field-label{color:#f44336}.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}.mat-form-field-invalid .mat-form-field-ripple{background-color:#f44336}.mat-error{color:#f44336}.mat-icon.mat-primary{color:#673ab7}.mat-icon.mat-accent{color:#ffd740}.mat-icon.mat-warn{color:#f44336}.mat-input-element:disabled{color:rgba(0,0,0,.38)}.mat-input-element{caret-color:#673ab7}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}.mat-accent .mat-input-element{caret-color:#ffd740}.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}.mat-list-item-disabled{background-color:#eee}.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}.mat-menu-panel{background:#fff}.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}.mat-menu-item[disabled]{color:rgba(0,0,0,.38)}.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}.mat-paginator{background:#fff}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}.mat-progress-bar-background{fill:#d1c4e9}.mat-progress-bar-buffer{background-color:#d1c4e9}.mat-progress-bar-fill::after{background-color:#673ab7}.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ffe57f}.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ffd740}.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}.mat-progress-spinner circle,.mat-spinner circle{stroke:#673ab7}.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ffd740}.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}.mat-radio-disabled .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#673ab7}.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(103,58,183,.26)}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ffd740}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,215,64,.26)}.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}.mat-select-content,.mat-select-panel-done-animating{background:#fff}.mat-select-value{color:rgba(0,0,0,.87)}.mat-select-placeholder{color:rgba(0,0,0,.42)}.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}.mat-select-arrow{color:rgba(0,0,0,.54)}.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#673ab7}.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ffd740}.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}.mat-drawer.mat-drawer-push{background-color:#fff}.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#ffc107}.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(255,193,7,.5)}.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle .mat-ripple-element{background-color:rgba(255,193,7,.12)}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#673ab7}.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(103,58,183,.5)}.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(103,58,183,.12)}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.mat-slide-toggle-thumb{background-color:#fafafa}.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#673ab7}.mat-primary .mat-slider-thumb-label-text{color:#fff}.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ffd740}.mat-accent .mat-slider-thumb-label-text{color:rgba(0,0,0,.87)}.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}.mat-warn .mat-slider-thumb-label-text{color:#fff}.mat-slider-focus-ring{background-color:rgba(255,215,64,.2)}.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}.mat-step-header .mat-step-icon{background-color:#673ab7;color:#fff}.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}.mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#673ab7}.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ffd740}.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:rgba(0,0,0,.87)}.mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(209,196,233,.3)}.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#673ab7}.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,229,127,.3)}.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ffd740}.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.4)}.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(0,0,0,.12)}.mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,.mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus{background-color:rgba(255,205,210,.3)}.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}.mat-toolbar.mat-primary{background:#673ab7;color:#fff}.mat-toolbar.mat-accent{background:#ffd740;color:rgba(0,0,0,.87)}.mat-toolbar.mat-warn{background:#f44336;color:#fff}.mat-tooltip{background:rgba(97,97,97,.9)}.mat-snack-bar-container{background:#323232;color:#fff}.mat-simple-snackbar-action{color:#ffd740}.ng-busy {\n  z-index: 1002;\n}.ng-busy,\n.ng-busy > *,\n.ng-busy > ng-component > * {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}.ng-busy-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1001;\n  background: #fff;\n  opacity: .7;\n}.ng-busy-default-wrapper {\n  text-align: center;\n}.ng-busy-default-sign {\n  position: relative;\n  display: inline-block;\n  z-index: 1003;\n  padding: 12px 14px;\n  border: 1px solid #d8d8d8;\n  border-top: 0;\n  border-radius: 4px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  background: #f8f8f8;\n  color: #333;\n}.ng-busy-default-text {\n  display: inline-block;\n  margin-left: 6px;\n  max-width: 400px;\n  font-size: 14px;\n  text-align: left;\n}.ng-busy-default-spinner {\n  position: relative;\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  vertical-align: middle;\n}.ng-busy-default-spinner div {\n  position: absolute;\n  left: 44.5%;\n  top: 37%;\n  width: 10%;\n  height: 26%;\n  background: #666;\n  border-radius: 50px;\n  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n  opacity: 0;\n  -webkit-animation: busy-spinner-anim 1s linear infinite;\n          animation: busy-spinner-anim 1s linear infinite;\n}.ng-busy-default-spinner .bar1 {\n  -webkit-transform: rotate(0deg) translate(0, -142%);\n          transform: rotate(0deg) translate(0, -142%);\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}.ng-busy-default-spinner .bar2 {\n  -webkit-transform: rotate(30deg) translate(0, -142%);\n          transform: rotate(30deg) translate(0, -142%);\n  -webkit-animation-delay: -0.91666667s;\n          animation-delay: -0.91666667s;\n}.ng-busy-default-spinner .bar3 {\n  -webkit-transform: rotate(60deg) translate(0, -142%);\n          transform: rotate(60deg) translate(0, -142%);\n  -webkit-animation-delay: -0.83333333s;\n          animation-delay: -0.83333333s;\n}.ng-busy-default-spinner .bar4 {\n  -webkit-transform: rotate(90deg) translate(0, -142%);\n          transform: rotate(90deg) translate(0, -142%);\n  -webkit-animation-delay: -0.75s;\n          animation-delay: -0.75s;\n}.ng-busy-default-spinner .bar5 {\n  -webkit-transform: rotate(120deg) translate(0, -142%);\n          transform: rotate(120deg) translate(0, -142%);\n  -webkit-animation-delay: -0.66666667s;\n          animation-delay: -0.66666667s;\n}.ng-busy-default-spinner .bar6 {\n  -webkit-transform: rotate(150deg) translate(0, -142%);\n          transform: rotate(150deg) translate(0, -142%);\n  -webkit-animation-delay: -0.58333333s;\n          animation-delay: -0.58333333s;\n}.ng-busy-default-spinner .bar7 {\n  -webkit-transform: rotate(180deg) translate(0, -142%);\n          transform: rotate(180deg) translate(0, -142%);\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}.ng-busy-default-spinner .bar8 {\n  -webkit-transform: rotate(210deg) translate(0, -142%);\n          transform: rotate(210deg) translate(0, -142%);\n  -webkit-animation-delay: -0.41666667s;\n          animation-delay: -0.41666667s;\n}.ng-busy-default-spinner .bar9 {\n  -webkit-transform: rotate(240deg) translate(0, -142%);\n          transform: rotate(240deg) translate(0, -142%);\n  -webkit-animation-delay: -0.33333333s;\n          animation-delay: -0.33333333s;\n}.ng-busy-default-spinner .bar10 {\n  -webkit-transform: rotate(270deg) translate(0, -142%);\n          transform: rotate(270deg) translate(0, -142%);\n  -webkit-animation-delay: -0.25s;\n          animation-delay: -0.25s;\n}.ng-busy-default-spinner .bar11 {\n  -webkit-transform: rotate(300deg) translate(0, -142%);\n          transform: rotate(300deg) translate(0, -142%);\n  -webkit-animation-delay: -0.16666667s;\n          animation-delay: -0.16666667s;\n}.ng-busy-default-spinner .bar12 {\n  -webkit-transform: rotate(330deg) translate(0, -142%);\n          transform: rotate(330deg) translate(0, -142%);\n  -webkit-animation-delay: -0.08333333s;\n          animation-delay: -0.08333333s;\n}@-webkit-keyframes busy-spinner-anim {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.25;\n  }\n}@keyframes busy-spinner-anim {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.25;\n  }\n}/*! nouislider - 10.1.0 - 2017-07-28 13:09:54 */.noUi-target,.noUi-target *{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-ms-touch-action:none;touch-action:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box}.noUi-target{position:relative;direction:ltr}.noUi-base{width:100%;height:100%;position:relative;z-index:1}.noUi-connect{position:absolute;right:0;top:0;left:0;bottom:0}.noUi-origin{position:absolute;height:0;width:0}.noUi-handle{position:relative;z-index:1}.noUi-state-tap .noUi-connect,.noUi-state-tap .noUi-origin{-webkit-transition:top .3s,right .3s,bottom .3s,left .3s;transition:top .3s,right .3s,bottom .3s,left .3s}.noUi-state-drag *{cursor:inherit!important}.noUi-base,.noUi-handle{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.noUi-horizontal{height:18px}.noUi-horizontal .noUi-handle{width:34px;height:28px;left:-17px;top:-6px}.noUi-vertical{width:18px}.noUi-vertical .noUi-handle{width:28px;height:34px;left:-6px;top:-17px}.noUi-target{background:#FAFAFA;border-radius:4px;border:1px solid #D3D3D3;-webkit-box-shadow:inset 0 1px 1px #F0F0F0,0 3px 6px -5px #BBB;box-shadow:inset 0 1px 1px #F0F0F0,0 3px 6px -5px #BBB}.noUi-connect{background:#3FB8AF;border-radius:4px;-webkit-box-shadow:inset 0 0 3px rgba(51,51,51,.45);box-shadow:inset 0 0 3px rgba(51,51,51,.45);-webkit-transition:background 450ms;transition:background 450ms}.noUi-draggable{cursor:ew-resize}.noUi-vertical .noUi-draggable{cursor:ns-resize}.noUi-handle{border:1px solid #D9D9D9;border-radius:3px;background:#FFF;cursor:default;-webkit-box-shadow:inset 0 0 1px #FFF,inset 0 1px 7px #EBEBEB,0 3px 6px -3px #BBB;box-shadow:inset 0 0 1px #FFF,inset 0 1px 7px #EBEBEB,0 3px 6px -3px #BBB}.noUi-active{-webkit-box-shadow:inset 0 0 1px #FFF,inset 0 1px 7px #DDD,0 3px 6px -3px #BBB;box-shadow:inset 0 0 1px #FFF,inset 0 1px 7px #DDD,0 3px 6px -3px #BBB}.noUi-handle:after,.noUi-handle:before{content:\"\";display:block;position:absolute;height:14px;width:1px;background:#E8E7E6;left:14px;top:6px}.noUi-handle:after{left:17px}.noUi-vertical .noUi-handle:after,.noUi-vertical .noUi-handle:before{width:14px;height:1px;left:6px;top:14px}.noUi-vertical .noUi-handle:after{top:17px}[disabled] .noUi-connect{background:#B8B8B8}[disabled] .noUi-handle,[disabled].noUi-handle,[disabled].noUi-target{cursor:not-allowed}.noUi-pips,.noUi-pips *{-webkit-box-sizing:border-box;box-sizing:border-box}.noUi-pips{position:absolute;color:#999}.noUi-value{position:absolute;white-space:nowrap;text-align:center}.noUi-value-sub{color:#ccc;font-size:10px}.noUi-marker{position:absolute;background:#CCC}.noUi-marker-large,.noUi-marker-sub{background:#AAA}.noUi-pips-horizontal{padding:10px 0;height:80px;top:100%;left:0;width:100%}.noUi-value-horizontal{-webkit-transform:translate3d(-50%,50%,0);transform:translate3d(-50%,50%,0)}.noUi-marker-horizontal.noUi-marker{margin-left:-1px;width:2px;height:5px}.noUi-marker-horizontal.noUi-marker-sub{height:10px}.noUi-marker-horizontal.noUi-marker-large{height:15px}.noUi-pips-vertical{padding:0 10px;height:100%;top:0;left:100%}.noUi-value-vertical{-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0);padding-left:25px}.noUi-marker-vertical.noUi-marker{width:5px;height:2px;margin-top:-1px}.noUi-marker-vertical.noUi-marker-sub{width:10px}.noUi-marker-vertical.noUi-marker-large{width:15px}.noUi-tooltip{display:block;position:absolute;border:1px solid #D9D9D9;border-radius:3px;background:#fff;color:#000;padding:5px;text-align:center;white-space:nowrap}.noUi-horizontal .noUi-tooltip{-webkit-transform:translate(-50%,0);transform:translate(-50%,0);left:50%;bottom:120%}.noUi-vertical .noUi-tooltip{-webkit-transform:translate(0,-50%);transform:translate(0,-50%);top:50%;right:120%}.tree-children.tree-children-no-padding { padding-left: 0 }.tree-children { padding-left: 20px; overflow: hidden }.node-drop-slot { display: block; height: 2px }.node-drop-slot.is-dragging-over { background: #ddffee; height: 20px; border: 2px dotted #888; }.toggle-children-wrapper-expanded .toggle-children { -webkit-transform: rotate(90deg); transform: rotate(90deg) }.toggle-children-wrapper-collapsed .toggle-children { -webkit-transform: rotate(0); transform: rotate(0); }.toggle-children-wrapper {\n  padding: 2px 3px 5px 1px;\n}/* tslint:disable */.toggle-children {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjcxODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjcwODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5iogFwAAAGhJREFUeNpiYGBgKABigf///zOQg0EARH4A4gZyDIIZ8B/JoAJKDIDhB0CcQIkBRBtEyABkgxwoMQCGD6AbRKoBGAYxQgXIBRuZGKgAKPIC3QLxArnRSHZCIjspk52ZKMrOFBUoAAEGAKnq593MQAZtAAAAAElFTkSuQmCC');\n  height: 8px;\n  width: 9px;\n  background-size: contain;\n  display: inline-block;\n  position: relative;\n  top: 1px;\n  background-repeat: no-repeat;\n  background-position: center;\n}.toggle-children-placeholder {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  position: relative;\n  top: 1px;\n  padding-right: 3px;\n}.node-content-wrapper {\n  display: inline-block;\n  padding: 2px 5px;\n  border-radius: 2px;\n  -webkit-transition: background-color .15s,-webkit-box-shadow .15s;\n  transition: background-color .15s,-webkit-box-shadow .15s;\n  transition: background-color .15s,box-shadow .15s;\n  transition: background-color .15s,box-shadow .15s,-webkit-box-shadow .15s;\n}.node-wrapper {display: -webkit-box;display: -ms-flexbox;display: flex; -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start;}.node-content-wrapper-active,\n.node-content-wrapper.node-content-wrapper-active:hover,\n.node-content-wrapper-active.node-content-wrapper-focused {\n  background: #beebff;\n}.node-content-wrapper-focused { background: #e7f4f9 }.node-content-wrapper:hover { background: #f7fbff }.node-content-wrapper-active, .node-content-wrapper-focused, .node-content-wrapper:hover {\n  -webkit-box-shadow: inset 0 0 1px #999;\n          box-shadow: inset 0 0 1px #999;\n}.node-content-wrapper.is-dragging-over { background: #ddffee; -webkit-box-shadow: inset 0 0 1px #999; box-shadow: inset 0 0 1px #999; }.node-content-wrapper.is-dragging-over-disabled { opacity: 0.5 }tree-viewport {\n  height: 100%;\n  overflow: auto;\n  display: block;\n}.tree-children { padding-left: 20px }.empty-tree-drop-slot .node-drop-slot { height: 20px; min-width: 100px }.angular-tree-component {\n  width: 100%;\n  position:relative;\n  display: inline-block;\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none;   /* Chrome/Safari/Opera */    /* Konqueror */\n  -moz-user-select: none;      /* Firefox */\n  -ms-user-select: none;       /* IE/Edge */\n  user-select: none;           /* non-prefixed version, currently not supported by any browser */\n}tree-root .angular-tree-component-rtl {\n  direction: rtl;\n}tree-root .angular-tree-component-rtl .toggle-children-wrapper-collapsed .toggle-children {\n  -webkit-transform: rotate(180deg) !important;\n          transform: rotate(180deg) !important;\n}tree-root .angular-tree-component-rtl .tree-children {\n  padding-right: 20px;\n  padding-left: 0;\n}th {\n  color: #828282;\n  text-align: left;\n  font-size: .75em;\n  font-weight: 700;\n  padding: 16px 16px 16px 0; }h3 {\n  margin: 0 7px 0 0; }.mt20 {\n  padding-top: 20px; }.page-title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 10px 15px;\n  -webkit-box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n  height: 35px; }.primary-color {\n  color: #3F51B5 !important; }.accent-color {\n  color: #FF4081 !important; }.background-primary-color {\n  background-color: #3F51B5 !important; }.background-accent-color {\n  background-color: #FF4081 !important; }.white-text {\n  color: #FFF !important; }.mat-raised-button.fb {\n  text-transform: uppercase;\n  color: #039be5 !important; }.mute {\n  color: #999; }.noproduct {\n  background: greenyellow;\n  width: 80%;\n  margin-top: 10px; }shopnx-root {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }.mat-sidenav-content {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important;\n  -webkit-box-pack: justify !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }img {\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border: 0; }button.close {\n  position: absolute;\n  top: 1px;\n  right: 1px; }a.product-link {\n  font-weight: 700;\n  color: orangered;\n  -webkit-transition: color .5s ease 0s;\n  transition: color .5s ease 0s;\n  text-decoration: none; }hr {\n  margin-top: 2px;\n  color: #ccc;\n  background: #ccc;\n  -webkit-box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1); }img.list-image {\n  border-radius: 30px;\n  width: 42px;\n  margin: 8px 16px;\n  border: 1px solid #eee; }table tr td, table tr th {\n  border-bottom: 1px solid #e6e6e6; }list-image div, list-image img {\n  border-radius: 30px;\n  width: 42px;\n  margin: 8px 16px;\n  border: none;\n  color: #fff; }list-image div.mat-light-blue-dark-theme, list-image img.mat-light-blue-dark-theme {\n  color: #000;\n  border: 1px solid #888; }list-image div {\n  height: 42px;\n  text-align: center;\n  line-height: 42px; }list-image div span {\n  font-size: 20px; }table {\n  width: 100%;\n  display: table; }thead {\n  border-bottom: 1px solid #d0d0d0; }td, th {\n  padding: 15px 5px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  border-radius: 2px; }html, body {\n  margin: 0;\n  background: #eee;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }table thead th a {\n  cursor: pointer; }mat-sidenav {\n  width: 320px; }div[routerlink] {\n  cursor: pointer; }.avatar {\n  position: relative;\n  width: 128px;\n  height: 128px;\n  border: 1px solid #ddd;\n  border-radius: 50%;\n  display: inline-block;\n  overflow: hidden;\n  margin: 0;\n  vertical-align: middle;\n  zoom: 0.70;\n  transform: translateZ(0);\n  -webkit-transform: scale(0.7);\n  -moz-transform: scale(0.7); }.mat-list-item {\n  height: initial !important; }body {\n  margin: 0;\n  font-family: Roboto, sans-serif; }.item {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin: auto; }.mr10 {\n  margin-right: 10px; }.col {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }.row {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-wrap: true;\n      flex-wrap: true; }.space-between {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }.center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }.stretch {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }.pull-left {\n  -ms-flex-item-align: start;\n      align-self: flex-start; }.pull-right {\n  -ms-flex-item-align: end;\n      align-self: flex-end; }mat-sidenav-container.m2app-dark {\n  background: black; }.app-content {\n  padding: 20px; }.app-content mat-card mat-card-content {\n  padding: 20px; }.app-sidenav {\n  padding: 10px;\n  min-width: 100px; }.app-content mat-checkbox {\n  margin: 10px; }.app-toolbar-filler {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }.app-toolbar-menu {\n  padding: 3px 14px 0 14px;\n  color: white; }.app-icon-button {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  -webkit-filter: none;\n          filter: none;\n  font-weight: normal;\n  height: auto;\n  line-height: inherit;\n  margin: 0;\n  min-width: 0;\n  padding: 0;\n  text-align: left;\n  text-decoration: none; }.app-action {\n  display: inline-block;\n  position: fixed;\n  bottom: 20px;\n  right: 20px; }.app-spinner {\n  height: 30px;\n  width: 30px;\n  display: inline-block; }.app-input-icon {\n  font-size: 16px; }.app-list {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  width: 350px;\n  margin: 20px; }.app-progress {\n  margin: 20px; }.mat-sidenav {\n  background-color: inherit !important; }mat-toolbar-row {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }.done {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  color: white; }.muted {\n  color: #ccc; }.success {\n  -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  opacity: 1;\n  color: green; }.err {\n  font-size: 12px;\n  line-height: 14px;\n  -webkit-transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  opacity: 1;\n  margin-top: 0;\n  padding-top: 5px;\n  color: red; }.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0; }mat-sidenav {\n  fill: #737373; }mat-toolbar .mat-toolbar-tools.toolbar-tools-fab-overlap {\n  padding-left: 78px; }mat-toolbar .mat-button:not(.mat-fab) {\n  min-width: 1em; }mat-toolbar .subtitle {\n  font-size: .5em; }mat-toolbar.mat-tall button.mat-button.mat-fab.fab-overlap.mat-fab-top-right, mat-toolbar.mat-tall button.mat-button.mat-fab.fab-overlap.mat-fab-top-left {\n  top: 112px; }mat-toolbar.mat-medium-tall button.mat-button.mat-fab.fab-overlap.mat-fab-top-right, mat-toolbar.mat-medium-tall button.mat-button.mat-fab.fab-overlap.mat-fab-top-left {\n  top: 72px; }mat-toolbar.mat-medium-tall button.mat-button.mat-fab.fab-overlap.mat-fab-top-left {\n  left: 12px; }mat-list.fab-padding {\n  padding-bottom: 56px; }mat-list .list-info {\n  color: rgba(0, 0, 0, 0.24); }mat-list mat-item.selected {\n  background: #e3f2fd; }mat-list mat-item.list-head {\n  color: #888; }mat-list mat-item.list-head mat-item-content {\n  padding-left: 64px; }\n"

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
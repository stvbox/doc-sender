function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-documents-module"], {
  /***/
  "./src/app/documents/document-extend/document-extend.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/documents/document-extend/document-extend.component.ts ***!
    \************************************************************************/

  /*! exports provided: DocumentExtendComponent */

  /***/
  function srcAppDocumentsDocumentExtendDocumentExtendComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentExtendComponent", function () {
      return DocumentExtendComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _common_BaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../common/BaseComponent */
    "./src/app/common/BaseComponent.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _document_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../document.service */
    "./src/app/documents/document.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DocumentExtendComponent_button_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentExtendComponent_button_18_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.sendDocument();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DocumentExtendComponent_img_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var DocumentExtendComponent = /*#__PURE__*/function (_common_BaseComponent) {
      _inherits(DocumentExtendComponent, _common_BaseComponent);

      var _super = _createSuper(DocumentExtendComponent);

      function DocumentExtendComponent(fb, documentSvc) {
        var _this;

        _classCallCheck(this, DocumentExtendComponent);

        _this = _super.call(this);
        _this.fb = fb;
        _this.documentSvc = documentSvc;
        _this.errors = {};
        return _this;
      }

      _createClass(DocumentExtendComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            extend: [],
            description: []
          });
        }
      }, {
        key: "sendDocument",
        value: function sendDocument() {
          var _this2 = this;

          this.busyState = true;
          var attributes = Object.assign({}, this.form.value);
          var documentType = 'extend';
          this.documentSvc.postExtendDocument({
            attributes: attributes,
            documentType: documentType
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (errors) {
            _this2.busyState = false;

            _this2.applyErrors(errors);

            throw errors;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe)).subscribe(function (result) {
            _this2.busyState = false;
            _this2.sentState = true;

            _this2.applyErrors(null);
          });
        }
      }, {
        key: "applyErrors",
        value: function applyErrors(errors) {
          if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(errors)) {
            this.errors = {};
            return;
          }

          this.errors = errors.reduce(function (memo, error) {
            var errorCode = error.code.split('_')[1];
            memo[errorCode] = true;
            return memo;
          }, {});
        }
      }]);

      return DocumentExtendComponent;
    }(_common_BaseComponent__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

    DocumentExtendComponent.ɵfac = function DocumentExtendComponent_Factory(t) {
      return new (t || DocumentExtendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_document_service__WEBPACK_IMPORTED_MODULE_5__["DocumentService"]));
    };

    DocumentExtendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocumentExtendComponent,
      selectors: [["document"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 20,
      vars: 9,
      consts: [[1, "d-flex"], [1, "container"], [1, "row"], [1, "col"], [1, "card", 3, "formGroup"], [1, "card-header"], [1, "card-body"], [1, "form-group"], ["for", "extendField"], ["formControlName", "extend", "type", "email", "id", "extendField", "aria-describedby", "extendHelp", 1, "form-control", 3, "ngClass"], ["id", "extend", 1, "form-text", "text-muted"], ["for", "exampleFormControlTextarea"], ["formControlName", "description", "id", "exampleFormControlTextarea", "rows", "3", 1, "form-control", "is-invalid", 3, "ngClass"], [3, "click", 4, "ngIf"], ["src", "/assets/images/svg/spinner.svg", "alt", "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...", 4, "ngIf"], [3, "click"], ["src", "/assets/images/svg/spinner.svg", "alt", "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."]],
      template: function DocumentExtendComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0424\u043E\u0440\u043C\u0430 \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u0434\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041F\u043E\u043B\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u044F\u044E\u0449\u0435\u0435 \u0431\u0430\u0437\u043E\u0432\u0443\u044E \u0441\u0443\u0449\u044C\u043D\u043E\u0441\u0442\u044C.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DocumentExtendComponent_button_18_Template, 2, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DocumentExtendComponent_img_19_Template, 1, 0, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.errors["extend"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.errors["description"]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.busyState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.busyState);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy9kb2N1bWVudC1leHRlbmQvZG9jdW1lbnQtZXh0ZW5kLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentExtendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'document',
          templateUrl: './document-extend.component.html',
          styleUrls: ['./document-extend.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _document_service__WEBPACK_IMPORTED_MODULE_5__["DocumentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/documents/document-list/document-list.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/documents/document-list/document-list.component.ts ***!
    \********************************************************************/

  /*! exports provided: DocumentListComponent */

  /***/
  function srcAppDocumentsDocumentListDocumentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentListComponent", function () {
      return DocumentListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _common_BaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../common/BaseComponent */
    "./src/app/common/BaseComponent.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _document_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../document.service */
    "./src/app/documents/document.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DocumentListComponent_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var document_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r5.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r5.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r5.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r5.status);
      }
    }

    var PAGE_SIZE = 5;

    var DocumentListComponent = /*#__PURE__*/function (_common_BaseComponent2) {
      _inherits(DocumentListComponent, _common_BaseComponent2);

      var _super2 = _createSuper(DocumentListComponent);

      function DocumentListComponent(documentSvc) {
        var _this3;

        _classCallCheck(this, DocumentListComponent);

        _this3 = _super2.call(this);
        _this3.documentSvc = documentSvc;
        _this3.currentPage = 0;
        _this3.documents = [];
        _this3.documentsPage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        return _this3;
      }

      _createClass(DocumentListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.documentsPage.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (page) {
            return _this4.documentSvc.getDocuments(page);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_ref) {
            var data = _ref.data;
            return data === null || data === void 0 ? void 0 : data.length;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe)).subscribe(function (response) {
            var documents = response.data,
                page = response.pageNum;
            _this4.currentPage = page;
            var offset = PAGE_SIZE * page;

            for (var i = 0; i < PAGE_SIZE; i++) {
              _this4.documents[offset + i] = documents[i];
            }
          });
          this.documentsPage.next(this.currentPage);
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.documentsPage.next(this.currentPage + 1);
        }
      }]);

      return DocumentListComponent;
    }(_common_BaseComponent__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

    DocumentListComponent.ɵfac = function DocumentListComponent_Factory(t) {
      return new (t || DocumentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]));
    };

    DocumentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocumentListComponent,
      selectors: [["app-document-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 16,
      vars: 1,
      consts: [[1, "table", "table-bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "click"], ["scope", "row"]],
      template: function DocumentListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0414\u0430\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0421\u0442\u0430\u0442\u0443\u0441");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DocumentListComponent_tr_12_Template, 9, 4, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_Template_button_click_14_listener() {
            return ctx.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.documents);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy9kb2N1bWVudC1saXN0L2RvY3VtZW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-document-list',
          templateUrl: './document-list.component.html',
          styleUrls: ['./document-list.component.scss']
        }]
      }], function () {
        return [{
          type: _document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/documents/document.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/documents/document.service.ts ***!
    \***********************************************/

  /*! exports provided: DocumentService */

  /***/
  function srcAppDocumentsDocumentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentService", function () {
      return DocumentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    ;

    var DocumentService = /*#__PURE__*/function () {
      function DocumentService(http) {
        _classCallCheck(this, DocumentService);

        this.http = http;
      }

      _createClass(DocumentService, [{
        key: "getDocuments",
        value: function getDocuments(page) {
          var params = {
            observe: 'response',
            responseType: 'json',
            params: {
              page: String(page)
            }
          };
          return this.http.get('/api/document/get-list', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (response) {
            return console.log(response);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.body;
          }));
        }
      }, {
        key: "postDocument",
        value: function postDocument(document) {
          return this.http.post('/api/document/post', document).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.data;
          }));
        }
      }, {
        key: "postExtendDocument",
        value: function postExtendDocument(document) {
          return this.http.post('/api/extend/post', document).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            var _a;

            if ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.errors) {
              throw response.data.errors;
            }

            return response === null || response === void 0 ? void 0 : response.data;
          }));
        }
      }]);

      return DocumentService;
    }();

    DocumentService.ɵfac = function DocumentService_Factory(t) {
      return new (t || DocumentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    DocumentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DocumentService,
      factory: DocumentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/documents/document/document.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/documents/document/document.component.ts ***!
    \**********************************************************/

  /*! exports provided: DocumentComponent */

  /***/
  function srcAppDocumentsDocumentDocumentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentComponent", function () {
      return DocumentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _common_BaseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../common/BaseComponent */
    "./src/app/common/BaseComponent.ts");
    /* harmony import */


    var _document_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../document.service */
    "./src/app/documents/document.service.ts");

    var DocumentComponent = /*#__PURE__*/function (_common_BaseComponent3) {
      _inherits(DocumentComponent, _common_BaseComponent3);

      var _super3 = _createSuper(DocumentComponent);

      function DocumentComponent(documentSvc) {
        var _this5;

        _classCallCheck(this, DocumentComponent);

        _this5 = _super3.call(this);
        _this5.documentSvc = documentSvc;
        _this5.descriptionText = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        return _this5;
      }

      _createClass(DocumentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendDocument",
        value: function sendDocument() {
          var attributes = {
            description: this.descriptionText.value
          };
          var documentType = 'simple';
          this.documentSvc.postDocument({
            attributes: attributes,
            documentType: documentType
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(function (result) {
            console.log(result);
          });
        }
      }]);

      return DocumentComponent;
    }(_common_BaseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);

    DocumentComponent.ɵfac = function DocumentComponent_Factory(t) {
      return new (t || DocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]));
    };

    DocumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocumentComponent,
      selectors: [["document"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 14,
      vars: 1,
      consts: [[1, "d-flex"], [1, "container"], [1, "row"], [1, "col"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-group"], ["for", "exampleFormControlTextarea1"], ["id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", 3, "formControl"], [3, "click"]],
      template: function DocumentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0424\u043E\u0440\u043C\u0430 \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u0434\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentComponent_Template_button_click_12_listener() {
            return ctx.sendDocument();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.descriptionText);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50cy9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'document',
          templateUrl: './document.component.html',
          styleUrls: ['./document.component.scss']
        }]
      }], function () {
        return [{
          type: _document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/documents/documents-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/documents/documents-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DocumentsRoutingModule */

  /***/
  function srcAppDocumentsDocumentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentsRoutingModule", function () {
      return DocumentsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _document_document_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./document/document.component */
    "./src/app/documents/document/document.component.ts");
    /* harmony import */


    var _document_extend_document_extend_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./document-extend/document-extend.component */
    "./src/app/documents/document-extend/document-extend.component.ts");
    /* harmony import */


    var _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./document-list/document-list.component */
    "./src/app/documents/document-list/document-list.component.ts");

    var routes = [{
      path: '',
      component: _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_4__["DocumentListComponent"]
    }, {
      path: 'simple',
      component: _document_document_component__WEBPACK_IMPORTED_MODULE_2__["DocumentComponent"]
    }, {
      path: 'extend',
      component: _document_extend_document_extend_component__WEBPACK_IMPORTED_MODULE_3__["DocumentExtendComponent"]
    }];

    var DocumentsRoutingModule = function DocumentsRoutingModule() {
      _classCallCheck(this, DocumentsRoutingModule);
    };

    DocumentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DocumentsRoutingModule
    });
    DocumentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DocumentsRoutingModule_Factory(t) {
        return new (t || DocumentsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DocumentsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/documents/documents.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/documents/documents.module.ts ***!
    \***********************************************/

  /*! exports provided: DocumentsModule */

  /***/
  function srcAppDocumentsDocumentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentsModule", function () {
      return DocumentsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _documents_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./documents-routing.module */
    "./src/app/documents/documents-routing.module.ts");
    /* harmony import */


    var _document_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./document/document.component */
    "./src/app/documents/document/document.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _document_extend_document_extend_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./document-extend/document-extend.component */
    "./src/app/documents/document-extend/document-extend.component.ts");
    /* harmony import */


    var _document_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./document.service */
    "./src/app/documents/document.service.ts");
    /* harmony import */


    var _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./document-list/document-list.component */
    "./src/app/documents/document-list/document-list.component.ts");

    var DocumentsModule = function DocumentsModule() {
      _classCallCheck(this, DocumentsModule);
    };

    DocumentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DocumentsModule
    });
    DocumentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DocumentsModule_Factory(t) {
        return new (t || DocumentsModule)();
      },
      providers: [_document_service__WEBPACK_IMPORTED_MODULE_6__["DocumentService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _documents_routing_module__WEBPACK_IMPORTED_MODULE_2__["DocumentsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DocumentsModule, {
        declarations: [_document_document_component__WEBPACK_IMPORTED_MODULE_3__["DocumentComponent"], _document_extend_document_extend_component__WEBPACK_IMPORTED_MODULE_5__["DocumentExtendComponent"], _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_7__["DocumentListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _documents_routing_module__WEBPACK_IMPORTED_MODULE_2__["DocumentsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_document_document_component__WEBPACK_IMPORTED_MODULE_3__["DocumentComponent"], _document_extend_document_extend_component__WEBPACK_IMPORTED_MODULE_5__["DocumentExtendComponent"], _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_7__["DocumentListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _documents_routing_module__WEBPACK_IMPORTED_MODULE_2__["DocumentsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
          providers: [_document_service__WEBPACK_IMPORTED_MODULE_6__["DocumentService"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=documents-documents-module-es5.js.map
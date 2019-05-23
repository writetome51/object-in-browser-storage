"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var TestObjectInLocalStorage = /** @class */ (function (_super) {
    __extends(TestObjectInLocalStorage, _super);
    function TestObjectInLocalStorage(key, value) {
        if (key === void 0) { key = ''; }
        if (value === void 0) { value = {}; }
        var _this = _super.call(this, key = '', value) || this;
        _this._storageType = localStorage;
        return _this;
    }
    return TestObjectInLocalStorage;
}(index_1.ObjectInBrowserStorage));
exports.TestObjectInLocalStorage = TestObjectInLocalStorage;
var obj = new TestObjectInLocalStorage('person', { first: 'steve', last: 'thompson' });

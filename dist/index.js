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
var get_object_from_json_1 = require("get-object-from-json");
var item_in_browser_storage_1 = require("@writetome51/item-in-browser-storage");
var modify_object_1 = require("@writetome51/modify-object");
// Represents an object or array stored in the browser's localStorage or sessionStorage.
// The item in storage is identified by a unique string `this.key`.
// You can create a different class instance for each item you want to store.  Or you can
// create a single instance and simply change the value of `this.key` when you want to create/access
// a different item.
var ObjectInBrowserStorage = /** @class */ (function (_super) {
    __extends(ObjectInBrowserStorage, _super);
    function ObjectInBrowserStorage(key, value) {
        if (key === void 0) { key = ''; }
        if (value === void 0) { value = {}; }
        return _super.call(this, key, value) || this;
    }
    // Saves `value` in storage.  Replaces previous value, if any.
    ObjectInBrowserStorage.prototype.set = function (value) {
        var json = JSON.stringify(value);
        _super.prototype.set.call(this, json);
    };
    ObjectInBrowserStorage.prototype.get = function () {
        var json = this.getAsJSON();
        return get_object_from_json_1.getObjectFromJSON(json);
    };
    // `changes` does not completely replace the current value.  It is merged into the current value.
    ObjectInBrowserStorage.prototype.modify = function (changes) {
        var obj = this.get();
        modify_object_1.modifyObject(obj, changes);
        this.set(obj);
    };
    // It's likely you'll sometimes want to keep the object as JSON after retrieving it.
    ObjectInBrowserStorage.prototype.getAsJSON = function () {
        return _super.prototype.get.call(this); // For this class, it's expected to return JSON string.
    };
    return ObjectInBrowserStorage;
}(item_in_browser_storage_1.ItemInBrowserStorage));
exports.ObjectInBrowserStorage = ObjectInBrowserStorage;

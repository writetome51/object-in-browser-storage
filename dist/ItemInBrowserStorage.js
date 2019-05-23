"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { errorIfNotStringWithLength } from 'error-if-not-string-with-length';
var error_if_not_string_1 = require("error-if-not-string");
var is_empty_not_empty_1 = require("@writetome51/is-empty-not-empty");
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
// Represents an item stored in the browser's localStorage or sessionStorage.
// The item in storage is identified by a unique string `this.key`.
// You can create a different class instance for each item you want to store.  Or you can
// create a single instance and simply change the value of `this.key` when you want to create/access
// a different item.
var ItemInBrowserStorage = /** @class */ (function () {
    function ItemInBrowserStorage(__key, value) {
        if (__key === void 0) { __key = ''; }
        this.__key = __key;
        error_if_not_string_1.errorIfNotString(this.__key);
        if (is_empty_not_empty_1.notEmpty(this.__key))
            this.set(value);
    }
    Object.defineProperty(ItemInBrowserStorage.prototype, "key", {
        get: function () {
            return this.__key;
        },
        set: function (value) {
            // errorIfNotStringWithLength(value);
            this.__key = value;
        },
        enumerable: true,
        configurable: true
    });
    // Saves `value` in storage.  Replaces previous value, if any.
    ItemInBrowserStorage.prototype.set = function (value) {
        this._storageType.setItem(this.key, value);
    };
    ItemInBrowserStorage.prototype.get = function () {
        // errorIfNotStringWithLength(this.key);
        var item = this._storageType.getItem(this.key);
        if (has_value_no_value_1.hasValue(item))
            return item;
        else
            throw new Error('Requested item either does not exist, or its value is null');
    };
    // `getModifiedValue(value)` takes in the current value and returns a modified version that
    // replaces the current value.
    ItemInBrowserStorage.prototype.modify = function (getModifiedValue) {
        var value = this.get();
        value = getModifiedValue(value);
        this.set(value);
    };
    // After calling this.remove(), both the key and value are no longer in storage.
    // If you want to re-insert the key and value in storage later, you must call this.set(value)
    ItemInBrowserStorage.prototype.remove = function () {
        this._storageType.removeItem(this.key);
    };
    return ItemInBrowserStorage;
}());
exports.ItemInBrowserStorage = ItemInBrowserStorage;

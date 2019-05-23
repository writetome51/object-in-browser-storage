// import { errorIfNotStringWithLength } from 'error-if-not-string-with-length';
import { errorIfNotString } from 'error-if-not-string';
import { modifyObject } from '@writetome51/modify-object';
import { getObjectFromJSON } from 'get-object-from-json';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { hasValue } from '@writetome51/has-value-no-value';
import { ItemInBrowserStorage } from './ItemInBrowserStorage';


// Represents an object or array stored in the browser's localStorage or sessionStorage.
// The item in storage is identified by a unique string `this.key`.
// You can create a different class instance for each item you want to store.  Or you can
// create a single instance and simply change the value of `this.key` when you want to create/access
// a different item.

export abstract class ObjectInBrowserStorage extends ItemInBrowserStorage {


	constructor(
		key = '',
		value: Object | any[] = {}
	) {
		super(key, value);
	}


	// Saves `value` in storage.  Completely replaces previous value, if any.

	set(value: Object | any[]): void {
		let json = JSON.stringify(value);
		super.set(json);
	}


	get(): Object | any[] {
		let json = this.getAsJSON();
		return getObjectFromJSON(json);
	}


	// `changes` does not completely replace the current value.  It is merged into the current value.

	modify(changes: Object | any[]): void {
		let obj = this.get();
		modifyObject(obj, changes);
		this.set(obj);
	}


	// After calling this.remove(), both the key and value are no longer in storage.
	// If you want to re-insert the key and value in storage later, you must call this.set(value)

	remove(): void {
		this._storageType.removeItem(this.key);
	}


	getAsJSON(): string {
		// errorIfNotStringWithLength(this.key);
		let json = this._storageType.getItem(this.key);

		if (hasValue(json)) return json;

		else throw new Error('Requested item either does not exist, or its value is null');
	}


}

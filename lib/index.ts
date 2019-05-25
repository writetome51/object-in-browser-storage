import { errorIfNotObject } from 'error-if-not-object';
import { getObjectFromJSON } from 'get-object-from-json';
import { hasValue } from "@writetome51/has-value-no-value";
import { ItemInBrowserStorage } from "@writetome51/item-in-browser-storage";
import { modifyObject } from '@writetome51/modify-object';
import { notEmpty } from "@writetome51/is-empty-not-empty";


// Represents an object or array stored in the browser's `localStorage` or `sessionStorage`.
// The choice of `localStorage` or `sessionStorage` must be decided by a subclass using
// the `storageType` argument in the constructor.
// The item in storage is identified by a unique string `this.key`.

export abstract class ObjectInBrowserStorage extends ItemInBrowserStorage {


	constructor(
		storageType: Window['sessionStorage'] | Window['localStorage'],
		key = '',
		value: Object | any[] = undefined
	) {
		super(key);
		this._storageType = storageType;

		if (notEmpty(this.key) && hasValue(value)) this.set(value);
	}


	// Saves `value` in storage.  Replaces previous value, if any.

	set(value: Object | any[]): void {
		errorIfNotObject(value);
		let json = JSON.stringify(value);
		super.set(json);
	}


	get(): Object | any[] {
		let json = this.getAsJSON();
		return getObjectFromJSON(json);
	}


	// It's likely you'll sometimes want to keep the object as JSON after retrieving it.

	getAsJSON(): string {
		return super.get(); // For this class, it's expected to return JSON string.
	}


	// `changes` does not replace the current value.  It is merged into the current value.

	modify(changes: Object | any[]): void {
		let obj = this.get();
		modifyObject(obj, changes);
		this.set(obj);
	}


}




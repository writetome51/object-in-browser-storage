import { getObjectFromJSON } from 'get-object-from-json';
import { ItemInBrowserStorage } from "@writetome51/item-in-browser-storage";
import { modifyObject } from '@writetome51/modify-object';


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


	// Saves `value` in storage.  Replaces previous value, if any.

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


	// It's likely you'll sometimes want to keep the object as JSON after retrieving it.

	getAsJSON(): string {
		return super.get(); // For this class, it's expected to return JSON string.
	}


}

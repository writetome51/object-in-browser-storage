import { errorIfNotObject } from 'error-if-not-object';
import { getObjectFromJSON } from 'get-object-from-json';
import { ItemInBrowserStorage } from "@writetome51/item-in-browser-storage";
import { modifyObject } from '@writetome51/modify-object';
import { hasValue, noValue } from '@writetome51/has-value-no-value';


/*******************************
 This class' difference from its parent:

 Represents an object or array stored in the browser's `localStorage` or `sessionStorage`.
 Overrides `this.set()` and `this.get()` to specifically handle an object or array.

 Adds methods `this.getAsJSON()` and `this.modify()`.
 *******************************/

export abstract class ObjectInBrowserStorage extends ItemInBrowserStorage {


	// Saves `value` in storage.  Replaces previous value, if any.

	set(value: Object | any[]): void {
		errorIfNotObject(value);
		let json = JSON.stringify(value);
		super.set(json);
	}


	get(): Object | any[] {
		let json = this.getAsJSON();
		if (hasValue(json)) return getObjectFromJSON(json);
		else return;
	}


	// It's likely you'll sometimes want to keep the object as JSON after retrieving it.

	getAsJSON(): string {
		return super.get(); // For this class, it's expected to return JSON string.
	}


	// `changes` does not replace the current value.  It is merged into the current value.

	modify(changes: Object | any[]): void {
		let obj = this.get();
		if (noValue(obj)) throw new Error(`Item not found in storage`);
		modifyObject(obj, changes);
		this.set(obj);
	}


}

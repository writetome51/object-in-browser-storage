import { errorIfNotObject } from 'error-if-not-object';
import { getObjectFromJSON } from 'get-object-from-json';
import { ItemInBrowserStorage } from "@writetome51/item-in-browser-storage";
import { modifyObject } from '@writetome51/modify-object';
import { noValue } from '@writetome51/has-value-no-value';


/*******************************
 This class' difference from its parent:

 Represents an object or array stored in the browser's `localStorage` or `sessionStorage`.
 Overrides `this.set()` and `this.get()` to specifically handle an object or array.

 Adds methods `this.getAsJSON()` and `this.modify()`.
 *******************************/

export abstract class ObjectInBrowserStorage extends ItemInBrowserStorage {


	// Saves `value` in storage.  Replaces previous value, if any.

	set(value: object | any[]): void {
		errorIfNotObject(value);
		let json = JSON.stringify(value);
		super.set(json);
	}


	get(): object | any[] {
		let json = this.getAsJSON();
		return getObjectFromJSON(json);
	}


	getAsJSON(): string {
		let json = super.get(); // For this class, it's expected to return JSON string.
		if (noValue(json)) throw new Error(`Item not found in storage`);
		else return json;
	}


	// `changes` does not replace the current value.  It is merged into the current value.

	modify(changes: object | any[]): void {
		let obj = this.get();
		modifyObject(obj, changes);
		this.set(obj);
	}


}

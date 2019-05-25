import { ItemInBrowserStorage } from "@writetome51/item-in-browser-storage";


/*******************************
 This class' difference from its parent:

 Represents an object or array stored in the browser's `localStorage` or `sessionStorage`.
 Overrides `this.set()` and `this.get()` to specifically handle an object or array.

 Adds methods `this.getAsJSON()` and `this.modify()`.
 *******************************/

export declare abstract class ObjectInBrowserStorage extends ItemInBrowserStorage {

	constructor(
		storageType: Window['sessionStorage'] | Window['localStorage'],
		key?: string,
		value?: Object | any[]
	);


	set(value: Object | any[]): void;


	get(): Object | any[];


	getAsJSON(): string;


	modify(changes: Object | any[]): void;

}

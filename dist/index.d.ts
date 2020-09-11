import { ItemInBrowserStorage } from "@writetome51/item-in-browser-storage";


/*******************************
 This class' difference from its parent:

 Represents an object or array stored in the browser's `localStorage` or `sessionStorage`.
 Overrides `this.set()` and `this.get()` to specifically handle an object or array.

 Adds methods `this.getAsJSON()` and `this.modify()`.
 *******************************/

export declare abstract class ObjectInBrowserStorage extends ItemInBrowserStorage {

	set(value: object | any[]): void;


	get(): object | any[];


	getAsJSON(): string;


	modify(changes: object | any[]): void;

}

import { ItemInBrowserStorage } from "@writetome51/item-in-browser-storage";


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

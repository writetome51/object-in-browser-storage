export declare abstract class ObjectInBrowserStorage {

	key: string;
	protected _storageType: Window['sessionStorage'] | Window['localStorage'];

	private __key;


	constructor(__key?: string, value?: Object | any[]);


	set(value: Object | any[]): void;


	get(): Object | any[];


	modify(changes: Object | any[]): void;


	remove(): void;


	getAsJSON(): string;

}

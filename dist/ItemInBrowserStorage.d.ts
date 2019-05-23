export declare abstract class ObjectInBrowserStorage {
    private __key;
    protected _storageType: Window['sessionStorage'] | Window['localStorage'];
    constructor(__key?: string, value?: Object | any[]);
    key: string;
    set(value: Object | any[]): void;
    get(): Object | any[];
    modify(changes: Object | any[]): void;
    remove(): void;
    getAsJSON(): string;
}

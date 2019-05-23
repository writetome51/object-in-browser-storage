import { ObjectInBrowserStorage } from './index';


export class TestObjectInLocalStorage extends ObjectInBrowserStorage {

	constructor(key = '', value: Object | any[] = {}) {
		super(key = '', value);

		this._storageType = localStorage;
	}

	set key(v){}
}


let obj = new TestObjectInLocalStorage(
	'person',
	{first: 'steve', last: 'thompson'}
);

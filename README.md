# ObjectInBrowserStorage

An abstract TypeScript/JavaScript class representing an object or array  
stored in the browser's `localStorage` or `sessionStorage`. The choice  
of `localStorage` or `sessionStorage` must be decided by a subclass using  
`this._storageType`. The item in storage is identified by a unique string  
`this.key`.

Note: this only works when run in a browser environment.

## Constructor

<details>
<summary>view constructor</summary>

```ts
constructor(
    key? = ''  // gets assigned to this.key
)
```
</details>


## Properties
<details>
<summary>view properties</summary>

```ts
key: string // the unique ID for the stored object or array.

protected  _storageType: sessionStorage | localStorage
    
className: string // read-only
```
</details>


## Methods
<details>
<summary>view methods</summary>

```ts
set(value: Object | any[]): void
    // Saves item `value` in storage.  Replaces previous value, if any.

get(): Object | any[]
    // Returns the stored object or array.

getAsJSON(): string
    // Returns stored object or array as JSON.

modify(changes: Object | any[]): void
    // `changes` does not replace the current value.  It is merged into the current value.

remove(): void
    // After calling this, both the key and value are no longer in
    // storage.  You can store the item again by calling this.set(value)
```
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
```ts
protected   _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
	   ) : void
    /*********************
    Use this method when you have a bunch of properties that need getter and/or 
    setter functions that all do the same thing. You pass in an array of string 
    names of those properties, and the method attaches the same getter and/or 
    setter function to each property.
    IGetterSetterConfiguration is this object:
    {
        get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function,
	    // get_setterFunction takes the property name as first argument and 
	    // returns the setter function.  The setter function must take one 
	    // parameter and return void.
	    
        get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function
	    // get_getterFunction takes the property name as first argument and 
	    // returns the getter function.  The getter function must return something.
    }
    *********************/ 
	   
	   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.


protected   _errorIfPropertyHasNoValue(
                property: string, // can contain dot-notation, i.e., 'property.subproperty'
                propertyNameInError? = ''
            ) : void
    // If value of this[property] is undefined or null, it triggers fatal error:
    // `The property "${propertyNameInError}" has no value.`
```
</details>


## Usage Example
<details>
<summary>view example</summary>

```ts
export class ObjectInLocalStorage extends ObjectInBrowserStorage {

    constructor(
        key = '',
        value: Object | any[] = {}
    ) {
        super(key);
		
        this._storageType = localStorage;
        if ((this.key !== '') && (value !== undefined)) this.set(value);
    }

}
```
</details>



## Inheritance Chain

ObjectInBrowserStorage<--[ItemInBrowserStorage](https://github.com/writetome51/item-in-browser-storage#iteminbrowserstorage)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## Installation

```bash
npm i  @writetome51/object-in-browser-storage
```

## Loading
```ts
// If using TypeScript:
import {ObjectInBrowserStorage} from '@writetome51/object-in-browser-storage';
// If using ES5 JavaScript:
var ObjectInBrowserStorage = 
    require('@writetome51/object-in-browser-storage').ObjectInBrowserStorage;
```

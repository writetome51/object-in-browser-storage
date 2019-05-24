# ObjectInBrowserStorage

An abstract TypeScript/JavaScript class representing an object or array  
stored in the browser's `localStorage` or `sessionStorage`. The item in  
storage is identified by a unique string `this.key` and is stored as a  
key/value pair. You can create a different class instance for each item  
you want to store. Or you can create a single instance and simply change  
the value of `this.key` when you want to create/access a different item.

Note: this only works when run in a browser environment.

## Constructor

<details>
<summary>view constructor</summary>

```ts
constructor(
    key? = '', // gets assigned to this.key
    value? = undefined
)
    // When the constructor is called, if `key` is a string longer than
    // zero characters and `value` is not undefined or null, the key/value pair 
    // are immediately saved in storage.
```
</details>


## Properties
<details>
<summary>view properties</summary>

```ts
key: string // the unique ID for the stored object or array.

protected  _storageType: Window['sessionStorage'] | Window['localStorage'];
    // When assigning the value, there's no need to mention Window.
    // Example:
    // this._storageType = sessionStorage;
```
</details>


## Methods
<details>
<summary>view methods</summary>

```ts
set(value: Object | any[]): void
    // Saves `value` in storage.  Replaces previous value, if any.

get(): Object | any[]
    // Returns the stored object or array.

getAsJSON(): string
    // Returns stored object or array as JSON.

modify(changes: Object | any[]): void
    // `changes` does not replace the current value.  It is merged into the current value.

remove(): void
    // Removes the key/value pair from storage.  If you want to re-insert 
    // the key and value in storage later, you must call this.set(value)
```
</details>


## Inheritance Chain

ObjectInBrowserStorage<--[ItemInBrowserStorage](https://github.com/writetome51/item-in-browser-storage#iteminbrowserstorage)


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

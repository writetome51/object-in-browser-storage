# ObjectInBrowserStorage

An abstract TypeScript/JavaScript class representing an object or array  
stored in the browser's `localStorage` or `sessionStorage`. The choice of  
`localStorage` or `sessionStorage` must be decided by a subclass using  
the `storageType` argument in the constructor. The stored object/array is  
identified by a unique string `this.key` and stored as a `key:value` pair.  
When you call the constructor, if the `key` argument is a string that  
isn't empty and the `value` argument is not undefined or null, the item  
will be stored immediately. Else, the item won't be stored until you call  
`this.set()`.

Note: this only works when run in a browser environment.

## Constructor

<details>
<summary>view constructor</summary>

```ts
constructor(
    storageType: sessionStorage | localStorage,

    key? = '',
        // assigned to this.key

    value?: Object | any[]  = undefined
)
    // If `key` is not an empty string and `value` is defined, the item is 
    // stored immediately.
```
</details>


## Properties
<details>
<summary>view properties</summary>

```js
key: string // the unique ID needed to access the stored object/array.
```
</details>


## Methods
<details>
<summary>view methods</summary>

```js
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
</details>


## Usage Example
<details>
<summary>view example</summary>

```ts
export class ObjectInLocalStorage extends ObjectInBrowserStorage {

    constructor(
        key = '',
        value: Object | any[] = undefined
    ) {
        super(localStorage, key, value);
    }

}

let storedUser = new ObjectInLocalStorage(
    'user_1',
    {username: 'jimbowie2000', password:'!@#$%^'}
);

// Later...
storedUser.modify({username:'davidbowie2000'});

// Later...
access_something_requiring_user_password(
    storedUser.get().password
);

// Later...
storedUser.remove();
```
</details>



## Inheritance Chain

ObjectInBrowserStorage<--[ItemInBrowserStorage](https://github.com/writetome51/item-in-browser-storage#iteminbrowserstorage)


## Installation

```bash
npm i  @writetome51/object-in-browser-storage
```

## Loading
```js
import {ObjectInBrowserStorage} from '@writetome51/object-in-browser-storage';
```

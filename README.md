# ObjectInBrowserStorage

An abstract class representing an object or array stored in the browser's  
localStorage or sessionStorage. The item in storage is identified by a  
unique string `this.key`. You can create a different class instance for  
each item you want to store. Or you can create a single instance and  
simply change the value of `this.key` when you want to create/access a  
different item.

## Examples
```

```

## Installation

```bash
npm install @writetome51/class-name
```

## Loading
```ts
// If using TypeScript:
import {} from '@writetome51/';
// If using ES5 JavaScript:
var className = require('@writetome51/class-name').className;
```

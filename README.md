# BrowserStorageHelper

It re-orders <b>objects</b> alphabetically by <b>property</b>.  
It coerces each property value into a string before doing the sorting.  
The values of the properties are not modifed.  
NOTE:  you can use dot-notation in the property string.

## Examples
```
let roster = [
	{name: 'Rod Carmichael', group: 'D'},
	{name: 'Todd Garfunkel', group: 'B'},
	{name: 'Rachel Green', group: 'E'},
	{name: 'Mick Jagger', group: 'A'},
	{name: 'Charlie Brown', group: 'D'},
	{name: 'Flip Mavunkel', group: 'C'},
];

alphabetizeByProperty('group', roster);

/************
roster is now
[
	{name: 'Mick Jagger', group: 'A'},
	{name: 'Todd Garfunkel', group: 'B'},
	{name: 'Flip Mavunkel', group: 'C'},
	{name: 'Rod Carmichael', group: 'D'},
	{name: 'Charlie Brown', group: 'D'},
	{name: 'Rachel Green', group: 'E'}
]
************/


// You can include dot-notation to alphabetize by a property of a property:

roster = [
	{player: {name: 'Rod'}},
	{player: {name: 'Mick'}},
	{player: {name: 'Charlie'}},
	{player: {name: 'Todd'}},
	{player: {name: 'Flip'}},
	{player: {name: 'Rachel'}},
	{player: {name: 'Monica'}},
];

alphabetizeByProperty('player.name', roster);

/************
roster is now
[ 
    { player: { name: 'Charlie' } },
    { player: { name: 'Flip' } },
    { player: { name: 'Mick' } },
    { player: { name: 'Monica' } },
    { player: { name: 'Rachel' } },
    { player: { name: 'Rod' } },
    { player: { name: 'Todd' } }
]
************/


// What about alphabetizing characters with diacriticals?

roster =  [
	{name: 'Rod Carmichael', group: 'Ò'},
	{name: 'Todd Garfunkel', group: 'Í'},
	{name: 'Rachel Green', group: 'I'},
	{name: 'Mick Jagger', group: 'Å'},
	{name: 'Charlie Brown', group: 'O'},
	{name: 'Flip Mavunkel', group: 'A'},
];

alphabetizeByProperty('group', roster);

/************
roster is now
[
    { name: 'Flip Mavunkel', group: 'A' },
    { name: 'Mick Jagger', group: 'Å' },
    { name: 'Rachel Green', group: 'I' },
    { name: 'Todd Garfunkel', group: 'Í' },
    { name: 'Charlie Brown', group: 'O' },
    { name: 'Rod Carmichael', group: 'Ò' } 
]
************/

// What if some of the objects don't have a value for that property,
// or the property is missing?

roster =  [
	{name: 'Rod Carmichael', group: undefined},
	{name: 'Mick Jagger', group: 'Å'},
	{name: 'Charlie Brown', group: 'ZZZ'},
	{name: 'Farley Brown', group: 'Z'},
	{name: 'Rachel Green'},
	{name: 'Charlie Brown', group: null},
	{name: 'Todd Garfunkel', group: undefined},
	{name: 'Flip Mavunkel', group: 'A'},
];

alphabetizeByProperty('group', roster);

/************
roster is now
[
    { name: 'Flip Mavunkel', group: 'A' },
    { name: 'Mick Jagger', group: 'Å' },
    { name: 'Charlie Brown', group: null }, // null is treated as a string
    { name: 'Rod Carmichael', group: undefined }, // undefined is treated as a string
    { name: 'Rachel Green' }, // missing property is treated as 'undefined'
    { name: 'Todd Garfunkel', group: undefined },
    { name: 'Farley Brown', group: 'Z' },
    { name: 'Charlie Brown', group: 'ZZZ' } 
]
************/
```

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/alphabetize-by-property
```
## Loading
```
// If using TypeScript:
import {alphabetizeByProperty} from '@writetome51/alphabetize-by-property';
// If using ES5 JavaScript:
var alphabetizeByProperty = 
	require('@writetome51/alphabetize-by-property').alphabetizeByProperty;
```
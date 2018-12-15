This project created using [Create React App](https://github.com/facebook/create-react-app).

## Steps to add the redux store.

### Step 1

1. `yarn add redux`
2. `yarn add react-redux`
3. `yarn add redux-thunk`
4. `yarn add redux-promise-middleware`

***3 and 4 are for async action.***

### Step 2

1. Add Action.
2. Add Reducer.
3. Add Store.

***Note :***  Source file contains example/demo.

### For Sync action in store.js

```javascript
    const store = createStore(rootReducer,
        window.devToolsExtension ? window.devToolsExtension() : f => f);
```

### For Async action in store.js

```javascript
const enhancers = [applyMiddleware(thunk, promiseMiddleware())];

if (window['__REDUX_DEVTOOLS_EXTENSION__']){
    enhancers.push(window['__REDUX_DEVTOOLS_EXTENSION__']());
}

const store = createStore(rootReducer, compose(...enhancers));
```

### Action.js

```javascript
import { createAction } from 'redux-actions';
import { FULFILLED, PENDING, REJECTED } from 'redux-promise-middleware';
import { getUsers } from '../services/users';
```

// Action Constants

```javascript
export const FETCH_USER = 'FETCH_USER';
```

// Async Action Creators

```javascript
export const FETCH*USER_PENDING = `\${FETCH_USER}*\${PENDING}`;

export const FETCH*USER_REJECTED = `\${FETCH_USER}*\${REJECTED}`;

export const FETCH*USER_FULFILLED = `\${FETCH_USER}*\${FULFILLED}`;

export const fetchUsers = createAction(FETCH_USER, getUsers);

```

### Reducer

```javascript

import { FETCH_USER_PENDING, FETCH_USER_FULFILLED } from '../action/users';

const INITIAL_STATE = { list: [], isLoading: false };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_USER_PENDING:
            return { ...state, isLoading: true };
        case FETCH_USER_FULFILLED:
            return { ...state, list: action.payload, isLoading: false };
        default: return state;
    }
}


```
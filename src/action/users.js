import { createAction } from 'redux-actions';
import { FULFILLED, PENDING, REJECTED } from 'redux-promise-middleware';

import { getUsers } from '../services/users';

// Action ko name
export const TOOGLE_MENU = 'TOOGLE_MENU';

// Action Constants
export const FETCH_USER = 'FETCH_USER';

// Async Action Creators
export const FETCH_USER_PENDING = `${FETCH_USER}_${PENDING}`;
export const FETCH_USER_REJECTED = `${FETCH_USER}_${REJECTED}`;
export const FETCH_USER_FULFILLED = `${FETCH_USER}_${FULFILLED}`;

export const fetchUsers = createAction(FETCH_USER, getUsers);

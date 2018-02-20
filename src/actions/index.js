import { ADD_POST } from '../constants/action-types';

export const addPost = post => ({ type: ADD_POST,
    payload: post});

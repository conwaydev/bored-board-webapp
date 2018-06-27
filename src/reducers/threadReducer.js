import * as types from '../constants/action-types';
import initialState from './initialState';

export default function threadReducer(state = initialState.threads, action) {
    switch(action.type) {
        case types.LOAD_THREADS_SUCCESS:
            return action.threads
        default:
            return state;
    }
}
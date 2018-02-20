import ThreadService from '../services/ThreadService';
import * as types from '../constants/action-types';

export function loadThreads() {
    return function(dispatch) {
        return ThreadService.getAllThreads().then(threads => {
            dispatch(loadThreadSuccess(threads));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadThreadSuccess(threads) {
    return {type: types.LOAD_THREADS_SUCCESS, threads};
}

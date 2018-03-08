import ThreadService from '../services/ThreadService';
import * as types from '../constants/action-types';

export function loadThreads() {
    return function(dispatch) {
        return ThreadService.getAllThreads().then(threads => {
            dispatch(loadThreadsSuccess(threads));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadThread(threadId) {
    return function(dispatch) {
        return ThreadService.getThread(threadId).then(thread => {
            dispatch(loadThreadSuccess(thread));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadThreadsSuccess(threads) {
    return {type: types.LOAD_THREADS_SUCCESS, threads};
}

export function loadThreadSuccess(thread) {
    return {type: types.LOAD_THREAD_SUCCESS, thread};
}

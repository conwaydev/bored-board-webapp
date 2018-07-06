import { threadConstants } from '../constants/action-types';
import initialState from './initialState';

export default function threadReducer(state = initialState.threads, action) {
    switch(action.type) {
        case threadConstants.LOAD_THREADS_SUCCESS:
            return action.threads
        case threadConstants.LOAD_THREAD_SUCCESS:
            return action.thread
        case threadConstants.LOAD_POSTS_SUCCESS:
            return action.posts
        default:
            return state;
    }
}

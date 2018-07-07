import ThreadService from '../services/ThreadService';
import { threadConstants } from '../constants/action-types';

export const threadActions = {
    loadThreads,
    loadThread,
    loadPosts,
    addPost
};

function loadThreads() {
    return function(dispatch) {
        return ThreadService.getAllThreads()
        .then(threads => {
            dispatch(loadThreadsSuccess(threads));
        }).catch(error => {
            throw(error);
        });
    };
}

function loadThread(threadId) {
    return function(dispatch) {
        return ThreadService.getThread(threadId)
        .then(thread => {
            dispatch(loadThreadSuccess(thread));
        }).catch(error => {
            throw(error);
        });
    };
}

function loadPosts(threadId) {
    return function(dispatch) {
        return ThreadService.getPosts(threadId)
        .then(posts => {
            dispatch(loadPostsSuccess(posts));
        }).catch(error => {
            throw(error);
        });
    };
}

function addPost(threadId, userId, post) {
    return function(dispatch) {
        return ThreadService.postPost(threadId, userId, post)
        .then(response => {
            dispatch(addPostSuccess(stubPost(response, threadId, userId, post)));
        }).catch(error => {
            throw(error);
        });
    }
}

function stubPost(response, threadId, userId, post) {
    let time = Date.now();
    let formatDate = new Date(time);
    return {
        Id: response.id,
        ThreadId: threadId,
        UserId: userId,
        Body: post,
        PostedAt: formatDate
    };
}

function loadThreadsSuccess(threads) {
    return { type: threadConstants.LOAD_THREADS_SUCCESS, threads };
}

function loadThreadSuccess(thread) {
    return { type: threadConstants.LOAD_THREAD_SUCCESS, thread };
}

function loadPostsSuccess(posts) {
    return { type: threadConstants.LOAD_POSTS_SUCCESS, posts };
}

function addPostSuccess(post) {
    return { type: threadConstants.ADD_POST, post };
}

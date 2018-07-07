import { threadConstants } from '../constants/action-types';
import initialState from './initialState';

export default function postsReducer(state = initialState.posts, action) {
    switch(action.type) {
        case threadConstants.LOAD_POSTS_SUCCESS:
            return action.posts
        case threadConstants.ADD_POST:
            let newArray = insertItem(state, action.post)
            return newArray;
        default:
            return state;
    }
}

function insertItem(array, action) {
    let newArray = array.slice();
    newArray.push(action);
    return newArray;
}

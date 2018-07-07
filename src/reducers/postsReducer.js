import { threadConstants } from '../constants/action-types';
import initialState from './initialState';

export default function postsReducer(state = initialState.posts, action) {
    switch(action.type) {
        case threadConstants.LOAD_POSTS_SUCCESS:
            return action.posts
        case threadConstants.ADD_POST:
            return Object.assign({}, state, {
                posts : state.concat({
                    Id: action.post.Id,
                    UserId: action.post.UserId,
                    ThreadId: action.post.ThreadId,
                    Body: action.post.Body,
                    PostedAt: action.post.PostedAt
                })
            });
        default:
            return state;
    }
}

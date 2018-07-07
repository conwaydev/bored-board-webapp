import { combineReducers } from 'redux';
import threads from './threadsReducer';
import thread from './threadReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
    threads,
    thread
})

export default rootReducer;
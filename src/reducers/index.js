import { combineReducers } from 'redux';
import threads from './threadReducer';

const rootReducer = combineReducers({
    threads
})

export default rootReducer;
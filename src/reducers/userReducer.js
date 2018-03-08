import * as types from '../constants/user-types';

let user = JSON.parse(localStorage.getItem('jwt'));
const initialState = user ? { loggedIn: true, user } : {};

export default function userReducer(state = initialState.user, action) {
    switch(action.type) {
        case types.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case types.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case types.LOGIN_FAILURE:
            return {};
        case types.LOGOUT:
            return {};
        default:
            return state;
    }
}

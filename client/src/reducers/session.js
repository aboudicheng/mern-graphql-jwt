import { SET_AUTH_USER } from '../constants/action_types'

const INITIAL_STATE = {
    authUser: null,
    loading: true
};

function sessionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_AUTH_USER: {
            return { authUser: action.authUser, loading: false };
        }
        default: return state;
    }
}

export default sessionReducer;
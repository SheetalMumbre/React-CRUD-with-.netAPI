import { ACTION_TYPES } from "../actions/dCandidate";

const INITIAL_STATE = {
    list:[],
}

export const dCandidate = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return{
                ...state,
                list: [...action.payload]
            }
    
        default:
            return state;
    }
}
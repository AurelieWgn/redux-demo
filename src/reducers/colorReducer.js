import {CHANGE_COLOR} from '../actions/actions-types';

const initialState = {
    color: "black"
}

export default function AuthentificationReducer(state = initialState, action) {


    switch(action.type) {

        case CHANGE_COLOR:
            return {
                ...state,
                color:  action.payload
            }
     
        default:
            return state;
    }
}

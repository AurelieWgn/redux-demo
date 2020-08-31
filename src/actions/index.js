import {ADD_ONE, DEL_ONE, CHANGE_COLOR} from './actions-types';

//Création des dispatchers à partir des types d'actions définis
export const addOne = (newNumber)=>{
    return function(dispatch) {
        dispatch({
            type: ADD_ONE,
            payload: newNumber
        });
    }
}

export const delOne = (newNumber)=>{
    return function(dispatch) {
        dispatch({
            type: DEL_ONE,
            payload: newNumber
        });
    }
}

export const changeColor = (newColor)=>{
    return function(dispatch) {
        dispatch({
            type: CHANGE_COLOR,
            payload: newColor
        });
    }
}
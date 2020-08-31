import {ADD_ONE, DEL_ONE} from '../actions/actions-types';

const initialState = {
    number: 0
}

//Définition des fonctions pour chaque type d'action 
//La fonction peu être défini dans le reduceur comme ici, mais il peut aussi être 
// défini dans le composant qui appelle le reduceur directement.
export default function AuthentificationReducer(state = initialState, action) {
    
    switch(action.type) {

        case ADD_ONE:
            return {
                ...state,
                number: state.number += action.payload
            }
        case DEL_ONE:
            return {
                ...state,
                number: state.number -= action.payload
            }

        default:
            return state;
    }
}
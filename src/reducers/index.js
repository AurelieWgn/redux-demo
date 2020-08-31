import { combineReducers } from "redux";
import NumberReducer from './numberReducer';
import ColorReducer from './colorReducer';

//Rassemblement de tous les reduceurs du projets
const rootReducer = combineReducers({
    number: NumberReducer,
    color: ColorReducer
});

export default rootReducer;
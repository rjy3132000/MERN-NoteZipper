import noteReducers from "./reducers";
import { combineReducers } from "redux";

let rootReducers = combineReducers({
    note : noteReducers,
});

export default rootReducers;
import rootReducers from "./Reducers";
import { createStore } from "redux";

let store = createStore(rootReducers);

export default store;
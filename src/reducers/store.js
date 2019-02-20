import {createStore, combineReducers} from "redux";
import testReducer from "./testReducer";

const store = createStore(combineReducers({testReducer}));

export default store;
//window.store = store;   // for debugging 
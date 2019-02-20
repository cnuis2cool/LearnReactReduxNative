import {createStore, combineReducers} from "redux";
import testReducer from "./testReducer";

export default createStore(combineReducers({testReducer}));
//window.store = store;   // for debugging
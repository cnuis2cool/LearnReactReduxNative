import {createStore, combineReducers} from "redux";
import testReducer from "./testReducer";

const store = createStore(combineReducers({testReducer}));

//window.store = store;   // for debugging 

store.subscribe(() => {
    // window.console.clear();
    // console.table(store.getState().testReducer.questions);
});

export default store;

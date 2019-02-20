const testReducerInitialState = {questions: []};

// reducer is alwasys called by store, when dispatch (action) is called.
const testReducer = (state = testReducerInitialState, {type, payload}) => {
    switch(type) {
        case "ADD_QUESTION":
            return {questions: [...state.questions, payload]};   // new object returned as state object to store
        default:
            return state;
    }
}

export default testReducer;
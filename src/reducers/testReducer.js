const testReducerInitialState = {questions: []};

export default testReducer = (state = testReducerInitialState, {type, payload}) => {
    switch(type) {
        case "ADD_QUESTION":
            return {questions: [...state.questions, payload]};   // new object returned as state object to store
        default:
            return state;
    }
}
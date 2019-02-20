const testReducerInitialState = {questions: []};

// reducer is alwasys called by store, when dispatch (action) is called.
const testReducer = (state = testReducerInitialState, {type, payload}) => {
    switch(type) {
        case "ADD_QUESTION":
            return {questions: [...state.questions, payload]};   // new object returned as state object to store

        case "SET_USER_OPTION":
        {
            return {
                questions: state.questions.map(question =>
                    {
                        if(question == payload.question) {
                            return {...question, userOption: payload.userOption};
                        } else {
                            return question;
                        }
                    }
                )
            };
        }

        default:
            return state;
    }
}

export default testReducer;
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

        case "SET_STATEMENT":
        {
            return {
                questions: state.questions.map(question =>
                    {
                        if(question == payload.question) {
                            return {...question, statement: payload.statement};
                        } else {
                            return question;
                        }
                    }
                )
            };
        }

        case "SET_OPTION1":
        {
            return {
                questions: state.questions.map(question =>
                    {
                        if(question == payload.question) {
                            return {...question, op1: payload.op1};
                        } else {
                            return question;
                        }
                    }
                )
            };            
        }

        case "SET_OPTION2":
        {
            return {
                questions: state.questions.map(question =>
                    {
                        if(question == payload.question) {
                            return {...question, op2: payload.op2};
                        } else {
                            return question;
                        }
                    }
                )
            };            
        }

        case "SET_OPTION3":
        {
            return {
                questions: state.questions.map(question =>
                    {
                        if(question == payload.question) {
                            return {...question, op3: payload.op3};
                        } else {
                            return question;
                        }
                    }
                )
            };            
        }

        case "SET_OPTION4":
        {
            return {
                questions: state.questions.map(question =>
                    {
                        if(question == payload.question) {
                            return {...question, op4: payload.op4};
                        } else {
                            return question;
                        }
                    }
                )
            };            
        }

        case "SET_CORRECT_ANSWER":
        {
            return {
                questions: state.questions.map(question =>
                    {
                        if(question == payload.question) {
                            return {...question, correct: payload.correct};
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
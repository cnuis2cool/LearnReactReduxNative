
/************** Action Helpers for dispatching Actions ************/

export const addQuestion = (statement, op1, op2, op3, op4, correct) => 
                                ({
                                    type: "ADD_QUESTION", 
                                    payload: {statement, op1, op2, op3, op4, correct}
                                });

export const setUserOption = (userOption, question) => 
                                ({
                                    type: "SET_USER_OPTION",
                                    payload: {userOption, question}
                                });

export const setStatement = (statement, question) => 
                                ({
                                    type: "SET_STATEMENT",
                                    payload: {statement, question}
                                });

export const setOp1 = (op1, question) => 
                                ({
                                    type: "SET_OPTION1",
                                    payload: {op1, question}
                                });

export const setOp2 = (op2, question) => 
                                ({
                                    type: "SET_OPTION2",
                                    payload: {op2, question}
                                });

export const setOp3 = (op3, question) => 
                                ({
                                    type: "SET_OPTION3",
                                    payload: {op3, question}
                                });

export const setOp4 = (op4, question) => 
                                ({
                                    type: "SET_OPTION4",
                                    payload: {op4, question}
                                });

export const setCorrectAnswer = (correct, question) => 
                                ({
                                    type: "SET_CORRECT_ANSWER",
                                    payload: {correct, question}
                                });                                                                                                

/******************************************************************/

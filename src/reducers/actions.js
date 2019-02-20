
/************** Action Helpers for dispatching Actions ************/

export const addQuestion = (statement, op1, op2, op3, op4, correct) => ({type: "ADD_QUESTION", payload: {statement, op1, op2, op3, op4, correct}})

/******************************************************************/

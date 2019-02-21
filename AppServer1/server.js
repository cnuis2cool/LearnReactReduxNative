const questions = [
    {statement: "AAA", op1: "A1", op2: "A2", op3: "A3", op4: "A4", correct: 2},
    {statement: "BBB", op1: "B1", op2: "B2", op3: "B3", op4: "B4", correct: 3},
    {statement: "CCC", op1: "C1", op2: "C2", op3: "C3", op4: "C4", correct: 3},
    {statement: "DDD", op1: "D1", op2: "D2", op3: "D3", op4: "D4", correct: 1}
];

// Restful Service

const ex = require("express");

const cors = require("cors");

const ws = ex();    // Create web server

ws.use(cors()); // Middleware; intercepts requests

ws.listen(3050);    // Web server listens on port 3050

ws.use((request, response, next) => {
    setTimeout(() => {next()}, 2000)
});

ws.get ("/questions", (request, response) => {
    response.json(questions);
});
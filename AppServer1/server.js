const questions = [
    {statement: "AAA", op1: "A1", op2: "A2", op3: "A3", op4: "A4", correct: 2},
    {statement: "BBB", op1: "B1", op2: "B2", op3: "B3", op4: "B4", correct: 3},
    {statement: "CCC", op1: "C1", op2: "C2", op3: "C3", op4: "C4", correct: 3},
    {statement: "DDD", op1: "D1", op2: "D2", op3: "D3", op4: "D4", correct: 1}
];

const customers = [
    {id: 1, name: 'A1'},
    {id: 2, name: 'A2'},
    {id: 3, name: 'A3'},
    {id: 4, name: 'A4'},
    {id: 5, name: 'A5'},
    {id: 6, name: 'A6'},
    {id: 7, name: 'A7'}
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

ws.get ("/customers", (request, response) => {
    response.json(customers);
});
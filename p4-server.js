const {data} = require("./p4-data");
const {getQuestions} = require("./p4-module");
const {getAnswers} = require("./p4-module");
const {getQuestion} = require("./p4-module");
const {getAnswer} = require("./p4-module");
const {getQuestionAnswer} = require("./p4-module");
const {getQuestionsAnswers} = require("./p4-module");
const fastify = require("fastify")();
const listenIP = 'localhost';
const listenPort = 8080;

fastify.get("/cit/question", (request, reply) => {
    reply
    .code(200)
    .header('Content-Type', 'text/html; charset=utf-8')
    .send(JSON.stringify({
        error: "",
        statusCode: 200,
        questions: getQuestions()
    }));
});

fastify.get("/cit/answer", (request, reply) => {
    reply
    .code(200)
    .header('Content-Type', 'text/html; charset=utf-8')
    .send(JSON.stringify({
        error: "",
        statusCode: 200,
        answers: getAnswers()
    }));
})

fastify.get("/cit/questionanswer", (request, reply) => {
    reply
    .code(200)
    .header('Content-Type', 'text/html; charset=utf-8')
    .send(JSON.stringify({
        error: "",
        statusCode: 200,
        questions_answers: getQuestionsAnswers()
    }));
})

// add if statement that shows errors 
fastify.get("/cit/question/:number", (request, reply) => {
    let {number} = request.params;
    number = parseInt(number);
    let statCode; 
    if (getQuestion(number).error === "") {
        statCode = 200
    } else {
        statCode = 404
    }
    reply
    .code(200)
    .header('Content-Type', 'application/JSON; charset=utf-8')
    .send(JSON.stringify({
        error: getQuestion(number).error,
        statusCode: statCode,
        question: getQuestion(number).question,
        number: number
    }))
});

fastify.get("/cit/answer/:number", (request, reply) => {
    let {number} = request.params;
    number = parseInt(number);
    let statCode; 
    if (getAnswer(number).error === "") {
        statCode = 200
    } else {
        statCode = 404
    }
    reply
    .code(200)
    .header('Content-Type', 'application/JSON; charset=utf-8')
    .send(JSON.stringify({
        error: getAnswer(number).error,
        statusCode: statCode,
        answer: getAnswer(number).answer,
        number: number
    }))
});



fastify.get("/cit/questionanswer/:number", (request, reply) => {
    let {number} = request.params;
    number = parseInt(number);
    let statCode; 
    if (getQuestionAnswer(number).error === "") {
        statCode = 200
    } else {
        statCode = 404
    };
    reply
    .code(200)
    .header('Content-Type', 'application/JSON; charset=utf-8')
    .send(JSON.stringify({
        error: getQuestionAnswer(number).error,
        statusCode: statCode,
        question: getQuestionAnswer(number).question,
        answer: getQuestionAnswer(number).answer,
        number: number
    }))
});


fastify.get("*", (request, reply) => {
    reply
    .code(404)
    .header('Content-Type', 'text/html; charset=utf-8')
    .send(JSON.stringify({
        error: "Route not found",
        statusCode: 404
    }))
});

fastify.listen(listenPort, listenIP, (err, address) => {
    console.log(listenPort);
    console.log(listenIP);
    console.log(address);
});
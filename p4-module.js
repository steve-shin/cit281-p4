const {data} = require("./p4-data");

function getQuestions() {
    const quest = [];
    for (let index = 0; index < data.length; index++) {
        quest.push(data[index].question)
    }
    return quest
}

console.log(getQuestions())

function getAnswers() {
    const answ = [];
    for (let index = 0; index < data.length; index++) {
        answ.push(data[index].answer)
    }
    return answ
}
console.log(getAnswers())

function getQuestionsAnswers() {
    //let realData = [...data];
    const questAnsw = [];

    for (let index = 0; index < data.length; index++) {
        let x = data[index];
        questAnsw.push(x)
    };
    return questAnsw
}
console.log(getQuestionsAnswers())

function getQuestion(number="") {
    number = parseInt(number);
    // const question = data[number - 1].question;
    if (Number.isInteger(number) === false) {
        return {
            error: "Question number must be an integer",
            question: "",
            number: ""
        }
    } else if (number < 1) {
        return {
            error: "Question number must be >= 1",
            question: "",
            number: ""
        }
    } else if (number > data.length) {
        return {
            error: `Question number must be less than the number of questions (${data.length})`,
            question: "",
            number: ""
        }
    } else {
        return {
            error: "",
            question: data[number - 1].question,
            number: number,
        }
    }
};

// console.log(getQuestion("hello"))

function getAnswer(number="") {
    number = parseInt(number);
    // const answer = data[number - 1].answer;
    if (Number.isInteger(number) === false) {
        return {
            error: "Answer number must be an integer",
            answer: "",
            number: ""
        }
    } else if (number < 1) {
        return {
            error: "Answer number must be >= 1",
            answer: "",
            number: ""
        }
    } else if (number > data.length) {
        return {
            error: `Answer number must be less than the number of questions (${data.length})`,
            answer: "",
            number: ""
        }
    } else {
        return {
            error: "",
            answer: data[number - 1].answer,
            number: number,
        }
    }
};
// console.log(getAnswer(2))

function getQuestionAnswer(number=""){
    number = parseInt(number);
    // const question = data[number - 1].question;
    // const answer = data[number-1].answer;
    if (Number.isInteger(number) === false) {
        return {
            error: "Question number must be an integer",
            question: "",
            number: ""
        }
    } else if (number < 1) {
        return {
            error: "Question number must be >= 1",
            question: "",
            number: ""
        }
    } else if (number > data.length) {
        return {
            error: `Question number must be less than the number of questions (${data.length})`,
            question: "",
            number: ""
        }
    } else {
        return {
            error: "",
            question: data[number - 1].question,
            answer: data[number - 1].answer,
            number: number,
        }
    }
};
// console.log(getQuestionAnswer(0))
// console.log(getQuestionAnswer(3))
// console.log(getQuestionAnswer(4))
// console.log(getQuestionAnswer("hello"))

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = true;
  const testGetAs = true;
  const testGetQsAs = true;
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = true;

// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }


module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
}


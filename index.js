const readlineSync = require("readline-sync");
const chalk = require('chalk');

const myName = readlineSync.question("Enter Your Name ");

let score = 0;

var highScores = [
  {
    name:"Sujit",
    score:5
  },
  {
    name: "Anup",
    score: 4
  }
]

console.log("Welcome " + myName)

console.log("(ONLY ENTER THE OPTION NUMBER)")


function play(question, answer) {
  const userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right")
    score = score + 1;
    console.log("Current Score : " + score)
  }
  else {
    console.log("wrong")
    score = score - 1;
    console.log("Current Score : " + score)
  }
  console.log("---------------")
}

let questions = [{
  question: `
  Who is the heighest run scorer in this IPL 2021?
  1)sikhar dhawan
  2)kl rahul
  3)faf du plessis
  `,
  answer: "1"
},
{
  question: `
  Who is the heighest wicket taker in this IPL 2021?
  1)avesh khan
  2)rashid khan
  3)hv patel
  `,
  answer: "3"
},
{
  question: `
  Best catches taken by whom in this IPL 2021?
  1)sikhar dhawan
  2)ravindra jadeja
  3)deepak hooda
  `,
  answer: "2"
},
{
  question: `
  Most valuable player in IPL 2021?
  1)glenn maxwell
  2)jhye richardson
  3)chris morris
  `,
  answer: "3"
},
{
  question: `
  Best economy bowler in IPL 2021?
  1)krunal pandya
  2)moeen ali
  3)deepak chahar
  `,
  answer: "2"
},
]

for (let i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}


function showScores() {
	console.log('Awesome! You Scored: ', score);
	highScores.map(score => console.log(score.name, ' : ', score.score));
}

showScores();

if(score > 2){
  console.log("You pass the quiz test")
} else {
  console.log("Re-take a quiz")
}
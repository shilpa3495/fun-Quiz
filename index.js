var readlineSync = require('readline-sync');
const chalk =require("chalk");
var question = chalk.bold.hex('#fed75f')("Please enter your name to play the KGF quiz:- ");
var userName = readlineSync.question(question).toUpperCase();

//welcome message

console.log('Welcome! ' + chalk.bold.hex('#e1121f')(userName));


var questionOne= {
  question:chalk.black.bold.bgHex('#8deb4b')(' 1:- '+' In which year first calendar was made? '),
  answer:1582,
};

var questionTwo= {
  question:chalk.black.bold.bgHex('#f14633')(' 2:- '+' Which is the only food that has no expiry date? '),
  answer:'Honey',
};
var questionThree= {
  question:chalk.black.bold.bgHex('#0f76b9')(' 3:- '+' Microsoft founded on which date? '),
  answer:1975,
};
var questionFour= {
  question:chalk.black.bold.bgHex('#6d5ce8')(' 4:- '+'  Dove is a symbol of? '),
  answer:'Peace',
};
var questionFive= {
  question:chalk.black.bold.bgHex('#ea9c0e')(' 5:- '+' Maximum spoken language in the world is? '),
  answer:'Mandarin',
};
var questionSix= {
  question:chalk.black.bold.bgHex('#f7042b')(' 6:- '+' What is the Name of Google’s Parent Company ?'),
  answer:'Alphabet Inc',
};

var questionSeven= {
  question:chalk.black.bold.bgHex('#0ac6f2')(' 7:- '+' The Capital of Canada is? '),
  answer:'Otawa',
};

var questionOneOption=[1582,1581,1400,1500];
var questionTwoOption=['Coconut Oil','Honey','Pasta','Almonds'];
var questionThreeOption=[1975,1966,1977,1988];
var questionFourOption=['Charity', 'Humanity', 'Love', 'Peace'];
var questionFiveOption=['Arabic','English','Mandarin','Spanish'];
var questionSixOption=['Amazon','Alphabet Inc','The Priceline Group','None of These'];
var questionSevenOption=['Birmingham', 'Geneva', 'Brussels', 'Otawa'];


var quizQuestions=[questionOne, questionTwo,questionThree,questionFour, questionFive, questionSix, questionSeven];

var quizOptions=[questionOneOption, questionTwoOption,questionThreeOption, questionFourOption, questionFiveOption, questionSixOption, questionSevenOption];

var score =0;

function quiz(index, answer){
  if(index === answer){
    console.log(chalk.bold.green("Yay, you are right"));
     score =score + 1
  }
  else{
    console.log(chalk.bold.red("Sorry, you are wrong"));
    score=score - 1;
  }
  return score;
}

for(var i=0; i<quizQuestions.length; i++){

  console.log("\n"+quizQuestions[i].question);

  index = readlineSync.keyInSelect(quizOptions[i]);

  console.log ("\n"+"you answer is:- " +quizOptions[i][index])

  quiz(quizQuestions[i].answer, quizOptions[i][index]);
}

//print the final score
console.log(chalk.bold.yellowBright('\n'+"Your Final score is " +score));
// end the final score


var highScoreUser={
  name:'Rajat',
  score:7,
};

var currentUser={
  name:'Adarsh',
  score:5,
};

if(highScoreUser.score>currentUser.score){
  console.log(chalk.bold.black.bgRed("\n"+" Winner is:- " + highScoreUser.name + " & Score is: "+highScoreUser.score + " "));
}
else{
  console.log(chalk.bold.black.bgRed("\n"+" Winner is:- " + currentUser.name + " & Score is: "+ currentUser.score+ " "));
}
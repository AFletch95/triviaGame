// jQuery variables
var $timer = $('#timer');
var $questionNumber = $('#questionNumber');
var $currentQuestion = $('#currentQuestion');
var $answer1Text = $('#answer1Text');
var $answer2Text = $('#answer2Text');
var $answer3Text = $('#answer3Text');
var $answer4Text = $('#answer4Text');
var $playButtonDiv = $('#playButtonDiv');



var questionIndex = 0;
var qSeconds = 5; //TODO: set to 8 when finished
var Aseconds = 5;
var correct = true;

class trivaQuestions {
  constructor(index,question,answer1,answer2,answer3,correctAnswer){
    this.index = index;
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.correctAnswer = correctAnswer;
  }
}

var question0 = new trivaQuestions(0,"The beaver is the national emblem of which country?",
"Iceland","Switzerland","Austria","Canada");
var question1 = new trivaQuestions(0,"What is the largest Ocean?",
"Alantic Ocean","Artic Ocean","Indian Ocean","Pacific Ocean");

var triviaArray = [question0,question1] //Array that contains all the questions.
var currentQuestionClass = triviaArray[questionIndex]; //holds the current question class

createPlayButton();

function randNum1_4(){
  return Math.floor(Math.random()*4)+1;
}
function randAnswerPlacement(obj){
  let rand = randNum1_4();
  console.log(rand);

  //Depending on what number rand is put the correct answer in that box

  if(rand == 1){
    $answer1Text.text(obj.correctAnswer);
    $answer2Text.text(obj.answer3);
    $answer3Text.text(obj.answer2);
    $answer4Text.text(obj.answer1);
    return rand;
  }
  
  if(rand == 2){
    $answer1Text.text(obj.answer3);
    $answer2Text.text(obj.correctAnswer);
    $answer3Text.text(obj.answer1);
    $answer4Text.text(obj.answer2);
    return rand;
  }
  
  if(rand == 3){
    $answer1Text.text(obj.answer1);
    $answer2Text.text(obj.answer2);
    $answer3Text.text(obj.correctAnswer);
    $answer4Text.text(obj.answer3);
    return rand;
  }
  
  if(rand == 4){
    $answer1Text.text(obj.answer3);
    $answer2Text.text(obj.answer1);
    $answer3Text.text(obj.answer2);
    $answer4Text.text(obj.correctAnswer);
    return rand;
  }
  else return false;
}
//DONE
function startTimer(){
  clearInterval(quizTimer);
  seconds = 7;
  var quizTimer = setInterval(showClock,1000);
  function showClock(){
    $timer.text(qSeconds+" Seconds remaining!")
    qSeconds--;
    if(qSeconds < 0){
      $timer.empty();
      clearInterval(quizTimer);
      showAnswer();
    }
  }
}
function showAnswer(){
  if(correct){
    $currentQuestion.text("Correct!");
    $answer1Text.text("The answer was:");
  }
  else {
    $currentQuestion.text("Wrong!");
    $answer1Text.text("The correct answer was:");
  }
  
  //display correct answer.
  $answer2Text.text(currentQuestionClass.correctAnswer);
  $answer3Text.empty();
  $answer4Text.empty();
}
//DONE
function createPlayButton(){
  console.log("hi")
  $playButtonDiv.append("<button>");
  $('button').text("Take the test!")
  $('button').attr("id","playButton");
  $('#playButton').attr("class","btn-lg btn-primary");
}
//DONE
$('#playButton').on("click",function(){ 
  $(this).remove();
  currentQuestionClass = triviaArray[questionIndex];  
  $currentQuestion.text(currentQuestionClass.question);
  randAnswerPlacement(currentQuestionClass);
  $questionNumber.text(questionIndex+1+" / 2");
  startTimer();
  // put timer function here
});
// jQuery variables
var $timer = $('#timer');
var $questionNumber = $('#questionNumber');
var $currentQuestion = $('#currentQuestion');
var $answer1Text = $('#answer1Text');
var $answer2Text = $('#answer2Text');
var $answer3Text = $('#answer3Text');
var $answer4Text = $('#answer4Text');
var $playButtonDiv = $('#playButton');

var questionIndex = 0;


var triviaArray = [question0,question1] //Array that contains all the questions.

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

function randNum1_4(){
  return Math.floor(Math.random()*4)+1;
}

function createPlayButton(){
  $playButtonDiv.append("<button id='playButton'>'Take the Test!</button>");
  $('#playButton').html("class","btn-lg btn-primary");

  $('#playButton').on("click",function(){

    $currentQuestion = triviaArray[questionIndex];
    trivaQuestions++;

    
    // put timer function here
  });
}
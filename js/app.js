//hide previous 'level' > append new 'level'

$(document).ready(function(){
  var randomNum;
  var level = 0;
  var question = level;
  var score = 0;
  var dupNum = [];
  var userAnswers = [];

  $("#level").append(question);
  $("#score").append(score);

  // starts the new game once button is clicked
  $(".start-game").click(function(){
    $(this).hide();
    qnaGenerator();
  });

  // generates a new level, pulling quiz variables by [level]
  function qnaGenerator(){
    //max number of answers to a question
    var maxAnswer = 3;
    var addedQ = "<p id=\"ques-" + level + "\">" + quiz[level].question + "</p>";
    var addedA = "";
    var counter = 0;
    question = level + 1;
    $("#level").append(question);
    $("#questions-section").append(addedQ);
    $("#questions-section").show();
    $("#answers-section").show();
    //need to reset counter of answers each time a question is generated
    for(counter; counter <= maxAnswer; counter++){
      addedA = "<label><input type=\"radio\" name=\"ques-" + level + "\" value=\""+ counter +"\">"+ quiz[level].answers[counter] +"</input></label><br>";
      $("#answers").append(addedA);
    }
  }

  //stores users answers / var
  $("#submit").click(function(event){
    event.preventDefault();
    var selected = $("input[name=ques-" + level + "]:checked").val();
    //makes sure that a radio button is selected
    if(selected == undefined){
      alert("please select an answer");
    }
    else{
      userAnswers.push(selected);
      console.log(userAnswers);
      answerCheck();
    }
  });

  $("#next-question").click(function(event){
    event.preventDefault();
    level += 1;
    console.log("level: " + level);
    clearIntermission();
    nextLevel();
  });

  //moves user to next question
  function nextLevel(){
    if(question < 5){
      $("#questions-section").empty();
      $("#answers").empty();
      $("#level").empty();
      qnaGenerator();
    }
    else {
      console.log("quiz is finished");
      hideQA();
      //finished the quiz
      //?? whats the point of using an anon function
      (function(){
        $('#intermission').show();
        $('#caption').append("Your final score is " + score);
        $('#next-question').hide();
        $('.start-game').show();
      })();
    }
  }

  function feedback(){
    $('#intermission').show();
    $('#caption').append(quiz[level].explain);
  }

  //checks if answer is correct
  //compare users answers to correct / function
  function answerCheck(){
    if(userAnswers[level] == quiz[level].correctAnswer){
      console.log("correct!");
      score += 1;
      $('#score').replaceWith("<p id='score'>" + score + "</p>");
      hideQA();
      feedback();
    }
    else{
      console.log("wrong");
      hideQA();
      feedback();
    }
  }

  function hideQA(){
    $('#questions-section').hide();
    $('#answers-section').hide();
  }

  function clearIntermission(){
    $('#image').empty();
    $('#caption').empty();
    $('#intermission').hide();
  }

  // holds all the quiz questions
  var quiz = [
    {
      question: 'Who is master of their domain?',
      answers: [
        'Jerry',
        'Elaine',
        'George',
        'Kramer'
      ],
      correctAnswer: 0,
      explain: "Although George is named the winner, he later confeses that he cheated, making Jerry the winner."
    },
    {
      question: 'What type of desert got Jerry sick?',
      answers: [
        'Marble Rye',
        'King Edwards Wedding cake',
        'Chocolate Babka',
        'Black & White Cookie'
      ],
      correctAnswer: 3,
      explain: "Before picking up a chocolate babka for a dinner party, Jerry eats a black & white cookie which the sides didn't get along."
    },
    {
      question: 'What kills Susan?',
      answers: [
        'Mango from Joe\'s fruit store',
        'Wedding Invitations',
        'Ring Ding & Pepsi',
        'Eclair from trash can'
      ],
      correctAnswer: 1,
      explain: "Susan licks the toxic adhesive from the cheap wedding invitaions george buys. Susan dies then George calls Marisa Tomei."
    },
    {
      question: 'Who is Jerrys favorite superhero?',
      answers: [
        'Spiderman',
        'Batman',
        'Superman',
        'Bizarro'
      ],
      correctAnswer: 2,
      explain: "Jerry has a statue of the Superman, The bizarro jerry episode is based on Bizarro Superman, and the real Jerry Seinfeld was featured in an American Express ad with a cartoon Superman."
    },
    {
      question: 'What is George\'s dream job?',
      answers: [
        'Bra salesman',
        'Architect',
        'Hand Model',
        'Marine Biologist'
      ],
      correctAnswer: 1,
      explain: "Out of all the many jobs George held over the series, being an Architect was his #1 dream job. cc: Art Vandelay"
    }];

});

//make a whole separate array to hold a temp value then add temp value to
//dupNum if there is duplicate
/*
checks for duplicates
function duplicateNum(){
  var dupLen = dupNum.length;
  for(var i = 0; i <= 4; i++){
    if(dupNum[i] === randomNum){
      console.log("pop");
      console.log(dupNum[i]);
    }
    else{
      console.log("okay");
      dupNum.push(randomNum);
    }
  }
 // --------------------------
  dupNum.push(randomNum);
  console.log(dupNum);
  for (var i = 0; i < dupNum.length; i++){
    console.log(randomNum + "::" + dupNum[i]);
    if (randomNum == dupNum[i]){
      dupNum.pop();
      console.log(dupNum);
    }
    else{
      console.log("duplicate" + dupNum[]);
      numGenerator();
    }
  }
  console.log(dupNum);
  console.log("-------------");
}
*/
/*
// generates a random number
function numGenerator(){
  randomNum = Math.floor((Math.random()*4)+1);
  console.log("random #: " + randomNum);
}
*/

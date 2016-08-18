//hide previous 'level' > append new 'level'
//store users answers / var
//compare users answers to correct /function

$(document).ready(function(){
  var randomNum;
  var dupNum = [];
  var level = 0;
  var question = level;
  var score = 0;

  $("#level").append(question);
  $("#score").append(score);

  // starts the new game once button is clicked
  $(".start-game").click(function(){
    $(this).hide();
    $("#level").append(question+1);
    // console.log(question+1);
    qnaGenerator();
  });

  // generates a new level, pulling quiz variables by [level]
  function qnaGenerator(){
    var maxAnswer = 3;
    var addedQ = "<p id=\"ques-" + level + "\">" + quiz[level].question + "</p>";
    var addedA = "";
    var counter = 0;
    console.log(addedQ);
    $("#questions-section").append(addedQ);
    $("#questions-section").show();
    $("#answers-section").show();

    //need to reset counter of answers each time a question is generated
    for(counter; counter <= maxAnswer; counter++){
      addedA = "<label><input type=\"radio\" name=\"ques-" + level + "\" value=\""+ counter +"\">"+ quiz[level].answers[counter] +"</input></label><br>";
      console.log(addedA);
      $("#answers").append(addedA);
    }
  }

  //checks if answer is correct
  // $("#submit").click(function(){
  //
  // });


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
      explain: "Although George is named the winner, he later confeses that he cheated making Jerry he winner."
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

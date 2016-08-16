//hide previous 'level' > append new 'level'
//store users answers / var
//compare users answers to correct /function



$(document).ready(function(){
  var randomNum;
  var dupNum = [];
  var level = 0;

  // starts the new game once button is clicked
  $(".start-game").click(function(){
    // $(this).hide();
    // $("#question").show();
    // $("#answers").show();
    numGenerator();
    duplicateNum();
  });

  // generates a new level pulling quiz variables by [level]
  function qnaGenerator(){

  }

  //checks for duplicates
  function duplicateNum(){
    dupNum.push(randomNum);
    console.log(dupNum);
    for (var i = 0; i < dupNum.length; i++){
      console.log(randomNum + "::" + dupNum[i]);
      if (randomNum !== dupNum[i]){
        dupNum.push(randomNum);
        console.log("added:" + dupNum);
      }
      else{
        console.log("duplicate" + dupNum[]);
        numGenerator();
      }
    }
    console.log(dupNum);
    console.log("-------------");
  }

  function numGenerator(){
    randomNum = Math.floor((Math.random()*4)+1);
    console.log("random #: " + randomNum);
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

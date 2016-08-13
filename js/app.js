$(document).ready(function(){

  $(".start-game").click(function(){
    $(this).hide();
    $("#question").show();
    $("#answers").show();
  });

  // $(".start-game").on("click",function(){
  //   console.log("clicked");
  // });

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

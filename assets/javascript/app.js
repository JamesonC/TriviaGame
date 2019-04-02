$(document).ready(function() {

var question1 = {
    text: "'The Mountain' is the nickname for which character?",
    answer: "Gregor Clegane",
    wrong: ["Sandor Clegane", "Gerold Clegane", "Oberyn Martell"],
    correct: false,
};

var question2 = {
    text: "Who was Margaery Tyrell's first husband?",
    answer: "Renly Baratheon",
    wrong: ["Tommen Baratheon", "Joffrey Baratheon", "Stannis Baratheon"],
    correct: false,
};

var question3 = {
    text: "Who is Lord Commander of the Kingsguard at the beginning of Game of Thrones?",
    answer: "Ser Barristan Selmy",
    wrong: ["Ser Jor Mormont", "Ser Loras Tyrell", "Ser Jamie Lannister"],
    correct: false,
};

var question4 = {
    text: "Who is known as 'The-King-Beyond-the-Wall'?",
    answer: "Mance Rayder",
    wrong: ["Stannis Baratheon", "Tormund Giantsbane", "The Night King"],
    correct: false,
};

var question5 = {
    text: "How many times has Sansa Stark been married?",
    answer: "Twice",
    wrong: ["Three Times", "Once", "None"],
    correct: false,
};


var questionBank = [question1, question2, question3, question4, question5];
var intervalId;
var number = 30; // Number of seconds remaining
var count = 0; // Keeps track of the index of the currently displaying question.
var questionDetails = questionBank[count];


function displayQuestion() {

    $(`#question`).html(questionDetails.text);
    $(`#answer-choices`).html("<div class='choices btn btn-primary'>" + questionDetails.answer);

    for (var i = 0; i < questionDetails.wrong.length; i++) {
        $(`#answer-choices`).append("<div class='choices btn btn-primary'>" + questionDetails.wrong[i]);
    }
}

displayQuestion();

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    function decrement() {
        number--;
        $(`#time-remaining`).text(number);

        if (number === 0) {
            alert("Time is up!");
            stop();
        }
    }
}

function stop() {
    clearInterval(intervalId);
}

// run();

});
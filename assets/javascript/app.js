$(document).ready(function () {

    var question1 = {
        text: "'The Mountain' is the nickname for which character?",
        answer: [
            "<div class='choices btn btn-primary'>Oberyn Martell</div>",
            "<div class='choices btn btn-primary'>Gerold Clegane</div>",
            "<div class='choices btn btn-primary'>Sandor Clegane</div>",
            "<div class='choices btn btn-primary' data-correct='true'>Gregor Clegane</div>"
        ],
    };

    var question2 = {
        text: "Who was Margaery Tyrell's first husband?",
        answer: [
            "<div class='choices btn btn-primary' data-correct='true'>Renly Baratheon</div>",
            "<div class='choices btn btn-primary'>Tommen Baratheon</div>",
            "<div class='choices btn btn-primary'>Joffrey Baratheon</div>",
            "<div class='choices btn btn-primary'>Stannis Baratheon</div>"
        ],
    };

    var question3 = {
        text: "Who is Lord Commander of the Kingsguard at the beginning of Game of Thrones?",
        answer: [
            "<div class='choices btn btn-primary'>Ser Jor Mormont</div>",
            "<div class='choices btn btn-primary' data-correct='true'>Ser Barristan Selmy</div>",
            "<div class='choices btn btn-primary'>Ser Loras Tyrell</div>",
            "<div class='choices btn btn-primary'>Ser Jamie Lannister</div>"
        ],
    };

    var question4 = {
        text: "Who is known as 'The-King-Beyond-the-Wall'?",
        answer: [
            "<div class='choices btn btn-primary'>Stannis Baratheon</div>",
            "<div class='choices btn btn-primary' data-correct='true'>Mance Rayder</div>",
            "<div class='choices btn btn-primary'>Tormund Giantsbane</div>",
            "<div class='choices btn btn-primary'>The Night King</div>"
        ],
    };

    var question5 = {
        text: "How many times has Sansa Stark been married?",
        answer: [
            "<div class='choices btn btn-primary'>Once</div>",
            "<div class='choices btn btn-primary'>Three Times</div>",
            "<div class='choices btn btn-primary' data-correct='true'>Twice</div>",
            "<div class='choices btn btn-primary'>None</div>"
        ],
    };

    var questionBank = [question1, question2, question3, question4, question5];
    var intervalId;
    var number = 30; // Number of seconds remaining
    var count = 0; // Keeps track of the index of the currently displaying question.
    var wins = 0; // Holds the number of correct questions answered
    var losses = 0; // Holds the number of incorrect questions answered

    $(`#start`).click(startGame);
    $(`#restart`).click(startGame);
    $(`#game-screen`).css('display', 'none');
    $(`#results-screen`).css('display', 'none');

    function startGame() {
        displayQuestion();
        $(`#splash-screen`).css('display', 'none');
        $(`#game-screen`).css('display', 'inherit');
        $(`#results-screen`).css('display', 'none');
        runTimer();
    }

    // displays question and answer choices to user
    function displayQuestion() {
        var questionDetails = questionBank[count];
        $(`#question`).html(questionDetails.text);

        for (var i = 0; i < questionDetails.answer.length; i++) {
            $(`#answer-choices`).append(questionDetails.answer[i]);
        }
        correct();
    }

    // determines if user's answer is correct/incorrect
    function correct() {
        $(`#answer-choices div`).click(function () {
            var correctAnswer = $(this).data('correct');

            if (correctAnswer) {
                $(this).addClass("choices btn btn-success");
                wins++
                count++;
                setTimeout(function () {
                    nextQuestion();
                }, 1000);

            } else {
                $(this).addClass("choices btn btn-danger");
                losses++;
                count++;
                setTimeout(function () {
                    nextQuestion();
                }, 1000);
            }
        });
    }

    // displays number of correct/incorrect anwers in results screen
    function results() {
        $(`#game-screen`).css('display', 'none');
        $(`#results-screen`).css('display', 'inherit');
        $(`#wins`).text(wins);
        $(`#losses`).text(losses);
    }

    // timer function that decrements
    function runTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

        function decrement() {
            number--;
            $(`#time-remaining`).text(number);

            if (number === 0) {
                results();
            }
        }
    }

    // displays next question within object
    function nextQuestion() {
        $(`#question`).empty();
        $(`#answer-choices`).empty();
        displayQuestion();
    }

});
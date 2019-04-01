// create array of questions and display on screen
// create array or object for answers to selected question

var question = ["What color is the sky?", "What is the capital of Texas?"];

var number = 30;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $(`#time-remaining`).text(number);
    
    if (number === 0) {
        stop();
        alert("Time is up!");
    }
}

function stop(){
    clearInterval(intervalId);
}

run();
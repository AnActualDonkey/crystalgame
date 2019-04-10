$(document).ready(function () {
    $(document).on("click", ".crystal", game);

    var randomNumber1 = Math.floor(Math.random() * 10);
    var randomNumber2 = Math.floor(Math.random() * 25);
    var randomNumber3 = Math.floor(Math.random() * 50);
    var randomNumber4 = Math.floor(Math.random() * 100);

    $(".a").attr("value", randomNumber1);
    function game() {
        console.log($(this).attr("value"));
    }
    $(".b").attr("value", randomNumber2);
    function game() {
        console.log($(this).attr("value"));
    }
    $(".c").attr("value", randomNumber3);
    function game() {
        console.log($(this).attr("value"));
    }
    $(".d").attr("value", randomNumber4);
    function game() {
        console.log($(this).attr("value"));
    }
}
);

var numbers = Math.floor(Math.random() * 100);
var guessedNumbers = [];
var guessesLeft = 4;
var wins = 0;
var losses = 0;
var userscore = 0;


var updateWins = function () {
    $(".win").on("click", function () {
        alert("You earned one point!")
    })
};

var updateLosses = function () {
    $(".losses").on("click", function () {
        alert("Wrong crystals!")
    })
}

var reset = function () {
    guessesLeft = 4;
    guessedNumbers = [];
    updateNumbersToGuess();
    updateGuessesLeft();
    updateGuessedNumbers();
}

document.onkeydown = function (event) {
    guessesLeft--;
    guessedNumbers.push(numbers);
    updateGuessesLeft();
    updateGuessedNumbers();
    if (guessedNumbers === "#random") {
        wins++
        $(".score").text(userScore);
        $(".wins").innerHTML = wins;
        reset();

    }
    if (guessesLeft === 0) {
        losses++
        $(".score").text(userScore);
        $(".losses").innerHTML = losses;
        reset();
    }
};
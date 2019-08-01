var winsHTML = document.getElementById("wins");
var guessesHTML = document.getElementById("guesses")
var guessesListHTML = document.getElementById("guessesList");

var wins = 0;
var guessesLeft = 12;

winsHTML.innerHTML = wins;
guessesHTML.innerHTML = guessesLeft;

var wordArray = ["one", "two", "three", "four"];
var computerWord;
var splitWord = [];
reset();

document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();

    guessesListHTML.append(userGuess + " ");

    for (var i = 0; i < splitWord.length; i++) {
        if (userGuess === "0") {
            wins++;
            alert("You did it!");
            winsHTML.innerHTML = wins;
            reset();
        } else if (guessesLeft === 0) {
            alert("You're out of guesses! You lose!")
            reset();
        } else {
            guessesLeft--;
            guessesHTML.innerHTML = guessesLeft;
        }
    }

}


function reset() {
    guessesLeft = 12;
    guessesHTML.innerHTML = guessesLeft;
    guessesListHTML.innerHTML = "";
    computerWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    splitWord = computerWord.split("");
    console.log(splitWord);
}

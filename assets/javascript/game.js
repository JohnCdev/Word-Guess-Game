var winsHTML = document.getElementById("wins");
var guessesHTML = document.getElementById("guesses")
var guessesListHTML = document.getElementById("guessesList");
var spacesHTML = document.getElementById("spaces");
var hintImgHTML = document.getElementById("hintImg");

var wordArray = ["samus", "ridley", "metroid", "tallon", "pirate", "morph", "screw"];
var computerWord;
var splitWord = [];
var spacesArray = [];
var userCorrect = false;
var userGuess = "";
var wins = 0;
winsHTML.innerHTML = wins;
var guesses = 10;
guessesHTML.innerHTML = guesses;

initialize();

document.onkeyup = function (event) {

    userGuess = event.key.toLowerCase();

    for (var i = 0; i < splitWord.length; i++) {
        if (userGuess === splitWord[i]) {
            userCorrect = true;
            spacesArray[i] = splitWord[i];
            spacesHTML.innerHTML = spacesArray.join(" ");
            splitWord.splice(i, 1, "_");
        }
    }

    if (splitWord.every((val) => val === "_")) {
        alert("You Win!");
        wins++;
        winsHTML.innerHTML = wins;
        initialize();
    }

    if (!userCorrect) {
        guesses--;
        guessesHTML.innerHTML = guesses;
        guessesListHTML.append(userGuess + " ");
    }

    if (guesses === 0) {
        alert("You're out of guesses!");
        initialize();
    }

    userCorrect = false;
}


function initialize() {
    guesses = 10;
    guessesHTML.innerHTML = guesses
    guessesListHTML.innerHTML = "";
    computerWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    splitWord = computerWord.split("");
    console.log(splitWord);
    printSpaces();
    pickPicture();
}

function printSpaces() {
    spacesArray = [];
    for (var i = 0; i < splitWord.length; i++) {
        spacesArray[i] = "_ ";
    }
    spacesHTML.innerHTML = spacesArray.join(" ");
}

function pickPicture() {
    switch (computerWord) {
        case "samus":
            hintImgHTML.src = "assets/images/samus.png";
            break;
        case "ridley":
            hintImgHTML.src = "assets/images/ridley.jpg";
            break;
        case "metroid":
            hintImgHTML.src = "assets/images/metroid.jpg";
            break;
        case "tallon":
            hintImgHTML.src = "assets/images/tallon.png";
            break;
        case "pirate":
            hintImgHTML.src = "assets/images/pirate.jpg";
            break;
        case "morph":
            hintImgHTML.src = "assets/images/morph.jpg";
            break;
        case "screw":
            hintImgHTML.src = "assets/images/screw.png";
            break;
        default:
            console.log("Wat");
    }
}
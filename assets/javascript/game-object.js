var winsHTML = document.getElementById("wins");
var guessesHTML = document.getElementById("guesses")
var guessesListHTML = document.getElementById("guessesList");
var spacesHTML = document.getElementById("spaces");
var hintImgHTML = document.getElementById("hintImg");


var hangMan = {
    wordArray: ["samus", "ridley", "metroid", "tallon", "pirate", "morph", "screw"],
    computerWord: "",
    splitWord: [],
    spacesArray: [],
    userCorrect: false,
    userGuess: "",
    wins: 0,
    guesses: 0,
    initialize: function () {
        hangMan.guesses = 10;
        guessesHTML.innerHTML = hangMan.guesses;
        guessesListHTML.innerHTML = "";
        hangMan.computerWord = hangMan.wordArray[Math.floor(Math.random() * hangMan.wordArray.length)];
        splitWord = hangMan.computerWord.split("");
        console.log(hangMan.wordArray);
        hangMan.printSpaces();
        hangMan.pickPicture();
    },
    printSpaces: function () {
        hangMan.spacesArray = [];
        for (var i = 0; i < hangMan.splitWord.length; i++) {
            hangMan.spacesArray[i] = "_ ";
        }
        spacesHTML.innerHTML = hangMan.spacesArray.join(" ");
    },
    pickPicture: function () {
        switch (hangMan.computerWord) {
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
}

winsHTML.innerHTML = hangMan.wins;
guessesHTML.innerHTML = hangMan.guesses;

hangMan.initialize();

document.onkeyup = function (event) {

    hangMan.userGuess = event.key.toLowerCase();

    for (var i = 0; i < hangMan.splitWord.length; i++) {
        if (hangMan.userGuess === hangMan.splitWord[i]) {
            hangMan.userCorrect = true;
            hangMan.spacesArray[i] = hangMan.splitWord[i];
            spacesHTML.innerHTML = hangMan.spacesArray.join(" ");
            hangMan.splitWord.splice(i, 1, "_");
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







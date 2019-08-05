var winsHTML = document.getElementById("wins");
var guessesHTML = document.getElementById("guesses")
var guessesListHTML = document.getElementById("guessesList");
var spacesHTML = document.getElementById("spaces");
var hintImgHTML = document.getElementById("hintImg");


var hangMan = {
    wordArray: ["samus", "ridley", "metroid", "tallon", "pirate", "morph", "screw"],
    computerWord: "",
    previousWord: "",
    splitWord: [],
    spacesArray: [],
    userCorrect: false,
    userGuess: "",
    wins: 0,
    guesses: 0,
    initialize: function () {
        this.guesses = 10;
        guessesHTML.innerHTML = this.guesses;
        guessesListHTML.innerHTML = "";
        this.computerWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
        console.log(this.computerWord + " " + this.previousWord);
        if (this.computerWord === this.previousWord) {
            this.initialize();
        }
        this.previousWord = this.computerWord;
        this.splitWord = this.computerWord.split("");
        console.log(this.splitWord);
        this.printSpaces();
        this.pickPicture();
    },
    printSpaces: function () {
        this.spacesArray = [];
        for (var i = 0; i < this.splitWord.length; i++) {
            this.spacesArray[i] = "_ ";
        }
        spacesHTML.innerHTML = this.spacesArray.join(" ");
    },
    pickPicture: function () {
        switch (this.computerWord) {
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

    if (hangMan.splitWord.every((val) => val === "_")) {
        alert("You Win!");
        hangMan.wins++;
        winsHTML.innerHTML = hangMan.wins;
        hangMan.initialize();
    }

    if (!hangMan.userCorrect) {
        hangMan.guesses--;
        guessesHTML.innerHTML = hangMan.guesses;
        guessesListHTML.append(hangMan.userGuess + " ");
    }

    if (hangMan.guesses === 0) {
        alert("You're out of guesses!");
        hangMan.initialize();
    }

    hangMan.userCorrect = false;
}







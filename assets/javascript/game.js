











// document.onkeyup = function (event) {

//     var userGuess = event.key.toLowerCase();

//     guesses.append(" " + userGuess + ",");

//     if (userGuess === computerGuess) {
//         winsCount++;
//         alert("You did it!");
//         wins.innerHTML = " " + winsCount;
//         reset();
//     } else if (leftCount === 0) {
//         lossesCount++;
//         losses.innerHTML = " " + lossesCount;
//         alert("You're out of guesses! You lose!")
//         reset();
//     } else {
//         leftCount--;
//         left.innerHTML = " " + leftCount;
//     }
// }












// var wins = document.getElementById("wins");
// var losses = document.getElementById("losses");
// var left = document.getElementById("left");
// var guesses = document.getElementById("guesses");

// var computerChoices = [ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", 
//                         "a", "s", "d", "f", "g", "h", "j", "k", "l",
//                         "z", "x", "c", "v", "b", "n", "m"];

// var winsCount = 0;
// var lossesCount = 0;
// var leftCount = 10;

// left.innerHTML = " " + leftCount;

// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// document.onkeyup = function (event) {

//     var userGuess = event.key.toLowerCase();

//     guesses.append(" " + userGuess + ",");

//     if (userGuess === computerGuess) {
//         winsCount++;
//         alert("You did it!");
//         wins.innerHTML = " " + winsCount;
//         reset();
//     } else if (leftCount === 0) {
//         lossesCount++;
//         losses.innerHTML = " " + lossesCount;
//         alert("You're out of guesses! You lose!")
//         reset();
//     } else {
//         leftCount--;
//         left.innerHTML = " " + leftCount;
//     }
// }

// function reset() {
//     computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//     leftCount = 10;
//     left.innerHTML = " " + leftCount;
//     guesses.innerHTML = "";
// }

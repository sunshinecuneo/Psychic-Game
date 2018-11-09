// Creates an array that lists out all of the options (Letters of the alphabet)
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Creating variables to hold the number of wins and losses. They start at 0.
var wins = 0;
var losses = 0;

// Creating variables to hold the number of guesses left and the letters already guessed.
var guessesLeft = 9;
var guessedLetters = [];

// Sets the computerGuess variable equal to a random choice from the computerChoices array.
var computerGuess = computerChoices[Math.floor(Math,random() * computerChoices.length)];

// Counts the guesses left.
function countGuessesLeft() {
    document.querySelector("guessesLeft").innerHtml = "Guesses Left " + guessesLeft;
}

// Displays the users guessed letters.
function guessedLetters() {
    document.querySelector("#letter").innerHTML = "Guessed letters so far: " + guessedLetters.join(" ");
}

// Restarts the game when guesses are greater than 9 
var restart = function() {
    guessesLeft = 9;
    guessedLetters = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    guessesLeft---;

    var userGuess = String.fromCharCode(event.keycode).toLowerCase();

    guessedLetters.push(userGuess);
    countGuessesLeft();
    guessedLetters();

// This logic deteermines the outcome of the game (win or lose), and increments the appropriate number.

    if (userGuesses === computerGuess) {
        wins++;
        document.querySelector("#wins").innerhtml = "Wins: " + wins;
        restart();
    }

    else if (guessesLeft === 0) {
        losses++;
        document.querySelector("#lose").innerhtml = "Losses: " + losses;
        restart();
    }
    };


// Should I,,,?
// Display the computer choice.
// computerChoiceText.textContent = "The computer chose: " + computerGuess;
// Creates an array that lists out all of the options (Letters of the alphabet)
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var userGuesses = [];

// Creating variables to hold the number of wins and losses. They start at 0.
var wins = 0;
var losses = 0;

// Creating variables to hold the number of guesses left and the letters already guessed.
var guessesLeft = 9;
var guessedLetters = [];

// Sets the computerGuess variable equal to a random choice from the computerChoices array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

// Counts the guesses left.
function countGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left " + guessesLeft;
}

// Displays the users guessed letters.
function guessedLetters() {
    document.querySelector("#letter").innerHTML = "Guessed letters so far: " + guessedLetters.join(" ");
}

// Restarts the game when guesses are greater than 9 
var restart = function () {
    guessesLeft = 9;
    guessedLetters = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    var userGuesses = event.key.toLowerCase();
    console.log("User guess", userGuesses);

    //var userGuess = String.fromCharCode(event.keycode).toLowerCase();

    //guessedLetters.push(userGuess);
    //console.log(userGuess);

    // This logic determines the outcome of the game (win or lose), and increments the appropriate number.
    if (computerChoices.indexOf(userGuesses) != -1) {
        if (userGuesses === computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            restart();
        }

        else if (guessesLeft === 0) {
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            console.log
            restart();
        } else {
            guessedLetters.push(userGuesses);
            document.querySelector("#guessedLetters").innerHTML = "Your guesses so far: " + guessedLetters;
            document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

            guessesLeft--;
        }

    }
};



// Should I,,,?
// Display the computer choice.
// computerChoiceText.textContent = "The computer chose: " + computerGuess;
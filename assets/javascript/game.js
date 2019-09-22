// array of all the letters in alphabet
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// the key pressed is logged and converted to uppercase

// computerGuess is = to a random letter in the letters[array]
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);
// to reset computer guess after. 
var emptyArray = [];
//win set to the class in html where counter will be
var win = document.getElementById(".wins");
//lose set to class in html where counter will be
var lose = document.getElementById(".lose");

//     // onkeyup alert when any letter key is pressed in array..... cannot figure out how to have any letter in the array
// cause an alert with the letter that was pressed 
document.onkeyup = function (event) {
    var personGuess = event.key.toUpperCase();

    alert(personGuess)



    console.log("test");
    //if key pressed is equal to the computerGuess then an alert will pop up saying correct guess, and the wins will increase
    if (computerGuess === personGuess) {
        win = 0;
        win++;
        console.log(win);
        alert("You guessed correct, Good Job!")

    }
    // if guess is wrong, guess column goes down by 1
    else if (computerGuess !== personGuess) {
        var guess = document.getElementById(".guess")
        guess = 10;
        guess--;
        alert("Guess again!")
    }
    // if guess is equal to 0 then lose column goes up by 1
    else if (guess === 0) {
        lose++;
    }

    // innerHTML does not work.... due to document.onkey??
    document.getElementById(".wins").innerHTML = "Wins: " + win;
    document.getElementById(".lose").innerHTML = "Losses: " + lose;
    document.getElementById(".guess").innerHTML = "Guesses: " + guess;

};
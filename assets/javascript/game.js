

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 9;

    var guessThis = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(guessThis)



document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === guessThis){
        wins++;
    }

    else{
        guesses--;
    }

    if(guesses = 0){
        losses++
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
}
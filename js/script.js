// Genera 5 numeri casuali
let numbers = [];
while (numbers.length < 5) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
    }
}

// Visualizza i numeri nella pagina HTML
let numbersDiv = document.getElementById("numbers");
numbersDiv.innerHTML = numbers.join(", ");

// Dopo 5 secondi, nascondi i numeri e mostra il form per l'inserimento dei numeri indovinati
setTimeout(function() {
    numbersDiv.style.display = "none";

    // Mostra il form per l'inserimento dei numeri indovinati
    let guessedDiv = document.getElementById("guess-form");
    guessedDiv.style.display = "block";

    // Gestisci la verifica dei numeri inseriti dall'utente
    let guessForm = document.getElementById("guess-form");
    guessForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let guess1 = document.getElementById("number1").value;
        let guess2 = document.getElementById("number2").value;
        let guess3 = document.getElementById("number3").value;
        let guess4 = document.getElementById("number4").value;
        let guess5 = document.getElementById("number5").value;
        let guesses = [guess1, guess2, guess3, guess4, guess5];

        // Verifica i numeri inseriti dall'utente e mostra il risultato
        let correctGuesses = [];
        for (let i = 0; i < guesses.length; i++) {
            if (numbers.includes(parseInt(guesses[i]))) {
                correctGuesses.push(guesses[i]);
            }
        }
        let resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Hai indovinato " + correctGuesses.length + " numeri su 5: " + correctGuesses.join(", ");
    });
}, 5000);

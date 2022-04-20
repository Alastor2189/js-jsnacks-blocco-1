// jsnack4. Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.


// richiesta delle 4 cifre
const userNumber = prompt("Inserisci un numero di 4 cifre (es. 1560");
console.log(userNumber, typeof(userNumber));

// somma delle cifre

let add = 0;
for (let i = 0; i < userNumber.length; i++) {
    const digit = parseInt(userNumber[i]);
    add += digit;
    console.log(digit, typeof(digit));
}

//stampa della somma
console.log(add, typeof(add));
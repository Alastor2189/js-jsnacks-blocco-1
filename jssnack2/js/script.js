// Crea un array vuoto.
const array1 = [];
// Chiedi per 6 volte all'utente di inserire un numero, TRAMITE CICLO FOR

for (let i = 0; i < 6; i++) {
    const givemeNumber = parseInt(prompt("Digita un numero"));
    console.log(givemeNumber);

    // se è dispari inseriscilo nell'array.
    if (givemeNumber % 2 === 1) {
        array1.push(givemeNumber);
    }

}

console.log(array1);
const firstWord = prompt("Dimmi la prima parola");
const secondWord = prompt("Dimmi la seconda parola");

const firstWordLenght = firstWord.length;
const secondWordLenght = secondWord.length;

console.log(firstWord, firstWordLenght);
console.log(secondWord, secondWordLenght);

let result;
if (firstWordLenght > secondWordLenght) {
    result = `${secondWord} ${firstWord}`;
} else if (secondWordLenght > firstWordLenght) {
    result = `${firstWord} ${secondWord}`;
} else {
    result = `Le parole hanno la medesima lunghezza, ${firstWord} ${secondWord}`;
}

console.log(result);
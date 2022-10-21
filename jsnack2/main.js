/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

let firstArray = ['PiPpo', 'PLUTO', 'paPerino'];

// con map vado dentro l'array e cambio i caratteri degli elementi con charAt (per la singola lettera) e Slice (per cambiare tutto il corpo della parola)
const secondArray = firstArray.map(function(words){
      const allChar = words.slice(1).toLowerCase()
      const firstChar = words.charAt(0).toUpperCase()
      return firstChar + allChar
});

console.log(secondArray);
// scrivere una funzione chiamata isInArray che dato un array di numeri e un numero in ingresso
// ritorna true se il numero e presente nell'array, false altrimenti

// creare funzione con arr e num come variabili
// ciclo per arr.length che veda se num contenuto in arr[i]
// se si return true else false

function isInArray (arr, num) {
for (let i = 0; i <= arr.length; i++) {
    if(arr[i] == num) {
        return true
    }
}
return false
}
let risultato = isInArray ([1,2,3,4], 10)
console.log(risultato)
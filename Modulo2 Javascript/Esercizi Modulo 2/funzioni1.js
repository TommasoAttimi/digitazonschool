// scrivere una funzione chiamata between che 
// dati due numeri a e b in ingresso
// ritorni un array che contiene tutti i numeri compresi tra a e b,
// estremi esclusi

// 1) algoritmo
// 2) penso a quali sono i parametri che la funzione accetta in ingresso
// 3) scrivo la sintassi della funzione, con un buon nome
// 4) scrivo l'algoritmo all'interno della funzione
// 5) invoco la funzione
// 6) controllo che la funzione restituisca il risultato atteso
// 7) scrivo in pvt ad Alberto


// ricevo due numeri in ingesso, a e b
// ciclo partendo dal numero successivo ad a, fermando al numero prima di b
// creo array vuoto
//   per ogni iterazione inserisco l'indice corrente dentro l'array
// ritorno l'array

function numbersBetween(a, b) {
    let arrayFinale = []
    for (let i= a + 1; i < b; i++) {
         arrayFinale.push(i)
         }
    return arrayFinale
    }
    
let nums = numbersBetween(2,10)
console.log(nums)


// prendere numeri da 1 a 50
// di questi prendere solo i pari
// stamparne gli elementi sommando 1 al numero

function evenNumbers(arr) {
    let newArr = []
    for( let i = 0; i< arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

function printAdd(arr) {
    for( let i = 0; i< arr.length; i++) {
        console.log(arr[i] + 1)
    }
}

let numbers = numbersBetween(1,50)
let even = evenNumbers(numbers)
printAdd(even)

// o printAdd(evenNumbers(numbersBetween(1,50)))
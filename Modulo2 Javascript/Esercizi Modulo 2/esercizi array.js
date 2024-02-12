// Stampare somma di ogni slot di ogni array -  arrayPrimo Tentativo OK
//
// let array1 = [1,2,3]
// let array2 = [4,5,6]
// for (let i=0; i < 1; i++) {
//     let somma1 = array1[0] + array2[0]
//     let somma2 = array1[1] + array2[1]
//     let somma3 = array1[2] + array2[2]
//     console.log(somma1, somma2, somma3)
// }


// Stampare somma di ogni slot di ogni array -  Secondo Tentativo OK
//
// let array1 = [1,2,3]
// let array2 = [4,5,6]
// for (let i=0; i <array1.length; i++) {
//     let somma = array1[i] + array2[i]
//     console.log(somma)
// }


// Stampare somma di ogni slot di ogni array -  correzione
// let array1 = [1,2,3]
// let array2 = [4,5,6]
// for (let i=0; i <array1.length; i++) {
//     console.log(array1[i] + array2[i])
// }


// Stampare un terzo array con l'i più alto dei due array precedenti
//
// let array1 = [1,7,3]
// let array2 = [4,5,6]
// let array3 = [0,0,0]
// for (let i =0; i<array1.length; i++) {
//     if (array1[i] > array2[i]) {
//         array3[i] = array1[i]
//     }
//     else {
//         array3[i] = array2[i]
//     }
// }
// console.log(array3)


// Semplificare questo codice
//
// let qualcosa = "qualcosa"
// if (!qualcosa) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }


// Prova mia
//
// let qualcosa = ""
// let isFalse = !qualcosa
// qualcosa = isFalse
// console.log(qualcosa)

// Risultato
//
// let qualcosa = ""
// console.log(!qualcosa)


// Esercizio su array di lunghezza differente, che si fermi ad un corrispettivo max
//
// let arr1 = [ 1,2,3 ]
// let arr2 = [ 4,5 ]
// for (let i = 0; i < arr1.length && arr2.length; i++) {
//   console.log(arr1[i] + arr2[i])
// }
// scrivere una funzione missingNumbers che prende in ingresso un array ordinato arr, la funzione deve ritornare la somma di tutti i numeri che mancano tra i numeri presenti nell'array.
// es per missingNumbers([1, 2, 4, 6, 9]) ritorna 33 (3 + 5 + 7 + 8)
// es per missingNumbers([]) ritorna 0
// es per missingNumbers([-3, 0, 3, 4]) ritorna 0 (-2 + (-1) + 1 + 2`)

function missingNumbers(array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = array[i] + 1; j < array[i + 1]; j++) {
      somma += j;
    }
  }
  return somma;
}
console.log(missingNumbers([1, 2, 4, 6, 9]));

// Alberto
// function missingNumbers(arr) {
//   let somma = 0;
//   for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
//     if (arr.indexOf(arr[i] == -1)) {
//       // -1 dice che l'ha trovato, perche e un indice valido. quindi in questo caso, se l'indice non compare nell'array allora lo sommo
//       somma = somma + arr[i];
//     }
//   }
//   return somma;
// }
// console.log(
//   missingNumbers([1, 2, 4, 6, 7, 9, 11, 12, 13, 14, 15, 20, 23, 87, 102])
// );

// Altra Soluzione
// function missingNumbers(arr) {
//   let somma = 0;
//   let last = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     last = arr[i];
//     for (let j = last + 1; j < arr[i]; j++) {
//       somma = somma + j;
//     }
//   }
//   return somma;
// }
// console.log(
//   missingNumbers([1, 2, 4, 6, 7, 9, 11, 12, 13, 14, 15, 20, 23, 87, 102])
// );

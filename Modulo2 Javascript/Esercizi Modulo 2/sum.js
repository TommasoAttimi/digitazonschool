// scrivere una funzione chiamata sum che
// dato un array di numeri in ingresso
// ritorni la somma dei numeri contenuti nell'array

function sum(arr) {
  let somma = 0;
  for (let i = 0; i < arr.length; i++) {
    somma = somma + arr[i];
  }
  return somma;
}
console.log(sum([1, 5, 7, 10]));

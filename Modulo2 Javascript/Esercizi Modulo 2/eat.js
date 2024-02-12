// implementare slice
// function eat(arr, start, stop) mangia l'array a partire da start fino a stop - 1
// es. eat([1,2,3], 0, 3) ritorna []
// la funzione non deve modificare l'array in ingresso

// Prova mia, funziona, ma non dobbiamo usare slice or splice. E non ritorna un nuovo array.
function eat(arr, start, stop) {
  arr.splice(start, stop);
  return arr;
}
console.log(eat([1, 2, 3], 1, 3));

// Prova mia
function eat(arr, start, stop) {
  let startIndex = arr.indexOf(start); // alla fine non servirebbe usarlo, ho gia start
  let stopIndex = arr.indexOf(stop); // non serve se ho gia stop
  let newArray = [];
  for (let i = startIndex; i < stopIndex - 1; i++) {
    // quindi qui usare start e stop
    newArray.push(arr[i]);
  }
  return newArray;
}
console.log(eat([1, 2, 3], 4, 3));

// Soluzione
function eat(arr, start, stop) {
  if (start > stop) {
    return arr;
  }
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < start || i > stop - 1) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(eat([1, 2, 3], 0, 3));

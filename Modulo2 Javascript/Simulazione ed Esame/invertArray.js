// scrivere una funzione che inverte un array SENZA creare un nuovo array d'appoggio.

function invertArray(array) {
  return array.reverse();
}
console.log(invertArray([0, 1, 2, 3, 4, 6]));

// Antonio
function inverti(arr) {
  let tieniconto = 1;
  for (let i = 0; i < arr.length / 2; i++) {
    let n = arr[i];
    arr[i] = arr[arr.length - tieniconto];
    arr[arr.length - tieniconto] = n;
    tieniconto++;
  }
  return arr;
}
console.log(invertArray([0, 1, 2, 3, 4, 6]));

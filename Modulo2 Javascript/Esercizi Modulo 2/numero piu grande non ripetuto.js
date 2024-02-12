// dato un array di numeri, ritornare il numero piu grande che non ha ripetizioni

function nPiuGrandeNonRipetuto(arr) {
  let occorrenze = {};
  let numPiuGrande = 0;
  for (let i = 0; i < arr.length; i++) {
    if (occorrenze[arr[i]]) {
      occorrenze[arr[i]]++;
    } else {
      occorrenze[arr[i]] = 1;
    }
  }
  console.log(occorrenze);

  for (let i = 0; i < arr.length; i++) {
    if (occorrenze[arr[i]] === 1) {
      if (arr[i] > numPiuGrande) {
        numPiuGrande = arr[i];
      }
    }
  }
  return numPiuGrande;
}
console.log(nPiuGrandeNonRipetuto([1, 3, 5, 3, 7, 1, 8, 5, 9]));

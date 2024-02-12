// Dato un array non vuoto riempito di soli numeri positivi, calcolare la frequenza massima con cui il numero piu' comune compare.
// Ad esempio per [1, 2, 1, 2, 3, 1] la frequenza massima e' 3 perche' 1 compare 3 volte.
// A parita' di frequenza scegliere l'ultimo.

function frequencyOfTheMostCommon(array) {
  let occurrencies = {};
  for (let i = 0; i < array.length; i++) {
    if (occurrencies[array[i]]) {
      occurrencies[array[i]] += 1;
    } else {
      occurrencies[array[i]] = 1;
    }
  }
  console.log(occurrencies);
  let key = Object.keys(occurrencies);
  let value = Object.values(occurrencies);
  let frequency = 0;
  for (let i = 0; i < key.length; i++) {
    if (value[i] > frequency) {
      frequency = value[i];
    }
  }
  return frequency;
}
console.log(frequencyOfTheMostCommon([1, 2, 2, 2, 2, 1]));

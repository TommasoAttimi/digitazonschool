// scrivere una funzione che scombina un array ordinato, suggerimento: math.random

// Prova errata

function randomize(array) {
  for (let i = 0; i < array.length; i++) {
    let random = array[Math.floor(Math.random() * array.length)];
    return array.push(random);
  }
}
console.log(randomize([1, 2, 3, 4, 5, 6]));

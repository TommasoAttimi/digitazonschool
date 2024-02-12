// scrivere una funzione chiamata addUpFromNumber che
// dato un numero positivo in input
// ritorni la somma di tutti i numeri da 1 fino al numero passato

// ad esempio: con 4 ritornerebbe 1 + 2 + 3 + 4 = 10

function addUpFromNumber(n) {
  let somma = 0;
  for (let i = 1; i <= n; i++) {
    somma = somma + i;
  }
  return somma;
}
console.log(addUpFromNumber(8));

// OK

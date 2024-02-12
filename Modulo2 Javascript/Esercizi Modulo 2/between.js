// scrivere una funzione chiamata between che
// dati due numeri a e b in ingresso
// ritorni un array che contiene tutti i numeri compresi tra a e b, estremi esclusi

function between(a, b) {
  let arr = [];
  for (let i = a + 1; i < b; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(between(1, 6));

// scrivere una funzione chiamata fattoriale che
// dato un numero in ingresso
// ritorni il fattoriale di quel numero

// ad esempio per 3 deve ritornare 6
// ad esempio per 4 deve ritornare 24

// https://en.wikipedia.org/wiki/Factorial

function fattoriale(n) {
  let somma = 1;
  for (let i = 0; i < n; i++) {
    somma = somma * (n - i);
  }
  return somma;
}
console.log(fattoriale(3));

// 4 x 3 x 2 x 1
// n x n-1 x n-2 x n-3
// n - i

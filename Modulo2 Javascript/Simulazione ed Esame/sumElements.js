// scrivere una funzione che dato un numero in ingresso ritorna la somma dei suoi singoli numeri.
// 33 -> 6
// 764 -> 17
// 2222 -> 8
// 1000 -> 1

function sumElements(num) {
  let array = Array.from(String(num), Number);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sumElements(764));

// Alternativa
function sumDigits(n) {
  return String(n)
    .split("")
    .reduce((res, m) => res + parseInt(m, 10), 0);
}
console.log(sumDigits(764));

// ricerca proprieta resto e divisione

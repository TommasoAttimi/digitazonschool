// scrivere una funzione invertiDa che prende in ingresso un array e un numero
// la funzione inverte l'array passato come argomento dalla posizione identificata dal numero passato in poi
// non si deve modificare l'array passato in ingresso
// es [1,2,3,4,5] ... [1,2,5,4,3]

// inizializzo result e reverse
// ciclo l'array da 0 a n e pusho nel result arr[i]
// ciclo al contrario e pusho di nuovo ma in reverse // correzione, metto in testa
// concateno i due array

function invertiDa(arr, n) {
  if (n < 0 || n > arr.length) return arr;
  let result = [];
  let reverse = [];
  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
  }
  for (let j = n; j < arr.length; j++) {
    reverse.unshift(arr[j]);
  }
  return result.concat(reverse);
}
console.log(invertiDa([1, 2, 3, 4, 5], 3));

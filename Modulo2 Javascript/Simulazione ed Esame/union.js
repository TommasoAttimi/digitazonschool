// documentarsi su cos'e' l'unione tra insiemi ed implementarla in una funzione che accetta due array

function union(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array1.indexOf(array2[i]) == -1) {
      // ==-1 non e presente
      array1.push(array2[i]);
    }
  }
  return array1.sort();
}
console.log(union([1, 2, 3, 5], [3, 6, 5]));

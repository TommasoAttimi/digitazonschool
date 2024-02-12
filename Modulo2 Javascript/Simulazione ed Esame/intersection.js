// documentarsi su cos'e' l'intersezione tra insiemi ed implementarla in una funzione che accetta due array

function intersection(array1, array2) {
  let newArray = [];
  // let found = true; non serve
  for (let i = 0; i < array2.length; i++) {
    if (array1.indexOf(array2[i]) > -1) {
      // > -1 e presente
      newArray.push(array2[i]);
      // found = true;
    }
  }
  return newArray;
}
console.log(intersection([1, 4, 6, 3, 9], [2, 6, 1, 3]));

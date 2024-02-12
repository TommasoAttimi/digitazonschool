// dato in ingresso una matrice che come valori contiene solo 1 e 0
// la funzione inverte gli 1 in 0 e gli 0 in 1
// [[1,1,0,0,1,0,1,0,0], [1,0,1], [0,0,0]]

// ciclo per arr[i], poi arr[i+1] poi arr[i+2]
// inizializzo variabile con uno = 1, zero = 0
// if num (arr[i] == 1)
//   allora arr.push

function swapZerosAndOnes(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let row = [];
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == 0) {
        row.push(1);
      } else if (array[i][j] == 1) {
        row.push(0);
      }
    }
    newArray.push(row);
  }
  return newArray;
}
console.log(
  swapZerosAndOnes([
    [1, 0, 1, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0],
  ])
);

// Alberto
function swapZerosAndOnes(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == 0) {
        array[i][j] = 1;
      } else {
        array[i][j] = 0;
      }
    }
  }
  return array;
}
console.log(
  swapZerosAndOnes([
    [1, 0, 1, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0],
  ])
);

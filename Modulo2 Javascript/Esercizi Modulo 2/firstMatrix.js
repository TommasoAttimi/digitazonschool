// scrivere una funzione chiamata firstMatrix che
// dato un array e un numero n
// ritorni una matrice con l'array riprodotto n volte

// ad esempio con [1,2,3] e 3 ritorna [[1,2,3],[1,2,3],[1,2,3]]
// ad esempio con [1,2] e 1 ritorna [1,2]
// ad esempio con [1,2,3,4] e 0 ritorna []

function firstMatrix(arr, n) {
  let matrice = [];
  for (let i = 0; i < n; i++) {
    // matrice.push(arr[i]);
    // matrice[i] = arr.fill(arr, n);
    matrice[i] = arr.slice();
  }
  return matrice;
}
console.log(firstMatrix([1, 2, 3], 6));

// matrix = arr x n

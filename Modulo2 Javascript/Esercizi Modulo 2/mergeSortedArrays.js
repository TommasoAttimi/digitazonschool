// scrivere una funzione chiamata mergeSortedArrays che dati due array ordinati in ingresso ritorni un unico array ordinato
// non si puo usare il metodo sort
// ad es. [1,2,3] e [4,5] ritorna [1,2,3,4,5]
// [5,9] e [1,6,7] ritorna [1,5,6,7,9]

// 2 puntatori, blu e arancione. entrambi devono partire all'inizo del rispettivo array.
// partire da uno dei due. ci chiediamo se uno e minore dell'altro array e in caso lo pusho?
// elimino quel numero e sposto puntatore
// interrompere quando array diventa vuoto quindi eventuali altri numeri rimanente nell'altro array vanno tutti messi in coda
// servono due indici e interrompere il ciclo all'indice vuoto

// Prova Mia
function mergeSortedArrays(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr2[i]) {
      newArray.push(arr1[i]);
      delete arr1[i];
    } else {
      newArray.push(arr2[i]);
      delete arr2[i];
    }
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] < arr1[j]) {
        newArray.push(arr2[j]);
        delete arr2[j];
      } else {
        newArray.push(arr1[j]);
        delete arr1[j];
      }
    }
  }
  return newArray;
}
console.log(mergeSortedArrays([5, 9], [1, 6, 7]));

// Soluzione
function mergeSortedArrays(arr1, arr2) {
  let array = [];
  let i = 0;
  let j = 0;
  for (; i < arr1.length && j < arr2.length; ) {
    if (arr1[i] < arr2[j]) {
      array.push(arr1[i]);
      i++;
    } else {
      array.push(arr2[j]);
      j++;
    }
  }

  for (; i < arr1.length; i++) {
    array.push(arr1[i]);
  }

  for (; j < arr2.length; j++) {
    array.push(arr2[j]);
  }

  return array;
}

console.log(mergeSortedArrays([5, 9], [1, 6, 7]));

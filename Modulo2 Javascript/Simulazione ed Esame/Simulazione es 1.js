// scrivere una funzione insertSorted che prende in ingresso un array ordinato in modo crescente arr e un numero num,
// la funzione deve ritornare un nuovo array a cui e' stato aggiunto num in modo che l'ordine in arr sia preservato.
// es per insertSorted([1, 2, 3, 6, 9]) e 7 ritorna [1, 2, 3, 6, 7, 9]
// es per insertSorted([1, 2]) e 1 ritorna [1, 1, 2]
// es per insertSorted([]) e 42 ritorna [42]

function insertSorted(array, num) {
  let newArray = [];
  if (array.length === 0 || num > array.length) {
    array.push(num);
  }
  if (num < array[0]) {
    newArray.push(num);
  }
  for (let i = 0; i < array.length; i++) {
    if (num >= array[i] && num <= array[i + 1] && num < array.length) {
      newArray.push(array[i], num);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(insertSorted([1, 2, 3, 5], 10));

// Alberto
function insertSorted(arr, num) {
  if (arr.length == 0) {
    return [num];
  }
  let res = [];
  let once = true;
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i] && !once) {
      res.push(num);
      once = true;
    }
    res.push(arr[i]);
  }
  if (!once) {
    res.push(num);
  }
  return res;
}

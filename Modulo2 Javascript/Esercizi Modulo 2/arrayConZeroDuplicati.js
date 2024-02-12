// dato un array di numeri, ritornare un nuovo array che contenga gli stessi numeri
// ma eventuali 0 vanno duplicati

function zeroDuplicati(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] == 0) {
      newArray.push(arr[i], arr[i]);
    } else {
      newArray.push(arr[i]);
    }
  return newArray;
}
console.log(zeroDuplicati([0, 1, 2, 3, 0, 4]));

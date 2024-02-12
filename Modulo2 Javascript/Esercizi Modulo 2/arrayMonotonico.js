function arrayMonotonico(arr) {
  let crescente = true;
  let decrescente = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      crescente = false;
    } else if (arr[i] < arr[i + 1]) {
      decrescente = false;
    }
  }
  return crescente || decrescente;
}
console.log(arrayMonotonico([5, 3, 2, 1]));

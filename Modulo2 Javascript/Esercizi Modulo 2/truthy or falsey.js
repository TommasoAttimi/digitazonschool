// scrivere del codice che data una variabile `x` di cui non conoscete il valore stampi `"truthy"` o `"falsey"`
// in base alla sua natura quando valutata in contesto booleano

let x = "";
if (x) {
  console.log("truthy");
} else {
  console.log("falsey");
}

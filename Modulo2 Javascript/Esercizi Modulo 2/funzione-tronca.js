// scrivere 3 funzioni che date rispettivamente, una stringa, un array, un oggetto, troncano il valore in base ad un secondo parametro, esempi:

// tronca("ciao a tutti", 2) => "ci"
// tronca([1,2,3,4,5]), 3) => [1,2,3]
// tronca({ a: 1, b: 2 }, 1) => { a: 1 }

function troncaStringa(stringa, n) {
   return stringa.slice(0, n)
}
console.log(troncaStringa("ciao a tutti", 2))




function troncaArray(arr, n) {
   return arr.slice(0, n)
}
console.log(troncaArray([1,2,3,4,5], 3))




function troncaOggetto(obj, n) {
   let nuovoOggetto = {}
   // for (let i = 0; i < n; i++) {
      nuovoOggetto = obj[obj.keys]
   // }
   return nuovoOggetto
}
console.log(troncaOggetto({a: 1, b: 2, c: 3}, 2))
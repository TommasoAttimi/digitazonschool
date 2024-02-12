// scrivere una funzione chiamata countUndefinedKeys che
// dato un oggetto come parametro
// ritorni un intero che rappresenti il numero di chiavi, presenti
// nell'oggetto, che hanno valore undefined o null

let map = {
  a: undefined,
  b: null,
  c: "ciao",
  d: 5,
  e: undefined,
};
function countUndefinedKeys(obj) {
  let chiavi = Object.keys(obj);
  let n = 0;
  for (let i = 0; i < chiavi.length; i++) {
    if (obj[chiavi[i]] == undefined || obj[chiavi[i]] == null) {
      n++;
    }
  }
  return n;
}

console.log(countUndefinedKeys(map));

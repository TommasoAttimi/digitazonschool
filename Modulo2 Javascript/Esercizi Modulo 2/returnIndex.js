// data una stringa ritorna l'indice del primo carattere che non si ripete al suo interno
// se tale carattere non esiste ritornare -1

function retunIndex(stringa) {
  let occorrenze = {};
  let firstLetter = "";
  let firstIndex = -1;
  for (let i = 0; i < stringa.length; i++) {
    let current = stringa[i];
    if (occorrenze[current]) {
      occorrenze[current] += 1;
    } else {
      occorrenze[current] = 1;
    }
  }
  for (let i = 0; i < stringa.length; i++) {
    let current = stringa[i];

    if (occorrenze[current] === 1) {
      firstLetter = current;
      firstIndex = i;

      break;
    }
  }
  return firstIndex;
}
console.log(retunIndex("buon compleanno"));

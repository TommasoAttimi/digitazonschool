// compressione
// una stringa puo essere compressa, nel senso che ripetizioni contigue possono essere sostituite da una delle occorrenze di questa ripetizione e il numero di ripetizioni
// es aabbcccba si comprime in a2b2c3ba

function compressed(stringa) {
  let compressedString = "";
  let contatore = 1;
  for (let i = 0; i < stringa.length; i++) {
    let current = stringa[i];
    let next = stringa[i + 1];
    if (current == next) {
      contatore++;
    } else {
      let res = "";
      if (contatore > 1) {
        res = contatore;
      } else {
        res;
      }
      compressedString = compressedString + current + res;
      contatore = 1;
    }
  }
  return compressedString;
}
console.log(compressed("aabbcccba"));

// pseudo codice Alberto
// prendo il primo carattere e lo metto dentro CHAR
// questo sara il carattere che rappresenta la successione
// creo una stringa vuota RES
// creo una stringa che contiene CHAR e la chiamo SUCCESSIONE
// ciclo sulla stringa partendo dal secondo carattere CURR
//  CURR e uguale a CHAR?
//      chiamo la funzione che comprime, il risultato lo appendo a RES
//      se si allora lo appendo a SUCCESSIONE
//      se no metto CURR dentro CHAR, poi azzerro SUCCESSIONE e ci metto dentro CHAR
// ritorno RES

// pseudo codice per solo la compressione
// ricevo in ingresso una seuccessione di cartteri uguali
// mi creo un contatore che e uguale alla lunghezza della stringa
// concateno una lettera della stringa con il contatore
// ritorno la concatenazione

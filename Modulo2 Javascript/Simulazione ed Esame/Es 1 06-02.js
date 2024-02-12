//  scrivere una funzione che prende in ingresso un array di stringhe, la funzione deve ritornare la lunghezza dell'ultima stringa.
// Tenere in considerazione che possono esserci spazi o punteggiatura alla fine della stringa, che non vanno conteggiati.

function lastStringLength(array) {
  let longest = "";
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    let current = array[i].length;
    if (current >= longest.length) {
      longest = array[i];
      num = longest.length;
    }
  }
  return num;
}
console.log(
  lastStringLength(["ciao", "oggi", "e'", "una", "bella", "giornata"])
);

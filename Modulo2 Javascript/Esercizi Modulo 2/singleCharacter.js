// date due stringhe che si differenziano di un solo carattere, ritornare quel carattere
//NB il carattere e' in aggiunta alla seconda stringa

function singleCharacter(stringa1, stringa2) {
  for (let i = 0; i < stringa2.length; i++) {
    if (stringa1[i] !== stringa2[i]) {
      return stringa2[i];
    }
  }
  return "nothing";
}
console.log(singleCharacter("cane", "xcane"));

// implementare pseudo codice di Alberto

// scrivere una funzione chiamata countNoSpaces che
// data una stringa come parametro
// ritorni un intero n che rappresenti i caratteri presenti nella
// string passata, senza contare gli spazi

function countNoSpaces(string) {
  let n = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i] && string[i] != " ") {
      n++;
    }
  }
  return n;
}

console.log(countNoSpaces("chi siamo siamo"));

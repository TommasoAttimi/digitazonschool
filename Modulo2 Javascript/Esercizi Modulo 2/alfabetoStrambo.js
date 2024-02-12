// scrivere una funzione chiamata alfabetoStrambo che
// data una stringa in ingresso
// ritorni una copia della stringa modificata come negli esempi

// ad esempio con "ciao a tutti" ritorna "ciaoro ara tuttiri"
// ad esempio con "" ritorna ""
// ad esempio con "ad esempio" ritorna "ad esempioro"
// ad esempio con "funziona solo con vocali alla fine" ritorna
// "funzionara soloro con vocaliri allara finere"

function alfabetoStrambo(s) {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    newString = newString + s[i];
    if (
      (s[i] == "o" && s[i + 1] == " ") ||
      (s[i] == s[s.length - 1] && s[i] == "o")
    ) {
      newString = newString + "ro";
    } else if (
      (s[i] == "a" && s[i + 1] == " ") ||
      (s[i] == s[s.length - 1] && s[i] == "a")
    ) {
      newString = newString + "ra";
    } else if (
      (s[i] == "i" && s[i + 1] == " ") ||
      (s[i] == s[s.length - 1] && s[i] == "i")
    ) {
      newString = newString + "ri";
    } else if (
      (s[i] == "u" && s[i + 1] == " ") ||
      (s[i] == s[s.length - 1] && s[i] == "u")
    ) {
      newString = newString + "ru";
    } else if (
      (s[i] == "e" && s[i + 1] == " ") ||
      (s[i] == s[s.length - 1] && s[i] == "e")
    ) {
      newString = newString + "re";
    }
  }
  return newString;
}
console.log(alfabetoStrambo("prova a scrivere una frase"));

// Da risolvere

// scrivere una funzione chiamata stringConcat che 
// date due stringhe 
// ritorni una stringa risultato della concatenazione 
// delle due, con in mezzo il simbolo #

// ad esempio per "link" e "query" ritorna "link#query"

function stringConcat (s1, s2) {
    return s1 + "#" + s2
}
let concatenazione = stringConcat("ciao", "prova")
console.log(concatenazione)

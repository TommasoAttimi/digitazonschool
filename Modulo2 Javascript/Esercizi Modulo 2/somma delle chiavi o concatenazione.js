// // scrivere del codice che data una mappa ritorna la somma di tutte le sue chiavi, o nel caso fossero stringhe, la concatenazione

let map = {
    a: 1,
    b: 3,
    c:4,
    d:80
}
let somma = 0
for (let i = 0; i < 4; i++) {
somma += Object.values(map)
}
console.log(somma)


// let map = {
//     a: 1,
//     b: "prova",
//     c:4,
//     d:"ciao"
// }
// let concatenazione = ""
// for (let i = 0; i < 4; i++) {
// concatenazione = Object.values(map)
// }
// console.log(concatenazione)
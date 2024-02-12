// variabile n = 4
// stampa a video
//1
//2
//3
//4 3 2 1

// let n = 4
// let numero = 0
// for (let i = 0; i < n; i++) {
//     numero = numero + 1
//     if (numero == n) {
//         let riga = "" 
//         for ( let i = n; i >=1; i--) {
//             riga = riga + i
//         }
//         console.log(riga)
//     } else {
//         console.log(numero)
//     }
// }

// let n = 4
// let numero = 0
// for (let i = 0; i < n - 1; i++) {
//     numero = numero + 1
//     console.log(numero)
// }

// let riga = "" 
// for ( let i = n; i >=1; i--) {
//     riga = riga + i
// }
// console.log(riga)

let righe = ""
let n = 4
let numero = 0
for (let i = 0; i < n - 1; i++) {
    numero = numero + 1
    righe = righe + numero + "\n"
}
let riga = "" 
for ( let i = n; i >=1; i--) {
    riga = riga + i
}
righe = righe + riga
console.log(righe)

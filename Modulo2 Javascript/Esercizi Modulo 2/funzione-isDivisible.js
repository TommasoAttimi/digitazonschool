// scrivere una funzione chiamata isDivisible che 
// dato un numero a e un numero b
// ritorni true se a e' divisibile per b, false altrimenti

// function isDivisible (a,b) {
//     if (a % b ==0) {
//         return true
//     }
//     return false
// }
// let statement = isDivisible(6,3)
// console.log(statement)


// ma meglio
function isDivisible (a,b) {
   return a % b == 0
}
let statement = isDivisible(7,3)
console.log(statement)
// controllare se il numero di carattere è di numero pari
// controllare che il numero di carattere aperte e di carattere chiuse sia uguale
// controllare che la carattere di partenza si aperta e la carattere finale sia chiusa, altrimenti false
// ad ogni carattere aperta, push e pop quando si incontra una chiusa
// alla fine della string.lenght se conteggio a 0 allora true

// let stringa = ["(()"]
// let open = "("
// let closed = ")"
// let numParentesi = 0
// for (let i=0; i <stringa.length; i++) {
//     if (stringa[0] == open && stringa[stringa.lastIndexOf] == closed) {
//         for (let i=0; i < stringa.length; i++) {
//         if(stringa[i] == open) {
//             numParentesi++
//             //numParentesi.push()
//          }
//          else if (stringa[i] == closed) {
//             numParentesi--
//             //numParentesi.pop()
//          }
//         }
//     }
// }
// console.log(numParentesi)



//Luca
let input = ")(())"
let bilanciate = 0
let corretta = true
for (let i = 0; i, input.length; i++) {
    let carattere = input[i]
    if (carattere == "(") {
        bilanciate++
    }
    else {
        if (bilanciate > 0 ) {
            bilanciate--
        }
        else {
            corretta = false
        }
    }
}
console.log(corretta)

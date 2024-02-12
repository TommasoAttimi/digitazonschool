// data una stringa ritornare un array che contiene tutte le singole lettere, quindi ad esempio "ciao" => ["c","i","a","o"]

function arrayDaStringa(stringa) {
    let array = []
for (let i = 0; i < stringa.length; i++) {
    array.push(stringa[i])
}
return array
}
console.log(arrayDaStringa("ciao"))


// Alessandra
// function divisione(stringa) {
//     return stringa.split("")
// }
// console.log(divisione("ciao"))
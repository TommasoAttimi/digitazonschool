// scrivere una funzione che prende in ingresso un array di array
// deve ritornare la versione "appiattita" dell'array
// es [[1],[2],[3]] allora [1,2,3]
// [[1,2,3,4]] allora [1,2,3,4]
// [[1,2], [3,4]] allora [1,2,3,4]

// scrivo una funzione che accetta un array
// iniz una variabile che conterra l'array risultante
// ciclo sugli elementi dell'array
//   prendo l'array corrente
//   ciclo sugli elementi dell'array corrent
//   per ogni elemento faccio push di quell'elemento nell'array finale
// ritorno l'array finale

// Alberto
function flatten(arr){
    let result = []
    for (let i=0; i<arr.length;i++){
        let current = arr[i]
        for (let j=0; j < current.length;j++){
            let element = current[j]
            result.push(current[j])
        }
    }
    return result
}
let risultato = flatten([[1,2] [3,4]])
console.log(risultato)


// Prove mie
// function simplify(firstArray) {
//     let newArray = []
//     for (let i=0; i<firstArray.length; i++){
//         firstArray[i]
//         for (let i=0; i<firstArray.length;i++){
//             newArray.push(firstArray[i])
//         }
//     }
//     return newArray
// }
// let risultato = simplify([[1,2] [3,4]])
// console.log(risultato)


// function getItems(array1){
//     let element = []
//     for (let i=0; i<array1.length;i++){
//         element.push(array1[i])
//     }
//     return element
// }

// function simplify(array) {
//     let newArray =[]
//     for (let i=0; i<array.length;i++){
//         newArray.push(getItems)
//     }
//     return newArray
// }
// let risultato = simplify([[1,2] [3,4]])
// console.log(risultato)

// function simplify(array) {
//     let newArray =[]
//     for (let i=0; i<array.length;i++){
//         newArray.push(array[i])
//     }
//     return newArray
// }
// let risultato = simplify([[1,2] [3,4]])
// console.log(risultato)


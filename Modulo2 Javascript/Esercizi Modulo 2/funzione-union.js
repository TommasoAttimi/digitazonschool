// scrivere una funzione chiamata union che 
// dati due array di interi
// ritorni un array che rappresenti l'unione di questi array

// ad esempio con [1,2,3] e [4,5,6] ritorna [1,2,3,4,5,6]

// mia prova
// function union(array1, array2) {
//     let newArray = []
//     for (let i = 1; i<=array1.length + array2.length;i++) {
//         newArray.push(array1[i] + array2[i])
//     }
//     return newArray
// }
// let finale = union([1,2,3], [4,4,4])
// console.log(finale)

// alberto
function union(a1, a2) {
    for (let i = 0; i < a2.length; i++) {
        a1.push(a2[i])
    }
    return a1
}

//oppure
function union(a1, a2) {
    let arr = []   
    for (let i = 0; i < a1.length; i++) {
        arr.push(a1[i])
    }
    for (let i = 0; i < a2.length; i++) {
        arr.push(a2[i])
    }
    return arr
}
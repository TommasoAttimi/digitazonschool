// dato un array creare una matrice con n copie dell'array, dove n e' la lunghezza dell'array

// creo array [1,2,3,4]
// calcolo lunghezza array
// creo newArray per la matrice


function matrix(array) {
    let newArray = []
    for (let i = 0; i<array.length; i++) {
       newArray.push(array[i])
    }
    return newArray
}

let result = matrix([1,2,3,4])
console.log(result)
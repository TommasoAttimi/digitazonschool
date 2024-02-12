// dato un oggetto e un array ritornare true se tutte le chiavi dell'oggetto sono presenti nell'array,
// false altrimenti (l'array potrebbe contenere piu' elementi di quante sono le chiavi dell'oggetto)


function contains(array,n) {
    for (let i=0; i < array.length; i++) {
        if (array[i] == n){
            return true
        }
    }
    return false
}

function chiavi(array, oggetto){
    let keys = Object.keys(oggetto)
    for (let i=0; i< array.length; i++) {
        if (contains(array[i], keys)) {
            return true
        }
    }
    return false
}

let result = chiavi(["a", "b", "c", "d"], {a:1, b:2})
console.log(result)
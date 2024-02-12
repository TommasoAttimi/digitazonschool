// scrivere una funzione intersection che dati due array di interi
// riotrni un array che rappresenti l'intersezione di questi array
// es [1,2,3][4,5,6] ritorna []
// [1,2] [2,3] ritorna [2]

function contains(array,n) {
    for (let i=0; i < array.length; i++) {
        if (array[i] ==n){
            return true
        }
    }
    return false
}

function intersection(arr1, arr2) {
    let int = []
    for (let i= 0; i<arr1.length; i++){
        let element = arr1[i]
        if(contains(arr2, element)) {
            int.push(arr1[i])
        }
    }
    return int
}
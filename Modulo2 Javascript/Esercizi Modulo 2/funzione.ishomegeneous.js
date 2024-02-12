// scrivere una funzione isHomogeneous che dato un array di elementi in ingresso
// ritorni true se tutti dello stesso tipo, false altrimenti

function isHomegeneous(arr){
    if(arr.length ==0) {
        return true
    }
    let t = typeof arr[0]
    for (let i=1; i< arr.length;i++){
        if(typeof arr[i] !==t){
            return false
        }
    }
    return true
}
// scrivere una funzione chiamata algebra che 
// dato un array di interi
// ritorni il prodotto degli elementi di indice pari a cui vengono
// sottratti tutti gli elementi di indice dispari

// ad esempio: con [1, 2, 3, 4] ritornerebbe 3 - 6 = -3

// if i is even, then sum the values
// else if i is odd then sum the values

function algebraEven (array) {
    let mul = 1
for (let i=0; i<array.length; i++) {
    if (i%2==0){
   mul = mul * array[i]
    }
    }
    return mul
}

function algebraOdd (array) {
    let sottrazione = 1
for (let i=0; i<array.length; i++) {
    if (i%2!=0){
   sottrazione = sottrazione + array[i]
    }
    }
    return sottrazione
}

let even = algebraEven([1,2,3,4])
let odd = algebraOdd([1,2,3,4])
console.log(even-odd)



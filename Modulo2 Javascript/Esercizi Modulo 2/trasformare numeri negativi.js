// array di numeri, anche negativi, ritornare un nuovo array con tutti numeri poisitivi

let array = [-1, 2 , -4, 7]
let arrayOut = []
for (let i=0; i <array.length; i++) {
    if (array[i] < 0) {
        arrayOut[i] = array[i] * (-1)
    }
    else {
        arrayOut[i] = array[i]
    }
}
console.log(arrayOut)


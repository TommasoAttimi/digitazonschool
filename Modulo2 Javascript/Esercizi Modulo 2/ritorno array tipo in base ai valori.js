// dato un array eterogeneo (booleani, stringhe, etc), ritornare un array che contenga il tipo relativo ai valori

let array = [ 1, "2", true, 74]
for (let i=0; i< array.length; i++) {
array[i] = typeof[i]
}
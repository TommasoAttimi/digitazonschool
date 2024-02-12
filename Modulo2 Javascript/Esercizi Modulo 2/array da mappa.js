// scrivere del codice che partendo da una mappa ad esempio  { a: 1, b: 5, c: 74, d: 32 } ottenga l'array contenente solo i valori, quindi per l'esempio otterrebbe [1, 5, 74, 32 ]

let map = {
    a:1,
    b:5,
    c:74,
    d:32
}
let array = Object.values(map)
console.log(array)
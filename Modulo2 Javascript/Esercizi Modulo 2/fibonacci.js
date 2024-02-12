// dato un numero contenuto in una variabile `n` calcolare il relativo numero di Fibonacci (https://it.wikipedia.org/wiki/Successione_di_Fibonacci), ad esempio se `n` fosse 1 allora avremmo 0, se `n` fosse 3 avremmo 1, se `n` fosse 5 avremmo 3, etc.


let nMenoUno = 1
let nMenoDue = 0
for (let i = 0; i <= 100; i++) {
    let fibonacci = nMenoUno + nMenoDue
    console.log(fibonacci)
    nMenoDue = nMenoUno
    nMenoUno = fibonacci
}
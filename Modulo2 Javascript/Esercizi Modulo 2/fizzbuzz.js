/* scrivere un ciclo for da 1 a 100, quando il numero corrente e' divisibile per 3 deve stampare a video `"fizz"`, quando il numero corrente e' divisibile per 5 deve stampare a video `"buzz"`, quando il numero corrente e' divisibile per 3 e per 5 deve stampare a video `"fizzbuzz"`, quando il numero non e' divisibile per nessuno di questi deve stampare a video il numero stesso
esempio di stampa per i primi numeri:
1
2
fizz
4
buzz
fizz
7
...
14
fizzbuzz
*/


for (let i = 1; i <= 100; i++) {
    let n = ""
    n = n + i
    if (i % 3 === 0) {
        console.log("fizz")
    }
    else {
        console.log(n)
    }
    if (i % 5 === 0) {
        console.log("buzz")
    }
    else {
        console.log(n)
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
    }
    else {
        console.log(n)
    }
}
// dato un numero scelto a caso
// stampare un quadrato di numeri
// come da esempio
// per n 5
// 1 2 3 4 5
// 5 4 3 2 1
// 1 2 3 4 5
// 5 4 3 2 1
// 1 2 3 4 5

let n = 5
let precedentePartivaDa1 = false
for (let i = 0; i < n; i++) {
    let riga = ""
    if (precedentePartivaDa1) {
        for ( let i = n; i >= 1; i--) {
            riga = riga + i + " "
        }
    } else {
        for ( let i = 1; i <= n; i++) {
            riga = riga + i + " "
        }
    }
    console.log(riga)

    precedentePartivaDa1 = !precedentePartivaDa1
}
//1 2 3 4
//2     3
//3     2
//4 3 2 1

let riga = ""
let n = 9
for (let i = 1; i <= n; i++) {
    riga = riga + i
}

console.log(riga)

let sinistra = 2
let destra = n - 1
for (let i = 0; i < n - 2; i++) {
    let spazi = ""
    for (let i = 0; i < n - 2; i++){
        spazi = spazi + " "
    }

console.log(sinistra + spazi + destra)

    sinistra = sinistra + 1
    destra = destra - 1
}


riga = ""
for (let i = n; i >= 1; i--) {
    riga = riga + i

}

console.log(riga)

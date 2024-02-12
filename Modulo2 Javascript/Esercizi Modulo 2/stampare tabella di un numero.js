/*mia corretta*/

let tabellina = 1
let stringa = ""
let n = 1
for (let i = n; i <= 10; i++) {
    tabellina = i * 5
    stringa = i + "*5" + "=" + tabellina
    console.log(stringa)
}

/* soluzione Alberto

let n = 5
for ( let i = 0; i <=10; i++) {
    let riga = i + " * " + n + " = " + (n * i)
    console.log(riga)
}
*/

/*correzione chatgtp

let stringa = "";
let n = 1;
for (let i = n; i <= 10; i++) {
    let tabellina = i * 5;
    stringa = i + " * 5 = " + tabellina;
    console.log(stringa);
}
*/
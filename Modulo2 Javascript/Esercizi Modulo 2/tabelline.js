// scrivere del codice che stampi a video tutte le tabelline dei numeri da 0 a 10, quindi la tabellina dello 0, dell'1, del 2, etc, seguendo obbligatoriamente questo formato:
// 0 * 0 = 0
// 1 * 0 = 0
// 2 * 0 = 0 

/* let moltiplicazione = ""
for (let i = 1; i <= 10; i++) {
    let somma = ""
    let tabellina = ""
    somma = somma + i
    moltiplicazione = somma * i
    tabellina = somma + " " + "*" + " " + i + " " + "=" + " " + moltiplicazione
    console.log(tabellina)
} */

for (let i = 0; i <= 10; i++) {
    for (let n = 0 ; n<= 10; n++) {
        let sommasx = ""
        sommasx = sommasx + i
        let stringa = ""
        stringa = n + " " + "*" + " " + sommasx + " " + "=" + " " + (n * i)
        console.log(stringa)
    }
}
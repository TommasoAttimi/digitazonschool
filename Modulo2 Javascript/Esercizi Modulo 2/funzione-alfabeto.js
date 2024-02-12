// data una stringa di lettere dell'alfabeto italiano tutte in minuscolo creare
// una nuova stringa con il valore  decimale (colonna Dec)
// preso da qui https://www.asciitable.com/

// creo function con stringa
// creo variabile newString
// creo mappa con chiavi le lettere e valori i dec
// prendere array[i] e prendere il valore corrispettivo da mappa
// push nella nuova stringa

// function alfabeto(stringa) {
//     let decimal = []
//     let map = {
//         a:97,
//         b:98,
//         c:99,
//         d:100,
//         e:101
//     }
//     for (let i=0; i< stringa.length; i++) {
//         if (stringa[i] == Object.keys) {
//             decimal.push(Object.values)
//         }
//     }
//     return decimal
// }

// let result = alfabeto("abcde")
// console.log(result)

function alfabeto(stringa) {
    let decimal = [];
    let map = {
        a: 97,
        b: 98,
        c: 99,
        d: 100,
        e: 101
    };

    for (let i = 0; i < stringa.length; i++) {
        if (stringa[i] = map) {
            decimal.push(map[stringa[i]]);
        }
    }

    return decimal;
}

let result = alfabeto("bed");
console.log(result);
// Tentativo 1
// let stringa = "ae"
// let array = [stringa]
// let vocali = "a" && "e" && "i" && "o" && "u"
// for (i = 0; i<array.length; i++) {
//     if (stringa === vocali) {
//         console.log("solo vocali")
//     }
//     else {
//         console.log("mix")
//     }
// }

// Tentativo 2
// let stringa = "ciao"
// let array = [stringa]
// let vocali = ["a", "e", "i", "o", "u"]
// for (i = 0; i<array.length; i++) {
//     if (array[i] == !vocali[i]) {
//         console.log("mix")
//     }
//     else {
//         console.log("solo vocali")
//     }
// }

// Tentativo 2 circa soluzionato
// let stringa = "ciao"
// let array = [stringa]
// let vocali = ["a", "e", "i", "o", "u"]
// let numeroConsonanti = 0
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < vocali.length; i++) {
//         if (array[i] == !vocali[i]) {
//             numeroConsonanti = numeroConsonanti + 1
//         }
//     }
// }
// if (numeroConsonanti > 0) {
//     console.log("mix")
// }
// else {
//     console.log("solo vocali")
// }

// Tentativo 1 funzionante
// let stringa = "prova"
// let numeroConsonanti = 0
// for (i = 0; i<stringa.length; i++) {
//     let vocale = stringa[i]
//     if (!(vocale === "a" || vocale === "e" || vocale === "i" || vocale === "o" || vocale === "u")) {
//         numeroConsonanti = numeroConsonanti + 1
//     }
// }
// if (numeroConsonanti > 0) {
//     console.log("mix")
// }
// else {
//     console.log("solo vocali")
// }


// Soluzione Alberto
// scrivere del codice che stampi "solo vocali" se nella stringa ci sono
// solo vocali, "mix" altrimenti


let input = "aeioc"

// 1)
// salviamo il numero di vocali e alla fine del lavoro controlleremo se
// il numero di vocali e' uguale al numero di lettere

let vocali = 0
for (let i = 0; i < input.length; i++) {
  if (input[i] == "a" || input[i] == "e" ||input[i] == "i" ||input[i] == "o" || input[i] == "u") {
    vocali = vocali + 1
    // vocali++
    // vocali += 1
  }
}

if (vocali == input.length) {
  console.log("solo vocali")
} else {
  console.log("mix")
}


// 2)
// creo una variabile che contiene il numero di lettere nella parola
// ciclo sulla parola
// ogni volta che trovo una vocale decremento la variabile
// alla fine se la variabile e' 0 la parola conteneva solo vocali

let numLettere = input.length
for (let i = 0; i < input.length; i++) {
  if (input[i] == "a" || input[i] == "e" ||input[i] == "i" ||input[i] == "o" || input[i] == "u") {
    numLettere--
  }
}

if (numLettere == 0) {
  console.log("solo vocali")
} else {
  console.log("mix")
}
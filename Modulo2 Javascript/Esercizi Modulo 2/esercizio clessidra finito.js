let totale = ""
let n = 15
let numeroDiAsterischi = n
let numeroSpazi = 0
for (let i = 0; i < (n + 1) / 2; i++) {
    let spazi = ""
    for (let i = 0; i < numeroSpazi; i++) {
        spazi = spazi + " "
    }
    let asterischi = ""
    for (let i = 0; i < numeroDiAsterischi; i++) {
        asterischi = asterischi + "X"

    }
    console.log(spazi + asterischi)
    numeroDiAsterischi = numeroDiAsterischi - 2
    numeroSpazi = numeroSpazi + 1


}
numeroSpazi = numeroSpazi - 2
numeroDiAsterischi = 3
for (let i = 0; i < ((n + 1) / 2) - 1; i++) {
    let spazi = ""
    for (let i = 0; i < numeroSpazi; i++) {
        spazi = spazi + " "
    }
    let asterischi = ""
    for (let i = 0; i < numeroDiAsterischi; i++) {
        asterischi = asterischi + "X"
    }
    console.log(spazi + asterischi)
    numeroSpazi = numeroSpazi - 1
    numeroDiAsterischi = numeroDiAsterischi + 2
}
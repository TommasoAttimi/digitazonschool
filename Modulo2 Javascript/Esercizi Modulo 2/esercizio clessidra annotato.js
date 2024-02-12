// può esistere una clessidra solo se dispari
// dichiariamo una variabile n che indica la larghezza della clessidra
let n = 5

//creiamo la parte superiore della clessidra

// dichiariamo un'altra variabile per nonn cambiare n
let numeroDiAsterischi = n
// (n + 1 ) / 2 indica il numero delle righe
for (let i = 0; i < (n + 1) / 2; i++) {
  // viene dichiarata all'interno del for definito alla riga 6 in modo che sia riinizializzata ad ogni iterazione
  let asterischi = ""
  for (let i = 0; i < numeroDiAsterischi; i++) {
    asterischi = asterischi + "X"
  }
  console.log(asterischi)
  // diminuiamo il numero di asterischi ad ogni iterazione per creare nuove ricghe con asterichi meno 2
  numeroDiAsterischi = numeroDiAsterischi - 2
}

//creiamo la parte inferiore della clessidra
numeroDiAsterischi = 3
// (n + 1)/2 - 1 indica che creiamo due righe meno 1
for (let i = 0; i < ((n + 1) / 2) - 1; i++) {
  let asterischi = ""
  for (let i = 0; i < numeroDiAsterischi; i++) {
    asterischi = asterischi + "X"
  }
  console.log(asterischi)
  // indica che la clessidra cresce di 2
  numeroDiAsterischi = numeroDiAsterischi + 2
}
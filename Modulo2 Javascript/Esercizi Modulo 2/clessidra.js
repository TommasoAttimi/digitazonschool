/* disegnare una clessidra con solo la parte inferiore piena
```
*******
 *   *
  * *
   *
  ***
 *****
*******
``` */

let grandezza = 7
let numeroasterischi = grandezza
for (let i = 1; i <= grandezza; i++) {
    numeroasterischi = numeroasterischi + i
}
console.log(numeroasterischi)
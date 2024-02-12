// dato un array di singole lettere metterle assieme a formare una stringa, quindi ad esempio ["c","i","a","o"] => "ciao"

function stringaDaArray(arr) {
    let stringa = ""
for (let i = 0; i < arr.length; i++) {
    stringa += arr[i]
}
return stringa
}
console.log(stringaDaArray(["c", "i", "a", "o"]))

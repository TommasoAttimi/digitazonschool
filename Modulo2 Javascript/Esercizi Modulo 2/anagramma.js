// scrivere una funzione che prende in ingresso 2 stringhe, la funzione ritorna
// true se la prima e anagramma della seconda, false altrimenti
// es "abba" "baab" => true
// "1234" "34" => false

// function anagramma(str1, str2) {
//     for (let i = 0; i < str1.length; i++) {
//       if (str1.length == str2.length && str2.indexOf(str1[i]) > -1) {
//         return true;
//       }
//     }
//   return false;
// }
// console.log(anagramma("abba", "baab"));

// Alberto
function isAnagram(s1, s2) {
  let occ1 = occurrencies(s1);
  let occ2 = occurrencies(s2);
  if (Object.keys(occ1).length != Object.keys(occ2).length) {
    return false;
  }
  let keys1 = Object.keys(occ1);
  for (let i = 0; i < keys1.length; i++) {
    let key = keys1[i];
    if (occ1[key] != occ2[key]) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("aaaa", "aeee"));

// Alberto
function occurrencies(string) {
  let occ = {};
  for (let i = 0; i < string.length; i++) {
    let key = string[i];
    if (occ[key]) {
      occ[key] = occ[key] + 1;
    } else {
      occ[key] = 1;
    }
  }
  return occ;
}

// function occorrenze(str) {
//   let map = {};
//   let carattere = Object.keys(map);
//   let occorrenza = Object.values(map);
//   for (let i = 0; i < str.length; i++) {
//     carattere = str[i];
//     occorrenza = map[carattere];
//     if (carattere) {
//       occorrenza = map[carattere]++;
//     } else {
//       map[carattere] = 1;
//     }
//   }
//   return map;
// }
// console.log(occorrenze("aeee"));

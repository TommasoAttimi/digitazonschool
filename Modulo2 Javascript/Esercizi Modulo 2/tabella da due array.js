function tabella(arr1, arr2) {
  let righe = "";
  let spazi = "";
  for (let i = 0; i < arr1.length; i++) {
    righe += arr1[i] + " " + arr2[i] + "\n";
  }
  console.log(righe);
}
console.log(
  tabella(
    ["In", "house", "R'lyeh", "Cthulhu", "dreaming"],
    ["his", "at", "dead", "waits"]
  )
);

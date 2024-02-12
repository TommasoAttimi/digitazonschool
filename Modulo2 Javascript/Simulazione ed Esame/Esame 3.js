// Dato un array di stringhe ognuna contenente una sola lettera ritornare un nuovo array che contenga la distanza tra lettere vicine.
// Ad esempio per ["a", "c", "f"] deve ritornare [2, 3] perche' la "a" dista 2 dalla "c", la "c" dista 3 dalla "f".
// Ad esempio per ["e", "o", "z"] deve ritornare [8, 9] perche' la "e" dista 8 dalla "o", la "o" dista 9 dalla "z".
// Punti extra per array tipo ["e", "o", "z", "f", "h"] che come vedete ricominciano daccapo.

function letterDistance(array) {
  let alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    x: 22,
    y: 23,
    z: 24,
  };
  let newArray = [];
  let key = Object.keys(alphabet);
  let value = Object.values(alphabet);
  for (let i = 0; i < array.length - 1; i++) {
    let currentLetter = key.indexOf(array[i]);
    let nextLetter = key.indexOf(array[i + 1]);
    let distance = value[nextLetter] - value[currentLetter];
    if (value[currentLetter] == 24) {
      distance = value[nextLetter] - value[currentLetter] + 24;
    }
    newArray.push(distance);
  }
  return newArray;
}
console.log(letterDistance(["e", "o", "z", "b", "z"]));

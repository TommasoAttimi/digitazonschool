// scrivere una funzione che dato un array che contiene indirizzi email stampi i 3 domini piu' comuni e i relativi indirizzi email nel seguente modo:
// Assumendo che questo sia l'array di indirizzi email e assumendo che una email sia sempre in questa forma: USERNAME@DOMAIN.TLD (Top Level Domain)
// [
//   "edmond.dantes@marsiglia.fr",
//   "edmond.dantes@chateudif.fr"
//   "zatarra@luigivampa.fr",
//   "diego@luigivampa.fr",
//   "count.montecristo@marsiglia.fr",
//   "mercedes@marsiglia.fr",
//   "monsieur.dorleac@chateudif.fr",
//   "fernando.mondego@morcef.fr",
// ]

// ...questo sarebbe l'output (notate che l'ordine con cui compaiono gli indirizzi email deve essere lo stesso con cui compaiono nell'array originale):
// marsiglia.fr
//     edmond.dantes@marsiglia.fr
//     count.montecristo@marsiglia.fr
//     mercedes@marsiglia.fr
// luigivampa.fr
//     zatarra@luigivampa.fr
//     diego@luigivampa.fr
// chateudif.fr
//     edmond.dantes@chateudif.fr
//     monsieur.dorleac@chateudif.fr
// ``

function getDomain(array) {
  let contatore = {};
  for (let i = 0; i < array.length; i++) {
    let chiocciola = array[i].indexOf("@");
    let domain = array[i].substring(chiocciola + 1);
    if (contatore[domain]) {
      contatore[domain].push(array[i]);
    } else {
      contatore[domain] = [array[i]];
    }
  }
  //   if (Object.entries(contatore) > ) {}
  let valori = Object.entries(contatore);
  for (let i = 0; i < valori.length; i++) {
    for (let j = 0; j < valori[i].length; j++) {
      console.log(valori[i][j]);
    }
  }
}
console.log(
  getDomain([
    "edmond.dantes@marsiglia.fr",
    "edmond.dantes@chateudif.fr",
    "zatarra@luigivampa.fr",
    "diego@luigivampa.fr",
    "count.montecristo@marsiglia.fr",
    "mercedes@marsiglia.fr",
    "monsieur.dorleac@chateudif.fr",
    "fernando.mondego@morcef.fr",
  ])
);

// Gruppo
let email = [
  "edmond.dantes@marsiglia.fr",
  "edmond.dantes@chateudif.fr",
  "zatarra@luigivampa.fr",
  "diego@luigivampa.fr",
  "count.montecristo@marsiglia.fr",
  "mercedes@marsiglia.fr",
  "monsieur.dorleac@chateudif.fr",
  "fernando.mondego@morcef.fr",
];

function sliceDominio(arr) {
  let dominioMap = {};
  for (let i = 0; i < arr.length; i++) {
    let dividi = arr[i].split("@");
    let dominio = dividi[1];
    let nome = dividi[0];
    if (dominioMap[dominio]) {
      dominioMap[dominio].push(arr[i]);
    } else {
      dominioMap[dominio] = [arr[i]];
    }
  }
  return dominioMap;
}

function domini(arr) {
  let mapDomini = sliceDominio(arr);
  let coppie = Object.entries(mapDomini);
  let nome;
  for (let i = 1; i < coppie.length; i++) {
    if (coppie[i][1].length > coppie[i - 1][1].length) {
      console.log(coppie[i][0]);
      for (let j = 0; j < coppie[i][1].length; j++) {
        nome = " " + " " + coppie[i][1][j];
        console.log(nome);
      }
    } else {
      console.log(coppie[i - 1][0]);
      for (let j = 0; j < coppie[i - 1][1].length; j++) {
        nome = " " + " " + coppie[i - 1][1][j];
        console.log(nome);
      }
    }
  }
}
domini(email);

// Alberto non finito
function createMapping(arr) {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    let domain = arr[i].split("@")[1]; // [1] perche restituisce un array dove con pos1 c'e il dominio dopo la @
    if (!res[domain]) {
      res[domain] = [];
    }
    res[domain].push(arr[i]);
  }
  return res;
}
function getBiggest(mapping) {
  let biggest = mapping[Object.keys()[0]];
  let keys = Object.keys(mapping);
  for (let i = 0; i < keys; i++) {
    if (mapping[keys[i]].length > mapping[biggest].length) {
      biggest = keys[i];
    }
  }
  return biggest;
}
function getBiggestN(mapping, n) {
  let biggest = [];
  for (let i = 0; i < n; i++) {
    let b = getBiggest(mapping);
    if (biggest.indexOf(b) == -1) {
      biggest.push(b);
    }
  }
}

// Data una stringa in questo formato "DD-MM-YYYY" (ad esempio 07-12-1982 oppure 09-02-2024) e un intero positivo,
// considerando la stringa come una data e l'intero come un numero di giorni, incrementare la data del rispettivo numero di giorni.
// Ad esempio per "07-12-1982" e 5 si deve ottenere "12-12-1982"
// Ad esempio per "30-12-2024" e 2 si deve ottenere "01-01-2025"
// Non considerare gli anni bisestili.
// Non si puo' usare l'oggetto Date.

// a str[0] aggiung num
// e ritorno newDate
// se str[1] e uguale a 01,03,05,07,08,10,12 e str[0] >31
// se str[1] uguale a 02 e str[0] >28
// se str[1] uguale a 04,06,09,11 e str[0] > 30
//   aumento anche str[1] di 1
// se mese > 12, allora mese torna a 1 e anno + 1

function dateIncrease(string, num) {
  let pezzi = string.split("-");
  let day = parseInt(pezzi[0]);
  let month = parseInt(pezzi[1]);
  let year = parseInt(pezzi[2]);
  let newDate = day + num + "-" + month + "-" + year;
  for (let i = 0; i < string.length; i++) {
    if (
      day + num > 31 &&
      (month == 01 ||
        month == 03 ||
        month == 05 ||
        month == 07 ||
        month == 08 ||
        month == 10 ||
        month == 12)
    ) {
      newDate = day + num - 31 + "-" + (month + 01) + "-" + year;
      if (month + 01 > 12) {
        newDate = day + num - 31 + "-" + (month + 1 - 12) + "-" + (year + 1);
      }
    }
    if (
      day + num > 30 &&
      (month == 04 || month == 06 || month == 10 || month == 11)
    ) {
      newDate = day + num - 30 + "-" + (month + 01) + "-" + year;
      if (month + 01 > 12) {
        newDate = day + num - 30 + "-" + (month + 1 - 12) + "-" + (year + 1);
      }
    }

    if (day + num > 28 && month == 02) {
      newDate = day + num - 28 + "-" + (month + 01) + "-" + year;
      if (month + 01 > 12) {
        newDate = day + num - 28 + "-" + (month + 1 - 12) + "-" + (year + 1);
      }
    }
  }
  return newDate;
}
console.log(dateIncrease("17-02-1982", 20));

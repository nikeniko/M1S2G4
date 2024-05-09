/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  const result = l1 * l2;
  return result;
}

const l1 = 10;
const l2 = 20;
const rectangleArea = area(l1, l2);
console.log("il risultato dell'area del rettangolo :", rectangleArea);

function area2(L1 = 10, L2 = 20) {
  const result2 = L1 * L2;
  return result2;
}

const rectangleArea2 = area2();
console.log("il risultato dell'area del rettangolo 2 :", rectangleArea2);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1 = 7, num2 = 8) {
  let result = num1 + num2;
  if ((result = num1 + num2)) {
    result *= 3;
  } else {
    result = 32;
  }
  return result;
}

console.log(crazySum());

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num1 = 78, num2 = 20) {
  let result = Math.abs(num1 - num2);
  if (result > 19) {
    result *= 3;
  }
  return result;
}

const difference = crazyDiff();
console.log("la differenza é;", difference);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n = 56) {
  let result = n;
  switch (true) {
    case result < 20:
      console.log("il risultato è minore di 20", (result = false));
      break;
    case result > 20 && result <= 100:
      console.log(
        "il risultato è maggiore di 20 o uguale a 100",
        (result = true)
      );
      break;
    case result > 100 && result < 400:
      console.log("il risultato è più di 100 ma meno di 400", (result = falso));

      break;
    case (result = 400):
      console.log("il risultato è 400", (result = true));
      break;
    default:
      result > 400;
      console.log("il risultato è maggiore di 400", (result = false));
      break;
  }
  return result;
}

boundary();

function boundary2(n) {
  return (n >= 20 && n <= 100) || n === 400;
}

console.log(boundary2(10));
console.log(boundary2(30));
console.log(boundary2(120));
console.log(boundary2(400));
console.log(boundary2(700));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(G = "Gigi") {
  let result = G + " EPICODE";
  return result;
}

const Messaggio = epify();

console.log(Messaggio);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(a) {
  return a % 3 === 0 || a % 7 === 0;
}

console.log(check3and7(21));
console.log(check3and7(33));
console.log(check3and7(70));
console.log(check3and7(22));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(E = "EPICODE") {
  return E.split("").reverse().join("");
}

console.log(reverseString());

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(Stringhe = "ciao mi chiamo Gigi!") {
  return Stringhe.split(" ") // divide in "ciao" "mi" "chiamo" "Gigi"
    .map(
      // creà un array con gli elementi di "Stringhe"
      (parole) => parole.charAt(0).toLocaleUpperCase() + parole.slice(1)
    ) // "parole" stringa con all'interno gli elementi di "Stringhe" parole.charAT(0) prendesolo le prime lettere .toLocaleUpperCase li fa diventare grande + parole.slice(1) aggiunge gli elementi senza la prima lettera
    .join(" ");
}

console.log(upperFirst());

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa = "gianfrancioschio") {
  return stringa.slice(1, -1);
}

console.log(cutString());

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandomme(n) {
  return Array(n) //crea un array con all'interno "undefined"
    .fill() // modifica l'array originale
    .map(() => Math.floor(Math.random() * 11));
}
console.log(giveMeRandomme(7));

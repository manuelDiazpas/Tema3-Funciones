/**3. Escribir en una página web 500 números
 * aleatorios del 1 al 10.000 y que al lado diga si es par o no.
 * Hacer una función flecha que dado un número devuelva “par”
 * si es par o “impar” si es impar.
 */

/**
 * Función flecha
 */

let parImpar = (i) => {
  var pi;

  if (i % 2 == 0 ? (pi = "Par") : (pi = "Impar"));

  return pi;
};

for (t = 0; t < 500; t++) {
  i = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  document.write("<p>" + i + " → " + parImpar(i) + "</p>");
}

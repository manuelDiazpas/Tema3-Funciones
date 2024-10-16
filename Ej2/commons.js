/**2. Crear una función flecha que escriba por pantalla el factorial
 * de un número. El programa debe solicitar al usuario un número mayor
 * o igual que cero. Comprobar que el número es válido.
 * Ejemplo: factorial(5) devuelve 120
 */

/**
 * Función flecha
 */
let factorial = (i) => {
  n = 1;
  for (t = i; t > 0; t--) {
    n *= t;
  }
  return n;
};

var i = Number(prompt("Introduce un número"));
while (i < 0) {
  i = Number(prompt("Número no valido. Pruebe otro"));
}

document.write("<p>El resultado es " + factorial(i) + "</p>");

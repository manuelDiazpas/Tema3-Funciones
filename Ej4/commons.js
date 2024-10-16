/**4. Crear una función flecha que escriba por pantalla 
 * el sumatorio de un número. El programa debe solicitar al
usuario un número mayor que 0. Comprobar que el número es válido.
Ejemplo: sumatorio de 5 es: 5+4+3+2+1 = 15
 */

/**
 * Función flecha
 */
let sumatorio = (num) => {
  suma = 0;
  for (i = num; i > 0; i--) {
    suma += i;
  }
  return suma;
};

var numero = Number(prompt("Introduce un número"));
while (numero < 0) {
  numero = Number(
    prompt("Valor no valido. Debe de ser un número mayor que 0. Pruebe otro")
  );
}

document.write("<p>El resultado es " + sumatorio(numero) + "</p>");

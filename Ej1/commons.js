/**1. Crear una función que se llame cuadrado. 
 * Que reciba un parámetro y devuelva el cuadrado del número.
1. Con funciones tradicionales
2. Con función anónima
3. Con función flecha.
4. Invocar a las funciones con ejemplos. */

/**
 * Función tradicional
 */
var i = 0;

function cuadrado(i) {
  return Math.pow(i, 2);
}

/**
 * Función anónima
 */
let cuadrado2 = function (i) {
  return Math.pow(i, 2);
};

/**
 * Función flecha
 */
let cuadrado3 = (i) => {
  return Math.pow(i, 2);
};

function calculo(i) {
  document.body.innerHTML += "<p>Tradicional → " + cuadrado(i) + "<p/>";
  document.body.innerHTML += "<p>Anónima → " + cuadrado2(i) + "<p/>";
  document.body.innerHTML += "<p>Flecha → " + cuadrado3(i) + "<p/>";
}

function calculadora() {
  i = document.getElementById("num").value;
  calculo(i);
}

/**5. Crear una función flecha que permita dibujar 
 * una tabla en una página web. 
 * Como parámetros tendrá el numero de filas y de columnas. 
 * Por defecto 10 y 4. También tendrá un tercer parámetro que permite
 * indicar el color del borde, que por defecto será negro.
 * La tabla se crea con un borde de 1 pixel entre cada celda. 
 * El borde exterior tendrá 3 pixeles y 
 * será del mismo color que el borde de las celdas.
 * La tabla ocupará toda la anchura de la página
 * 1) Llamar a la función para crear la tabla con borde negro, 
 * de 10 filas y 4 columnas
 * 2) Llamarla de nuevo para generar la table de 20 filas, 
 * 10 col con borde negro
 * 3) Dibujar 10 tablas de 5 filas y 4 columnas con borde verde.

 */

function crearTabla(fila = 10, columna = 4, color = "black") {
  contenido = `<table style="border-line:1px; border-collapse:collapse; border: 3px solid ${color}">`;
  for (i = 0; i < fila; i++) {
    contenido += "<tr>";
    for (j = 0; j < columna; j++) {
      contenido += `<td style="padding:10px; text-align:center; border: 1px solid ${color}">`;
      contenido += "Fila " + (i + 1) + ", Columna " + (j + 1);
      contenido += "</td>";
    }
    contenido += "</tr>";
  }
  contenido += "</table>";
  document.write(contenido);
}

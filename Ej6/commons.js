/**6. Crear una página con un botón ‘¿Es fin de semana?’
 * Al pulsar el botón se abrirá una ventana de 400x400
 * que mostrará una imagen con carita sonriente si es fin
 * de semana o una carita no sonriente si no es fin de semana.
 * Utilizar funciones flechas en un fichero js independiente.
 * Descargar dos imágenes para poder lanzar el ejercicio.
 */

function finde() {
  var fecha = new Date();
  nuevaVentana = window.open(
    "",
    "Ventana Emergente",
    "width=400px, height=400px"
  );
  nuevaVentana.document.body.innerHTML = fecha.getDay();
  if (fecha.getDay() == 6 || fecha.getDay() == 0) {
    nuevaVentana.document.write(
      `<img src="https://th.bing.com/th/id/OIP.qXt3ROgERPXFcu3QVb7CDQHaGY?w=234&h=203&c=7&r=0&o=5&pid=1.7" alt="Cara feliz">`
    );
  } else {
    nuevaVentana.document.write(
      `<img src="https://www.blogodisea.com/wp-content/uploads/2020/03/gatos-llorando.jpg" alt="Cara Triste" width=100%>`
    );
  }
}

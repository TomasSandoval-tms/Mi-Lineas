function eliminarEspacios() {
  const texto = document.getElementById("texto").value;

  // Quitar todos los espacios
  const textoSinEspacios = texto.replace(/\s+/g, "");

  // Mostrar resultado en el mismo textarea
  document.getElementById("texto").value = textoSinEspacios;
}


function contar() {
  const texto = document.getElementById("texto").value;

  // Quitar todos los espacios (incluye espacios, tabs y saltos de línea)
  const textoSinEspacios = texto.replace(/\s+/g, "");

  // Contar caracteres totales sin espacios
  const cantidadCaracteres = textoSinEspacios.length;

  // Cada 26 caracteres = 1 línea
  const cantidadLineas = Math.ceil(cantidadCaracteres / 26);

  // Mostrar resultados
  let resultadoHTML = "";
  resultadoHTML += `<p><strong>Total de caracteres:</strong> ${cantidadCaracteres}</p>`;
  resultadoHTML += `<p><strong>Total de líneas:</strong> ${cantidadLineas}</p>`;

  document.getElementById("resultado").innerHTML = resultadoHTML;

  // Vaciar el textarea después de calcular
  document.getElementById("texto").value = "";
}

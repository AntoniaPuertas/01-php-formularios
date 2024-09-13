import { validarContrasegna } from "./validarContrasegna.js";
  
  // Ejemplo de uso
  // console.log(validarContrasegna("Abc123!@#")); // true
  // console.log(validarContrasegna("abc123")); // false (falta mayúscula y carácter especial)
  // console.log(validarContrasegna("ABCDEF123!")); // false (falta minúscula)
  // console.log(validarContrasegna("Abcdef123!")); // true
  // console.log(validarContrasegna("Abcaaaa123!")); // false (más de 3 caracteres iguales seguidos)
  // console.log(validarContrasegna("Abc123!@#$%^&*()_+-=")); // false (más de 16 caracteres)

function mostrarErrores(errores){
  let texto = ''
  errores.map(error => {
    texto+= `<p>${error}</p>`;
  })
  return texto;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const mensajeError = document.getElementById('mensajeError');

    form.addEventListener('submit', function(event) {
        let errores = [];

        // Validar nombre
        const nombre = document.getElementById('nombre');
        if (nombre.value.trim() === '') {
            errores.push('El nombre es obligatorio.');
        }

        // Validar correo
        const correo = document.getElementById('correo');
        if (correo.value.trim() === '') {
            errores.push('El correo electrónico es obligatorio.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value)) {
            errores.push('El formato del correo electrónico no es válido.');
        }

        // Validar contraseña
        const pass = document.getElementById('pass');
        if (pass.value === '') {
            errores.push('La contraseña es obligatoria.');
        }else if(!validarContrasegna(pass.value)){
            errores.push('La contraseña no es segura');
        }

        // Validar fecha
        const fecha = document.getElementById('fecha');
        if (fecha.value === '') {
            errores.push('La fecha de antigüedad es obligatoria.');
        }

        // Validar color (opcional)
        const colores = document.querySelectorAll('input[name="eligeColor"]');
        let colorSeleccionado = false;
        colores.forEach(color => {
            if (color.checked) {
                colorSeleccionado = true;
            }
        });
        if (!colorSeleccionado) {
            errores.push('Por favor, selecciona un color.');
        }

        // Validar aceptación de políticas
        const aceptoPoliticas = document.getElementById('aceptoPoliticas');
        if (!aceptoPoliticas.checked) {
            errores.push('Debes aceptar las políticas de privacidad.');
        }

        // Si hay errores, mostrarlos y prevenir el envío del formulario
        if (errores.length > 0) {
            event.preventDefault();
            mensajeError.innerHTML = mostrarErrores(errores)
            mensajeError.classList.remove('d-none'); 
        } else {
            mensajeError.classList.add('d-none');
        }
    });
});
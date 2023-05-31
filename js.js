const textArea = document.querySelector(".encriptador1");
const mensaje = document.querySelector(".encriptador2");

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar(){
    const textoEncriptado = encriptacion(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = ""; //Esto limpia el mensaje desencriptado
    mensaje.style.backgroundImage = "none"; //Limpia la imagen del mensaje encriptado ----------> arreglar esto en el html y css para que la imagen este en el background y desapareszca a la hora de utilizar esto.

}

function encriptacion(stringEncriptador) {
    let matrizCodigo =  [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptador = stringEncriptador.toLowerCase() //toLowerCase convierte todo en minusculas

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptador.includes(matrizCodigo[i][0])) {
            stringEncriptador = stringEncriptador.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])// replaceAll permite sustituir todos los caracteres

        }
    }
    return stringEncriptador;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptacion(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = ""; //Esto limpia el mensaje desencriptado
}


function desencriptacion(stringDesencriptador) {
    let matrizCodigo =  [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptador = stringDesencriptador.toLowerCase() //toLowerCase convierte todo en minusculas

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptador.includes(matrizCodigo[i][1])) {
            stringDesencriptador = stringDesencriptador.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])// replaceAll permite sustituir todos los caracteres

        }
    }
    return stringDesencriptador;

}

// Obtén una referencia al textarea y al botón
const textarea = document.getElementById('textoEncriptado');
const botonCopiar = document.getElementById('btnCopiar');

// Agrega un evento click al botón
botonCopiar.addEventListener('click', function() {
  // Selecciona el texto dentro del textarea
  textarea.select();
  
  // Copia el texto seleccionado al portapapeles
  document.execCommand('copy');
  
  // Desactiva la selección del texto
  window.getSelection().removeAllRanges();
  
});

const encriptacionTextarea = document.getElementById("textoEncriptado");

encriptacionTextarea.addEventListener("keydown", function(event) {
  event.preventDefault(); // Evita que se ingrese texto en el textarea
});
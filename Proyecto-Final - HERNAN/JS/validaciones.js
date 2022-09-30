document.getElementById('error').style.display = 'none';
document.getElementById('exito').style.display = 'none';

let formulario = document.getElementById('formulario')
formulario.addEventListener('submit', enviarFormulario)

function enviarFormulario(evento) {
    evento.preventDefault() // Evita que se ejecute el evento submit cuando el formulario no fue validado

    let nombre = document.getElementById('nombre')
    let apellido = document.getElementById('apellido')
    let telefono = document.getElementById('tel')
    let tipoconsulta = document.getElementById('tipoconsulta')
    let contacto = document.getElementById('contacto')
    let horario  = document.getElementById('horario')
    let regularesEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    if (nombre.value === '') {
        msjError = document.getElementById('error').style.display = 'block';
    } 
    
    if (apellido.value === '') {
        msjError = document.getElementById('error').style.display = 'block';
    } 

    if (telefono.value === '') {
        msjError = document.getElementById('error').style.display = 'block';
    } 
    
    if (!regularesEmail.test(email.value)) {
        msjError = document.getElementById('error').style.display = 'block';
    }

    console.log(tipoconsulta.value)
    if (tipoconsulta.value == "" || contacto.value == "" || horario.value == "") {
        msjError = document.getElementById('error').style.display = 'block';
    } 

    document.getElementById('exito').style.display = 'block';
}

// Clase de FormData Leonidas Esteban
document.getElementById('error').style.display = 'none';
document.getElementById('exito').style.display = 'none';

let formulario = document.getElementById('formulario')
formulario.addEventListener('submit', enviarFormulario)

function enviarFormulario(evento) {
    evento.preventDefault()

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

    if (tipoconsulta.value == "" || contacto.value == "" || horario.value == "") {
        msjError = document.getElementById('error').style.display = 'block';
    } 

    if (nombre.value !== '' && apellido.value !== '' && telefono.value !== '' && regularesEmail.test(email.value) && tipoconsulta.value !== "" && contacto.value !== "" && horario.value !== "") {
    document.getElementById('exito').style.display = 'block';
    document.getElementById('error').style.display = 'none';
    }
}
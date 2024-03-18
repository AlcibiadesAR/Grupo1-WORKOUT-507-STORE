/*=======registro validacion=======*/
let formulario = document.querySelector('form');
let nombre = document.querySelector('#Nombre')
let apellido = document.querySelector('#Apellido')
let correo = document.querySelector('#Correo')
let contraseña = document.querySelector('#Contraseña')
let confContraseña = document.querySelector('#Confcontraseña')
let erroresUl = document.querySelector('#errores')
let contenedor = document.querySelector('.form-content')
let contraseñaCondicion = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

formulario.addEventListener("submit",function(e){
    e.preventDefault()
    let errores = []
    erroresUl.innerHTML = ''
    if (nombre.value == '') errores.push(' El campo de nombre no debe quedar vacio')
    if (nombre.value.length < 2) errores.push('Su nombre debe tener 2 caracteres o mas')
    if (apellido.value == '') errores.push(' El campo apellido no debe estar vacio')
    if (apellido.value.length < 2) errores.push('Su apellido debe tener 2 caracteres o mas')
    if (correo.value == '') errores.push(' El campo de correo no puede estar vacio')
    if (contraseña.value == '') errores.push(' El campo de contraseña no puede quedar vacio')
    if (confContraseña.value !== contraseña.value) errores.push("Debe tener la misma contraseña")
    if (errores.length > 0) {
        for (const item of errores){
        erroresUl.innerHTML += `<li><i class="fa-solid fa-circle-exclamation"></i> ${item}</li>`
        }
        contenedor.style.marginTop = '50px';
        contenedor.style.marginBottom = '50px';
    } else {
        alert('formulario enviado')
        window.location.href = "/login.html";
    }
})










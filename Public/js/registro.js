/*=======registro validacion=======*/
let formulario = document.querySelector('form');
let nombre = document.querySelector('#Nombre')
let apellido = document.querySelector('#Apellido')
let correo = document.querySelector('#Correo')
let contraseña = document.querySelector('#Contraseña')
let confContraseña = document.querySelector('#Confcontraseña')
let erroresUl = document.querySelector('#errores')

formulario.addEventListener("submit",function(e){
    e.preventDefault()
    console.log("hola");
    let errores = []
    erroresUl.innerHTML = ''
    if (nombre.value == '') errores.push(' El campo de nombre no debe quedar vacio')
    if (apellido.value == '') errores.push(' El campo apellido no debe estar vacio')
    if (correo.value == '') errores.push(' El campo no puede estar vacio')
    if (contraseña.value == '') errores.push(' El campo no puede quedar vacio')
    if (confContraseña.value !== contraseña.value) errores.push("Debe tener la misma contraseña")
    if (errores.length > 0) {
        for (const item of errores){
        erroresUl.innerHTML += `<li><i class="fa-solid fa-circle-exclamation"></i> ${item}</li>`
        }
    } else {
        alert('formulario enviado')
    }
})










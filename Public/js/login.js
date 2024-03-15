/*=======login validacion=======*/
let Email = document.querySelector('#emailValidar');
let Password = document.querySelector('#passwordValidar');
let form = document.querySelector('#formulario');

form.addEventListener("submit", function (e) {
  e.preventDefault();
    if (Email.value.length == 0 || Password.value.length == 0) {
            validacionEmail();
            validacionPassword();
    } else {
        alert('Formulario enviado con exito')
        Email.value = ''
        Password.value = ''
    }
});

Email.addEventListener("focus", function () {
    validacionEmail();
});

Email.addEventListener("input", function () {
  validacionEmail();
});

Password.addEventListener("focus", function () {
    validacionPassword();
});

Password.addEventListener("input", function () {
  validacionPassword();
});
  
function validacionEmail() {
  let LoginError = document.querySelector("#errorEmail");
  let inputEmail = document.querySelector('#input-box-login');
  if (Email.value.length == 0){
    LoginError.innerHTML = "Debe ingresar su correo electronico";
    inputEmail.style.marginBottom = '30px';
  } else {
    LoginError.innerHTML = "";
    inputEmail.style.marginBottom = '';
  }
}

function validacionPassword() {
    let LoginError = document.querySelector("#errorPassword");
    let  botonInciar = document.querySelector('#iniciarButton')
    if (Password.value.length == 0){
      LoginError.innerHTML = "Debe ingresar su contraseña";
      botonInciar.style.marginTop = '40px'
    } else {
      LoginError.innerHTML = "";
      botonInciar.style.marginTop = ''
    }
  }

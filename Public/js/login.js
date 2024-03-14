/*=======login validacion=======*/
let Email = document.querySelector('#emailValidar');
let Password = document.querySelector('#passwordValidar');
let form = document.querySelector('#formulario');

form.addEventListener("submit", function (e) {
  e.preventDefault();
    if (Email.value.length == 0) {
            validacion(Email);
    } else {
        alert('Formulario enviado con exito')
    }
});

Email.addEventListener("focus", function () {
    validacion(Email);
  });

  Password.addEventListener("input", function () {
    validacion(Password);
  });
  
function validacion(Email) {
  let LoginError = document.querySelector("#errorEmail");
  if (Email.value.length == 0)
    LoginError.innerHTML = "Debe ingresar su correo electronico";
  else {
    LoginError.innerHTML = "";
  }
}

function validacion(Password) {
    let LoginError2 = document.querySelector("#errorPassword");
    if (Password.value.length == 0)
      LoginError2.innerHTML = "Debe ingresar su contraseña";
    else {
      LoginError2.innerHTML = "";
    }
  }
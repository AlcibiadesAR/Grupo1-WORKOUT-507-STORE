document.addEventListener('DOMContentLoaded', function () {
    let boton = document.querySelectorAll('.button-delete');
    let articulo = document.querySelectorAll('.description-article');

    for ( let botones of boton){
        botones.addEventListener('click', function(){
           articulo.style.display = 'none'
        })
    }
   
});


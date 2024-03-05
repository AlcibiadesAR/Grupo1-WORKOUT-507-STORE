/*cambio de modo*/
let icon = document.querySelector('#fa-sun');
let body = document.querySelector('body');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let h1 = document.querySelector('h1')
let shoppingIcon = document.querySelector('main i')

let iconhabilitado = false;

icon.addEventListener('click', function () {
    iconhabilitado = !iconhabilitado;
    if (iconhabilitado) {
        lightMode(body, header, footer)
    } else {
        darkMode(body, header, footer, icon, h1,  shoppingIcon)
    }
})

function lightMode(body, header, footer){
    body.style.backgroundColor = '#eaeaea'
    header.style.backgroundColor = '#00e1ff'
    footer.style.backgroundColor = '#00e1ff'
    h1.style.borderBottom = '2px solid #000'
    h1.style.color = '#000';
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    shoppingIcon.style.color = '#000';
}

function darkMode(body, header, footer, icon, h1,  shoppingIcon){
    body.style.backgroundColor = '#000';
    header.style.backgroundColor = '#000';
    footer.style.backgroundColor = '#000';
    footer.style.borderTop = '2px solid #a9a9a9';
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    h1.style.color = '#fff';
    h1.style.borderBottom = '2px solid #fff'
    shoppingIcon.style.color = '#fff';
}

/*api*/
let products = [
    {
        id: "1",
        name: "Pesa Rusa",
        precio: 20000
    },
    {
        id: "2",
        name: "Mancuernas",
        precio: 30000
    }

]

/*aumentar, disminuir y eliminar */


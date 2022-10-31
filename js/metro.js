let header = `
<header class="header">
<nav class="nav">
    <a href="index.html" class="logo nav-link"><img src="img/logo.png" alt="Logo" class="logo"></a>
    <ul class="nav-menu">
        <li class="nav-menu-item"><a href="index.html" class="nav-menu-link nav-link">Inicio</a></li>
        <li class="nav-menu-item"><a href="merchandising.html" class="nav-menu-link nav-link">Merchandising</a></li>
        <li class="nav-menu-item"><a href="nosotros.html" class="nav-menu-link nav-link">Nosotros</a></li>
        <li class="nav-menu-item"><a href="contacto.html" class="nav-menu-link nav-link">Contacto</a></li>
    </ul>
</nav>
</header>
`
document.getElementById("idheader").innerHTML = header

let body = `

`
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var mensajeError = document.getElementById('mensaje-error');
var confirmarError = document.getElementById('confirmar-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Nombre requerido';
        return false;
    }


    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Escribi tu nombre completo';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Teléfono requerido';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'El telefono requiere 10 digitos';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Solo digitos, por favor.';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email requerido';
        return false;
    }
    emailError.innerHTML = 'Email incorrecto';
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMensaje(){
    var mensaje = document.getElementById('contact-mensaje').value;
    var required = 30;
    var left = required - mensaje.lenght;

    
    if(left > 0){
        mensajeError.innerHTML = left + ' Se requieren mínimo 30 caractéres.';
        return false;
    }

    mensajeError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validateForm(){
    
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMensaje()){
        confirmarError.innerHTML = 'Por favor complete el area faltante.';
        return false;
    }
}
let footer = `

<h3 class="hfooter">Radio Tosti® 2022</h3> 
<div class="icons-footer">
<ul>
    <li class="facebook"><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook" aria-hidden="true"></i></a></li>
    <li class="instagram"><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a></li>
    <li class="twitter"><a href="https://twitter.com/explore"><i class="fa-brands fa-twitter" aria-hidden="true"></i></a></li>
    <li class="whatsapp"><a href="https://chat.whatsapp.com/DflMiBSCnJF0JpuXnzf8m0"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></a></li>
</ul>

`
document.getElementById("idfooter").innerHTML = footer

let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}

const cat_btn = document.getElementById('cat_btn');
const cat_result = document.getElementById('cat_result');

cat_btn.addEventListener('click', getRandomCat);

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}




















// let generate_btn = document.querySelector(".generate_btn");
//     generate_btn.addEventListener("click", fetchPics);

// function fetchPics() {
//     fetch("https://api.thecatapi.com/v1/images/search")
//     .then(response => response.json())
//     .then((data) => {
//         let catsImgurl = data[0].url

//         let catsImgEl = document.createElement("img")
//         catsImgEl.setAttribute("src",)

//     })
// }
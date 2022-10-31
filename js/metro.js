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
var telefonoError = document.getElementById('telefono-error');
var emailError = document.getElementById('email-error');
var mensajeError = document.getElementById('mensaje-error');
var confirmarError = document.getElementById('confirmar-error');

function validatename(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Nombre  Requerido';
        return false;
    }


    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        nameError.innerHTML = '';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}

let footer = `

<h3 class="hfooter">Radio Tosti® 2022</h3> 
<div class="icons-footer">
<ul>
    <li class="facebook"><a href=""><i class="fa-brands fa-facebook" aria-hidden="true"></i></a></li>
    <li class="instagram"><a href=""><i class="fa-brands fa-instagram" aria-hidden="true"></i></a></li>
    <li class="twitter"><a href=""><i class="fa-brands fa-twitter" aria-hidden="true"></i></a></li>
    <li class="whatsapp"><a href=""><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></a></li>
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
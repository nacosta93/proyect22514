let header = `
<header class="header">
<nav class="nav">
    <a href="index.html" class="logo nav-link"><img src="img/logo.png" alt="Logo" class="logo"></a>
    <ul class="nav-menu">
        <li class="nav-menu-item"><a href="index.html" class="nav-menu-link nav-link">Inicio</a></li>
        <li class="nav-menu-item"><a href="merchandising.html" class="nav-menu-link nav-link">Merchandising</a></li>
        <li class="nav-menu-item"><a href="nosotros.html" class="nav-menu-link nav-link">Nosotros</a></li>
        <li class="nav-menu-item"><a href="contacto.html" class="nav-menu-link nav-link">Contacto</a></li>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-whatsapp"></i>
    </ul>
</nav>
</header>
`
document.getElementById("idheader").innerHTML = header

let footer = `
<h3 class="hfooter">Radio Tosti® 2022</h3>
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
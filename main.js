carrito = []
/// titulos de las cards
const tiulopan = document.getElementById("titulo-pan")
const tituloNaranja = document.getElementById("titulo-naranja")
const tituloCarne = document.getElementById("titulo-carne")

///cambio de contenidos de los titulos
tiulopan.innerText= `${productoPan.nombre} $ ${productoPan.precio} por KG`;
tituloNaranja.innerText= `${productoNaranja.nombre} $ ${productoNaranja.precio} por KG`;
tituloCarne.innerText= `${productoCarne.nombre} $ ${productoCarne.precio} por KG`;



/// formulario
let nuevoForm = document.querySelector("#formulario");
nuevoForm.addEventListener("submit", validarForm)
function validarForm (p) {
p.preventDefault ();
usertxt = document.getElementById("usertxt").value
localStorage.setItem("usuario",JSON.stringify (usertxt))
alert( `bienvenido ${usertxt} por favor elige un elemento para añadir al carrito`)
}



///botones

    
function cargarItems (items){
items.push()
}

const botonPan = document.getElementById("btnPan");
botonPan.addEventListener("click", (cargarPan)=> { 
    cargarPan.preventDefault();
    let articulo = new item ()
    articulo.nombre=productoPan.nombre
    articulo.cantidad=parseInt(prompt("indique cantidad"))
    articulo.precio=productoPan.precio

    
    carrito.push(articulo)
    localStorage.setItem('carrito',JSON.stringify(carrito))
    verItemsCart(carrito)
    return articulo
})

const botonNaranja = document.getElementById("btnNaranja");
botonNaranja.addEventListener("click", (cargarNaranja)=> {
    cargarNaranja.preventDefault()
    let articulo = new item ()
    articulo.nombre=productoNaranja.nombre
    articulo.cantidad=parseInt(prompt("indique cantidad"))
    articulo.precio=productoNaranja.precio

    carrito.push(articulo)
    verItemsCart(carrito)
    return articulo
})

const botonCarne = document.getElementById("btnCarne");
botonCarne.addEventListener("click", (cargarCarne)=> {
    cargarCarne.preventDefault()
    let articulo = new item ()
    articulo.nombre=productoCarne.nombre
    articulo.cantidad=parseInt(prompt("indique cantidad"))
    articulo.precio=productoCarne.precio

    carrito.push(articulo)
    verItemsCart(carrito)
    return articulo
})


function verItemsCart(items)
{
let tabla = document.getElementById('items')
let counter = 1
tabla.innerHTML = '';
items.forEach((elemento) => {
    let tr = document.createElement("tr") 
    let th = document.createElement("th") 
    th.innerText = counter

    tr.appendChild(th); 

    let td = document.createElement('td')
    td.innerText = elemento.nombre
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = elemento.cantidad
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = elemento.precio
    tr.appendChild(td)

    tr.classList.add("Eliminar")
    tabla.appendChild(tr)
    counter++
})
}





const Total = document.getElementById("total") 
Total.innerText = carrito.reduce((acumulador,item) => acumulador + item.elemento.precio* item.cantidad,0);

/// boton pagar
const botonPagar = document.querySelector("#pagar-carrito")
botonPagar.addEventListener
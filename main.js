/// obejetos de js, arrays, metodos de busqueda y filtrado sobre ael array
const productos = [
    {nombre: "pan" , precio: 150},
    {nombre: "naranja" , precio: 180},
    {nombre: "vacio" , precio: 2000}

]

let carrito = []

let seleccion = prompt ("hola quiere comprar algun producto (escriba si o no)")

while(seleccion != "si" && seleccion!= "no"){
    alert("error\n ingrese si o no")
    seleccion = prompt (" hola desea comprar algo si o no")
}

if(seleccion == "si"){
    alert("los productos a elegir apareceran en la siguiente lista")
    let allProduct = productos.map (
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(allProduct.join ("//"))
}
    else if (seleccion == "no") {
        alert("gracias vuelva pronto")
    }

while(seleccion != "no"){
    let producto = prompt (" agrega un produnto al carrito")
    let precio = 0

    if (producto == "pan" || producto == "naranja" || producto == "vacio"){
        switch ( producto) {
            case "pan": precio = 150;
            break;
            case "naranja": precio = 180;
            break;
            case "vacio": precio = 2000;
            break;
            default:
            break;
        }

        let unidades  = parseInt (prompt("agregue la cantidad que desee llevar"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else{
        alert("no tenemos el producto :(")
    }

    seleccion = prompt("desea seguir comprando")
    while( seleccion === "no"){
        alert( "gracias por la compra : )")
        carrito.forEach ((carritoFinal) => {
            console.log(`producto : ${carritoFinal.producto} , unidades : ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`);
        })
        const total = carrito.reduce ((acc, elemento) => acc + elemento.precio * elemento.unidades, 0);
        alert( " el total a pagar es: " + total)
        
    }
    
} 



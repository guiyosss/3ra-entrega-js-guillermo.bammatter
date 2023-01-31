
const productoPan = {
    id:1 , 
    nombre: "Pan" ,
    precio: 150}

const productoNaranja = {
    id:2 , 
    nombre: "Naranja" ,
    precio: 180}

const productoCarne = {
    id:3 , 
    nombre: "Carne" ,
    precio: 2000}


class item  {
    nombre;
    precio;
    cantidad;
    constructor(nombre,precio,cantidad){
        this.nombre=nombre
        this.precio=precio
        this.cantidad=cantidad
    }
}
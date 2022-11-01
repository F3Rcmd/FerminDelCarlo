let cuenta = [];

class info {
  constructor(name, pass, email) {
    this.name = name;
    this.pass = pass;
    this.email = email;
  }
}

const almacen = JSON.parse(sessionStorage.getItem("Dcuenta"));
//SessionStorage Corregido

const { 0: {name:nombre, pass:contra, email:mail} } = almacen
 
document.getElementById("titulo").textContent = "Bienvenido " + nombre; 

/* toma los datos del storage y los envia al array cuenta */

let carro = [];

let precioFinal = [];

const ListaProd = [
{ id: 0, nombre: "Producto 1", precio: 1000, foto: "../pngs/Leñero.jpeg", },

{ id: 1, nombre: "Producto 2", precio: 2000, foto: "../pngs/Leñero.jpeg", },

{ id: 2, nombre: "Producto 3", precio: 3000, foto: "../pngs/Leñero.jpeg", }
];

const origen = document.getElementById("ContProductos");

function mostrarP() {
  ListaProd.forEach((info)=> {
    const contenedor = document.createElement("div");
    contenedor.classList.add("d-flex", "justify-content-around", "flex-row");

    const columna = document.createElement("div");
    columna.classList.add("col");

    const carta = document.createElement("div");
    carta.classList.add("card", "bg-dark", "text-white");

    const imagen = document.createElement("img");
    imagen.classList.add("card-img-top", "img-fluid");
    imagen.setAttribute("src", info.foto);

    const cuerpo = document.createElement("div");
    cuerpo.classList.add("card-body");

    const titulo = document.createElement("h5");
    titulo.classList.add("card-title");
    titulo.textContent = info.nombre;

    const valor = document.createElement("p");
    valor.classList.add("card-text");
    valor.textContent = info.precio + "$";

    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-outline-light");
    btn.setAttribute("id", info.id);
    btn.textContent = "Agregar";
    btn.addEventListener("click", prod);

    carta.appendChild(imagen);
    carta.appendChild(cuerpo);
    carta.appendChild(titulo);
    carta.appendChild(valor);
    carta.appendChild(btn);
    columna.appendChild(carta);
    contenedor.appendChild(columna);
    origen.appendChild(contenedor);
  });
}
//Prodcutos corregidos

function prod(e) {
  e.preventDefault();

  alertify.success("Producto Agregado!");

  const seleccionar = e.target.getAttribute("id");

  const encontrar = ListaProd.find((item) => item.id == seleccionar);

  carro.push(encontrar)
}
//agrega los productos

function Eprod() {
  alertify.error("Producto Eliminado!");

  carro.shift()

  erase();

  show();
}
//eliminar el primer producto

const deseados = document.getElementById("Deseados");

const mostrarF = document.getElementById("mostrarfinal");

function show() {
  carro.forEach((info)=> {
    const infocon = document.createElement("div");
    infocon.setAttribute("id", info.id);

    const infon = document.createElement("h4");
    infon.textContent = info.nombre;

    const infop = document.createElement("b");
    infop.textContent = info.precio + "$";

    infocon.appendChild(infon);
    infocon.appendChild(infop);
    deseados.appendChild(infocon);
  })


  const total = carro.map(prod => prod.precio).reduce((ant, act) => ant + act,);

  precioFinal.push(total);

  mostrarF.innerHTML = `
  <h5>Total:</h5>
  <b>${total}$</b>`
}

/* Muestra la lista de productos y el valor total*/

function erase() {
  deseados.innerHTML = " ";
  
  mostrarF.innerHTML = " ";
}

/* evita que se repitan productos y el total*/

function Dall() {
  carro = [];

  deseados.innerHTML = " ";
  
  mostrarF.innerHTML = " ";
}

/* vacia le carro*/

function cargar() {
  localStorage.setItem("registro", carro);
 
  Dall();
}
//localStorage Agregado

function comprar() {
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: '¿Comprar?',
  text: "Se te enviara un mail para continuar",
  icon: 'question',
  showCancelButton: true,
  confirmButtonText: 'Si!',
  cancelButtonText: 'No...',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) 
    { cargar();
      swalWithBootstrapButtons.fire(
      'De acuerdo!',
      'Verifica si tu mail para continuar.',
      'success'
    )} 
    else if (result.dismiss === Swal.DismissReason.cancel) 
    {erase();
      swalWithBootstrapButtons.fire(
      'Cancelada',
      'La compra no sea realizado',
      'error'
    )
  }
})
};

/* simulacion de confirmacion de la compra*/ 

mostrarP();






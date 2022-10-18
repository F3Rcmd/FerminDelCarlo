let cuenta = [];

class info {
  constructor(name, pass, email) {
    this.name = name;
    this.pass = pass;
    this.email = email;
  }
}

const almacen = JSON.parse(localStorage.getItem("Dcuenta"));

const { 0: {name:nombre, pass:contra, email:mail} } = almacen
 
document.getElementById("titulo").textContent = "Bienvenido " + nombre; 

/* toma los datos del storage y los envia al array cuenta */

let carro = [];

let precioFinal = [];

function prod1() {
  const item1 = { id: 1, nombre: "Producto 1", precio: 1000 }

  carro.push(item1);
}

function prod2() {
  const item2 = { id: 2, nombre: "Producto 2", precio: 2000 }

  carro.push(item2);
}

function prod3() {
  const item3 = { id: 3, nombre: "Producto 3", precio: 3000 }

  carro.push(item3);
}

function Dprod1() {
  carro = carro.filter(prod => prod.precio !== 1000);
}

function Dprod2() {
  carro = carro.filter(prod => prod.precio !== 2000);
}

function Dprod3() {
  carro = carro.filter(prod => prod.precio !== 3000);
}

const deseados = document.getElementById("Deseados");

const mostrarF = document.getElementById("mostrarfinal");

function show() {
  for (producto of carro) {
    let lista = document.createElement("div");
    lista.innerHTML = `
    <h4>${producto.nombre}</h4>
    <b>${producto.precio}$</b>
    `;
    deseados.appendChild(lista);
  }

  const total = carro.map(prod => prod.precio).reduce((ant, act) => ant + act,);

  precioFinal.push(total);

  mostrarF.innerHTML = `
  <h5>Total:</h5>
  <b>${total}$</b>`
}

function erase() {
  deseados.innerHTML = " ";
  
  mostrarF.innerHTML = " ";
}

function Dall() {
  carro = [];

  deseados.innerHTML = " ";
  
  mostrarF.innerHTML = " ";
}

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
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire(
      'De acuerdo!',
      'Verifica si tu mail para continuar.',
      'success'
    )
  } else if (
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelada',
      'La compra no sea realizado',
      'error'
    )
  }
})
};






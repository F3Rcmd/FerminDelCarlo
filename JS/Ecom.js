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

function alerta() {
  Swal.fire('Any fool can use a computer')  
}
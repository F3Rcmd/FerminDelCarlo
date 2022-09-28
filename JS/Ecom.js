let cuenta = [];

class info {
  constructor(name, pass, email) {
    this.name = name;
    this.pass = pass;
    this.email = email;
  }
}

const almacen = JSON.parse(localStorage.getItem("Dcuenta"));

const { 0: {name, pass, email} } = almacen
 
document.getElementById("titulo").textContent = "Bienvenido " + name; 

/* toma los datos del storage y los envia al array cuenta */


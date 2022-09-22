let cuenta = [];

class info {
  constructor(name, pass, email) {
    this.name = name;
    this.pass = pass;
    this.email = email;
  }
}

const almacen = JSON.parse(localStorage.getItem("Dcuenta"));

for (const datos of almacen) 
  cuenta.push(datos)
/* toma los datos del storage y los envia al array cuenta*/


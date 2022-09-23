let cuenta = [];

class info {
  constructor(name, pass, email) {
    this.name = name;
    this.pass = pass;
    this.email = email;
  }
}

const almacen = JSON.parse(localStorage.getItem("Dcuenta"));

for (const datos of almacen) {
  cuenta.push(datos);
}

cuenta.forEach(dato => {
  document.getElementById("titulo").textContent = "Bienvenido " + dato.name; 
});

/* toma los datos del storage y los envia al array cuenta console.log(dato.name); */


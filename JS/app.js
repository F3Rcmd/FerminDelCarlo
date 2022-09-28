let cuenta = [];

class info {
  constructor(name, pass, email) {
    this.name = name;
    this.pass = pass;
    this.email = email;
  }
}
//clase y array para almacenar la informacion del usuario

function vername() {
  let name = document.getElementById('name').value;

  let email = document.getElementById('email').value;

  const valida = (name.length < 6 ) ? true : false

  valida ? alert("demaciado corta") : verpass()
}

function verpass() {
  let pass = document.getElementById('pass').value;

  const valida = (pass.length < 6) ? true : false

  valida ? alert("demaciado corta") : almacenar()
}

function almacenar() {

  let name = document.getElementById('name').value;

  let pass = document.getElementById('pass').value;

  let email = document.getElementById('email').value;

  let crear = cuenta.push(new info(name, pass, email));

  const almacenar = JSON.stringify(cuenta);

  localStorage.setItem("Dcuenta", almacenar);
  
  modre();
}
//guardar los datos de la cuenta, los almacena en un json y finaliza el registro

 function modre() {
  const borrarR = document.getElementById("borrarR");
  
  borrarR.remove();
  
  const titulo = document.getElementById("titulo").textContent = "¡GRACIAS!";
  
  const cambiar = document.getElementById("cambiar").textContent = "El registro esta terminado, da click en Continuar para dirigirte a la pagina principal";
  
  const Nbtn = document.getElementById("Nbtn");
  
  Nbtn.innerHTML ='<button class="btn btn-outline-light btn-lg px-5" type="submit" id="btnContinuar">Continuar!</button>';

  let btnContinuar = document.getElementById("btnContinuar");

  btnContinuar.addEventListener("click", () => {
    window.location.assign("pages/productos.html");
  });
 }
 //modifica el html y redirige a otra pagina apartir de un evento 
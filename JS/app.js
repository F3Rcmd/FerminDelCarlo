const cuenta =  [];

function nombre() {
  let nombrecomp = prompt("ingresa tu nombre de usuario");
  cuenta.push({ id: "nombre", nombrecomp});
  while(nombrecomp.length <= 5) {
    alert("es un nombre muy corto");
    nombrecomp = prompt("ingresa tu nombre de usuario");
    cuenta.push({ id: "nombre", nombrecomp});
  }
  if (nombrecomp.length >= 5) {email();}
}

function email() {
  let mail = prompt("ingresa tu email");
  cuenta.push({ id: "mail", mail});
  password();
}

function password() {
  let pass = prompt("ingresa una contraseña");
  cuenta.push({ id: "contraseña", pass});
  let check = prompt("confirma tu contraseña"); 
  while(check != `${pass}`){
    alert("la contraseña no coincide");
    pass = prompt("ingresa una contraseña");
    cuenta.push({ id: "contraseña", pass});
    check = prompt("confirma tu contraseña");
  }
  if (check == `${pass}`) {finish();}
}

function finish() {
  alert("registro terminado");
  console.log(cuenta)
}


nombre();



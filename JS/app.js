function nombre() {
  let nombrecomp = prompt("ingresa tu nombre de usuario");
  while(nombrecomp.length <= 5) {
    alert("es un nombre muy corto");
    nombrecomp = prompt("ingresa tu nombre de usuario");
  }
  if (nombrecomp.length >= 5) {email();}
}

function email() {
  let mail = prompt("ingresa tu email");
  password();
}

function password() {
  let pass = prompt("ingresa una contraseña");
  let check = prompt("confirma tu contraseña"); 
  while(check != `${pass}`){
    alert("la contraseña no coincide");
    pass = prompt("ingresa una contraseña");
    check = prompt("confirma tu contraseña");
  }
  if (check == `${pass}`) {finish();}
}

function finish() {
  alert("registro terminado");
}


nombre();

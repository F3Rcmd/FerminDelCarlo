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

const muestra = document.getElementById("api")

const apinfo = async()=>{
    const recibe = await fetch('https://jsonplaceholder.typicode.com/posts')
    const devuelve = await recibe.json()

    devuelve.forEach((post)=>{
        const li = document.createElement("li")
        li.innerHTML=`
        <h4>${post.id}</h4>
        <h5>${post.title}</h5>
        `
        muestra.append(li)
    })
}

apinfo();

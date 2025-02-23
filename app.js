// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Debe ingresar un nombre por favor.");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

  function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";
  console.log ("mostrarListaAmigos");

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

  function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Ingrese por lo menos un nombre para sortear.");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}
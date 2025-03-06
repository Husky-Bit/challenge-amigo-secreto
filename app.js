// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    let input = document.querySelector("#amigo");
    
    if (input.value === "") { // chequear el VALUE del INPUT, no el INPUT en si
        alert("Por favor, inserte un nombre.");
        return;
    }

    listaAmigos.push(input.value); //agregar el VALOR del INPUT, no el input en si
    actualizarLista();
    input.value = ""; //Limpiar campo
    
    return;
}

function actualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; // Limpia la lista

    for (let i = 0 ; i < listaAmigos.length ; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }

}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let numeroMaximo = listaAmigos.length; //No le resto -1 ya que...
    let indiceAleatorio = Math.floor(Math.random()*numeroMaximo); //Math.floor redondea hacia abajo

    let amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = amigoSorteado;
}
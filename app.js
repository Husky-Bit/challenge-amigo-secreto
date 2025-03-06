// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    let input = document.querySelector("#amigo");
    
    if (input === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    listaAmigos.push(input);
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
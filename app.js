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

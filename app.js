// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido");
        return;
    }

    amigos.push(nombre);
    
    // Crear un nuevo elemento de lista
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
    
    // Limpiar el input después de añadir el nombre
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    // Mostrar el resultado en la lista de resultados
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSecreto}</strong></li>`;
}

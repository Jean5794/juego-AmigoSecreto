// Lista de amigos ingresados por el usuario
let amigos = [];

/**
 * Agregar un nuevo amigo a la lista si la entrada es válida.
 * Luego, actualizar la lista en pantalla y limpiar el campo de entrada.
 */
function agregarAmigo() {
    let inputElemento = document.getElementById("valorAmigo");
    let amigoAgregado = inputElemento.value.trim(); // Evitar nombres vacíos o con solo espacios

    if (amigoAgregado === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(amigoAgregado);
    actualizarLista();
    limpiarCaja();
}

/**
 * Seleccionar aleatoriamente un amigo de la lista y mostrarlo en la interfaz.
 * Si la lista está vacía, mostrar un mensaje de advertencia.
 */
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista. Agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li>${amigoSorteado} es tu amigo secreto</li>`;
}

/**
 * Limpiar el campo de entrada después de agregar un nombre.
 */
function limpiarCaja() {
    document.getElementById("valorAmigo").value = "";
}

/**
 * Actualizar la lista visible de amigos en la interfaz.
 */
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

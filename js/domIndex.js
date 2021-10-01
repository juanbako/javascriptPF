const botonNuevoEspacio = document.getElementById("cargarNuevoEspacio")

const colaborar = prompt("Deseas cargar un nuevo espacio? s/n")

if (colaborar === "s") {
    botonNuevoEspacio.classList.remove("cargarNuevoEspacioNone")
    botonNuevoEspacio.classList.add("cargarNuevoEspacioInline")
};


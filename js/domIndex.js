class MoldeParque {
    constructor (nombre, ubicacion, accesibilidad, tamanio, juegos, maqEjercicios, banios, rejas, canil) {
        this.nombre = nombre;
        this.ubicacion = ubicacion; //direccion 
        this.acceso = accesibilidad; //publico o privado
        this.tamanioHec = tamanio; //en hectareas
        this.instalaciones = { juegos: juegos, maqEjercicios: maqEjercicios, banios: banios };
        this.rejas = rejas;
        this.canil = canil;
        this.puntuacionParque = 0
    }

    puntuacion () {
        if (this.acceso === "publico") {this.puntuacionParque++};
        if (this.instalaciones.juegos === "si") {this.puntuacionParque++};
        if (this.instalaciones.maqEjercicios === "si" ) {this.puntuacionParque++};
        if (this.instalaciones.banios === "si") {this.puntuacionParque++};
        if (this.rejas === "si") {this.puntuacionParque--};
        if (this.canil === "si") {this.puntuacionParque++};

        parseFloat(this.tamanioHec);
        parseFloat(this.puntuacionParque);
        
        return (this.puntuacionParque = parseFloat(this.puntuacionParque) + parseFloat(this.tamanioHec));
    };
};

//---ARRAYS

espacios = [];

espacios.push(new MoldeParque ("Avellaneda", "Av. Directorio y Av. Lacarra", "publico", 10, "si", "si", "no", "si", "no"));

//---MODAL

const btnNuevoEspacio = document.getElementById("cargarNuevoEspacio");
const cargarModal = document.getElementById("cargarNModal");
const cerrarModalNEspacio = document.getElementById("NespacioCargado");
const formulario = document.getElementById("formulario")
const buscarEspacio = document.getElementById("buscarEspacios");


btnNuevoEspacio.addEventListener(`click`, () => {
    cargarModal.classList.add("modalVisible");
});

//---FORMULARIO NUEVO ESPACIO

const nombreEspacio = document.getElementById("inpNombreEspacio")
const ubicacionEspacio = document.getElementById("inpUbicacion")
const tamanio = document.getElementById("inpTamanio")
const acceso = document.getElementById("acceso")
const juegos = document.getElementById("juegos")
const maqEjercicios = document.getElementById("maqEjercicios")
const banios = document.getElementById("banio")
const rejas = document.getElementById("rejas")
const canil = document.getElementById("canil")


//---VALIDACIONES NUEVO ESPACIO

function valNombre () {
    const nombre = nombreEspacio.value
    if (nombre.length > 2) {
        nombreEspacio.style.backgroundColor = `rgba(16, 148, 67, 0.6)`;
    } else {
        nombreEspacio.style.backgroundColor = `rgba(253, 7, 7, 0.8)`;
    }
}

nombreEspacio.addEventListener(`blur`, valNombre);

function valUbicacion () {
    const ubicacion = ubicacionEspacio.value
    if (ubicacion.length > 2) {
        ubicacionEspacio.style.backgroundColor = `rgba(16, 148, 67, 0.6)`;
    } else {
        ubicacionEspacio.style.backgroundColor = `rgba(253, 7, 7, 0.8)`;
    }
}

ubicacionEspacio.addEventListener(`blur`, valUbicacion);

function valTamanio () {
    const tamanioF = tamanio.value
    if (tamanioF >= 1) {
        tamanio.style.backgroundColor = `rgba(16, 148, 67, 0.6)`;
    } else {
        tamanio.style.backgroundColor = `rgba(253, 7, 7, 0.8)`;
    }
}

tamanio.addEventListener(`blur`, valTamanio);





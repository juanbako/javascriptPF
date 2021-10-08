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
espacios.push(new MoldeParque ("Plaza Velez Sarfield", "Bahia Blaca y Av. Avellaneda", "publico", 1, "si", "si", "no", "si", "no"));
espacios.push(new MoldeParque ("Plaza Arenales", "Chivilcoy y Nueva York", "publico", 4, "si", "si", "no", "no", "no"));
espacios.push(new MoldeParque ("Agronomia", "Av. de los Constituyentes y Baigorria", "publico", 16, "si", "si", "si", "si", "si"));
espacios.push(new MoldeParque ("Parque Lezama", "Av. Martin Garcia y Av. Paseo Colon", "publico", 5, "si", "si", "si", "no", "no"));
espacios.push(new MoldeParque ("Jardin Japones", "Av. del Libertador y Av. Casares", "privado", 12, "no", "no", "si", "si", "no"));


//---MODAL CARGAR NUEVO ESPACIO

const btnNuevoEspacio = document.getElementById("cargarNuevoEspacio");
const cargarModal = document.getElementById("cargarNModal");
const cerrarModalNEspacio = document.getElementById("NespacioCargado");
const buscarEspacio = document.getElementById("buscarEspacios");

btnNuevoEspacio.addEventListener(`click`, () => {
    cargarModal.classList.add("modalVisible");
});

document.getElementById(`cerrarForm`).addEventListener(`click`, () => {
    cargarModal.classList.remove("modalVisible");
});


//---FORMULARIO NUEVO ESPACIO
const formulario = document.getElementById("formulario")

const nombreEspacio = document.getElementById("inpNombreEspacio")
const ubicacionEspacio = document.getElementById("inpUbicacion")
const tamanioEspacio = document.getElementById("inpTamanio")
const accesibilidad = document.getElementById("acceso")
const juegosNines = document.getElementById("juegos")
const maqEjercicios = document.getElementById("maqEjercicios")
const baniosPubl = document.getElementById("banios")
const enrejado = document.getElementById("rejas")
const canil = document.getElementById("canil")

const error = document.getElementById(`errorForm`)
const arreglar = document.getElementById(`arreglarError`)


//---VALIDACIONES NUEVO ESPACIO
function valNombre () {
    const nombre = nombreEspacio.value
    if (nombre.length > 2) {
        nombreEspacio.classList.add(`borde-verde`)
    } else {
        nombreEspacio.classList.add(`borde-rojo`)
    }
}

nombreEspacio.addEventListener(`blur`, valNombre);

function valUbicacion () {
    const ubicacion = ubicacionEspacio.value
    if (ubicacion.length > 2) {
        ubicacionEspacio.classList.add(`borde-verde`)
    } else {
        ubicacionEspacio.classList.add(`borde-rojo`)
    }
}

ubicacionEspacio.addEventListener(`blur`, valUbicacion);

function valTamanio () {
    const tamanioF = tamanioEspacio.value
    if (tamanioF >= 1) {
        tamanioEspacio.classList.add(`borde-verde`)
    } else {
        tamanioEspacio.classList.add(`borde-rojo`)
    }
}

tamanioEspacio.addEventListener(`blur`, valTamanio);

function valAcceso () {
    const acceso = accesibilidad.value
    if (acceso == "") {
        accesibilidad.classList.add(`borde-verde`)
    } else {
        accesibilidad.classList.add(`borde-rojo`)
    }
}

accesibilidad.addEventListener(`blur`, valAcceso);



formulario.addEventListener(`submit`, (e) => {
    e.preventDefault()

    const nombre = nombreEspacio.value
    const direccion = ubicacionEspacio.value
    const tamanio = tamanioEspacio.value
    const acceso = accesibilidad.value

    

    if (juegosNines.checked) {
        juegosNines.value = `si`
    } else {
        juegosNines.value = "no"
    }

    const juegos = juegosNines.value

    if (maqEjercicios.checked) {
        maqEjercicios.value = `si`
    } else {
        maqEjercicios.value = "no"
    }

    const maquinas = maqEjercicios.value

    if (baniosPubl.checked) {
        baniosPubl.value = `si`
    } else {
        baniosPubl.value = "no"
    }

    const banios = baniosPubl.value
    
    if (enrejado.checked) {
        enrejado.value = `si`
    } else {
        enrejado.value = "no"
    }
    
    const rejas = enrejado.value

    if (canil.checked) {
        canil.value = `si`
    } else {
        canil.value = "no"
    }

    const perros = canil.value

    if (nombre.length < 2 || direccion.length < 2 || tamanio <= 0 || acceso == "") {
        console.log(error)
        }
    else {
        espacios.push(new MoldeParque(nombre, direccion, acceso, tamanio, juegos, maquinas, banios, rejas, perros))
        localStorage.setItem(`espacios`, JSON.stringify(espacios))
        formulario.submit()
    }
})






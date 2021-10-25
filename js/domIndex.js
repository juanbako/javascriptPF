class MoldeParque {
    constructor (nombre, ubicacion, barrio, accesibilidad, tamanio, juegos, maqEjercicios, banios, rejas, canil) {
        this.nombre = nombre;
        this.ubicacion = ubicacion; //direccion 
        this.barrio = barrio;
        this.acceso = accesibilidad; //publico o privado
        this.tamanioHec = tamanio; //en hectareas
        this.instalaciones = { juegos: juegos, maqEjercicios: maqEjercicios, banios: banios };
        this.rejas = rejas;
        this.canil = canil;
        this.puntuacionParque = 0;
    }

    puntuacion () { 
        this.puntuacionParque = 0
        if (this.acceso === "publico") {this.puntuacionParque++};
        if (this.instalaciones.juegos === "si") {this.puntuacionParque++};
        if (this.instalaciones.maqEjercicios === "si" ) {this.puntuacionParque++};
        if (this.instalaciones.banios === "si") {this.puntuacionParque++};
        if (this.rejas === "si") {this.puntuacionParque--};
        if (this.canil === "si") {this.puntuacionParque++};

        parseFloat(this.tamanioHec);
        parseFloat(this.puntuacionParque);
        
        return (this.puntuacionParque = parseFloat(this.puntuacionParque) + parseFloat(this.tamanioHec));
    }
    
};

//---CONSTANTES
const nuevoEspacio = document.getElementById("nuevoEspacio")

//---ARRAYS
espacios = [];

espacios.push(new MoldeParque ("Avellaneda", "Av. Directorio y Av. Lacarra", "Mataderos", "publico", 10, "si", "si", "no", "si", "no"));
espacios.push(new MoldeParque ("Plaza Velez Sarfield", "Bahia Blanca y Av. Avellaneda", "Floresta", "publico", 1, "si", "si", "no", "si", "no"));
espacios.push(new MoldeParque ("Plaza Arenales", "Chivilcoy y Nueva York", "Devoto", "publico", 4, "si", "si", "no", "no", "no"));
espacios.push(new MoldeParque ("Agronomia", "Av. San Martin y Nogoya", "Agronomía", "publico", 16, "si", "si", "si", "si", "si"));
espacios.push(new MoldeParque ("Parque Lezama", "Av. Martin Garcia y Av. Paseo Colon", "La Boca", "publico", 5, "si", "si", "si", "no", "no"));
espacios.push(new MoldeParque ("Jardin Japones", "Av. del Libertador y Av. Casares", "Palermo", "privado", 12, "no", "no", "si", "si", "no"));

espacios.forEach(espacio => {
    espacio.puntuacion()})

cargarEspacio()

localStorage.setItem(`espacios`, JSON.stringify(espacios))

console.log(localStorage.getItem(`espacios`))
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
const barrio = document.getElementById("barrio")
const tamanioEspacio = document.getElementById("inpTamanio")
const accesibilidad = document.getElementById("acceso")
const juegosNines = document.getElementById("juegos")
const maqEjercicios = document.getElementById("maqEjercicios")
const baniosPubl = document.getElementById("banios")
const enrejado = document.getElementById("rejas")
const canil = document.getElementById("canil")

//---SELECT BARRIOS
const barrios = ["Agronomía", "Almagro", "Balvanera", "Barracas", "Belgrano", "Boedo", "Caballito", "Chacarita", "Coghlan", "Colegiales", "Constitución", "Devoto", "Flores", "Floresta", "La Boca", "La Paternal", "Villa Lugano", "Liniers", "Mataderos", "Monte Castro", "Monserrat", "Nueva Pompeya", "Núñez", "Palermo", "Parque Avellaneda", "Parque Chacabuco", "Parque Chas", "Parque Patricios", "Puerto Madero", "Recoleta", "Retiro", "Saavedra", "San Cristóbal", "San Nicolás", "San Telmo", "Vélez Sársfield", "Versalles", "Villa Crespo", "Villa del Parque", "Villa General Mitre", "Villa Luro", "Villa Ortúzar", "Villa Pueyrredón", "Villa Real", "Villa Riachuelo", "Villa Santa Rita", "Villa Soldati", "Villa Urquiza"];

barrios.forEach((varrio) => {
    const opciones = document.createElement(`option`)
    opciones.value = varrio
    opciones.innerHTML = varrio

    barrio.appendChild(opciones)
})

localStorage.setItem(`barrios`, JSON.stringify(barrios))

console.log(localStorage.getItem(`barrios`))
//---DESCHECKEAR RADIO BTNs
var era;
var previo=null;
function uncheckRadio(rbutton){
    if(previo &&previo!=rbutton){previo.era=false;}
    if(rbutton.checked==true && rbutton.era==true){rbutton.checked=false;}
    rbutton.era=rbutton.checked;
    previo=rbutton;
}

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

function valBarrio () {
    if (barrio.value == "") {
        barrio.classList.add(`borde-rojo`)
    } else {
        barrio.classList.add(`borde-verde`)
    }
}

barrio.addEventListener(`blur`, valBarrio);

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
        accesibilidad.classList.add(`borde-rojo`)
    } else {
        accesibilidad.classList.add(`borde-verde`)
    }
}

accesibilidad.addEventListener(`blur`, valAcceso);

//---SUBMIT FORMULARIO
formulario.addEventListener(`submit`, (e) => {
    e.preventDefault()

    const nombre = nombreEspacio.value
    const direccion = ubicacionEspacio.value
    const tamanio = tamanioEspacio.value
    const acceso = accesibilidad.value
    const barrioV = barrio.value

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

    if (nombre.length < 2 || direccion.length < 2 || tamanio <= 0 || acceso == "" || barrioV == "") {
        errorFormulario()
        cerrarError()
        }
    else {
        espacios.push(new MoldeParque(nombre, direccion, barrioV, acceso, tamanio, juegos, maquinas, banios, rejas, perros))

        espacios.forEach(espacio => {
            espacio.puntuacion()})

        localStorage.setItem(`espacios`, JSON.stringify(espacios))
        console.log(localStorage.getItem(`espacios`))
        cargarModal.classList.remove("modalVisible")
        cargarEspacio()
    }
    formulario.reset()
})

console.log(localStorage.getItem(`espacios`))
console.log(espacios)

//---ARMAR CARDS CON ESPACIOS
function cargarEspacio() {
    nuevoEspacio.innerHTML = ``;

    espacios.forEach(espacio => {
        const cardEspacios = document.createElement (`div`)
        cardEspacios.className = `col-md-3 card shadow-lg p-3 mb-5 bg-body rounded parques__cards--margin`
        cardEspacios.style = `widht: 18rem`

        //---API: NORMALIZAR DIRECCION 
        $.get(`http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${espacio.ubicacion}, caba`, (res) => {
        
        console.log(res)
        let calle1 = res.direccionesNormalizadas[0].nombre_calle;
        let calle2 = res.direccionesNormalizadas[0].nombre_calle_cruce;

        cardEspacios.innerHTML = `<img src="./imagenes/nuevoParque.jpg" class="card-img-top" alt="parque">
                                <div class="card-body">
                                    <h5 class="card-title">${espacio.nombre}</h5>
                                    <p class="card-text">Barrio: ${espacio.barrio}</p>
                                    <p class="card-text">Direccion: ${calle1} y ${calle2}</p> 
                                    <p class="card-text">Acceso: ${espacio.acceso}</p>
                                    <p class="card-text">Tamaño: ${espacio.tamanioHec}</p>
                                    <p class="card-text">Canil: ${espacio.canil}</p>
                                    <p class="card-text">Juegos: ${espacio.instalaciones.juegos}</p>
                                    <p class="card-text">Maquinas de ejercicio: ${espacio.instalaciones.maqEjercicios}</p>
                                    <p class="card-text">Baños: ${espacio.instalaciones.banios}</p>
                                    <p class="card-text">Puntaje: ${espacio.puntuacionParque}</p>
                                    <a href="#" class="btn btn-success">+Info</a>
                                </div>
                            </div>`

        nuevoEspacio.prepend(cardEspacios)
        })
    })
}
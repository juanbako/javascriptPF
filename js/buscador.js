//---RECUPERAR DATOS DE STORAGE
let espaciosLS = localStorage.getItem(`espacios`)

let espacios = JSON.parse(espaciosLS)

console.log(espacios)

let barriosLS = localStorage.getItem(`barrios`)

const barrios = JSON.parse(barriosLS)

console.log(barrios)

//---CONSTANTES
const buscador = document.getElementById(`buscador2`);
const filtro = document.getElementById(`filtro`);
const param2 = document.getElementById(`param2`);
const nuevaBusqueda = document.getElementById("nuevaBusqueda")
const radioBtn_busqueda = document.getElementById("radioBtn_busqueda")
//---DESCHECKEAR RADIO BTNs
var era;
var previo=null;
function uncheckRadio(rbutton){
    if(previo &&previo!=rbutton){previo.era=false;}
    if(rbutton.checked==true && rbutton.era==true){rbutton.checked=false;}
    rbutton.era=rbutton.checked;
    previo=rbutton;
}

//---SELECT BUSQUEDA
const filtros = ["Barrio", "Acceso", "Instalaciones", "Tamaño", "Puntuacion"];
const acceso = ["Publico", "Privado"];

filtros.forEach((filt) => {
    const opciones = document.createElement(`option`)
    opciones.value = filt
    opciones.innerHTML = filt
    opciones.id = filt

    filtro.appendChild(opciones)
})

//--------OUPUT BUSQUEDA
function busqOrdenada() {
    nuevaBusqueda.innerHTML = ""
    
    espaciosX.forEach(espacio => {
        const cardEspacios = document.createElement (`div`)
        cardEspacios.className = `col-md-4 card shadow-lg p-3 mb-5 bg-body rounded parques__cards--margin`
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
                                        <p class="card-text">Tamaño: ${espacio.tamanioHec}</p>
                                        <p class="card-text">Acceso: ${espacio.acceso}</p>
                                        <p class="card-text">Canil: ${espacio.canil}</p>
                                        <p class="card-text">Juegos: ${espacio.instalaciones.juegos}</p>
                                        <p class="card-text">Maquinas de ejercicio: ${espacio.instalaciones.maqEjercicios}</p>
                                        <p class="card-text">Baños: ${espacio.instalaciones.banios}</p>
                                        <p class="card-text">Puntaje: ${espacio.puntuacionParque}</p>
                                        <a href="#" class="btn btn-success">+Info</a>
                                    </div>
                                </div>`

            nuevaBusqueda.appendChild(cardEspacios)
        })
    })
}

let espaciosX;

let filtrado;

//---SELECTOR BUSQUEDA
filtro.addEventListener(`change`, () => {
    filtrado = filtro.value
    console.log(filtrado)

    if (filtrado == `Barrio`) {
        barrios.forEach((barrio) => {
            const opcionesB = document.createElement(`option`)
            opcionesB.value = barrio
            opcionesB.innerHTML = barrio
        
            param2.appendChild(opcionesB)
        })}
        else if (filtrado == `Acceso`) {
            param2.innerHTML = ""

            acceso.forEach((acceso) => {
                const opcionesB = document.createElement(`option`)
                opcionesB.value = acceso
                opcionesB.innerHTML = acceso
            
                param2.appendChild(opcionesB)
            })}
            else {(filtrado == `Instalaciones`) 
                param2.innerHTML = ""
                }
})

//---BUSQUEDA
buscador.addEventListener(`click`, () => {
    filtrado = filtro.value
    parametro = param2.value
    console.log(filtrado)

    if (filtrado == `Tamaño`) {
        espaciosX = espacios.sort((a, b) => a.tamanioHec - b.tamanioHec);
        console.log(espaciosX)
        busqOrdenada(espaciosX)
    } 
    
    if (filtrado == `Acceso` && parametro == "Publico") {
        espaciosX = espacios.filter ((espacio) => espacio.acceso == "publico");
        console.log(espaciosX)
        busqOrdenada(espaciosX)
    } 
    
    if (filtrado == `Acceso` && parametro == "Privado") {
        espaciosX = espacios.filter ((espacio) => espacio.acceso == "privado");
        console.log(espaciosX)
        busqOrdenada(espaciosX)
    }

    if (filtrado == `Barrio`) {
        espaciosX = espacios.filter ((espacio) => espacio.barrio == parametro);
        console.log(espaciosX)
        busqOrdenada(espaciosX)
    }

    if (filtrado == `Puntuacion`) {
        espaciosX = espacios.sort((a, b) => b.puntuacionParque - a.puntuacionParque);
        console.log(espaciosX)
        busqOrdenada(espaciosX)
    }
    
    if (filtrado == `Instalaciones` ) {
        console.log(`instalaciones`)
        
        juegosB = document.getElementById(`juegosB`)
        maquinasB = document.getElementById(`maquinasB`)
        baniosB = document.getElementById(`baniosB`)
        rejasB = document.getElementById(`rejasB`)
        canilB = document.getElementById(`canilB`)        
        
        if (juegosB.checked) {
            espaciosX = espacios.filter ((espacio) => espacio.instalaciones.juegos == "si");
            console.log(espaciosX)
        } 
        
        if (maquinasB.checked) {
            espaciosX = espacios.filter ((espacio) => espacio.instalaciones.maqEjercicios == "si");
            console.log(espaciosX)
        } 
        
        if (baniosB.checked) {
            espaciosX = espacios.filter ((espacio) => espacio.instalaciones.banios == "si");
            console.log(espaciosX)
        }

        if (rejasB.checked) {
            espaciosX = espacios.filter ((espacio) => espacio.rejas == "si");
            console.log(espaciosX)
        }

        if (canilB.checked) {
            espaciosX = espacios.filter ((espacio) => espacio.canil == "si");
            console.log(espaciosX)
        }

        busqOrdenada(espaciosX)
    }
})




//let parquesFiltrados = espacios.filter ( (espacio) => espacio.acceso === "publico")
//parquesFiltrados = espacios.filter ( (espacio) => espacio.acceso === "publico")
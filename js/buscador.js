//---RECUPERAR DATOS DE STORAGE
let espaciosLS = localStorage.getItem(`espacios`)

const espacios = JSON.parse(espaciosLS)

console.log(espacios)

let barriosLS = localStorage.getItem(`barrios`)

const barrios = JSON.parse(barriosLS)

console.log(barrios)

//---CONSTANTES
const buscador = document.getElementById(`buscador2`);
const filtro = document.getElementById(`filtro`);
const param2 = document.getElementById(`param2`);
const nuevaBusqueda = document.getElementById("nuevaBusqueda")
const btnInstalaciones = document.getElementById("radioBtn_buscador")

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
    
    if(espaciosX.length == 0) {
        alert("No hay un espacio que responda a ese criterio")
    } else {
        espaciosX.forEach(espacio => {
            const cardEspacios = document.createElement (`div`)
            cardEspacios.className = `col-md-3 card shadow-lg p-3 mb-5 bg-body rounded parques__cards--margin`
            cardEspacios.style = `widht: 18rem`

            //---API: NORMALIZAR DIRECCION 
            $.get(`http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${espacio.ubicacion}, caba`, (res) => {
            
                console.log(res)
                let calle1 = res.direccionesNormalizadas[0].nombre_calle;
                let calle2 = res.direccionesNormalizadas[0].nombre_calle_cruce;

                cardEspacios.innerHTML = `<img src="${espacio.foto}" class="card-img-top" alt="parque">
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
}

//---FILTRO INSTALACIONES
let espaciosX = [];

function espaComparar() {

    const nombreEC = 0
    const direccionEC = 0
    const tamanioEC = 0
    const barrioEC = 0
    const accesoEC = `Publico`

    juegosB = document.getElementById("juegosB")
    maquinasB = document.getElementById("maquinasB")
    baniosB = document.getElementById("baniosB")
    rejasB = document.getElementById("rejasB")
    canilB = document.getElementById("canilB")      

    espacios.forEach(espacio => {

    if (juegosB.checked) {
        juegosB.value = `si`
    } else {
        juegosB.value = espacio.instalaciones.juegos
    }
    var juegosV = juegosB.value
    
    if (maquinasB.checked) {
        maquinasB.value = "si"
    } else {
        maquinasB.value = espacio.instalaciones.maqEjercicios
    }
    var maquinasV = maquinasB.value

    if (baniosB.checked) {
        baniosB.value = `si`
    } else {
        baniosB.value = espacio.instalaciones.banios
    }
    var baniosV = baniosB.value
    
    if (canilB.checked) {
        canilB.value = `si`
    } else {
        canilB.value = espacio.canil
    }
    var canilV = canilB.value

    if (rejasB.checked) {
        rejasB.value = `si`
    } else {
        rejasB.value = espacio.rejas
    }
    var rejasV = rejasB.value
    
    if (espacio.instalaciones.maqEjercicios === maquinasV &&
        espacio.instalaciones.juegos === juegosV &&
        espacio.instalaciones.banios === baniosV &&
        espacio.rejas === rejasV &&
        espacio.canil === canilV) {espaciosX.push(espacio)}
    })

    console.log(espaciosX)
}

//---SELECTOR BUSQUEDA
let filtrado;

filtro.addEventListener(`change`, () => {
    filtrado = filtro.value
    console.log(filtrado)

    if (filtrado == `Barrio`) {
        param2.innerHTML = ""

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
        console.log(espacios)
        espaciosX = [];

        espaComparar()

        busqOrdenada()
    }
})
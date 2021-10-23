//---RECUPERAR DATOS DE STORAGE
let espaciosLS = localStorage.getItem(`espacios`)

let espacios = JSON.parse(espaciosLS)

console.log(espacios)

//---ARMAR CARDS CON ESPACIOS
const nuevoEspacio = document.getElementById("nuevoEspacio")

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

    nuevoEspacio.appendChild(cardEspacios)
    })
})
//---RECUPERAR DATOS DE STORAGE
const espaciosLS = localStorage.getItem(`espacios`)

const espacios = JSON.parse(espaciosLS)

console.log(espacios)

//---ARMAR CARDS CON ESPACIOS

const nuevoEspacio = document.getElementById("nuevoEspacio")

espacios.forEach(espacio => {
    const cardEspacios = document.createElement (`div`)
    cardEspacios.className = `col-md-3 card shadow-lg p-3 mb-5 bg-body rounded parques__cards--margin`
    cardEspacios.style = `widht: 18rem`

    cardEspacios.innerHTML = `<img src="./imagenes/nuevoParque.jpg" class="card-img-top" alt="parque">
                            <div class="card-body">
                                <h5 class="card-title">${espacio.nombre}</h5>
                                <p class="card-text">Direccion: ${espacio.ubicacion}</p>
                                <p class="card-text">Acceso: ${espacio.acceso}</p>
                                <p class="card-text">Canil: ${espacio.canil}</p>
                                <p class="card-text">Juegos: ${espacio.instalaciones.juegos}</p>
                                <p class="card-text">Mquinas de ejercicio: ${espacio.instalaciones.maqEjercicios}</p>
                                <p class="card-text">Baños: ${espacio.instalaciones.banios}</p>
                                <a href="#" class="btn btn-success">+Info</a>
                            </div>
                        </div>`

    nuevoEspacio.appendChild(cardEspacios)
});




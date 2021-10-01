let nombreParque = prompt("Cual es el nombre del nuevo parque?")
let ubicacionParque = prompt("En que direccion esta?")
let datosParque = prompt("Alguna caracteristica que quieras sumar?")

const nuevoEspacio = document.getElementById("nuevoEspacio")

nuevoEspacio.innerHTML = `<div class="col-md-3 card shadow-lg p-3 mb-5 bg-body rounded parques__cards--margin">
                            <img src="./imagenes/nuevoParque.jpg" class="card-img-top" alt="parque">
                            <div class="card-body">
                                <h5 class="card-title">${nombreParque}</h5>
                                <p class="card-text">${ubicacionParque}</p>
                                <p class="card-text">${datosParque}</p>
                                <a href="#" class="btn btn-success">+Info</a>
                            </div>
                        </div>`

//comillas para template strings alt+96
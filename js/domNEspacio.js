espacios.push(new MoldeParque ("Plaza Velez Sarfield", "Bahia Blaca y Av. Avellaneda", "publico", 1, "si", "si", "no", "si", "no"));
espacios.push(new MoldeParque ("Plaza Arenales", "Chivilcoy y Nueva York", "publico", 4, "si", "si", "no", "no", "no"));
espacios.push(new MoldeParque ("Agronomia", "Av. de los Constituyentes y Baigorria", "publico", 16, "si", "si", "si", "si", "si"));
espacios.push(new MoldeParque ("Parque Lezama", "Av. Martin Garcia y Av. Paseo Colon", "publico", 5, "si", "si", "si", "no", "no"));

const nuevoEspacio = document.getElementById("nuevoEspacio")

espacios.forEach(espacio => {
    const cardEspacios = document.createElement (`div`)
    cardEspacios.className = `col-md-3 card shadow-lg p-3 mb-5 bg-body rounded parques__cards--margin`
    cardEspacios.style = `widht: 18rem`

    cardEspacios.innerHTML = `<img src="./imagenes/nuevoParque.jpg" class="card-img-top" alt="parque">
                            <div class="card-body">
                                <h5 class="card-title">${espacio.nombre}</h5>
                                <p class="card-text">${espacio.ubicacion}</p>
                                <p class="card-text">${espacio.acceso}</p>
                                <a href="#" class="btn btn-success">+Info</a>
                            </div>
                        </div>`

    nuevoEspacio.appendChild(cardEspacios)
});




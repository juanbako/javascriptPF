class MoldeParque {
    constructor (ubicacion, accesibilidad, tamanio, juegos, maqEjercicios, banios, rejas, canil) {
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

        parseInt(this.tamanioHec);//parseando aca las variables la suma del return no funciona, concatena
        parseInt(this.puntuacionParque);
        
        return (this.puntuacionParque = parseInt(this.puntuacionParque) + parseInt(this.tamanioHec));
    };
};

function accionNuevo() {
    var accion = prompt("Desea cargar un nuevo espacio o buscar entre los existentes? Responder: nuevo o buscar")
    
    if (accion == "nuevo") {alert("Ingresa los datos que te pediremos a continuacion.");
        formulario() } 
    else {
        alert("La funcion buscar no esta disponible todavia.")
    return false};
}

function formulario() { 
        var ubicacion = prompt("En que direccion se encuentra?"); 
        var acceso = prompt("Es publico o privado?"); 
        var tamanio = prompt("Cual es el tamaño? En hectareas");
        alert("Responder las siguientes preguntas con si o no");
        var juegos = prompt("El parque posee juegos?");
        var maqEjercicios = prompt("El parque posee maquinas de ejercicios?");
        var banios = prompt("El parque posee baños?");
        var rejas = prompt("El parque esta enrejado?");
        var canil = prompt("El parque tiene canil?");
        parques.push(new MoldeParque (ubicacion, acceso, tamanio, juegos, maqEjercicios, banios, rejas, canil));

}

const parques = []
var parquesPublicos = []
var parquesPrivados = []

parques.push(new MoldeParque ("avv", "privado", 1, "si", "si", "no", "si", "no"));
parques.push(new MoldeParque ("devoto", "publico", 4, "si", "si", "no", "no", "no"));
parques.push(new MoldeParque ("agrono", "privado", 10, "si", "si", "si", "si", "si"));
parques.push(new MoldeParque ("lesama", "publico", 5, "si", "si", "si", "no", "no"));

//console.log(parques);

accionNuevo();

var continuidadAccionNuevo = prompt("Desea cargar otro espacio? responder: si o no");

while (continuidadAccionNuevo == "si") {
    accionNuevo();
    continuidadAccionNuevo = prompt("Desea cargar otro espacio? responder: si o no");
}

parques.forEach( (parque) => {
    parque.puntuacion()
})

parques.sort((a, b) =>{
    if (a.puntuacionParque > b.puntuacionParque) {
        return 1;
    }

    if (a.puntuacionParque < b.puntuacionParque) {
        return -1;
    }

    return 0;
});

console.log(parques);

let parquesFiltrados = parques.filter ( (parque) => parque.acceso === "publico");

console.log(parquesFiltrados);
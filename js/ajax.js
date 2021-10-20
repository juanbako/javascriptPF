let direVerde = "callao y corrientes"

//$.get(`http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${direVerde}, caba`, (res) => {

//console.log(res)
//})

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

//---ARRAYS
espacios = [];

espacios.push(new MoldeParque ("Avellaneda", "Av. Directorio y Av. Lacarra", "Mataderos", "publico", 10, "si", "si", "no", "si", "no"));
espacios.push(new MoldeParque ("Plaza Velez Sarfield", "Bahia Blanca y Av. Avellaneda", "Floresta", "publico", 1, "si", "si", "no", "si", "no"));
espacios.push(new MoldeParque ("Plaza Arenales", "Chivilcoy y Nueva York", "Devoto", "publico", 4, "si", "si", "no", "no", "no"));
espacios.push(new MoldeParque ("Agronomia", "Av. San Martin y Nogoya", "Agronomia", "publico", 16, "si", "si", "si", "si", "si"));
espacios.push(new MoldeParque ("Parque Lezama", "Av. Martin Garcia y Av. Paseo Colon", "La Boca", "publico", 5, "si", "si", "si", "no", "no"));
espacios.push(new MoldeParque ("Jardin Japones", "Av. del Libertador y Av. Casares", "Palermo", "privado", 12, "no", "no", "si", "si", "no"));

espacios.forEach(espacio => {
    espacio.puntuacion()
});

console.log(espacios[1].puntuacionParque)

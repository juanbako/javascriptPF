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
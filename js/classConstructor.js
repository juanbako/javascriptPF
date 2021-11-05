class MoldeParque {
    constructor (nombre, ubicacion, barrio, accesibilidad, tamanio, juegos, maqEjercicios, banios, rejas, canil, foto) {
        this.nombre = nombre;
        this.ubicacion = ubicacion; 
        this.barrio = barrio;
        this.acceso = accesibilidad;
        this.tamanioHec = tamanio;
        this.instalaciones = { juegos: juegos, maqEjercicios: maqEjercicios, banios: banios };
        this.rejas = rejas;
        this.canil = canil;
        this.foto = foto;
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

class Contacto {
    constructor (nombre, apellido, mail, barrio, mensaje) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.barrio = barrio;
        this.mensaje = mensaje;
    }
};
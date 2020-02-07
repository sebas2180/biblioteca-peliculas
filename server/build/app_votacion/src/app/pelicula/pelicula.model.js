"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pelicula {
    constructor(nombre, anio, votos) {
        this.nombre = nombre;
        this.anio = anio;
        this.votos = votos || 0; // si no te estoy pasando nada, ponle cero
    }
    voteUp() {
        this.votos++;
    }
    voteDown() {
        this.votos--;
    }
}
exports.Pelicula = Pelicula;

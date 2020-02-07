"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class peliculasRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/peliculas', peliculaController.pelicula);
    }
}
const peliculasRoutes = new peliculasRouter();
exports.default = peliculasRoutes.router;

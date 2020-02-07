"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peliculaController_1 = require(".././controllers/peliculaController");
class peliculasRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/todos', peliculaController_1.peliculaController.lista);
        this.router.get('/:id', peliculaController_1.peliculaController.listaUno);
        this.router.post('/buscar/', peliculaController_1.peliculaController.buscarPelicula);
        this.router.post('/agregar/', peliculaController_1.peliculaController.create);
        this.router.delete('/eliminar/:id', peliculaController_1.peliculaController.delete);
        this.router.put('/:id', peliculaController_1.peliculaController.update);
    }
}
const peliculasRoutes = new peliculasRouter();
exports.default = peliculasRoutes.router;

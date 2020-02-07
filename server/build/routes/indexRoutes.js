"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class indexroutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
        console.log('errorr');
        this.router.get('/a', (req, res) => {
            res.send('hola');
        });
    }
}
const indexRoutes = new indexroutes();
exports.default = indexRoutes.router;

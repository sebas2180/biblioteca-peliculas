"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class PeliculaController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const lista = yield conn.query('select * from peliculas');
            conn.end();
            res.json(lista);
        });
    }
    listaUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const linea = 'SELECT * FROM peliculas WHERE ' + req.params.id;
            console.log(linea);
            const { id } = req.params;
            console.log(id);
            const conn = yield database_1.connect();
            const rows = yield conn.query(linea);
            conn.end();
            console.log(rows[0]);
            if (rows[0] == []) {
                res.status(404).json({ message: "El id no existe." });
            }
            else {
                res.json(rows[0]);
            }
        });
    }
    buscarPelicula(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.connect();
                console.log('SELECT * FROM peliculas WHERE ?', [req.body]);
                const rows = yield conn.query('SELECT * FROM peliculas WHERE ?', [req.body]);
                console.log(rows);
                conn.end();
                return res.json(rows);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.connect();
            const lista = yield conn.query('INSERT INTO peliculas set ?', [req.body]);
            conn.end();
            res.json({ message: "Pelicula guardada." });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const conn = yield database_1.connect();
            const lista = yield conn.query('DELETE FROM peliculas WHERE ' + [id]);
            conn.end();
            res.json({ message: "Pelicula borrada " });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const update = req.body;
                console.log('UPDATE peliculas set ? WHERE ' + [id], [update]);
                const conn = yield database_1.connect();
                const lista = yield conn.query('UPDATE peliculas set ? WHERE  titulo = ?', [update, id]);
                conn.end();
                res.json({ status: 600, text: "update juego" });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.peliculaController = new PeliculaController();

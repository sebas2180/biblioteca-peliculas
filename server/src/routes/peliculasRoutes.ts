
import { Router  } from 'express';
import {peliculaController} from '.././controllers/peliculaController';

class peliculasRouter { 
    public router : Router = Router(); 
    constructor() {
        this.config();
    }
    config() : void {
        this.router.get('/todos', peliculaController.lista);
        this.router.get('/:id', peliculaController.listaUno);
        this.router.post('/buscar/', peliculaController.buscarPelicula);
        this.router.post('/agregar/', peliculaController.create);
        this.router.delete('/eliminar/:id',peliculaController.delete);
        this.router.put('/:id',peliculaController.update);

    }
}
const peliculasRoutes = new peliculasRouter();
export default peliculasRoutes.router;



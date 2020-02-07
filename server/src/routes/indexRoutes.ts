import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class indexroutes { 
    public router: Router = Router();
    constructor() { 
        this.config();   
    }
    config() : void {
        this.router.get('/', indexController.index);
        console.log('errorr');
        this.router.get('/a', (req,res)=>{
            res.send('hola');
        });
    }
}

const indexRoutes = new indexroutes();
export default indexRoutes.router;
import { Request , Response} from 'express';

class IndexController { 
    
    public index (req: Request ,res: Response)  {
        console.log('error');
        res.send('d');
    }
}
export const indexController = new IndexController();


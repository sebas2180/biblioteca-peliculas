import { Request, Response } from 'express';
import {connect} from '../database';

 class PeliculaController { 

    public async lista(req: Request, res: Response): Promise<void> {
        const conn = await connect();
        const lista = await conn.query('select * from peliculas');
        conn.end();
        res.json(lista);
    }
    public async listaUno(req: Request, res: Response): Promise<any> {
    const linea = 'SELECT * FROM peliculas WHERE '+req.params.id;
    console.log(linea);
    const  {id} = req.params;
    console.log(id);
    const conn = await connect();
    const rows = await conn.query(linea);
    conn.end();
      console.log(rows[0]);
      if(rows[0] == [] ){
        res.status(404).json({message:"El id no existe."});
      }else{
        res.json(rows[0]);     
      }
    }

    public async buscarPelicula(req: Request, res: Response): Promise<any> {
      try{
        const conn = await connect();
        console.log('SELECT * FROM peliculas WHERE ?',[req.body]);
      const rows = await conn.query('SELECT * FROM peliculas WHERE ?',[req.body]);
      console.log(rows);
      conn.end();
      return res.json(rows);
      
      }catch(err){
        console.log(err);
      }
      
      }

      
      

    public async create(req: Request, res: Response):Promise<void> {
        const conn = await connect();
        const lista = await conn.query('INSERT INTO peliculas set ?',[req.body]);
        conn.end();
        res.json({message:"Pelicula guardada."})
    }
    public  async delete(req: Request,res: Response) : Promise<void>  {
        const { id } = req.params;
        const conn = await connect();

        const lista = await conn.query('DELETE FROM peliculas WHERE '+[id]);
        conn.end();
         res.json({message:"Pelicula borrada "});
       
     
    }
    public async update(req: Request,res: Response)  {
       try{
        const {id}=req.params;
        const update=req.body;
        console.log('UPDATE peliculas set ? WHERE '+[id],[update]);
        const conn = await connect();
        const lista = await conn.query('UPDATE peliculas set ? WHERE  titulo = ?',[update,id]);
        conn.end();
        res.json({status:600, text:"update juego"});
    
       }catch(err){
        console.log(err);
       }
      }
      
}
 
export const peliculaController = new PeliculaController();
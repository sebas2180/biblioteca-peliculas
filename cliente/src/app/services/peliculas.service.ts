
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PeliculaModelModule } from '../models/pelicula-model/pelicula-model.module';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  API_URI: 'http://localhost:3000/peliculas/';
  constructor(private http: HttpClient) { }

  getBuscarPeliculas() {
    return this.http.get(`http://localhost:3000/peliculas/todos`);
  }
  getBuscarPelicula(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }
  getBuscarPeliculaPorNombre(nombre: string) {

    return this.http.post(`http://localhost:3000/peliculas/buscar`, {titulo: nombre});
  }
  savePelicula(pelicula: PeliculaModelModule) {
    return this.http.post(`http://localhost:3000/peliculas/agregar`, pelicula);
  }
  actualizarPelicula(id: number|string, update: PeliculaModelModule){
    
    return this.http.put(`http://localhost:3000/peliculas/${id}`, update);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.API_URI}/eliminar/${id}`);
  }

}

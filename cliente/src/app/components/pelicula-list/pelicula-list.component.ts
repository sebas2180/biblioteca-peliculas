import { Validators } from '@angular/forms';
import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit, Input} from '@angular/core';
import { PeliculaModelModule} from '../../models/pelicula-model/pelicula-model.module';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {

 peliculas: PeliculaModelModule[] ;

  constructor(private peliculaService: PeliculasService) {
    this.peliculaService.getBuscarPeliculas().subscribe(
      res => {
              this.peliculas = res[0];
              console.log(this.peliculas);
            } ,
      err => console.error(err)
    );
   }

  ngOnInit() {
   
    
  }
  

}

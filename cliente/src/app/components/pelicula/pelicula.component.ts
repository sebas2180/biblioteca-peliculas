import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit, Input} from '@angular/core';
import { PeliculaModelModule } from '../../models/pelicula-model/pelicula-model.module';
import {ActivatedRoute,RouterModule,Router  } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  titulo: string;
  @Input() pelicula: PeliculaModelModule;
  isVoto : number = 0;
  
  constructor(public router: Router, private route:ActivatedRoute,private service : PeliculasService) { }

  ngOnInit() {
    console.log(this.router.url);

  
    if(this.pelicula == undefined){
      this.pelicula = new PeliculaModelModule(0,'',0,0,0,0,'','');
    }else{
      this.titulo = this.pelicula.titulo;

    }
   
    this.route.params.subscribe( params =>
      this.service.getBuscarPeliculaPorNombre(
        params['titulo']).subscribe(
              res => {
                console.log('titulo'+this.titulo);
                console.log(res[0]);
                  res[0].forEach(element => {
                    this.pelicula = element;
                    this.titulo=params['titulo'];
                    
                  });
              },
              error => {
                console.log(error);
              }
      )
     );
  }

  voteUp() {
    if(this.isVoto == 0) {
      this.pelicula.votos = this.pelicula.votos + 1;
      this.isVoto= 1;
      delete this.pelicula.id;
      delete this.pelicula.create_at;
      console.log(this.pelicula);
      this.service.actualizarPelicula(this.pelicula.titulo, this.pelicula)
      .subscribe(
        res => {
          console.log('exito');
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  voteDown() {
    if(this.isVoto == 0) {
      this.isVoto= -1;
      this.pelicula.votos = this.pelicula.votos - 1;
      delete this.pelicula.id;
      delete this.pelicula.create_at;
     
      this.service.actualizarPelicula(this.pelicula.titulo, this.pelicula)
      .subscribe(
        res => {
          console.log('exito');
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}



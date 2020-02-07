import { Pelicula } from './../../../../../../app_votacion/src/app/pelicula/pelicula.model';
import { PeliculaModelModule } from './../../models/pelicula-model/pelicula-model.module';
import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './../../services/peliculas.service';
import { promise } from 'protractor';
//import getMac,{ isMAC } from 'getmac';
@Component({
  selector: 'app-pelicula-form',
  templateUrl: './pelicula-form.component.html',
  styleUrls: ['./pelicula-form.component.css']
})
export class PeliculaFormComponent implements OnInit {
  Pelicula: PeliculaModelModule;
  peliculasAux: PeliculaModelModule;
  aux: PeliculaModelModule;
  isShow = false;
  isActualizar= false;
  constructor(private service: PeliculasService) {
   }

  ngOnInit(){
    console.log(this.peliculasAux !=null);
    if(this.peliculasAux !=null){


      this.Pelicula=this.peliculasAux;
      console.log(this.Pelicula.titulo);
    }else{
      this.Pelicula = new PeliculaModelModule(0,'', 0 , 0, 0 , 0 , '' );
    }
    
    
  }
  preVisualizar() {
    this.isShow = true;
  }
  cancelar() {
    this.isShow = false;
  }
  actualizar() {
    delete this.Pelicula.id;
    delete this.Pelicula.create_at;

    this.service.actualizarPelicula(this.Pelicula.titulo, this.Pelicula)
                          .subscribe(
                            res => {
                                alert('Actualizacion exitosa');
                                this.Pelicula = new PeliculaModelModule(0,'', 0 , 0, 0 , 0 , '' );
                                this.isShow = false;
                            },
                            err => {

                            }
                          );
    }
  editar($e: Event) {
    $e.preventDefault();
    this.service.getBuscarPeliculaPorNombre(this.Pelicula.titulo).subscribe(
      res => {
          this.aux  = res[0];
          if ( !this.aux[0]==null ) {
            alert('La pelicula existe NO en la BD');
           } else {
            this.peliculasAux = res[0];
            res[0].forEach(element => {
              this.Pelicula  =  element;
            });
            this.isActualizar = true;
           }
             },
     err => {
             console.log(err);
           }
       );
  }
   enviar() {
    delete this.Pelicula.create_at;
    delete this.Pelicula.id;
     // tslint:disable-next-line: align
     this.service.getBuscarPeliculaPorNombre(this.Pelicula.titulo).subscribe(
                 res => {
                      this.peliculasAux = res[0];
                      console.log(this.peliculasAux[0] == null);
                      if (this.peliculasAux[0] == null) {
                          this.service.savePelicula(this.Pelicula)
                                      .subscribe(
                                        res => {
                                                alert('Guardado exitoso');
                                                this.isShow = false;
                                        },
                                        () => {
                                          alert('Error al guardar');
                                        }
                                      );
                      } else {
                        alert('La pelicula existe en la BD');
                      }
                        },
                err => {
                        console.log(err);
                      }
                  );
   
   }
}

import { PeliculaComponent } from './components/pelicula/pelicula.component';

import { Pelicula } from './../../../../app_votacion/src/app/pelicula/pelicula.model';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaListComponent } from '../app/components/pelicula-list/pelicula-list.component';
import { PeliculaFormComponent } from '../app/components/pelicula-form/pelicula-form.component';

const routes: Routes = [
    {path: '' ,
    redirectTo: '/listado',
    pathMatch: 'full'
    },
    {
      path: 'listado',
     component: PeliculaListComponent
    },
  {
    path: 'add',
    component: PeliculaFormComponent
  },
  {
    path: 'busqueda/:titulo',
    component: PeliculaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

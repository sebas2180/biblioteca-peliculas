import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PeliculaFormComponent } from './components/pelicula-form/pelicula-form.component';
import { PeliculaListComponent } from './components/pelicula-list/pelicula-list.component';
import { PeliculasService } from './services/peliculas.service';
import { FormsModule} from '@angular/forms';

import { PeliculaComponent } from './components/pelicula/pelicula.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PeliculaFormComponent,
    PeliculaListComponent,
  
    PeliculaComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ PeliculasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

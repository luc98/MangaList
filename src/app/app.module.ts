import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas
import { APP_ROUTING } from './app.routes'; 
//Services
import { CharacterService } from "./services/character.service";
//Components

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CharactersComponent } from './components/characters/characters.component';
import { from } from 'rxjs';
import { MangaComponent } from './components/manga/manga.component';
import { SearchResultComponentComponent } from './components/search-result-component/search-result-component.component';
import { MangaTarjetaComponent } from './components/manga-tarjeta/manga-tarjeta.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CharactersComponent,
    MangaComponent,
    SearchResultComponentComponent,
    MangaTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

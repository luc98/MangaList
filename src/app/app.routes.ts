import { RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CharactersComponent } from './components/characters/characters.component';
import { MangaComponent } from './components/manga/manga.component';
import { SearchResultComponentComponent } from './components/search-result-component/search-result-component.component';

const APP_ROUTES:Routes =[
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'characters', component: CharactersComponent},
    {path:'manga/:id', component: MangaComponent},
    {path:'search/:id', component: SearchResultComponentComponent},
    {path:'**', pathMatch:'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
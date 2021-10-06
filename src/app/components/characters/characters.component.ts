import { Component, OnInit } from '@angular/core';

import { CharacterService, Manga } from "../../services/character.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

    mangas:Manga[]=[];

  constructor(private _charachterservice:CharacterService,
              private _router:Router) { 
    console.log("constructor");
  }

  ngOnInit(): void {
    

    this.mangas = this._charachterservice.getMangas();
  }
  verManga(idx:number){
      
      this._router.navigate( ['/manga',idx] )
    }

}

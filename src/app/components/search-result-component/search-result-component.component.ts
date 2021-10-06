import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

import { CharacterService, Manga } from "../../services/character.service";


@Component({
  selector: 'app-search-result-component',
  templateUrl: './search-result-component.component.html'
})
export class SearchResultComponentComponent implements OnInit {
  mangas:Manga[]=[];
  termino: any;
  constructor(private _characterservice:CharacterService,
              private _router:Router,
              private _activatedRoute:ActivatedRoute
              ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params =>{
      this.termino = params['id'];
      this.mangas = this._characterservice.buscarManga (params['id']);
      console.log(this.mangas);
     });
  
  }
  verManga(idx:number){
      
    this._router.navigate( ['/manga',idx] );
  }
  

}

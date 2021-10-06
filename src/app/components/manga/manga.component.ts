import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CharacterService } from "../../services/character.service";
@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styles: [
  ]
})
export class MangaComponent implements OnInit {

  manga:any ={};


  constructor(private _activatedRoute: ActivatedRoute,
              private _characterService: CharacterService) { 
    this._activatedRoute.params.subscribe(params =>{
      
     this.manga = this._characterService.getManga( params ['id'] );
      console.log(this.manga);
    });
  }

  ngOnInit(): void {
  }

}

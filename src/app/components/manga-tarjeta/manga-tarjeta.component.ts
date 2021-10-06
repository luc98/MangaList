import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-manga-tarjeta',
  templateUrl: './manga-tarjeta.component.html',
  styleUrls: ['./manga-tarjeta.component.css']
})
export class MangaTarjetaComponent implements OnInit {
    
    @Input() Manga: any ={};
    @Input() index: number;


   // @Output() mangaSeleccionado : EventEmitter<number>;
  
    constructor(private _router: Router) { 
   // this.mangaSeleccionado = new EventEmitter();
  }
          
  ngOnInit(): void {
    
  }
  
  verManga(){
    //this.mangaSeleccionado.emit(this.index);
      
    this._router.navigate( ['/manga',this.index] )
  
  }
  

}

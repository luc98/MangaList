import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  buscarManga(busqueda: String){
    console.log(busqueda);
  }

  busqueda(id:string){
    this._router.navigate( ['/search',id] );
  }

}

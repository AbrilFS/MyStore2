import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  activeMenu = false;  //El menú empezará en falso
  counter = 0;

  constructor(
    private storeService: StoreService //inyeccion de dependencias del servicio StoreService
  ){ }

  ngOnInit(): void{
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    }) //
  }

  //Método para cabiar de false a true el menú
  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}

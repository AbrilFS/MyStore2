import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  activeMenu = false;  //El menú empezará en falso

  //Método para cabiar de false a true el menú
  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}

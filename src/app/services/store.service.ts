import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

    private myShoppingCart: Product[] = [] //Cantidad de productos en el carrito.
    private myCart = new BehaviorSubject<Product[]>([]);

    //Asignando un suscriptos para rxjs:
    myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct (product:Product){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){
    return this.myShoppingCart.reduce ((sum, item) => sum + item.price, 0);
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

    private myShoppingCart: Product[] = [] //Cantidad de productos en el carrito.


  constructor() { }

  addProduct (product:Product){
    this.myShoppingCart.push(product);
  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){
    return this.myShoppingCart.reduce ((sum, item) => sum + item.price, 0);
  }
}

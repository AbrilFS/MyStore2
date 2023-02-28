import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product[] = [] //Cantidad de productos en el carrito.
  total = 0//variable del total de productos en el carrito.
  products: Product[] = [];

  constructor(
    private storeService : StoreService,
    private productService : ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit (): void{
    this.productService.getAllProducts()
    .subscribe(data =>{
      this.products = data
    });
  }

  //método para agregar productos al carrito
  onAddToShoppingCart(product:Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }



}

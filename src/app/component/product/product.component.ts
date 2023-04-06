import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: "",
      name: ""
    },
    description: ''
  };

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showDetail = new EventEmitter<string>(); //enviándolo al padre "Products"


  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

  onShowDetail(){
    this.showDetail.emit(this.product.id);
    }
  

}

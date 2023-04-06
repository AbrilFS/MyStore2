import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL= "https://young-sands-07814.herokuapp.com/api/products"

  constructor(
    private http : HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]> (this.apiURL); //tipando el array le decimos al método get que me traiga un array de productos.
  }

  getProduct(id:string){
    return this.http.get<Product>(`${this.apiURL}/${id}`)
  }

  //MÉTODO POST
  create(dto: CreateProductDTO) {
    return this.http.post<Product>(this.apiURL, dto);
  }

  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiURL}/${id}`, dto);
  }

  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiURL}/${id}`);
  }
}

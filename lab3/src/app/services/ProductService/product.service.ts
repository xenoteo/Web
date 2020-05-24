import { Injectable } from '@angular/core';
import {Product} from "../../models/product/product";
import {BICYCLES} from "../../models/product-list"
import {SCOOTERS} from "../../models/product-list"
import {Bicycle} from "../../models/bicycle/bicycle";
import {Scooter} from "../../models/scooter/scooter";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  bicycles: Bicycle[] = BICYCLES;
  scooters: Scooter[] = SCOOTERS;
  products: Product[] = [];

  constructor() {
    for(let bike of this.bicycles)
      this.products.push(bike);
    for(let scooter of this.scooters)
      this.products.push(scooter);
  }

  getProducts(){
    return this.products;
  }

  addProduct(product: Product){
    this.products.push(product);
  }
  deleteProduct(product: Product){
    if ((<Bicycle>product).description !== undefined){
      let toDelete = <Bicycle>product;
      let index = this.products.indexOf(toDelete);
      this.products.splice(index, 1);
    }
    else{
      let toDelete = <Scooter>product;
      let index = this.products.indexOf(toDelete);
      this.products.splice(index, 1);
    }
  }
}

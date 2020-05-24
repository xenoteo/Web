import { Injectable } from '@angular/core';
import {Item} from "../../models/item/item";
import {Product} from "../../models/product/product";
import {ProductService} from "../ProductService/product.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = [];
  sum: number = 0;
  constructor() { }

  getItems(){
    return this.items;
  }

  addProduct(product: Product){
    if (product.unitsOnStock == 0){
      alert("This product is unavailable");
      return;
    }
    let founded = false;
    for (let item of this.items) {
      if (item.product == product) {
        item.number += 1;
        founded = true;
      }
    }
    if (!founded){
      let item = new Item();
      item.product = product;
      item.number = 1;
      this.items.push(item);
    }
    this.sum += product.unitPrice;
    product.unitsOnStock -= 1;
  }

  deleteProduct(product: Product){
    for (let item of this.items){
      if (item.product == product){
        if (item.number == 1){
          let index = this.items.indexOf(item);
          this.items.splice(index, 1);
        }
        else item.number -= 1;
      }
    }
    this.sum -= product.unitPrice;
    product.unitsOnStock += 1;
  }

  getSum(){
    return this.sum;
  }
}

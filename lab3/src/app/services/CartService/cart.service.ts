import { Injectable } from '@angular/core';
import {Item} from "../../models/item/item";
import {Product} from "../../models/product/product";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = [];
  sum: number;
  constructor() {
    this.sum = 0;
  }

  getItemsObservable(){
    return of(this.items);
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
}

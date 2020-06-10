import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/CartService/cart.service";
import {Item} from "../../models/item/item";
import {Product} from "../../models/product/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Item[];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.setCart();
  }

  setCart() {
    this.cartService.getItemsObservable().subscribe(items => this.items = items);
  }

  getSum() {
    let sum = 0;
    for (let item of this.items) {
      sum += item.product.unitPrice * item.number;
    }
    return Math.round(sum.valueOf() * 100) / 100;
  }

  deleteProduct(product: Product) {
    this.cartService.deleteProduct(product);
  }
}

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
  sum: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.setCart();
  }

  setCart(){
    this.items = this.cartService.getItems();
    this.sum = Math.round(this.cartService.getSum() * 100) / 100;
  }

  deleteProduct(product: Product){
    this.cartService.deleteProduct(product);
    this.setCart();
  }

}

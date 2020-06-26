import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/product/product";
import {Bicycle} from "../../models/bicycle/bicycle";
import {Scooter} from "../../models/scooter/scooter";
import {CartService} from "../../services/CartService/cart.service";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  @Input() product: Product;
  @Output() notify = new EventEmitter<Product>();
  isBike: boolean;
  bike: Bicycle;
  scooter: Scooter;
  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.isProductBike();
  }

  private static getBackgroundStyle(product: Product){
    if (product.unitsOnStock > 3) return "list-group-item-dark";
    else return "list-group-item-warning";
  }

  getStyle(product: Product){
    return ProductInfoComponent.getBackgroundStyle(product);
  }

  private isProductBike(){
    this.isBike = (<Bicycle>this.product).description !== undefined;
    if (this.isBike) this.bike = <Bicycle> this.product;
    else this.scooter = <Scooter> this.product;
  }

  getTextColor(product: Product){
    if (product.unitsOnStock >= 10) return "text-success";
    return "text-danger";
  }

  deleteProduct(){
    if (this.isBike) this.notify.emit(this.bike);
    else this.notify.emit(this.scooter);
  }

  addProductToCart(product: Product){
    this.cartService.addProduct(product);
  }
}

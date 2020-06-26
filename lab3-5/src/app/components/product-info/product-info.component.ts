import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/product/product";
import {Bicycle} from "../../models/bicycle/bicycle";
import {Scooter} from "../../models/scooter/scooter";
import {CartService} from "../../services/CartService/cart.service";
import {AuthenticationService} from "../../services/AuthenticationService/authentication.service";
import {UserService} from "../../services/UserService/user.service";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  @Input() product: Product;
  @Output() delete = new EventEmitter<Product>();
  isBike: boolean;
  bike: Bicycle;
  scooter: Scooter;
  currentUserEmail: string;
  edit: boolean;

  constructor(private cartService: CartService,
              private authenticationService: AuthenticationService,
              private userService: UserService) {

  }

  ngOnInit(): void {
    this.setIsBike();
    this.setCurrentUser();
  }

  private static getBackgroundStyle(product: Product){
    if (product.unitsOnStock > 3) return "list-group-item-dark";
    else return "list-group-item-warning";
  }

  getStyle(product: Product){
    return ProductInfoComponent.getBackgroundStyle(product);
  }

  getTextColor(product: Product){
    if (product.unitsOnStock >= 10) return "text-success";
    return "text-danger";
  }

  private setCurrentUser(){
    this.authenticationService.getState().subscribe(data => {
      if (data != null)
        this.currentUserEmail = data.email
      else this.currentUserEmail = null;
    });
  }

  canEdit(){
    return (this.currentUserEmail == this.product.user) ||
            (this.userService.isAdmin(this.currentUserEmail));
  }

  private setIsBike(){
    this.isBike = (<Bicycle>this.product).description !== undefined;
    if (this.isBike) this.bike = <Bicycle> this.product;
    else this.scooter = <Scooter> this.product;
  }

  deleteProduct(){
    this.delete.emit(this.product);
    this.cartService.deleteItem(this.product);
  }

  addProductToCart(product: Product){
    this.cartService.addProduct(product);
  }

  editProduct(){
    this.edit = true;
  }

  close(){
    this.edit = false;
  }

  getEditStyle(): string {
    if (!this.edit) return "d-none";
    else return "";
  }
}

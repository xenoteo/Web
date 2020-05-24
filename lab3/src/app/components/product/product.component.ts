import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product/product";
import {ProductService} from "../../services/ProductService/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {
  products: Product[];
  isFormDisplayed: boolean = false;
  isCartDisplayed: boolean = false;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.setProducts();
  }

  deleteProduct(product: Product){
    this.productService.deleteProduct(product);
    this.products = this.productService.getProducts();
  }

  addProduct(product: Product){
    this.productService.addProduct(product);
    this.products = this.productService.getProducts();
    this.isFormDisplayed = false;
  }

  setProducts(){
    this.products = this.productService.getProducts();
  }

  displayForm(){
    this.isFormDisplayed = true;
  }

  changeCartDisplay(){
    this.isCartDisplayed = !this.isCartDisplayed;
  }
}


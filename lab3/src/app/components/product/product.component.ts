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

  constructor(private productService: ProductService) {
    this.setProducts();
  }

  ngOnInit(): void {
    this.setProducts();
  }

  deleteProduct(product: Product){
    this.productService.deleteProduct(product);
  }

  setProducts(){
    this.productService.getData().subscribe(data => {
        this.products = data.map(e => {
          return {
            id: e.payload.doc.id, ...e.payload.doc.data()
          } as Product;
        })
      });
  }

}


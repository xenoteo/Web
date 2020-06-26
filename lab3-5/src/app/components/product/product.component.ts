import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product/product";
import {ProductService} from "../../services/ProductService/product.service";
import {Filter} from "../../models/filter/filter";
import {Bicycle} from "../../models/bicycle/bicycle";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {
  products: Product[];
  filtered: Product[];
  filter: Filter;

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
      this.filtered = data.map(e => {
        return {
          id: e.payload.doc.id, ...e.payload.doc.data()
        } as Product;
      })
      });
  }

  setFilter(filter: Filter){
    this.filter = filter;

    this.filtered = [];
    for (let product of this.products){
      if (this.passes(product)) this.filtered.push(product)
    }
  }

  private passes(product: Product){
    let namePasses = (this.filter.name == ""
      || this.filter.name.toUpperCase().includes(product.name.toUpperCase())
      || product.name.toUpperCase().includes(this.filter.name.toUpperCase()));
    let maxPricePasses = (this.filter.maxPrice == -1 || this.filter.maxPrice >= product.unitPrice);
    let minPricePasses = (this.filter.minPrice == -1 || this.filter.minPrice <= product.unitPrice);
    let typePasses = (this.filter.areBoth
                        || (this.filter.isBike && this.isBike(product))
                        || (!this.filter.isBike && !this.isBike(product)));
    return namePasses && maxPricePasses && minPricePasses && typePasses;
  }

  isBike(product: Product): boolean{
    return (<Bicycle>product).description !== undefined;
  }

}


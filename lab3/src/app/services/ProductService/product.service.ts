import { Injectable } from '@angular/core';
import {Product} from "../../models/product/product";
import {FirestoreService} from "../FirestoreService/firestore.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor(private firestoreService: FirestoreService) {
    this.firestoreService.getData().subscribe(data => {
        this.products = data.map(e => {
          return {
            id: e.payload.doc.id, ...e.payload.doc.data()
          } as Product;
        })
      }
    );
  }

  getData(){
    return this.firestoreService.getData();
  }

  addProduct(product: Product){
    this.firestoreService.createData(product);
  }

  deleteProduct(product){
    this.firestoreService.deleteData(product);
  }
}

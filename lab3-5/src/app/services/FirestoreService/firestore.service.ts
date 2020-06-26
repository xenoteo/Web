import {Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Product} from "../../models/product/product";
import {User} from "../../models/user/user";
import {AngularFireDatabase} from "@angular/fire/database";


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private productsPath = '/products';
  private productsReference: AngularFirestoreCollection<Product> = null;

  constructor(private firestore: AngularFirestore, private db: AngularFireDatabase) {
    this.productsReference = firestore.collection(this.productsPath);
  }

  getData() {
    return this.productsReference.snapshotChanges();
  }

  getUsers() {
    return this.firestore.collection('/users').snapshotChanges();
  }

  createData(product: Product) {
    return this.productsReference.add({...product});
  }

  updateData(product: Product) {
    delete product.id;
    this.productsReference.doc(product.id).update(product);
  }

  deleteData(product) {
    this.productsReference.doc(product.id).delete();
  }
}

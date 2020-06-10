import {Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Product} from "../../models/product/product";


@Injectable({
  providedIn: 'root'
})
export class FirestoreService{
  private productPath = '/products';
  private productsReference: AngularFirestoreCollection<Product> = null;

  constructor(private firestore: AngularFirestore){
    this.productsReference = firestore.collection(this.productPath);
  }

  getData(){
    return this.productsReference.snapshotChanges();
  }

  createData(product: Product){
    return this.productsReference.add({...product});
  }

  updateData(product: Product){
    delete product.id;
    this.productsReference.doc(product.id).update(product);
  }

  deleteData(product){
    this.productsReference.doc(product.id).delete();
  }
}

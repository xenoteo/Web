import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Bicycle} from "../../models/bicycle/bicycle";
import {Product} from "../../models/product/product";
import {ProductService} from "../../services/ProductService/product.service";
import {Scooter} from "../../models/scooter/scooter";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  isBike: boolean;
  checked: boolean = false;

  // params for product in general
  name = new FormControl('');
  unitsOnStock = new FormControl('');
  unitPrice = new FormControl('');
  imgSrc = new FormControl('');

  // params for bicycle
  type = new FormControl('');
  frameSize = new FormControl('');
  wheelDiameter = new FormControl('');
  description = new FormControl('');

  // params for scooter
  maxRange = new FormControl('');
  weight = new FormControl('');

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  check(s: string){
    this.checked = true;
    this.isBike = (s == "bike");
  }

  submitProduct(){
    let product = new Product();
    if (this.name.value == ""){
      alert("Please enter product name");
      return;
    }
    product.name = this.name.value;

    if (this.unitPrice.value == "") product.unitPrice = 0;
    else product.unitPrice = parseFloat(this.unitPrice.value);

    if (this.unitsOnStock.value == "") product.unitsOnStock = 0;
    else product.unitsOnStock = parseInt(this.unitsOnStock.value);

    if (this.imgSrc.value == "") product.imgSrc = "assets/img/undefined.jpg";
    else product.imgSrc = this.imgSrc.value;

    alert("New product has been added");

    return product;
  }

  clearProduct(){
    this.name = new FormControl('');
    this.unitPrice = new FormControl('');
    this.unitsOnStock = new FormControl('');
    this.imgSrc = new FormControl('');
  }

  submitBicycle(){
    let bike = this.submitProduct() as Bicycle;

    bike.description = this.description.value;
    bike.type = this.type.value;
    if (this.wheelDiameter.value == "") bike.wheelDiameter = 0;
    else bike.wheelDiameter = parseFloat(this.wheelDiameter.value);
    if (this.frameSize.value == "") bike.frameSize = 0;
    else bike.frameSize = parseInt(this.frameSize.value);

    this.productService.addProduct(bike);

    this.clearProduct();
    this.type = new FormControl('');
    this.frameSize = new FormControl('');
    this.wheelDiameter = new FormControl('');
    this.description = new FormControl('');

    this.checked = false;
  }

  submitScooter(){
    let scooter = this.submitProduct() as Scooter;

    if (this.maxRange.value == "") scooter.maxRange = 0;
    else scooter.maxRange = parseInt(this.maxRange.value);
    if (this.weight.value == "") scooter.weight = 0;
    else scooter.weight = parseFloat(this.weight.value);

    this.productService.addProduct(scooter);

    this.clearProduct();
    this.maxRange = new FormControl('');
    this.weight = new FormControl('');

    this.checked = false;
  }



}

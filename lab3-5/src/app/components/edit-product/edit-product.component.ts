import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ProductService} from "../../services/ProductService/product.service";
import {Product} from "../../models/product/product";
import {Bicycle} from "../../models/bicycle/bicycle";
import {Scooter} from "../../models/scooter/scooter";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() product: Product;
  isBike: boolean;

  // params for product in general
  name;
  unitsOnStock;
  unitPrice;
  imgSrc;

  // params for bicycle
  type;
  frameSize;
  wheelDiameter;
  description;

  // params for scooter
  maxRange;
  weight;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.name = new FormControl(this.product.name);
    this.unitsOnStock = new FormControl(this.product.unitsOnStock);
    this.unitPrice = new FormControl(this.product.unitPrice);
    this.imgSrc = new FormControl(this.product.imgSrc);
    this.setIsBike();
  }

  submitProduct(){
    if (this.name.value != "")
      this.product.name = this.name.value;
    if (this.unitPrice.value != "")
      this.product.unitPrice = parseFloat(this.unitPrice.value);
    if (this.unitsOnStock.value != "")
      this.product.unitsOnStock = parseInt(this.unitsOnStock.value);
    if (this.imgSrc.value != "")
      this.product.imgSrc = this.imgSrc.value;

    alert("Product has been updated");
  }


  submitBicycle(){
    this.submitProduct();
    let bike = this.product as Bicycle;

    if (this.description.value != "")
      bike.description = this.description.value;
    if (this.type.value != "")
      bike.type = this.type.value;
    if (this.wheelDiameter.value != "")
      bike.wheelDiameter = parseFloat(this.wheelDiameter.value);
    if (this.frameSize.value != "")
      bike.frameSize = parseInt(this.frameSize.value);

    this.productService.updateProduct(bike);
  }

  submitScooter(){
    this.submitProduct();
    let scooter = this.product as Scooter;

    if (this.maxRange.value != "")
      scooter.maxRange = parseInt(this.maxRange.value);
    if (this.weight.value != "")
      scooter.weight = parseFloat(this.weight.value);

    this.productService.updateProduct(scooter);
  }

  private setIsBike(){
    this.isBike = (<Bicycle>this.product).description !== undefined;
    if (this.isBike) {
      let bike = this.product as Bicycle;
      this.type = new FormControl(bike.type);
      this.frameSize = new FormControl(bike.frameSize);
      this.wheelDiameter = new FormControl(bike.wheelDiameter);
      this.description = new FormControl(bike.description);
    }
    else{
      let scooter = this.product as Scooter;
      this.maxRange = new FormControl(scooter.maxRange);
      this.weight = new FormControl(scooter.weight);
    }
  }

}

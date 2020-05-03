import { Component, OnInit } from '@angular/core';
import {Bicycle} from "../bicycle-model/bicycle";
import {Item} from "../item-model/item";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-bicycle',
  templateUrl: './bicycle.component.html',
  styleUrls: ['./bicycle.component.css']
})
export class BicycleComponent implements OnInit {
  bicycles: Bicycle[] = BICYCLES;

  bikesInCart: Item[] = [];
  displayCart: boolean = false;

  highestPrice: number = this.findHighestPrice();
  lowestPrice: number = this.findLowestPrice();

  displayForm: boolean = false;
  name = new FormControl('');
  unitPrice = new FormControl('');
  unitsOnStock = new FormControl('');
  imgSrc = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  changeDisplayCart() {
    this.displayCart = !this.displayCart;
  }

  private findHighestPrice(): number{
    let max = this.bicycles[0].unitPrice;
    for(let bike of this.bicycles){
      if (bike.unitPrice > max) max = bike.unitPrice;
    }
    return max;
  }

  private findLowestPrice(): number {
    let min = this.bicycles[0].unitPrice;
    for(let bike of this.bicycles){
      if (bike.unitPrice < min) min = bike.unitPrice;
    }
    return min;
  }

  private getBackgroundStyle(bike: Bicycle){
    if (bike.unitsOnStock > 3) return "list-group-item-dark";
    else return "list-group-item-warning";
  }

  private getBorderStyle(bike: Bicycle){
    if (bike.unitPrice == this.highestPrice) return "border border-success";
    if (bike.unitPrice == this.lowestPrice) return "border border-danger";
    return "";
  }

  getStyle(bike: Bicycle){
    return this.getBackgroundStyle(bike) + " " + this.getBorderStyle(bike);
  }

  getTextColor(bike: Bicycle){
    if (bike.unitsOnStock >= 10) return "text-success";
    return "text-danger";
  }

  add(bike: Bicycle){
    if (bike.unitsOnStock < 1) {
      alert("This product is not available now");
      return;
    }
    this.addToCart(bike);
    bike.unitsOnStock -= 1;
    alert("Product is added to the cart");
  }

  addToCart(bike: Bicycle){
    for (let item of this.bikesInCart){
      if (bike == item.bicycle){
        item.number += 1;
        return;
      }
    }
    let newItem = new Item();
    newItem.bicycle = bike;
    newItem.number = 1;
    this.bikesInCart.push(newItem);
  }

  isBikeInCart(bike: Bicycle){
    for (let item of this.bikesInCart){
      if (bike == item.bicycle){
        return true;
      }
    }
    return false;
  }

  getRemoveButtonStyle(bike: Bicycle){
    if (this.isBikeInCart(bike)) return "";
    else return " disabled";
  }

  getAddButtonStyle(bike: Bicycle){
    if (bike.unitsOnStock > 0) return "";
    else return " disabled";
  }

  remove(bike: Bicycle){
    if (!this.isBikeInCart(bike)){
      alert("There is no such product in the cart");
      return;
    }
    this.removeFromCart(bike);
    bike.unitsOnStock += 1;
    alert("Product is removed from the cart");
  }

  removeFromCart(bike){
    for (let item of this.bikesInCart){
      if (bike == item.bicycle){
        if (item.number > 1)
          item.number -= 1
        else {
          let index = this.bikesInCart.indexOf(item);
          this.bikesInCart.splice(index, 1);
        }
        return;
      }
    }
  }

  changeDisplayForm(){
    this.displayForm = !this.displayForm;
    if (this.displayForm){
      alert("Please fill form below");
    }
  }

  clear(){
    this.name = new FormControl('');
    this.unitPrice = new FormControl('');
    this.unitsOnStock = new FormControl('');
    this.imgSrc = new FormControl('');
  }

  submit(){
    let bike = new Bicycle();
    if (this.name.value == ""){
      alert("Please enter bicycle name");
      return;
    }
    bike.name = this.name.value;

    if (this.unitPrice.value == "") bike.unitPrice = 0;
    else bike.unitPrice = parseFloat(this.unitPrice.value);

    if (this.unitsOnStock.value == "") bike.unitsOnStock = 0;
    else bike.unitsOnStock = parseInt(this.unitsOnStock.value);

    if (this.imgSrc.value == "") bike.imgSrc = "assets/img/undefined.jpg";
    else bike.imgSrc = this.imgSrc.value;

    this.bicycles.push(bike);

    this.clear();
  }
}

const BICYCLES: Bicycle[] = [
  { name: "Raleigh", unitsOnStock: 1, unitPrice: 200.25, imgSrc: "assets/img/raleigh.jpg"},
  { name: "Focus", unitsOnStock: 11, unitPrice: 212.75, imgSrc: "assets/img/focus.jpg"},
  { name: "Felt", unitsOnStock: 8, unitPrice: 300.15, imgSrc: "assets/img/felt.jpg"},
  { name: "Specialized", unitsOnStock: 7, unitPrice: 252.25, imgSrc: "assets/img/specialized.jpg"},
  { name: "Trek", unitsOnStock: 10, unitPrice: 212.55, imgSrc: "assets/img/trek.jpg"},
  { name: "Pinarello", unitsOnStock: 15, unitPrice: 278.34, imgSrc: "assets/img/pinarello.jpg"},
  { name: "Eddy Merckx", unitsOnStock: 12, unitPrice: 244.44, imgSrc: "assets/img/eddy.jpg"},
  { name: "BMC", unitsOnStock: 18, unitPrice: 155.78, imgSrc: "assets/img/bmc.jpg"},
  { name: "Giant", unitsOnStock: 9, unitPrice: 200.15, imgSrc: "assets/img/giant.jpg"},
  { name: "GT", unitsOnStock: 12, unitPrice: 235.99, imgSrc: "assets/img/gt.jpg"},
  { name: "Salsa", unitsOnStock: 13, unitPrice: 325.14, imgSrc: "assets/img/salsa.jpg"},
  { name: "Cannondale", unitsOnStock: 9, unitPrice: 230.45, imgSrc: "assets/img/cannondale.jpg"},
  { name: "Cervelo", unitsOnStock: 14, unitPrice: 214.44, imgSrc: "assets/img/cervelo.jpg"},
  { name: "Bianchi", unitsOnStock: 11, unitPrice: 266.17, imgSrc: "assets/img/bianchi.jpg"},
  { name: "Jamis", unitsOnStock: 10, unitPrice: 210.11, imgSrc: "assets/img/jamis.jpg"},
  { name: "Surly", unitsOnStock: 8, unitPrice: 300.01, imgSrc: "assets/img/surly.jpg"},
  { name: "Diamondback", unitsOnStock: 18, unitPrice: 235.04, imgSrc: "assets/img/diamondback.jpg"},
  { name: "Kona", unitsOnStock: 14, unitPrice: 280.14, imgSrc: "assets/img/kona.jpg"},
  { name: "Fuji", unitsOnStock: 11, unitPrice: 215.15, imgSrc: "assets/img/fuji.jpg"},
  { name: "Santa Cruz", unitsOnStock: 3, unitPrice: 355.46, imgSrc: "assets/img/santa_cruz.jpg"},
  { name: "Scott", unitsOnStock: 4, unitPrice: 377.17, imgSrc: "assets/img/scott.jpg"},
  { name: "Yeti", unitsOnStock: 8, unitPrice: 299.99, imgSrc: "assets/img/yeti.jpg"},
  { name: "Soma", unitsOnStock: 7, unitPrice: 277.18, imgSrc: "assets/img/soma.jpg"},
  { name: "Marin", unitsOnStock: 12, unitPrice: 225.25, imgSrc: "assets/img/marin.jpg"}
]

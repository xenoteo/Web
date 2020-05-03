import { Component, OnInit } from '@angular/core';
import {Car} from "../car-model/car";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
  cars: Car[] = CARS;

  brandFilter: string;
  filteredCars: Car[];
  isBrandChosen: boolean = false;

  chosenModel: Car;
  isModelChosen: boolean = false;

  chosenColor: string;
  isColorChosen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clear(){
    this.isBrandChosen = false;
    this.isModelChosen = false;
    this.isColorChosen = false;
  }

  filterBrand(carFilter: string){
    if (this.isColorChosen) this.clear();
    this.isBrandChosen = true;
    this.filteredCars = [];
    this.brandFilter = carFilter;
    for (let car of this.cars){
      if (car.brand == this.brandFilter)
        this.filteredCars.push(car);
    }
  }

  chooseModel(carModel: string){
    this.isModelChosen = true;
    for (let car of this.filteredCars){
      if (car.model == carModel) {
        this.chosenModel = car;
        break;
      }
    }
  }

  chooseColor(carColor: string){
    this.isColorChosen = true;
    this.chosenColor = carColor;
  }
}

const CARS: Car[] = [
  { brand: "BMW", model: "M3", colors: ["blue", "black", "white"] } ,
  { brand: "BMW", model: "E36 M3", colors: ["green", "black", "white"] } ,
  { brand: "BMW", model: "850CSI", colors: ["black", "red"] } ,
  { brand: "BMW", model: "Z3 M", colors: ["silver", "black"] } ,
  { brand: "BMW", model: "E39 M5", colors: ["blue", "silver"] } ,
  { brand: "Audi", model: "Q3 35 TDI Quattro", colors: ["blue", "silver"] } ,
  { brand: "Audi", model: "Q5", colors: ["blue", "golden"] } ,
  { brand: "Audi", model: "A6", colors: ["black", "silver"] } ,
  { brand: "Audi", model: "A8L 60 TDI", colors: ["white", "silver"] } ,
  { brand: "Audi", model: "A3 40TFSI", colors: ["orange", "black"] } ,
  { brand: "Mercedes", model: "AMG C 63 S", colors: ["white", "black"] } ,
  { brand: "Mercedes", model: "Benz EQC", colors: ["white", "golden"] } ,
  { brand: "Mercedes", model: "Benz S-Class", colors: ["blue", "silver"] } ,
  { brand: "Mercedes", model: "Benz GLC-Class", colors: ["red", "black"] } ,
  { brand: "Mercedes", model: "Benz A-Class", colors: ["pink", "golden"] } ,
];

import {Bicycle} from "./bicycle/bicycle";
import {Scooter} from "./scooter/scooter";

export const BICYCLES: Bicycle[] = [
  { name: "Raleigh", unitsOnStock: 1, unitPrice: 200.25, imgSrc: "assets/img/raleigh.jpg",
    type: "mountain", description: "Wonderful bike!", frameSize: 21, wheelDiameter: 26},
  { name: "Focus", unitsOnStock: 11, unitPrice: 212.75, imgSrc: "assets/img/focus.jpg",
    type: "city", description: "Nice bike", frameSize: 20, wheelDiameter: 27},
  { name: "Felt", unitsOnStock: 8, unitPrice: 300.15, imgSrc: "assets/img/felt.jpg",
    type: "trek", description: "The best bike", frameSize: 23, wheelDiameter: 28},
  { name: "Specialized", unitsOnStock: 7, unitPrice: 252.25, imgSrc: "assets/img/specialized.jpg",
    type: "mountain", description: "Cool bike", frameSize: 22, wheelDiameter: 29},
  { name: "Trek", unitsOnStock: 10, unitPrice: 212.55, imgSrc: "assets/img/trek.jpg",
    type: "trek", description: "Awesome bike", frameSize: 21, wheelDiameter: 28},
]

export const SCOOTERS: Scooter[] = [
  { name: "Scooter 1", unitsOnStock: 15, unitPrice: 158.25, imgSrc: "assets/img/scooter1.png", maxRange: 32, weight: 3.6},
  { name: "Scooter 2", unitsOnStock: 18, unitPrice: 166.64, imgSrc: "assets/img/scooter2.png", maxRange: 38, weight: 3.4},
  { name: "Scooter 3", unitsOnStock: 3, unitPrice: 215.25, imgSrc: "assets/img/scooter3.jpg", maxRange: 28, weight: 3.0}
]

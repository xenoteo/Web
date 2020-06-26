import {Product} from "../product/product";

export class Bicycle extends Product{
  type: string;  // city, mountain, trek
  frameSize: number;
  wheelDiameter: number;
  description: string;
}

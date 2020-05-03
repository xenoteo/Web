import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  isFirstEntered: boolean = false;
  firstStr: string = "";
  secondStr: string = "";
  operation: string;
  current: string = "";
  result: number;

  constructor() { }

  ngOnInit(): void {
  }

  addDigit(d){
    if (this.isFirstEntered){
      this.secondStr += d;
    }
    else {
      this.firstStr += d;
    }
    this.current += d;
  }

  addOperation(op){
    if (this.isFirstEntered){
      this.calculate();
    }
    else{
      this.isFirstEntered = true;
      this.operation = op;
      this.current = "";
    }
  }

  calculate(): void{
    let first: number;
    if (this.firstStr.search('.') == -1) first = parseInt(this.firstStr, 10);
    else first = parseFloat(this.firstStr);

    let second: number;
    if (this.secondStr.search('.') == -1) second = parseInt(this.secondStr, 10);
    else second = parseFloat(this.secondStr);

    if (this.operation == "+") this.result = first + second;
    else if (this.operation == "-") this.result = first - second;
    else if (this.operation == "*") this.result = first * second;
    else if (this.operation == "/") this.result = first / second;
    this.current = String(this.result);

    this.firstStr = this.result.toString();
    this.secondStr = "";
    this.isFirstEntered = false;
  }

  clear(): void{
    this.isFirstEntered = false;
    this.current = "";
    this.firstStr = "";
    this.secondStr = "";
    this.operation = "";
  }
}

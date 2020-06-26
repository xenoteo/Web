import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Filter} from "../../models/filter/filter";


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filter: Filter = new Filter();

  @Output() notify = new EventEmitter<Filter>();

  name = new FormControl('');
  maxPrice = new FormControl('');
  minPrice = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.filter.areBoth = true;
  }

  setIsBike(s: string){
    this.filter.isBike = (s == "bike");
    this.filter.areBoth = false;
  }

  setBoth(){
    this.filter.areBoth = true;
  }

  submit(){
    this.filter.name = this.name.value;

    if (this.maxPrice.value == "") this.filter.maxPrice = -1;
    else this.filter.maxPrice = parseFloat(this.maxPrice.value);

    if (this.minPrice.value == "") this.filter.minPrice = -1;
    else this.filter.minPrice = parseFloat(this.minPrice.value);

    this.notify.emit(this.filter);
  }

  reset(){
    this.name = new FormControl('');
    this.maxPrice = new FormControl('');
    this.minPrice = new FormControl('');

    this.submit();
  }


}

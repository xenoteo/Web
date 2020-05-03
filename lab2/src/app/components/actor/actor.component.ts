import {Component, enableProdMode, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
enableProdMode();

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  firstName = new FormControl('');
  lastName = new FormControl('');
  movieTitle = new FormControl('');

  constructor() { }

  ngOnInit(): void { }

  clear(){
    this.firstName = new FormControl('');
    this.lastName = new FormControl('');
    this.movieTitle = new FormControl('');
  }

  submit(): void{
    alert("Your favorite actor is " + this.firstName.value + " " + this.lastName.value +
      " and your favorite movie is " + this.movieTitle.value);
    this.clear();
  }

}

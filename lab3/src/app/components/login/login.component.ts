import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {AuthenticationService} from "../../services/AuthenticationService/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  private check(){
    if (this.email.value == "" || this.password.value == ""){
      alert("Fill all the fields");
      return false;
    }
    return true;
  }

  private clear(){
    this.email = new FormControl('');
    this.password = new FormControl('');
  }

  login(){
    if (!this.check()) return;
    this.authenticationService.login(this.email.value, this.password.value);
    this.clear();
  }

}

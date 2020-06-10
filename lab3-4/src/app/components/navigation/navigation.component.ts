import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/AuthenticationService/authentication.service";

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isSignedIn: boolean;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.setIsSignedIn();
  }

  setIsSignedIn(){
    this.authenticationService.getState().subscribe( data =>
      this.isSignedIn = data != null
    )
  }

  signOut(){
    this.authenticationService.signOut();
  }
}

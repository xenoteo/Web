import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/AuthenticationService/authentication.service";

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit {
  email: string;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.setEmail();
  }

  setEmail(){
    this.authenticationService.getState().subscribe(data => {
      if (data != null)
        this.email = data.email
      else this.email = null;
    });
  }


}

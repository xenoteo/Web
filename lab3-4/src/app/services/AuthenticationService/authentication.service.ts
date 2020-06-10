import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from "@angular/router";
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  getState(){
    return this.afAuth.authState;
  }

  login(email, password){
    const session = firebase.auth.Auth.Persistence.LOCAL;
    return this.afAuth.setPersistence(session).then(() => {
      return this.afAuth.signInWithEmailAndPassword(email, password)
        .then(() => {
          alert("Successfully signed in");
          this.router.navigate(["home"]);
        })
        .catch(error => {
          console.log("Error occurred: ", error.message);
          alert("Something went wrong...");
        });
    });
  }

  createUser(email, password){
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("Successfully signed up");
        this.router.navigate(["home"]);
      })
      .catch(error => {
        console.log("Error occurred: ", error.message);
        alert("Something went wrong...");
      });
  }

  signOut(){
    this.afAuth.signOut();
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from "@angular/router";
import * as firebase from 'firebase';
import {Observable, of} from "rxjs";
import {User} from "../../models/user/user";
import {map, switchMap, take} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private firestore: AngularFirestore) {
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
    this.addUserToDB(email);
    }

  signOut(){
    this.afAuth.signOut();
  }

  addUserToDB(email: string){
    let user = new User();
    user.email = email;
    user.role = "editor";
    this.firestore.collection('/users').add({...user});
  }
}

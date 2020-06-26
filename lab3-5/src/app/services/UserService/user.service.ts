import { Injectable } from '@angular/core';
import {User} from "../../models/user/user";
import {FirestoreService} from "../FirestoreService/firestore.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor(private firestoreService: FirestoreService) {
    this.firestoreService.getUsers().subscribe(data =>
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id, ...e.payload.doc.data() as object
        } as User;
        }
      )
    )
  }

  isAdmin(email: string): boolean{
    for (let user of this.users){
      if (user.email == email) return user.role == "admin";
    }
    return false;
  }
}

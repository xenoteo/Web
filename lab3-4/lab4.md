# Lab4
Authentication and external data supply using [Firebase](https://firebase.google.com/).

## Description
This lab is developing the page from the [lab3](https://github.com/xenoteo/Web/blob/master/lab3-4/lab3.md).  
In this version of the project were added:
- Navigation and routing
- Login and sign up functions
- Adding and removing data from the database

### New component description
- [current-user](https://github.com/xenoteo/Web/tree/master/lab3-4/src/app/components/current-user) - responsible for displaying the information about the user who is currently signed in.
- [navigation](https://github.com/xenoteo/Web/tree/master/lab3-4/src/app/components/navigation) - dispays the navigation of the whole application.
- [login](https://github.com/xenoteo/Web/tree/master/lab3-4/src/app/components/login) - responsible for user login process.
- [registration](https://github.com/xenoteo/Web/tree/master/lab3-4/src/app/components/registration) - responsible for adding new user to the database.
Some of the old components were slightly modified, but their functions are still the same.
  
### Changes in models
Just id field in [Product](https://github.com/xenoteo/Web/blob/master/lab3-4/src/app/models/product/product.ts model was added.
  
### New services description
- [AuthenticationService](https://github.com/xenoteo/Web/blob/master/lab3-4/src/app/services/AuthenticationService/authentication.service.ts) - responsible for managing all the authentication processes (login, sing up, sign out, check current user).
- [FirestoreService](https://github.com/xenoteo/Web/blob/master/lab3-4/src/app/services/FirestoreService/firestore.service.ts) - responsible for interactions with the database.
The old services were slightly modified, but thier responsibilities were not changed.

## Screenshots



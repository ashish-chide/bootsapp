import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
  token: string;

   userId = firebase.auth().currentUser.uid ;

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        // response => {
        //   firebase.auth().currentUser.getIdToken()
        //     .then(
        //       (token: string) => this.token = token
        //     );
        // }
        response => console.log(response)

      )
      .catch(
        error => console.log(error)
      );
    alert('logged in');


  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      ).catch(
        error => console.log(error)
      );
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }
  isAuthenticated(): boolean {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }



}


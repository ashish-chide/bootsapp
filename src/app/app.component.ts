import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bootsapp';
  ngOnInit() {
firebase.initializeApp({
  apiKey: 'AIzaSyBJxmFVXnjwuww2TuVABnjxUFOB1jiTLgQ',
  authDomain: 'bootsapp-c6772.firebaseapp.com',
});
  }
}

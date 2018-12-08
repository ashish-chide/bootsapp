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
    // const config = {
    //   apiKey: 'AIzaSyDnLSSldKNzwwgTnIbSeDi4LuvcDzzIeqU',
    //   authDomain: 'bootsapp-1d940.firebaseapp.com',
    //   databaseURL: 'https://bootsapp-1d940.firebaseio.com',
    //   projectId: 'bootsapp-1d940',
    //   storageBucket: '',
    //   messagingSenderId: '541430002667'
    // };
    firebase.initializeApp({
      apiKey: 'AIzaSyDnLSSldKNzwwgTnIbSeDi4LuvcDzzIeqU',
      authDomain: 'bootsapp-1d940.firebaseapp.com'
    });

  }
}

import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { map } from 'rxjs/operators';
import { Card } from 'src/app/card';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent  {

  @Input() cards: {
    header?: string;
    title?: string;
    content?: string;

  };



  constructor(private http: HttpClient, private authService: AuthService) { }

  // onCardDisplay() {
  //   const token = this.authService.getToken() ;
  //   this.http.get<Card[]>('https://bootsapp-c6772.firebaseio.com/cards.json?auth=' + token)
  //   .pipe(map(
  //     (carde) => {

  //         return carde ;

  //     }
  //   ))
  //   .subscribe(
  //     (carde: Card[]) => {
  //       this.cards = carde ;
  //     }
  //   );


  // }
}




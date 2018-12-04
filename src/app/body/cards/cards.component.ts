import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/card';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],

})
export class CardsComponent implements OnInit {
  cardArray: Card[] = [];
  constructor() { }



  onCardCreated(card: Card) {
    this.cardArray.push(card);
  }
  ngOnInit() {
  }

}

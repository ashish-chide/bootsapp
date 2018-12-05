import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Card } from 'src/app/card';


@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit {

@Input() cards: {
  header: string ;
  title: string ;
  content: string;

 };


  constructor() { }

  ngOnInit() {
  }


}

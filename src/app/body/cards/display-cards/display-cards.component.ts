import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit {

header = 'header' ;
title = 'Primary card title';
content = 'Some quick example text to build on the card title and make up the bulk of the card' ;
  constructor() { }

  ngOnInit() {
  }

}

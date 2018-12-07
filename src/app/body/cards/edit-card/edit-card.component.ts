import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from 'src/app/card';


@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {
  constructor() { }

  @ViewChild('c') EditCardForm: NgForm;
  @Output() cardCreated  = new EventEmitter<Card>();


  ngOnInit() {
  }

  onSubmitCard() {
     this.cardCreated.emit( this.EditCardForm.value );
     console.log( this.EditCardForm.value) ;
  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {
  constructor() { }

  @ViewChild('c') EditCardForm: NgForm;
  submitted = false;
  cards = {
    header : '',
    title : '',
    content : ''
  };



  ngOnInit() {
  }


  onSubmitCard() {
    this.submitted = true ;
    this.cards.header = this.EditCardForm.value.header;
    this.cards.title = this.EditCardForm.value.title;
    this.cards.content = this.EditCardForm.value.content;
    console.log(this.cards.header)

  }

}

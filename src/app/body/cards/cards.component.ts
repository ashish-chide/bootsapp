import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/card';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],

})
export class CardsComponent implements OnInit {
  cardArray: Card[] = [];




  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
    this.getData();

  }


  onCardCreated(card: Card) {
    const token = this.auth.getToken();
    this.cardArray.push(card);

    this.http.put('https://bootsapp-1d940.firebaseio.com/cards.json?auth=' + token, this.cardArray.slice())
      .subscribe(data => {
        this.getData();
      }
      );



  }

  getData() {
    const token = this.auth.getToken();
    this.http.get<Card[]>('https://bootsapp-1d940.firebaseio.com/cards.json?auth=' + token)
      .pipe(map(
        (carde) => {

          return carde;

        }
      ))
      .subscribe(
        (carde: Card[]) => {
          this.cardArray = carde;
        }
      );
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './body/cards/cards.component';
import { EditCardComponent } from './body/cards/edit-card/edit-card.component';
import { DisplayCardsComponent } from './body/cards/display-cards/display-cards.component';


const appRoutes: Routes = [
  {path : '', component: HomeComponent },
  {path : 'home', component: HomeComponent },
  {path : 'login', component: LoginComponent },
  {path : 'cards', component: CardsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    LoginComponent,
    CardsComponent,
    EditCardComponent,
    DisplayCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

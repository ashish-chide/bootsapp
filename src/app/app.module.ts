import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { CardsComponent } from './body/cards/cards.component';
import { DisplayCardsComponent } from './body/cards/display-cards/display-cards.component';
import { EditCardComponent } from './body/cards/edit-card/edit-card.component';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './body/auth.service';
import { SignupComponent } from './body/signup/signup.component';
import { AuthGuardService } from './auth-gaurd.service';
import { HttpClientModule } from '@angular/common/http';




const appRoutes: Routes = [
  {path : '', component: HomeComponent },
  {path : 'home', component: HomeComponent },
  {path : 'login', component: LoginComponent },
  {path : 'cards', component: CardsComponent , canActivate: [AuthGuardService] },
  {path : 'signup', component: SignupComponent }
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
    DisplayCardsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
],
  providers: [AuthService , AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signupform: NgForm;
  uname = '';
  user = {
    name : '' ,
    email : '' ,
    password : ''
 };
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup() {

    this.user.name = this.signupform.value.userData.username ;
    this.user.email = this.signupform.value.userData.email ;
    this.user.password = this.signupform.value.userData.password ;

    this.authService.signupUser(this.user.email , this.user.password ) ;

    this.signupform.reset();

}
}

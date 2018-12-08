import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') signupform: NgForm;
  uname = '';
  user = {
    name : '' ,
    email : '' ,
    password : ''
 };
  submitted = false;
  constructor(private authService: AuthService , private router: Router) { }
  ngOnInit() {

  }


  suggestusername() {
    const suggestedusername = 'superuser';
    this.signupform.form.patchValue({
      userData: {
        username: suggestedusername
      }
    });
  }

 onSubmit() {
    this.submitted = true ;
    this.user.name = this.signupform.value.userData.username ;
    this.user.email = this.signupform.value.userData.email ;
    this.user.password = this.signupform.value.userData.password ;

    this.authService.signinUser(this.user.email , this.user.password ) ;

    this.signupform.reset();

}





}

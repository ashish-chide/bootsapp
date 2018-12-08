import { Component, OnInit } from '@angular/core';
import { AuthService } from '../body/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }


  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit() {

  }

  onLogout() {
    this.authService.logout();
    alert('sucessfully logout');
    this.router.navigate(['/home']) ;
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }


}


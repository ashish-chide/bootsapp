import { Component, OnInit } from '@angular/core';
import { AuthService } from '../body/auth.service';

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


  constructor(private authService: AuthService) {
  }
  ngOnInit() {

  }

  onLogout() {
    this.authService.logout();
  }

}


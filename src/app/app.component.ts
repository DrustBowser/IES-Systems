import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IES_Systems';
  AuthNow: Boolean = false;

  constructor() {
    this.isAuth();
  }

  isAuth() {
    if (localStorage.getItem('token') != '')
      this.AuthNow = true;
    else
      this.AuthNow = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public opened = false;
  AuthnNow: boolean = false

  constructor(private _toast: ToastrService) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.setItem('token','')
    window.location.reload();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IRespuesta, IAuth, clientCredentials } from 'src/app/Models/auth.model';
import { MainService } from 'src/app/services/main.service';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public clientCredentials = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  constructor(private _mainService: MainService,
    private toastr: ToastrService,
    private router: Router,
    private loader: NgxUiLoaderService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != '')
      this.router.navigate(['/home']);
  }

  login () {
    this.loader.start();
    const clientCredentials: clientCredentials = {
      username: this.clientCredentials.value.username,
      password: this.clientCredentials.value.password,
    }
    this._mainService.login(clientCredentials).subscribe(resp => {
        var iAuth: IAuth = resp.data
        localStorage.setItem('token', iAuth.token);
        window.location.reload();
        this.toastr.success(iAuth.infUsuario.nombre + ' ' + iAuth.infUsuario.apellidoPaterno, 'Bienvenido');
      }, error => {
        this.toastr.error(error,'Error')
      });
    this.loader.stop();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { clientCredentials, IRespuesta } from 'src/app/Models/auth.model';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient,
    private toastr: ToastrService) { }

  login(clientCredentials: clientCredentials){
    return this.http.post<any>('https://desa.ies-webcontent.com.mx/login', clientCredentials).pipe(
      catchError(this.handleError)
    );
  }

  catEstadosCiviles(){
    return this.http.post<IRespuesta>('http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil','').pipe(
      catchError(this.handleError)
    );
  }

  private handleError (error: HttpErrorResponse) {
    var err;
    if (error.status != 0) {
      err = error.error.mensaje;
    } 

    return throwError(err);
  }
}

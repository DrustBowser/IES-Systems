import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { IRespuesta } from 'src/app/Models/auth.model';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  
  public datos = new FormGroup ({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    fumas: new FormControl(''),
    actualmentePracticasLectura: new FormControl(''),
    librosLeidosUltimosTresMeses: new FormControl(''),
    estadoCivil: new FormControl('')
  })
  Libros: string[]= [];
  Estados: any[] = [12,13,14];

  constructor(private _mainService: MainService,
    private toastr: ToastrService,
    private loader: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loader.show('sp1');
    this.getCatEstadosCiviles();
    this.loader.hide('sp1');
  }

  getCatEstadosCiviles() {
    this._mainService.catEstadosCiviles().subscribe((resp: IRespuesta) => {
      console.log(resp)
      if (resp.exito == true) {
        this.Estados = resp.data
      }
      else
        this.toastr.error(resp.mensaje, 'Error');
    });
  }

  enviar() {
    this.loader.show('sp1');
    setTimeout(() => {
      this.loader.hide('sp1');
    }, 5000);
    if (this.datos.invalid)
      return
    else {
      this.toastr.success('Datos enviados con exito', 'Exito')
      this.datos.reset();
      this.Libros = []
    }
  }

  pushing () {
    const libro = this.datos.value.librosLeidosUltimosTresMeses
    if (libro.length > 1) {
    this.Libros.push(libro);
    this.datos.get('librosLeidosUltimosTresMeses')?.setValue('');
    }
    else
      this.toastr.error('El libro debe tener al menos 2 caracteres')
  }

  limpiarLibros() {
    this.Libros = [];
  }
}

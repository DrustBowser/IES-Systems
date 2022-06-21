import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calcula-fecha',
  templateUrl: './calcula-fecha.component.html',
  styleUrls: ['./calcula-fecha.component.scss']
})
export class CalculaFechaComponent implements OnInit {

  public datos = new FormGroup({
    Fecha: new FormControl('', Validators.required),
    Unidad: new FormControl('', Validators.required),
    Cantidad: new FormControl('', Validators.required)
  })
  nuevaFecha: any;
  Unidades = [
    { Id: 1, cantidad: 'años' },
    { Id: 2, cantidad: 'meses' },
    { Id: 3, cantidad: 'dias' }
  ]
  banderaCalculada: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  calcular() {
    const data = {
      Fecha: this.datos.value.Fecha,
      Unidad: this.datos.value.Unidad,
      Cantidad: this.datos.value.Cantidad
    }
    switch (data.Unidad) {
      case 1:
        this.nuevaFecha = new Date(data.Fecha.getFullYear() + data.Cantidad, data.Fecha.getMonth(), data.Fecha.getDate()).toISOString().split("T")[0];
        break;
      case 2:
        this.nuevaFecha = new Date(data.Fecha.getFullYear(), data.Fecha.getMonth()+ data.Cantidad, data.Fecha.getDate()).toISOString().split("T")[0];
        break;
      case 3:
        this.nuevaFecha = new Date(data.Fecha.getFullYear(), data.Fecha.getMonth(), data.Fecha.getDate() + data.Cantidad).toISOString().split("T")[0];
        break;
    }
    this.banderaCalculada = true;
  }
}

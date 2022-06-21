import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-cambio-letras',
  templateUrl: './cambio-letras.component.html',
  styleUrls: ['./cambio-letras.component.scss']
})
export class CambioLetrasComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

  ngOnInit(): void {
  }

}

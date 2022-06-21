import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CambioLetrasComponent } from '../cambio-letras/cambio-letras.component';
import { CambioLetrasPipe } from './../../shared/pipes/cambio-letras.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name = new String('');

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CambioLetrasComponent, {
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.name = result.pipe(CambioLetrasPipe);
    });
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-finalizado',
  templateUrl: './dialog-finalizado.component.html',
  styleUrls: ['./dialog-finalizado.component.css']
})
export class DialogFinalizadoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}

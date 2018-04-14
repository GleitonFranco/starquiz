import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Entity } from '../models/Entity';

@Component({
  selector: 'app-dialog-input-name',
  templateUrl: './dialog-input-name.component.html',
  styleUrls: ['./dialog-input-name.component.css']
})
export class DialogInputNameComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Entity) { }

  ngOnInit() {
  }

}

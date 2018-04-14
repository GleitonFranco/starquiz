import { Component, OnInit, Input, Output, EventEmitter, Attribute } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { QuizService } from '../services/quiz.service';
import { DialogInputNameComponent } from '../dialog-input-name/dialog-input-name.component';
import { Entity } from '../models/Entity';


@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css'],
  providers: [QuizService]
})
export class QuizCardComponent implements OnInit {
  @Output() infoEv = new EventEmitter();
  @Input() index: number;
	entity: Entity;

  constructor(private quizService: QuizService, public dialog: MatDialog) {    
  }

  ngOnInit() {
    console.log('init:',this.index);
    this.entity = this.quizService.getEntity(this.index);
  }

  info() {
    console.log(this.index, this.entity);
  	console.log(this.quizService.getCards());
    this.infoEv.emit(this.entity);
    this.entity.consult_tip = true;
  }

  inputName() {
    let dialogRef = this.dialog.open(DialogInputNameComponent, {
      data: this.entity
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Nome escolhido:', result);
      this.quizService.sumScore(this.entity);
    });
  }

}

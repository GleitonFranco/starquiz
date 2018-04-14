import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { MatDialog } from '@angular/material/dialog';

import { Entity } from '../models/Entity';
import { QuizService } from '../services/quiz.service';
import { DialogDataComponent } from '../dialog-data/dialog-data.component';
import { DialogFinalizadoComponent } from '../dialog-finalizado/dialog-finalizado.component';


@Component({
  selector: 'app-quiz-board',
  templateUrl: './quiz-board.component.html',
  styleUrls: ['./quiz-board.component.css']
})
export class QuizBoardComponent implements OnInit {
  entity: Entity;
  score: number = 0;
  playerName: string = '';
  playerEmail: string = '';
  remainingTime: number;
  time: Date = new Date("2018-01-01 00:00:00");
  overtime: boolean = false;

  constructor(public dialog: MatDialog, public quizservice: QuizService) { }

  ngOnInit() {
    this.remainingTime = this.quizservice.getTimeLimitSec();
    this.time.setSeconds(this.remainingTime);
    let timer = Observable.timer(0,1000);
    timer.subscribe(t=> {
      if (this.remainingTime < 0) {
        if (!this.overtime) this.openFinalizadoDialog();
      } else {
        this.time.setSeconds(this.remainingTime);
        this.time.setMinutes(Math.trunc(this.remainingTime / 60));
        this.remainingTime--;
      }
    });
  }

  openDialog(entity) {
    this.dialog.open(DialogDataComponent, {
      data: entity
    });
  }

  openFinalizadoDialog() {
    this.overtime = true;
    let ref = this.dialog.open(DialogFinalizadoComponent, {
      data: {
        score: this.quizservice.getScore(),
        name: this.playerName,
        email: this.playerEmail
      }
    });
    ref.afterClosed().subscribe(result => {
      localStorage.setItem('playerName',result['name']);
      localStorage.setItem('playerScore',result['score']);
      this.quizservice.mudarFase();
    });
  }

  getCards() {
    return this.quizservice.getCards();
  }

  pgUp() {
    this.quizservice.generateCards();
  }

}

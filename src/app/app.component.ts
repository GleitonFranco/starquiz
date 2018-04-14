import { Component } from '@angular/core';
import { QuizService } from './services/quiz.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public quizservice: QuizService) {}

  getFase() {
  	return this.quizservice.getFase();
  }

  mudarFase() {
  	this.quizservice.mudarFase();
  }
}

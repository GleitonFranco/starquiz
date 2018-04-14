import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { QuizBoardComponent } from './quiz-board/quiz-board.component';
import { QuizService } from './services/quiz.service';
import { QuizCardComponent } from './quiz-card/quiz-card.component';
import { DialogDataComponent } from './dialog-data/dialog-data.component';
import { DialogInputNameComponent } from './dialog-input-name/dialog-input-name.component';
import { DialogFinalizadoComponent } from './dialog-finalizado/dialog-finalizado.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizBoardComponent,
    QuizCardComponent,
    DialogDataComponent,
    DialogInputNameComponent,
    DialogFinalizadoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [QuizService],
  entryComponents: [DialogDataComponent, DialogInputNameComponent, DialogFinalizadoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

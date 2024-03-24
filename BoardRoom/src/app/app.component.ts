import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'The BoardRoom';
  public static Route = {
    path: 'board',
    title: 'The Board',
    component: BoardComponent
  };
}

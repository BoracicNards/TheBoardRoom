import { Component, OnInit } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dialog.open(LoginComponent, {
      width: '250px'
    });
  }
}
  /*public static Route = {
    path: 'board',
    title: 'The Board',
    component: BoardComponent
  };
  */

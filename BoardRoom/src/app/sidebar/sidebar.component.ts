import { Component } from '@angular/core';
import { NewPostFormComponent } from '../new-post-form/new-post-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(public dialog: MatDialog) {}

  openFormDialog(): void {
    const dialogRef = this.dialog.open(NewPostFormComponent, {
      width: '500px', // Set the width you prefer
      height: '400px' 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

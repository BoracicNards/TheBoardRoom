import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CircleComponent } from './circle/circle.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardComponent } from './board/board.component';
import { FriendsComponent } from './friends/friends.component';
import { MessagesComponent } from './messages/messages.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';

const routes: Routes = [
  { path: '', component: BoardComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'socratic', component: CircleComponent},
  { path: 'friends', component: FriendsComponent },
  {path: 'messages', component: MessagesComponent}
  //{path: 'createpost', component: NewPostFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

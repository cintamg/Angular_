import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';

const routes: Routes = [
  {path : "view-friends", component : ViewFriendsComponent},
  {path : "add-friends", component : AddFriendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

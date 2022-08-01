import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { NewsComponent } from './news/news.component';
import { PhotosComponent } from './photos/photos.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path : "",component : ShoppingComponent},
  {path : "todo", component : TodoComponent},
  {path : "album", component : AlbumComponent},
  {path : "news", component : NewsComponent},
  {path : "photos", component : PhotosComponent},
  {path : "users", component : UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

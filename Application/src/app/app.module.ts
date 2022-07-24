import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import {HttpClientModule} from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { AlbumComponent } from './album/album.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersComponent } from './users/users.component';
import { NewsComponent } from './news/news.component'

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    TodoComponent,
    AlbumComponent,
    PhotosComponent,
    UsersComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewTodo=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }

  viewProducts=()=>{

    return this.http.get("https://fakestoreapi.com/products")
  }

  viewAlbum=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/albums");
  }

  viewPhotos=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
  }

  viewUsers=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  viewLiveNews=()=>{
    return this.http.get("https://newsapi.org/v2/everything?q=tesla&from=2022-06-24&sortBy=publishedAt&apiKey=9a5b88e493d44e5db9b6889d860b3043")
  }

}

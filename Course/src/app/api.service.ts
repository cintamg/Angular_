import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http:HttpClient) { }

  viewCourse=()=>{
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }

  addCourse=(dataToSend:any)=>{
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",dataToSend)
  }
}

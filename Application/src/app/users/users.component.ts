import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private api:ApiService) { 

    api.viewUsers().subscribe(
      (response)=>{
        this.data=response
      }
    )

  }

  data:any=[]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-friends',
  templateUrl: './view-friends.component.html',
  styleUrls: ['./view-friends.component.css']
})
export class ViewFriendsComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewFriends().subscribe(
      (response)=>{
        this.data=response
      }
    )
    }

   data:any=[]

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent implements OnInit {

  constructor(private api:ApiService) { }

  Name = ""
  friendName = ""
  friendNickName = ""
  friendDescription = ""

  valueRead=()=>{
    let data={
      "name" : this.Name,
      "friendName" : this.friendName,
      "friendNickName" : this.friendNickName,
      "DescribeYourFriend" : this.friendDescription
    }
    console.log(data)

    this.api.addFriends(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
  }

  ngOnInit(): void {
  }

}

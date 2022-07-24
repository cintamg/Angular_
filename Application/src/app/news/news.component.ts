import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private api:ApiService) { 

    api.viewLiveNews().subscribe(
      (response)=>{
        this.data=response
      }
    )

  }

  data:any=[]

  ngOnInit(): void {
  }

}

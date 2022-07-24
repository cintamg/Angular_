import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private api:ApiService) { 

    api.viewPhotos().subscribe(
      (response)=>{
        this.data=response
      }
    )

  }

  data:any=[]

  ngOnInit(): void {
  }

}

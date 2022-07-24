import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private api:ApiService) { 

    api.viewAlbum().subscribe(
      (response)=>{
        this.data=response
      }
    )

  }

  data:any=[]

  ngOnInit(): void {
  }

}

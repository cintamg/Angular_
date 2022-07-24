import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor(private api:ApiService) { 

    api.viewProducts().subscribe(

      (response)=>{
        this.data=response
      }

    )

  }

  data:any=[]

  ngOnInit(): void {
  }

}

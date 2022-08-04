import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api.service';


@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor(private api:ApiServicesService) { 

    api.viewCourse().subscribe(

      (response)=>{
        this.data=response
      }

    )
  }
  data:any=[]
  ngOnInit(): void {
  }
}

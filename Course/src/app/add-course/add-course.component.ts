import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private api:ApiServicesService) { }

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

  valueRead=()=>{

      let data={
        "courseTitle":this.courseTitle,
        "courseDescription":this.courseDescription,
        "courseDuration":this.courseDuration,
        "courseDate":this.courseDate,
        "courseVenue":this.courseVenue
      }
      console.log(data)

      this.api.addCourse(data).subscribe(
        (response:any)=>{
          console.log(response)
          if(response.status="success"){
            alert("Successfully added")
          }
          else{
            alert("Something went wrong!")
          }
        }
      )
  
}

  ngOnInit(): void {
  }

}

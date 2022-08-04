import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const routes: Routes = [
  {path : "add-course", component:AddCourseComponent},
  {path:"view-course",component:ViewCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

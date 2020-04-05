import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './student/edit/edit.component';
import{AddStudentComponent} from './student/add-student/add-student.component'
import{HomeComponent} from './home/home.component'
import { StudentListComponent } from './student/student-list/student-list.component'
import {CourseListComponent} from './course-list/course-list.component'
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'courses',component:CoursesComponent},
  {path:'list',component:ListComponent},
  {path:'stud',component:StudentListComponent},
  {path:'add-stud',component:AddStudentComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'add-course',component:CourseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

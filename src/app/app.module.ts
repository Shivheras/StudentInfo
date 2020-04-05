import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { EditComponent } from './student/edit/edit.component';

import { StudentListComponent } from './student/student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { CourseListComponent } from './course-list/course-list.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CoursesComponent,
    ListComponent,
    EditComponent,
   
    StudentListComponent,
   
    HomeComponent,
   
    AddStudentComponent,
   
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  userFormGroup:FormGroup; 
  constructor(private formBuilder:FormBuilder,private http: HttpClient,private router:Router) { }
  url="https://localhost:44316/CourseList";
  
  httpData:any;
  temp:any=[];
  course:any=[];
  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      name: ['',Validators.required],
      description:['',Validators.required], 
         
      price:['' ] 
    })
 
  }
  send(event: any) {
    const value = event.target.value;
    // this.selected = id;
    console.log(value);
    this.course.push(value);
    var temp= this.course.splice(-1,1);
    if(temp==true)
     this.temp = 1;
     else
     this.temp = 0;
     
     
   
}
submit()
{

 
   var jsonArray = JSON.parse(this.temp);
  console.log (jsonArray)
  this.http.post(this.url,{"courseName":this.userFormGroup.value.name,"description":this.userFormGroup.value.description,"type":this.temp,"price":this.userFormGroup.value.price}).subscribe(data => {
    this.httpData=data;
    console.log("sdvdfv",this.httpData);
    alert("you Added successfully")
  })
  console.log(this.userFormGroup.value)
}
}

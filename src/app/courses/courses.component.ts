import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
temp:any=[];
course:any=[];
id:any=[];
lastid:any=[];
  constructor(private http: HttpClient,private router:Router) { }
  url="https://localhost:44316/CourseList";
  url2="https://localhost:44316/Course";
  url3="https://localhost:44316/Student";
  httpData:any;
  result:any;
  list:any;
  ngOnInit() {
    this.http.get<any[]>(this.url).subscribe(data => {
      this.httpData=data;
      console.log("sdvdfv",this.httpData);
    })
    this.http.get<any[]>(this.url3).subscribe(data => {
      this.result=data;
      console.log("sdvdfv",this.result);
    })

  }
  send(event: any) {
    const value = event.target.value;
    // this.selected = id;
    console.log(value.charAt(0));
    this.course.push(value.charAt(0));
    
    this.Get();
}
Get()
{
 let list= this.course.splice(-1,1);
  let id="/"+list
   this.http.get<any[]>(this.url+id).subscribe(data => {
    this.httpData=data;
    console.log("sdvdfv",this.httpData);
  })
}
sel(event: any) {
  const value = event.target.value;
  // this.selected = id;
  console.log(value.charAt(0));
  
  this.id.push(value.charAt(0));
 let temp=this.id.splice(-1,1);
this.lastid.push(temp)
}
check(courseListId:any)
{
  console.log(this.lastid)
 var jsonArray = JSON.parse(this.lastid);
  console.log (jsonArray)
  this.http.post(this.url2,{"studentId":jsonArray,"courseListId":courseListId}).subscribe(data => {
    this.httpData=data;
    console.log("sdvdfv",this.httpData);
    alert("you have enroll successfully")
  })
  // window.location.reload()
}
}

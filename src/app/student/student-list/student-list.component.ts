import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  constructor(private http: HttpClient,private router:Router) { }
  
  url="https://localhost:44316/Student";
  httpData:any;
  

  ngOnInit(): void { 
  this.http.get<any[]>(this.url).subscribe(data => {
    this.httpData=data;
    console.log("sdvdfv",this.httpData);
  })
}
del(studentId:any){
this.http.delete(this.url+"/"+studentId).subscribe(data => {
  this.httpData=data;
  console.log("sdvdfv",this.httpData);
  
})
window.location.reload();
}

}

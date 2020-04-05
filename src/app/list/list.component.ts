import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private http: HttpClient,private router:Router) { }
  
  url="https://localhost:44316/Course";
  url3="https://localhost:44316/Student";
  httpData:any;
  result:any;
  list:any;
  id=[];
  lastid=[];
  ngOnInit(): void {
  //  let id = "/"+1
    
    this.http.get<any[]>(this.url3).subscribe(data => {
      this.result=data;
      console.log("sdvdfv",this.result);
    })

  }
  sel(event: any) {
    const value = event.target.value;
    // this.selected = id;
    console.log(value.charAt(0));
    
    this.id.push(value.charAt(0));
    this.lastid=this.id.splice(-1,1);
    this.http.get<any[]>(this.url+"/"+this.lastid).subscribe(data => {
      this.httpData=data;
      console.log("sdvdfv",this.httpData);
    })
  
  }
 del(coursesId:any){
  this.http.delete(this.url+"/"+coursesId).subscribe(data => {
    this.httpData=data;
    console.log("sdvdfv",this.httpData);
  })
  window.location.reload();
 }
}

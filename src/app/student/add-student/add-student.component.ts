import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  userFormGroup:FormGroup; 
constructor(private activateRouter:ActivatedRoute,private router:Router,private formBuilder: FormBuilder,private http:HttpClient){

}

url="https://localhost:44316/Student";
httpData:any;

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      name: ['',Validators.required],
     email:['',Validators.required],
    password:['' ,Validators.required],
    mobile:[ '',Validators.required]  
 })
  }
  add()
  {
    this.http.post<any[]>(this.url,{"name":this.userFormGroup.value.name,"emailId":this.userFormGroup.value.email,"mobileNo":this.userFormGroup.value.mobile,"password":this.userFormGroup.value.password}).subscribe(data => {
      this.httpData=data;
      console.log("dvdvdfv",this.httpData);
    alert("data is added succesfully")
    this.router.navigate(["/stud"])
  })
  }
  
}

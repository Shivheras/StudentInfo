import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userFormGroup:FormGroup;
constructor(private router:Router,private formBuilder: FormBuilder,private http:HttpClient){

}
url="https://localhost:44316/Admin";
httpData:any;

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
             
      password:['',Validators.required],
      username:['',Validators.required]  
   })
  }
  SignUp()
  {
    this.http.post(this.url,{"userName":this.userFormGroup.value.username,"password":this.userFormGroup.value.password}).subscribe(data => {
      this.httpData=data;
      console.log("dvdvdfv",this.httpData);
      this.router.navigateByUrl("/courses");
    })

  }

}

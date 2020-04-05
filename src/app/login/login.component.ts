import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userFormGroup:FormGroup;
  constructor(private router:Router,private formBuilder: FormBuilder,private http: HttpClient){}
  url="https://localhost:44316/Logged";
  
  httpData:any;
  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
        
      userName: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  signIn(){
    
    this.http.post<any[]>(this.url,{"userName":this.userFormGroup.value.userName,"password":this.userFormGroup.value.password}).subscribe(data => {
      this.httpData=data;
      console.log("dvdvdfv",this.httpData);
    
   
    if (this.httpData==true)
    {
      this.router.navigateByUrl("/home");
    }
    else{
      alert("Invalid Email or Password");
    }
  })
  }
}

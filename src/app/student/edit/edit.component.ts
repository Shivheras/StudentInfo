import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userFormGroup:FormGroup; 
constructor(private activateRouter:ActivatedRoute,private router:Router,private formBuilder: FormBuilder,private http:HttpClient){

}

url="https://localhost:44316/Student";
httpData:any;

id:any;
nameval:any;
emailval:any;
passwordval:any;
mobilenoval:any;

  ngOnInit(): void {
     this.id = this.activateRouter.snapshot.paramMap.get("id");
     this.http.get(this.url+"/"+this.id).subscribe(data => {
     this.httpData=data;
      const fy =this.httpData[0];
      console.log("sdvdfv",this.httpData);
      console.log("sdvdfv",fy.emailId);
    //   let resources = this.httpData;
    //   let resource = resources[this.id];
    //  console.log(resource["name"]);
      this.nameval=fy.name;
      this.emailval=fy.emailId;
      this.passwordval=fy.password  
      this.mobilenoval=fy.mobileNo
      
      
    
    console.log("dsf",this.emailval);
 
    this.userFormGroup = this.formBuilder.group({
        name: [this.nameval,Validators.required],
       email:[this.emailval,Validators.required],
      password:[this.passwordval ,Validators.required],
      mobile:[ this.mobilenoval,Validators.required]  
   })
   
  }) 

 
}

  change()
  {
   console.log(this.id);
    this.http.put(this.url,{"studentId":this.id,"name":this.userFormGroup.value.name,"emailId":this.userFormGroup.value.email,"mobileNo":this.userFormGroup.value.mobile,"password":this.userFormGroup.value.password}).subscribe(data => {
      this.httpData=data;
      console.log("dvdvdfv",this.httpData);
      this.router.navigateByUrl("/stud");
    })
  }

}

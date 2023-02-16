import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
import { UserdataService } from '../services/userdata.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  alert:boolean=false
  userId = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]);
  form={
    // userId:'',
    // password:'',
    // cpassword:'',
    firstName:'',
    lastName:'',
    primaryLocation:'',
    address:'',
    permanentAddress:'',
    job:'',
    jobLocation:'',
    grossSalary:'',
  }

  integerRegex=/^[1-9]\d*$/
  showMessage=false;
  
  users:any;
  constructor(private userData:UserdataService,private router:Router){}
  registerFn(data:SignUp){

    
    this.userData.saveUsers(data).subscribe((result)=>{

      console.log("input user data", data)
      if(result){
        console.log("Results", result)
        alert("User Added Successfully");
        this.router.navigate(['home']);
        this.showMessage = true;
      }
      
    })
    
  }

  ngOnInit(): void {
    this.alert=true
  }
}




    
    

 









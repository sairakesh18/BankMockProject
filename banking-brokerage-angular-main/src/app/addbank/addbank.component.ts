import { Component,OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BanK } from '../data-type-bank';
import { BankdataService } from '../services/bankdata.service';

@Component({
  selector: 'app-addbank',
  templateUrl: './addbank.component.html',
  styleUrls: ['./addbank.component.css']
})
export class AddbankComponent implements OnInit{
  alert:boolean=false;
  routingNumber = new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]);
  accountNumber= new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]);
  form={
    
    routingNumber:'',
    bankType:undefined,
    accountNumber:'',
    accountType:undefined,
    // prefix:undefined,
    // firstname:'',
    // middlename:'',
    // lastname:'',
    accountOwnerName:'',
    nickName:'',
    primaryBank:false,
    status:undefined,
    authenticationMethod:'',
    transactionType:undefined,
    CommunicationChannel:undefined
    
  }
  
  integerRegex=/^[1-9]\d*$/
  alphaNumRegex=/^[A-Za-z0-9]+$/
  showMessage=false;
  userID:any;
  constructor(private bankData:BankdataService,private router:Router,private route:ActivatedRoute){
    this.userID = this.route.snapshot.paramMap.get('id')
    console.log("User ID for adding a bank :",this.userID)
  }


  registerFn(data:BanK){
    
    data.userId = this.userID;
    console.log("Entered Data",data)
    
    this.bankData.addBank(data).subscribe((result)=>
    {
      console.log("Input user data",data);
      console.log("server response",result);
      if(result){
        
        console.log("Results",result)
        alert("Bank Added Successfully");
        this.router.navigate([`viewuserdetails/${this.userID}`])
        this.showMessage = true;
      }
    },
    err => console.log("server Error", err))
    
  }

  
  ngOnInit(): void {
    this.alert=true
  }
}





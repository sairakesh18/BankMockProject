import { Component,OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { BankdataService } from '../services/bankdata.service';
import { SignUp } from '../data-type';
import { BanK } from '../data-type-bank';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewuserdetails',
  templateUrl: './viewuserdetails.component.html',
  styleUrls: ['./viewuserdetails.component.css']
})
export class ViewuserdetailsComponent implements OnInit{
  user:undefined | SignUp;
  banks:undefined | BanK[];
  
  userId:any
  constructor(private userData:UserdataService,private bankData:BankdataService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.userbanklist();
    
  }
  delete(id:number){
    this.bankData.deleteBank(id).subscribe((value)=>{
      if(value){
        console.log(value);
        alert("User Deleted Successfully");
        this.userbanklist()
      }
  });
  }
  userbanklist(){
    this.userId = this.route.snapshot.paramMap.get('id')
    console.log(this.userId);

    this.userId && this.userData.getuserbyid(this.userId).subscribe((data) =>{
      this.user = data;
      console.log(this.user);
    })
    this.bankData.banksByUserId(this.userId).subscribe((data)=>{
      this.banks = data;
      console.log(`Banks of user id: ${this.userId}`, this.banks)
    })
  }

  


}

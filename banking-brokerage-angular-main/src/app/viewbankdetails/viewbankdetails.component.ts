import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankdataService } from '../services/bankdata.service';
import { UserdataService } from '../services/userdata.service';
import { BanK } from '../data-type-bank';

@Component({
  selector: 'app-viewbankdetails',
  templateUrl: './viewbankdetails.component.html',
  styleUrls: ['./viewbankdetails.component.css']
})
export class ViewbankdetailsComponent implements OnInit{
  banks:undefined | BanK[];
  userId:any
  constructor(private userData:UserdataService,private bankData:BankdataService,private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.banklist()
  }
  delete(id:number){
    this.bankData.deleteBank(id).subscribe((value)=>{
      if(value){
        console.log(value);
        alert("User Deleted Successfully");
        this.banklist()
      }
    });
  }
  banklist(){
    this.userId = this.route.snapshot.paramMap.get('id')
    this.bankData.banksByUserId(this.userId).subscribe((data)=>{
      this.banks = data;
      console.log(`Banks of user id: ${this.userId}`, this.banks)
    })
  }

}

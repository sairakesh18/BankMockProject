import { Component, OnInit } from '@angular/core';
import { BanK } from '../data-type-bank';
import { BankdataService } from '../services/bankdata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatebank',
  templateUrl: './updatebank.component.html',
  styleUrls: ['./updatebank.component.css']
})
export class UpdatebankComponent implements OnInit {
  form : BanK
  integerRegex=/^[1-9]\d*$/
  alphaNumRegex=/^[A-Za-z0-9]+$/
  showMessage=false;

  constructor(private route: ActivatedRoute, private bankData: BankdataService, private router:Router) { }
  
  ngOnInit(): void {
    let bankId = this.route.snapshot.paramMap.get('ID')
    
    console.log(bankId);
    bankId && this.bankData.bankbyid(bankId).subscribe((data)=>{
      this.form = data;
      console.log("updated Data",this.form);
    })
  }
  updateFn(data:any){
    if(this.form){
      data.id =this.form.id
    }
    this.bankData.updatebank(data).subscribe((result)=>{
      if(result){
        alert("Bank has updated")
        this.router.navigate([`home`]);
      }
    })

  }  
}


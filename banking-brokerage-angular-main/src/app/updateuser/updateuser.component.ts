import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUp } from '../data-type';
import { UserdataService } from '../services/userdata.service';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  form : SignUp
  constructor(private route: ActivatedRoute, private userData: UserdataService, private router:Router) { }
  ngOnInit(): void {
    let userId = this.route.snapshot.paramMap.get('id')
    console.log(userId);
    userId && this.userData.getuserbyid(userId).subscribe((data) => {
      this.form = data;
      console.log(this.form);
    })
  }
  integerRegex = /^[1-9]\d*$/;
  showMessage = false;
  updateFn(data: any) {
      if(this.form){
        data.id =this.form.id
      }
      this.userData.updateuser(data).subscribe((result)=>{
        if(result){
          alert("Product has updated")
          this.router.navigate(['home']);
        }
      })
  }
}

    



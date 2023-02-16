import { Component , OnInit} from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { SignUp } from '../data-type';
import { Ng2SearchPipe } from 'ng2-search-filter';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  users:undefined | SignUp[];
  searchText:string =''
  
  constructor(private userData:UserdataService){ }
  ngOnInit(): void {
      this.userlist()

  }
  delete(id:number){
    this.userData.deleteUser(id).subscribe((value)=>{
      if(value){
        console.log(value);
        alert("User Deleted Successfully");
        this.userlist();
      }
  });
  }
  userlist(){
    this.userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data
    })
  }
  

}



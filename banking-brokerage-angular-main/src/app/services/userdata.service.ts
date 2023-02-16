import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  
  // url = "http://localhost:3000/users";
  url = "http://localhost:1648/api/Users";
  constructor(private http:HttpClient) { }
  users()
  {
    let results = this.http.get<SignUp[]>(this.url);
    console.log(results)
    return results
  }
  saveUsers(data:any)
  {
    return this.http.post(this.url,data);
  }
  deleteUser(id:number){
   return  this.http.delete(`${this.url}/${id}`);
  }
  getuserbyid(id:string){
    return  this.http.get<SignUp>(`${this.url}/${id}`);
  }
  updateuser(user:any){
    console.log(user)
    return  this.http.put<SignUp>(`${this.url}/${user.id}`,user);
  }
  
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BanK } from '../data-type-bank';


@Injectable({
  providedIn: 'root'
})
export class BankdataService {
  // url = "http://localhost:3000/bankdetails";
  url = "http://localhost:1648/api/Banks";
  constructor(private http:HttpClient) { }
  
  banks(){
    let results = this.http.get<BanK[]>(this.url);
    return results
  }

  banksByUserId(userId:string) {

    let results = this.http.get<BanK[]>(`${this.url}/user/${userId}`)
    return results;
    
  }
  addBank(data:BanK){
    console.log("API data",data)
    let results = this.http.post(this.url,data)
    return results;
  }
  deleteBank(id:number){
    return  this.http.delete(`${this.url}/${id}`);
   }
   bankbyid(ID:string){
    return  this.http.get<BanK>(`${this.url}/${ID}`);
   }
   updatebank(data:any){
    return this.http.put<BanK>(`${this.url}/${data.id}`,data)
   }

}

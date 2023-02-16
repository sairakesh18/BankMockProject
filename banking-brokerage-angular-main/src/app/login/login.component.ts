import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  
  constructor() {
    this.username = '';
    this.password = '';
 }
 onSubmit() {
  if (this.username === 'admin' && this.password === 'password') {
    alert('Login successful');
  } else {
    alert('Login failed');
  }
}
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './adduser/adduser.component';
import { Page404Component } from './page404/page404.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewuserdetailsComponent } from './viewuserdetails/viewuserdetails.component';
import { AddbankComponent } from './addbank/addbank.component';
import { UpdatebankComponent } from './updatebank/updatebank.component';
import { ViewbankdetailsComponent } from './viewbankdetails/viewbankdetails.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adduser', component: AdduserComponent },
  {path:'updateuser/:id',component:UpdateuserComponent},
  {path:'viewuserdetails/:id',component:ViewuserdetailsComponent},
  {path:'addbank/:id',component:AddbankComponent},
  {path:'updatebank/:ID',component:UpdatebankComponent},
  {path:'viewbankdetails/:id',component:ViewbankdetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  {path:'**', component:Page404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

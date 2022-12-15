import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddSecurityComponent } from './add-security/add-security.component';
import { ViewMyProfileComponent } from './view-my-profile/view-my-profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ViewallEmployeeComponent } from './viewall-employee/viewall-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HomeComponent } from './home/home.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';
import { NavUserComponent } from './nav-user/nav-user.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component'


const myRouter:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"add_emp",
    component:AddEmpComponent
  },
  {
    path:"add_security",
    component:AddSecurityComponent
  },
  {
    path:"admin_login",
    component:AdminLoginComponent
  },
  {
    path:"emp_login",
    component:EmpLoginComponent
  },
  {
    path:"view_all_emp",
    component:ViewallEmployeeComponent
  },
  {
    path:"serch_emp",
    component:SearchEmployeeComponent
  },
  {
    path:"edit_emp",
    component:EditEmployeeComponent
  },
  {
    path:"user_profile",
    component:ViewUserProfileComponent
  },
  {
    path:"leave_application",
    component:LeaveApplicationComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    AddSecurityComponent,
    ViewMyProfileComponent,
    AdminLoginComponent,
    AdminNavComponent,
    ViewallEmployeeComponent,
    SearchEmployeeComponent,
    EditEmployeeComponent,
    HomeComponent,
    EmpLoginComponent,
    ViewUserProfileComponent,
    NavUserComponent,
    LeaveApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent {

  
  constructor(private api:ApiService,private route:Router){}

  username=""
  password=""

  empLogin = ()=>{
    let data:any={
      "username":this.username,
      "password":this.password
    }

    this.api.employeeLogin(data).subscribe(
      (res:any)=>{
        if (res.status=="success") {
          alert("valid login")
          localStorage.setItem("emp_id",res.userInfo)
        } else {
          alert("Invalid Credentials!")
        }
      }
    )
  }

}

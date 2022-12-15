import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {

  constructor(private api:ApiService,private route:Router){}

  username=""
  password=""

  securityLogin = ()=>{
    let data:any={"username":this.username,"password":this.password}

    this.api.securityLogin(data).subscribe(
      (res:any)=>{
        if (res.status == "success") {
          alert("login succes")
          localStorage.setItem("security_id",res.userInfo)
        } else {
          alert("Invalid credentials..")
        }
      }
    )
  }

}

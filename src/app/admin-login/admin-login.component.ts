import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private rout:Router){}
  username=""
  password=""

  readValue = ()=>{
    if(this.username == "admin" && this.password=="12345"){
      this.rout.navigate(["/add_emp"])
    }
  }


}

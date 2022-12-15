import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent {

  constructor(private api:ApiService){}

  name=""
  email=""
  phone=""
  username=""
  password=""

  readValues = ()=>{
    let data:any=
    {"name":"basil",
    "email":"basil@gmail.com",
    "phone":"9864545",
    "username":"basil123",
    "password":"12345"
    }
    this.api.addSecurity(data).subscribe(
      (res:any)=>{
        if (res.status == "success") {
          alert("Security added succesfully")
          
        } else {
          alert("Something went wrong")
        }
      }
    )
  }


}

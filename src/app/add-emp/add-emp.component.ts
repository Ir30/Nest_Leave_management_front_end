import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {


  constructor(private api:ApiService){}

  empCode=""
  name=""
  email=""
  phone=""
  designation=""
  username=""
  password=""

  readValues=()=>{
   let data:any={
      "empCode":this.empCode,
      "name":this.name,
      "email":this.email,
      "phone":this.phone,
      "designation":this.designation,
      "username":this.username,
      "password":this.password
  }
  // console.log(data)
  this.api.addEmployee(data).subscribe(
    (res:any)=>{
      // console.log(res)
      if (res.status=="success") {
        alert("Employee added successfully")
      } else {
        alert("Some thing went wrong")
      }
    }
  )
  }

  

}

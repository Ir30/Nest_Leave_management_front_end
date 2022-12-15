import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  constructor(private api:ApiService){}


  name=""
  searchEmployee = ()=>{
    let data:any = {"name":this.name}

    this.api.searchEmployee(data).subscribe(
      (res:any)=>{
        // console.log(res)
        this.data=res
        console.log(this.data[0])
      }
    )
  }

  data:any=[]

  empCode=""
  
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

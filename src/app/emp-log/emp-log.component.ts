import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-log',
  templateUrl: './emp-log.component.html',
  styleUrls: ['./emp-log.component.css']
})
export class EmpLogComponent {

  constructor(private api:ApiService){

  }

  emp_code=""
  enter_time=""
  exit_time=""
  date=""


  addEmpLog = ()=>{
    let data:any ={
      "emp_code":this.emp_code,
      "enter_time":this.enter_time,
      "exit_time":this.exit_time,
      "date":this.date
    } 

    this.api.addEmpLog(data).subscribe(
      (res:any)=>{
        if (res.status == "success") {
          alert("Employee log entered Succesfully")
        } else {
          alert("Something went wrong")
        }
      }
    )

  }

}

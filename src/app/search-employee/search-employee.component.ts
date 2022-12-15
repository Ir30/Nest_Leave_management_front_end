import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  constructor(private api:ApiService){}

  name=""

  searchEmployee = ()=>{
    let data:any = {"name":this.name}

    this.api.searchEmployee(data).subscribe(
      (res:any)=>{
        this.data=res
      }
    )
  }

  deleteEmployee = (id:any)=>{
    let data={"id":id}

    this.api.deleteEmployee(data).subscribe(
      (res:any)=>{
        if (res.status == "success") {
          alert("deleted success fully")
        } else {
          alert("Some thing went wrong")
        }
      }
    )
  }

  data:any=[]

}

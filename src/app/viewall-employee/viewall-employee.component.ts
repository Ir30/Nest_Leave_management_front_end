import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-employee',
  templateUrl: './viewall-employee.component.html',
  styleUrls: ['./viewall-employee.component.css']
})
export class ViewallEmployeeComponent {

  constructor(private api:ApiService){
    api.viewAllEmployee().subscribe(
      (res:any)=>{
        console.log(res)
        this.data=res
      }
    )
  }
  data:any=[]

}

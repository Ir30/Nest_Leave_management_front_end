import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-dailylogs',
  templateUrl: './view-dailylogs.component.html',
  styleUrls: ['./view-dailylogs.component.css']
})
export class ViewDailylogsComponent {

  constructor(private api:ApiService){
  }

  date=""

  viewEmployeeLog = ()=>{
    let data:any={"date":this.date}
    this.api.viewEmpDailyLog(data).subscribe(
      (res:any)=>{
        this.data=res
      }
    )
  }

  data:any=[]


}

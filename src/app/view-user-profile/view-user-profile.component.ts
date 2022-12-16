import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserProfileComponent {

  constructor(private api:ApiService){
    let data:any ={ "id":localStorage.getItem("emp_id")} 

    api.viewEmployeeProfile(data).subscribe(
      (res:any)=>{
        this.data=res
      }
    )
  }

  data:any=[]

}

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-profile',
  templateUrl: './security-profile.component.html',
  styleUrls: ['./security-profile.component.css']
})
export class SecurityProfileComponent {
  constructor(private api:ApiService){

    let data:any={"id":localStorage.getItem("security_id")}
    this.api.ViewSecurityProfile(data).subscribe(
      (res:any)=>{
        this.data=res
      }
    )
  }
  data:any=[]

}

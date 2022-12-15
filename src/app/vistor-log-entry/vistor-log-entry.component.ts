import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vistor-log-entry',
  templateUrl: './vistor-log-entry.component.html',
  styleUrls: ['./vistor-log-entry.component.css']
})
export class VistorLogEntryComponent {

  constructor(private api:ApiService){}

  name=""
  date=""
  entry_time=""
  exit_time=""

  visitorEntry = ()=>{
    let data:any={
      "name":this.name,
      "date":this.date,
      "entry_time":this.entry_time,
      "exit_time":this.exit_time
    }
    this.api.visitorEntry(data).subscribe(
      (res:any)=>{
        if (res.status == "success") {
          alert("Visitor added succes fully")
        } else {
          alert("Something went wrong!")
        }
      }
    )
  }

}

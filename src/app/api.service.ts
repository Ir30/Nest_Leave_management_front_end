import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  addEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/addEmployee",data)
  }

  addSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/addSecurity",data)
  }

  ViewSecurityProfile=(data:any)=>{
    return this.http.post("http://localhost:8080/securityProfile",data)
  }

  viewAllEmployee=()=>{
    return this.http.get("http://localhost:8080/viewAllEmployee")
  }


  searchEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/searchEmployee",data)
  }

  deleteEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteEmployee",data)
  }

  employeeLogin = (data:any)=>{
    return this.http.post("http://localhost:8080/employeeLogin",data)
  }

  viewEmployeeProfile = (data:any)=>{
    return this.http.post("http://localhost:8080/employeeProfile",data)
  }

  securityLogin = (data:any)=>{
    return this.http.post("http://localhost:8080/securityLogin",data)
  }

  securityProfile = (data:any)=>{
    return this.http.post("http://localhost:8080/securityProfile",data)
  }

  visitorEntry = (data:any)=>{
    return this.http.post("http://localhost:8080/visitor_log",data)
  }

  addEmpLog = (data:any)=>{
    return this.http.post("http://localhost:8080/emplog",data)
  }

  viewEmpDailyLog = (data:any)=>{
    return this.http.post("http://localhost:8080/viewEmpDilyLog",data)
  }
}
